import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the configuration for Vite
export default defineConfig({
  plugins: [react()], 
  server: {
    port: 5173, 
    historyApiFallback: true, 
  },
});
