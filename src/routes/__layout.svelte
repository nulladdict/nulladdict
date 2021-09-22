<script lang="ts">
  import polkaWorkletUrl from "$lib/polka.js?url";
  import wiresWorkletUrl from "$lib/wires.js?url";
  const tag = "script";
  const register = `<${tag} type="module">if("paintWorklet" in CSS){CSS.paintWorklet.addModule("${polkaWorkletUrl}");CSS.paintWorklet.addModule("${wiresWorkletUrl}")}</${tag}>`;
</script>

<slot />
{@html register}

<style global>
  @font-face {
    font-family: "Inter";
    font-style: oblique 0deg 10deg;
    font-weight: 100 900;
    font-display: swap;
    src: url("/Inter.var.v3.19.woff2") format("woff2");
  }

  html {
    font-family: "Inter", sans-serif;
    text-rendering: optimizeSpeed;
    background-color: var(--bg);
    background-image: paint(wires);
    color: var(--fg);
  }

  body {
    margin: 0;
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  a.plain {
    color: currentColor;
    text-decoration: underline;
    letter-spacing: 0.025em;
  }

  a.plain:focus,
  a.plain:hover {
    text-decoration-thickness: 0.125em;
  }

  :root {
    --pure-black: #000;
    --light-pink: #efd2ef;

    --bg: var(--pure-black);
    --fg: var(--light-pink);
  }
</style>
