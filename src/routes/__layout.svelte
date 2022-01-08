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
    color: var(--light-yellow);
    letter-spacing: 0.025em;
    text-decoration-thickness: 0.125rem;
  }

  a:focus,
  a:hover {
    color: var(--yellow);
  }

  :root {
    --black: #000;
    --purple: hsl(264, 100%, 65%);
    --yellow: hsl(52, 100%, 65%);
    --light-purple: hsl(264, 80%, 80%);
    --light-yellow: hsl(52, 80%, 80%);

    --bg: var(--black);
    --fg: var(--light-purple);
  }
</style>
