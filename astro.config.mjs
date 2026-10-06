import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/data/siteConfig';

// GitHub Pages preview serves from /kent-hydro-jetting-pros/. Set BASE=/ for a real-domain deploy.
const base = (process.env.BASE ?? '/kent-hydro-jetting-pros').replace(/\/$/, '');
export default defineConfig({
  site: process.env.SITE_ORIGIN ?? 'https://aintgottaclue.github.io',
  base: process.env.BASE ?? '/kent-hydro-jetting-pros',
  redirects: {
    '/service-areas/stow': `${base}/service-areas`,
    '/service-areas/ravenna': `${base}/service-areas`,
    '/service-areas/streetsboro': `${base}/service-areas`,
    '/service-areas/hudson': `${base}/service-areas`,
    '/service-areas/tallmadge': `${base}/service-areas`,
    '/service-areas/cuyahoga-falls': `${base}/service-areas`,
    '/service-areas/munroe-falls': `${base}/service-areas`,
    '/service-areas/brimfield': `${base}/service-areas`,
    '/service-areas/franklin-township': `${base}/service-areas`,
    '/service-areas/rootstown': `${base}/service-areas`,
    '/service-areas/aurora': `${base}/service-areas`
  },
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
});
