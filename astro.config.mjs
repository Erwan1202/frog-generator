import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel()
});