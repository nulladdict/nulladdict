<slot />

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

  * {
    box-sizing: border-box;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  a {
    text-decoration: underline;
    text-decoration-color: var(--light-yellow);
    text-decoration-thickness: 0.125rem;
    color: currentColor;
    letter-spacing: 0.025em;
  }

  a:hover,
  a:focus {
    text-decoration-thickness: 0.15rem;
    color: var(--light-yellow);
  }

  :root {
    --pure-black: #000;
    --light-purple: #d2c2eb;
    --light-yellow: #ffdd99;

    --bg: var(--pure-black);
    --fg: var(--light-purple);
  }
</style>
