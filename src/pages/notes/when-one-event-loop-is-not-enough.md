---
layout: ../../layouts/Note.astro
title: when one event loop is not enough
date: 2023-06-16
---

# When one event loop is not enough

A tale of JavaScript, full-text search, multithreading, and concurrency.

Let me provide some context first. My name is Roman, and I work on a search service. It's a fairly straightforward process: we scrape open data about companies, index it, and allow users to run queries against it.

Most of our users and not technical and will bounce right away if they hear the sound of any DSL. We don't hate money, so of course we provide a user-friendly UI to explore all the options when searching for their companies.

## The user interface

I won't bore you with the details of our design choices. Essentially, we have a React application with a list of queries, each containing various types of filters. Some filters are simple text inputs, while others include toggles, checkboxes, and date pickers. It's all pretty standard stuff you find in any search-based application.

However, not all filters are created equal. You see, we don't have control over how the data is presented to us. At times, we receive a list of values, other times a range, and occasionally a chunk of plain text.

But sometimes we encounter a massive nested structure, meticulously categorized by the government to represent a particular industry. Unfortunately, these complex filters are quite popular among our users. Fair enough, since they provide a convenient way to narrow down potential companies based on pre-defined categories.

## Tree filter

Now, let's focus on building a filter specifically for these nested structures. First and foremost, how do we transform a piece of nested JSON into a usable UI element? One approach is to flatten the structure and render a list of checkboxes. This is usually effective since users can immediately see all the available options, and scrolling provides a comfortable way to explore them.

However, I mentioned earlier that these nested structures can be enormous. But how large is that? Well, our most chonky tree has approximately **4,500** nodes, spread across **6** levels of nesting. Dropping thousands of checkboxes on the user is not what you would call good UX.

Furthermore, we're using React and it's notoriously bad at rendering large lists. Even if the list contains _only_ a thousand items. And you know, the hierarchical structure of the tree holds valuable relations that users can leverage. For instance, they may choose to focus on a specific subtree or prefer to generalize their search by working with root nodes.

