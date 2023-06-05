<script>
  import { formatDate } from "$lib/formatDate";
  import Link from "$lib/link/Link.svelte";
  import Nav from "$lib/nav/Nav.svelte";

  export let data;
  const { metadata, slug, content: Content } = data;
</script>

<svelte:head>
  <title>{metadata.title} — @nulladdict</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:url" content={`https://nulladdict.com/notes/${slug}/`} />
</svelte:head>

<Nav cd="~/notes" nvim={`./${slug}.md`} />
<article class="prose prose-custom break-words px-4 dark:prose-invert lg:prose-lg md:px-8">
  <aside><time>{formatDate(metadata.date)}</time></aside>
  <Content />
</article>
<footer class="px-4 py-6 text-violet-100 md:px-8 md:py-10">
  do you like what you see? tweet me at <Link href="https://twitter.com/nulladdict"
    >@nulladdict</Link
  >
</footer>
