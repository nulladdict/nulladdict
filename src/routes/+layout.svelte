<script>
  import "../app.css";
</script>

<svelte:head>
  <title>roman — @nulladdict</title>
</svelte:head>
<slot />

<style global lang="postcss">
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
    font-family: "Inter", "Arial-to-Inter", system-ui, sans-serif !important;
    font-feature-settings: "calt", "case", "salt", "ss01", "ss02", "ss03" !important;
    text-rendering: optimizeSpeed;
    background-color: #000;
    color: theme(colors.violet.300);
    line-height: normal !important;
  }

  html,
  body {
    height: 100%;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
</style>
