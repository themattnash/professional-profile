import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://themattnash.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [tailwind(), mdx()],
});
