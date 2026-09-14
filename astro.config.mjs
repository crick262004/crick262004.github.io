import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deploying as the user site crick262004.github.io (root path).
// If you switch to a project repo instead, add: base: '/repo-name'
export default defineConfig({
  site: 'https://crick262004.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
