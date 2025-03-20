import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3002, // Change this to the desired port
  },
  publicDir: "public", // 👈 See määrab, et Vite serveerib public kausta
});