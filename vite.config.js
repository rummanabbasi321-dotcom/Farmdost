import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // open from phone / tablet on same Wi‑Fi
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