Consequently, we took inspiration from the Windows File Explorer. Users can expand/collapse nodes, select/deselect individual nodes, or even entire subtrees. _(kudos if you've ever used the checkbox mode on Windows)_.

All is good now, right? Well, not quite. You see, finding a particular node in a tree requires quite a bit of work. Even if you're familiar with the structure, locating the desired node often requires a series of precise clicks.

What adds confusion to the whole thing is that nodes tend to change over time. They can be split, merged, renamed, relocated within the tree, or even deleted. While all this information is publicly available, the sheer volume makes it challenging to keep track of. Additionally, sometimes you may only have the name or id of a node without knowing its exact position within the tree. In other cases, you might only have a vague idea of what you're searching for.

_Side note_: As developers, we often work with similar file structures when writing code. Surprisingly, I rarely find myself relying on file-tree plugins. Instead, I prefer using a combination of LSP, fuzzy finding, rip-grep, and telescope pickers (nvim is awesome, and telescope is truly life-changing).

All this leads to the realization that we need a more efficient way to search for nodes within our tree, one that goes beyond random manual clicking.

## Search in our search app

The implementation of the tree filter in our app dates back quite a while. We didn't know any better, so we just wrote some regex-based search and dumped all the matches on the screen. It worked, but it felt a bit like talking to Siri. Sometimes you'd get lucky and find what you needed, but most of the time, the results were missing or unrelated, the ordering was all over the place, and there were instances where entering a query would return half of the tree, causing React to choke.

While this solution was annoying, it was better than nothing. Some of our users even managed to use it somewhat effectively. At the time, we would occasionally receive complaints about speed or accuracy. Despite these concerns, we never truly believed that we could provide a better search experience, so we brushed them off.

The reality of the situation was that users would try the search once, encounter no results or irrelevant ones, become frustrated, and ultimately give up on using it. This wasn't a surprise because we also had a similar experience, but looking at newly added metrics shed light on the scale of the problem.

Armed with metrics and a collection of user recordings, we jumped into research to find a new hope. Some issues were evident: performance problems, queries not being resilient to typos, and search terms being matched too strictly. However, merely fixing these issues wouldn't necessarily improve the overall search experience. Instead, we took the time to think about what kind of search experience we _wanted to provide_, rather than settling for what we _already had_.

Coincidentally, we already had a decent idea of what a good search experience is. Our text-based filters offered exactly what we needed. Full-text search had become synonymous with Elastic these days, and we were already heavily using it. We were satisfied with its search quality and had enough expertise to maintain the solution.

So what? Just toss the data behind tree filters into another elastic index and call it a day? Well, yes, that would work. It would offer a better experience compared to our current solution. But why is this story not over yet?

## Latency

So if we were to settle on the backend solution, we would have to hit up our API every time the user types something. It's not a big deal, but it quickly gets annoying. To minimize friction during exploration, we've already made the decision to store all the trees client-side, resulting in approximately **~1.5mb** of cached JSON.

Moreover, there are other considerations to address, such as debouncing adding latency, spinners, and network errors. Networking and async can be challenging, leading to a subpar user experience. What we want is a fast feedback loop. Imagine typing a letter and instantly seeing highlighted results — no debouncing, no waiting for the network, and no friction — just pure enjoyment.

Okay, but what's inside Elastic? Can we simply npm install it? Let's dig a bit deeper. Elastic is built upon Lucene, which can be simplified down to one core concept. Instead of scanning all the documents for each query, Lucene extracts unique tokens and constructs an inverted index. This index serves as a mapping from a single token to all the documents containing it.

Creating this index can be slow and involves a lot of text processing. Searching, on the other hand, is just looking up all document ids and performing some set operations. It's a simple yet highly effective approach.

Of course, building a working search engine involves more components, such as tokenisation, stemming, edit distance, ranking, highlighting, and so on. I'm sure there's a perfect article on the net that goes into all the nitty-gritty details, but it's not the one you're reading right now.

## `npm install elastic_search`

Can we use it client-side though? I don't think there's a way to take elastic and compile it to wasm. And I'm certainly not writing a search engine from scratch. Let's look at available options on npm.

_Roman from the future shills for [`@orama/orama`](https://github.com/oramasearch/orama) but back in the day it didn't exist._

After searching for a bit and evaluating various options, we decided to settle on [`lunr`](https://lunrjs.com/). It seemed to fulfill most of the features we wanted and performed well in the test cases we had prepared.

But what happens when you take our JSON and try to build an index out of it? Turns out that the process takes a considerable amount of time. In fact, it takes a couple of seconds. While lunr does support pre-built indexes, it's tricky. Serialized indexes take a lot of space. Moreover, we have dynamic data from users, and our tree structures can change without a full redeployment, so this approach seems kinda hopeless.

## Async, concurrency, blocking and other confusing terms

Now, you might be thinking, what's the problem with building an index that takes a couple of seconds? Users can wait, right? Well, the thing is that the browser becomes unresponsive during the index-building process.

Turns out blocking the event loop leads to some proper bad time. There're numerous articles on the net that explain in detail how things works underneath the hood, so just check them out. The world of [tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) is vast and confusing.

What can be done to improve this? Can we simply wrap the index-building function in a Promise and magically make it asynchronous and non-blocking? No. That's a common misconception in the JavaScript world.

Promises are big lies. They feel asynchronous, but the code inside them still executes synchronously and blocks the event loop. Only promise resolution and certain native APIs are truly asynchronous and non-blocking, while user code is not. The same goes for async functions, where the code between await statements is executed synchronously.

We can't prevent main thread contention with Promises or async/await, it's not C# land. However, can we at least find a way to avoid blocking the event loop?

The typical approach to such problems involves splitting the work into smaller chunks and scheduling them. Although JavaScript lacks a dedicated scheduling API ([this can change](https://github.com/WICG/scheduling-apis)), it is still possible to achieve this by using various tricks.

Unfortunately, this workaround is not an elegant solution, as the main thread still has to work through all the tasks, impacting other parts of the application and rendering them unpredictable.

Yeah, maybe running a search engine directly in the browser is not an ideal approach after all. If only there were a way to offload the work to another thread. And there is.

## Web workers

In traditional programming languages, there's often concurrency through system threads, task execution on thread pools, or even through green threads or coroutines. Ideally, we would like to spawn a thread, build an index, and access the result from the main thread. However, JavaScript has no such things.

In addition, for languages commonly used for building applications, frameworks typically have a separate UI thread responsible for rendering and handling user input. However, in JavaScript, [the main thread is overworked and underpaid](https://youtu.be/7Rrv9qFMWNM).

What we do have is [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) (not to be confused with service workers). Web workers are not threads, processes, or coroutines. They provide a way to execute code in a separate context, kinda like forking in C.

With web workers, you don't get to pass in a closure, you don't get shared variable access (`SharedArrayBuffer` doesn't count). Instead, you specify a worker file, which is downloaded and executed. The only way to share state is to use `postMessage` and communicate through messages.

This API spares us from dealing with locks, atomics, and other concurrency-related nightmares (although you can [bring them back](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) if you interact with `SharedArrayBuffer`), however working with web workers can be tricky.

Passing messages back and forth between the main thread and workers can quickly become cumbersome and unwieldy, especially for developers coming from other languages. Thankfully good folks at Google wrote [Comlink](https://github.com/GoogleChromeLabs/comlink) to make using workers more enjoyable.

## Putting it all together

Using web workers for building the search index is a good match since it doesn't rely on any APIs inaccessible to workers. The process is relatively straightforward: start a worker, pass in the JSON (it clones, but it's not that bad), have the worker build the indexes, and then it's ready to perform search requests. Wrap everything with Comlink, to get convenient functions and easily manage the communication with the worker.

We also made some improvements to our UI. Subtrees with duplicate results are now collapsed, highlighting has been enhanced, and sorting is possible thanks to the built-in ranking. With the performance enhancements and asynchronous nature, searches can now be executed with each keystroke, providing a more responsive experience.

While there are some costs associated with starting a worker and crossing the isolation boundary, the actual code execution occurs in a separate event loop so users never have to deal with it.

At this point, you might think that the use case is kinda forced or rare, and you might be right. However, considering the benefits of workers, it's worth exploring their potential whenever client-side processing is involved. Your users will thank you, just don't forget to use Comlink or you're gonna hate the process.

## Bonus chapter

We shipped the thing and our users were happy, we saw an increase in search usage and a decrease in time spent fiddling around with the tree filter. Furthermore, we gained some insights from the search patterns of our users. Here's a dive into some issues:

- **Multi-language**. Our documents contain text in different languages, but our token filter and stemmer weren't ready for that. Lunr support extensions, so adding multi-language support was an easy fix.

- **Stop words**. Usually, full-text search engines ignore some common short words to improve the relevance and avoid filtering out meaningful matches. What we found is that it removed some useful words like "IT" (thinking it was "it"). So instead of removing them, we just marked them as optional.

- **Wrong keyboard layout**. Some people just love to type in the wrong keyboard layout. Bilingual problems I guess. The fix was simple — if the query did not return any results, we remap the input and try again. It's a small change, but it genuinely helped a lot of people.

- **Unfinished sentences**. We now run search on every keystroke. Unfortunately, if the last word is not finished, the stemmer behaves unexpectedly and we get no results. Lunr supports searching by wildcards, so if that happens we just rerun the query and treat the last word as a prefix.

- **Exact matches**. Some people just paste ids into the search field, so it makes sense to support exact matches. These need to be matched literally, without any processing. Lunr can't do this, so we check if the query looks like an id and lookup manually.

- **Mistakes and typos**. An obvious one. Enabling edit distance takes care of that. But be careful with short tokens or you might get funny results. We certainly did.

- **Fuzzy finding**. Some users don't finish long words and just type the beginning. So if everything else fails, we just mark all words as prefixes. This produced a nice side effect. You can just type a couple of letters for every word and still find the correct node. Not quite fuzzy-finding, but pretty close.

## Epilogue

I learned a lot while building this little thing. The flexibility of having a powerful search engine within a web worker proved to be a great choice enabling us to tweak the behavior and address various challenges without sacrificing performance.

The overall search experience for users was greatly improved. I'm glad I was able to port the neovim search experience into our app. It's a shame that workers are not wide spread in web apps. I hope this story will inspire you to give them a chance.
