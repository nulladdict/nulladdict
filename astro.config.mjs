import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
  integrations: [
    serviceWorker({
      workbox: {
        cacheId: new Date().toJSON(),
        inlineWorkboxRuntime: true,
      },
    }),
    tailwind({ config: { applyBaseStyles: false } }),
  ],
});
