import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error: astro is still on vite 6
    plugins: [tailwindcss()],
  },
});
