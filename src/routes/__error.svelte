<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = ({ error, status }) => ({
    props: { error, status },
  });
</script>

<script lang="ts">
  export let status: number | null;
  export let error: Error | null;
  const httpCode = status || 500;
</script>

<svelte:head>
  <title>{httpCode} — @nulladdict</title>
</svelte:head>

<article>
  <h1>{httpCode}</h1>
  {#if error}
    <aside>
      {error.message}
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
      background: linear-gradient(
        64deg,
        var(--light-purple),
        var(--light-pink),
        var(--light-yellow),
        var(--light-mint)
      );
      background: radial-gradient(
        ellipse at bottom left,
        var(--light-purple),
        var(--light-pink),
        var(--light-yellow),
        var(--light-mint)
      );
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
