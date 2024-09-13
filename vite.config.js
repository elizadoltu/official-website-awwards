import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import middleware from 'vite-plugin-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    middleware({
      setup: (app) => {
        app.use((req, res, next) => {
          res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'nonce-<random-value>'; style-src 'self' 'nonce-<random-value>'; img-src 'self' data:; connect-src 'self'; font-src 'self'; frame-src 'none';");
          next();
        });
      },
    }),
  ],
  server:{
    host: '0.0.0.0',
    port: 3000,
  },
})
