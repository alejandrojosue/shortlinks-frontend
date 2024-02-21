import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // site: 'http://loaclhost:8080/api/links',
  plugins: [],
  output: 'server',
  adapter: vercel()
});