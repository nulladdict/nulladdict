import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: [".md"],
      smartypants: false,
    }),
  ],

  kit: {
    adapter: adapter(),
  },
};

export default config;
