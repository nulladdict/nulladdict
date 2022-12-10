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
    color: var(--mint);
    letter-spacing: 0.025em;
    padding: 0.0625rem 0.125rem;
    border-bottom: 0.0625rem solid var(--mint);
    text-decoration: none;
  }

  a:focus-visible,
  a:hover {
    outline: none;
    color: var(--bg);
    background-color: var(--mint);
    border-bottom: 0.0625rem solid var(--mint);
    border-radius: 0.125rem;
  }

  :root {
    --black: #000;
    --dark-purple: oklch(50% 0.25 300);
    --purple: oklch(80% 0.125 300);
    --pink: oklch(80% 0.125 350);
    --mint: oklch(80% 0.125 170);

    --bg: var(--black);
    --fg: var(--purple);
  }
</style>
