<script lang="ts">
  import Link from "$lib/link/Link.svelte";
  import { page } from "$app/stores";
  $: httpCode = $page.status || 500;
</script>

<svelte:head>
  <title>{httpCode} — @nulladdict</title>
</svelte:head>

<article class="flex h-full flex-col items-center justify-center gap-2">
  <h1 class="text-8xl">{httpCode}</h1>
  {#if $page.error}
    <aside class="text-2xl">
      {$page.error.message}
    </aside>
  {/if}
  <Link href="/" class="text-xl"><kbd>&lt;esc&gt;:qa!</kbd></Link>
</article>
