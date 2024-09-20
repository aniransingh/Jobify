import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        proxy: {
            '/api': {
                target: 'http://api:4000',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
        },
    },
    plugins: [react()],
});
