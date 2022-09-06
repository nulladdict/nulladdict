<svelte:head>
  <title>roman — @nulladdict</title>
</svelte:head>
<slot />

<style global>
  @font-face {
    font-family: "Inter";
    font-style: oblique 0deg 10deg;
    font-weight: 100 900;
    font-display: swap;
    src: url("../Inter.var.v3.19.woff2") format("woff2");
  }

  @font-face {
    font-family: "Arial-to-Inter";
    size-adjust: 107%;
    ascent-override: 91%;
    src: local("Arial");
  }

  html {
    font-family: "Inter", "Arial-to-Inter", system-ui, sans-serif;
    font-feature-settings: "calt", "case", "salt", "ss01", "ss02", "ss03";
    text-rendering: optimizeSpeed;
    background-color: var(--bg);
    color: var(--fg);
  }

  html,
  body {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  a {
    color: var(--light-mint);
    letter-spacing: 0.025em;
    text-decoration-thickness: 0.125rem;
  }

  a:focus-visible,
  a:hover {
    color: var(--mint);
    text-decoration: none;
  }

  :root {
    --black: #000;
    --purple: hsl(264, 100%, 65%);
    --pink: hsl(330, 100%, 65%);
    --yellow: hsl(52, 100%, 65%);
    --mint: hsl(164, 100%, 65%);
    --light-purple: hsl(264, 80%, 80%);
    --light-pink: hsl(330, 80%, 80%);
    --light-yellow: hsl(52, 80%, 80%);
    --light-mint: hsl(164, 80%, 80%);

    --bg: var(--black);
    --fg: var(--light-purple);
  }
</style>
