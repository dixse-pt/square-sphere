import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jlnlndr.fr',
  base: '/portfolio',
  trailingSlash: 'always',
  integrations: [tailwind()],
  build: {
    assets: 'assets',
    format: 'file'
  }
});

