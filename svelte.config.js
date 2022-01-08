import preprocess from "svelte-preprocess";
import cloudflare from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    target: "body",
    adapter: cloudflare({}),
    hydrate: false,
    router: false,
  },
};

export default config;
