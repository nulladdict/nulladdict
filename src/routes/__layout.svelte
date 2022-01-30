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
    src: url("/Inter.var.v3.19.woff2") format("woff2");
  }

  html {
    font-family: "Inter", sans-serif;
    font-feature-settings: "calt", "case", "salt", "ss01", "ss02", "ss03";
    text-rendering: optimizeSpeed;
    background-color: var(--bg);
    color: var(--fg);
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
    --pink: hsl(330, 100%, 65%);
    --yellow: hsl(52, 100%, 65%);
    --light-purple: hsl(264, 80%, 80%);
    --light-yellow: hsl(52, 80%, 80%);

    --bg: var(--black);
    --fg: var(--light-purple);
  }

  :root::after {
    content: "";
    position: fixed;
    right: -150vw;
    bottom: -40vh;
    left: -150vw;
    width: 400vw;
    height: 80vh;
    opacity: 0.75;
    background-image: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 14px,
        var(--pink) 16px,
        var(--pink) 16px,
        var(--pink) 16px,
        transparent 18px,
        transparent 32px
      ),
      repeating-linear-gradient(
        180deg,
        transparent,
        transparent 14px,
        var(--pink) 16px,
        var(--pink) 16px,
        var(--pink) 16px,
        transparent 18px,
        transparent 32px
      );
    transform: perspective(1vh) rotateX(4deg);
  }
</style>
