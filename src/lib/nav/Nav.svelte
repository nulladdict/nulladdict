<script lang="ts">
  import Link from "$lib/link/Link.svelte";
  export let cd: string = "";
</script>

<div class="flex max-w-xl flex-col gap-1 px-4 pb-6 pt-8 md:px-8 md:pb-10 md:pt-12">
  <div class="flex flex-col pb-1">
    <div aria-hidden="true" class="font-semibold">λ ~/ ls</div>
    <nav
      class="grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] justify-items-start gap-x-3 gap-y-1"
    >
      <Link href="/notes/" class="after:content-['/']">notes</Link>
      <Link href="/">+page.svelte</Link>
      <Link
        href="https://docs.google.com/document/d/1NLnoy3xBnbqhvsBtGGYP3d7JllKwhDJMDowuvUhlV4U/export?format=pdf"
        target="_blank"
        rel="noopener noreferrer">resume.pdf</Link
      >
    </nav>
  </div>
  {#if cd}
    <div aria-hidden="true" class="font-semibold">λ ~/ cd {cd}</div>
  {/if}
  <div aria-hidden="true" class="font-semibold">λ ~/ nvim ./+page.svelte</div>
</div>
