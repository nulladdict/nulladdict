import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const config = defineConfig(({ mode }) => ({
  plugins: [sveltekit()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        "process.env.NODE_ENV": JSON.stringify(mode),
      },
    },
  },
}));

export default config;
