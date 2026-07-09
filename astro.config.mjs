import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
  ],
  output: 'static', // Build as static site (SSG)
  vite: {
    plugins: [tailwindcss()],
    envPrefix: ['PUBLIC_', 'VITE_'],
  }
});
