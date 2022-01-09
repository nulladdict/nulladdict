<script context="module" lang="ts">
  import type { ErrorLoad } from "@sveltejs/kit";
  export const load: ErrorLoad = ({ error, status }) => ({
    props: { error, status },
  });
</script>

<script lang="ts">
  export let status: number;
  export let error: Error & { frame?: string };
</script>

<svelte:head>
  <title>{status} — @nulladdict</title>
</svelte:head>

<article>
  <h1>uhm, <strong>{status}</strong> i guess</h1>
  <pre>{error.message}</pre>
  {#if error.frame}
    <pre>{error.frame}</pre>
  {/if}
  {#if error.stack}
    <pre>{error.stack}</pre>
  {/if}
</article>

<style>
  article {
    max-width: 40rem;
    margin: 8vh 2vw;
    margin: max(8vh, 4rem) max(2vw, 0.25rem);
  }

  h1 {
    font-size: 2rem;
    font-weight: 300;
    margin: 0.5rem 0 1rem;
  }

  strong {
    font-weight: 500;
    letter-spacing: -0.05em;
  }

  pre {
    font-size: 1rem;
    margin: 0.25rem;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    overflow-wrap: anywhere;
  }
</style>
