import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-cloudflare";
import postcssOKLabFunction from "@csstools/postcss-oklab-function";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: { plugins: [postcssOKLabFunction()] },
  }),

  kit: {
    adapter: adapter(),
  },
};

export default config;
