import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  base: '/',
  integrations: [tailwind()],
  vite: {
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        external: ['mathjs']
      }
    },
  }
});