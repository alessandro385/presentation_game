import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: './',
    base: './',
    resolve: {
        alias: {
            '@project': path.resolve(__dirname, '../project'),
            '/vite.svg': path.resolve(__dirname, '../project/public/vite.svg'),
            './javascript.svg': path.resolve(__dirname, '../project/javascript.svg'),
        }
    },
    build: {
        outDir: 'dist'
    },
    server: {
        fs: {
            // Permettiamo l'accesso ai file fuori dalla root
            allow: ['..']
        }
    }
}); 