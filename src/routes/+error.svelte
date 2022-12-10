<script lang="ts">
  import { page } from "$app/stores";
  $: httpCode = $page.status || 500;
</script>

<svelte:head>
  <title>{httpCode} — @nulladdict</title>
</svelte:head>

<article>
  <h1>{httpCode}</h1>
  {#if $page.error}
    <aside>
      {$page.error.message}
    </aside>
  {/if}
</article>

<style>
  article {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  h1 {
    margin-top: 25vh;
    font-size: 32vmin;
    font-weight: 200;
  }

  @supports (-webkit-text-fill-color: transparent) and (-webkit-background-clip: text) {
    h1 {
      background: linear-gradient(32deg, var(--mint), var(--purple), var(--pink));
      background: radial-gradient(ellipse at bottom left, var(--mint), var(--purple), var(--pink));
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }

  aside {
    font-size: 1.25rem;
    font-weight: 300;
    max-width: 40rem;
  }
</style>
