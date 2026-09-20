import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served at the custom domain arnavgupta.me (root path); the canonical host is
// set in public/CNAME, and crick262004.github.io redirects here.
// If you switch to a project repo instead, add: base: '/repo-name'
export default defineConfig({
  site: 'https://arnavgupta.me',
  vite: {
    plugins: [tailwindcss()],
  },
});
