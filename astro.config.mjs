import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/data/siteConfig';

// GitHub Pages preview serves from /kent-hydro-jetting-pros/. Set BASE=/ for a real-domain deploy.
export default defineConfig({
  site: process.env.SITE_ORIGIN ?? 'https://aintgottaclue.github.io',
  base: process.env.BASE ?? '/kent-hydro-jetting-pros',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
});
