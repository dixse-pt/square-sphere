import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://jlnlndr.fr',
  base: '/portfolio/',
  trailingSlash: 'always',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  },
  publicDir: './public', // Configuration explicite du répertoire public
  outDir: './dist', // Répertoire de sortie
});