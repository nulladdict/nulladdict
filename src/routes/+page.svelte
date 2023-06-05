<script lang="ts">
  import Link from "$lib/link/Link.svelte";
  import Nav from "$lib/nav/Nav.svelte";
</script>

<svelte:head>
  <title>roman — @nulladdict</title>
  <meta name="description" content="personal site made by @nulladdict (roman nevolin)" />
</svelte:head>

<Nav />
<article class="flex flex-col gap-4 px-4 md:px-8">
  <h1 class="text-3xl font-medium">hi! i'm roman nevolin.</h1>
  <aside class="font-light italic">
    also known as <em class="font-normal not-italic text-pink-100">@nulladdict</em> on the web
  </aside>
  <main class="flex flex-col gap-1">
    <p>frontend developer, we(e)b enthusiast, and music consumer.</p>
    <p>i also teach at university and occasionally contribute to open source.</p>
    <!-- <p>
      looks like
      <Link href="./notes">i write some stuff now</Link>, check it out
    </p> -->
  </main>
  <footer>
    if you want to reach out check my
    <Link href="https://github.com/nulladdict">github</Link>
    or hit me up on
    <Link href="https://twitter.com/nulladdict">twitter</Link>.
  </footer>
</article>
