<svelte:head>
  <meta name="description" content="personal site made by @nulladdict (roman nevolin)" />
</svelte:head>
<article>
  <header>hi!</header>
  <h1>i'm roman nevolin.</h1>
  <aside>
    also known as <em>@nulladdict</em> on the web
  </aside>
  <main>
    <p>frontend developer, we(e)b enthusiast, and music consumer.</p>
    <p>i also teach at university and occasionally contribute to open source.</p>
    <p>
      if you want to reach out check my
      <a href="https://github.com/nulladdict">github</a> or hit me up on
      <a href="https://twitter.com/nulladdict">twitter</a>.
    </p>
  </main>
  <footer>
    want to hire me? <a
      href="https://docs.google.com/document/d/1NLnoy3xBnbqhvsBtGGYP3d7JllKwhDJMDowuvUhlV4U/export?format=pdf"
      target="_blank"
      rel="noopener noreferer">here's my CV</a
    >
  </footer>
</article>

<style>
  article {
    max-width: 40rem;
    padding: 8vh 2vw;
  }

  header {
    font-size: 2rem;
    font-weight: 500;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  aside {
    font-weight: 300;
    font-style: italic;
  }

  aside em {
    font-weight: 500;
    font-style: normal;
    letter-spacing: -0.025em;
    color: var(--light-pink);
  }

  main {
    margin: 1rem 0;
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: 0.5rem;
  }
</style>
