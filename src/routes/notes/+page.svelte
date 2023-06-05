<script>
  import { formatDate } from "$lib/formatDate";
  import Link from "$lib/link/Link.svelte";
  import Nav from "$lib/nav/Nav.svelte";

  export let data;
  let last_post = data.posts.length;
</script>

<svelte:head>
  <title>notes — @nulladdict</title>
  <meta
    name="description"
    content="notes collection written by @nulladdict on different frontend or web related topics"
  />
</svelte:head>

<Nav cd="~/notes" />
<article class="flex flex-col gap-4 px-4 md:px-8">
  <h1>my notes on different frontend or web related topics</h1>
  <main>
    <ol reversed start={last_post} class="flex list-inside list-decimal flex-col gap-1">
      {#each data.posts as post}
        <li>
          <h2 class="inline">
            <Link href={post.href}>
              {post.metadata.title}
            </Link>
          </h2>
          ({formatDate(post.metadata.date)})
        </li>
      {:else}
        <li>nothing here yet, stay tuned</li>
      {/each}
    </ol>
  </main>
</article>
