import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-react/', // ← update this based on your repo name
  plugins: [react()],
});