import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('react-router') || id.includes('/react/') || id.includes('/react-dom/') || id.includes('scheduler')) {
            return 'vendor-react';
          }
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
            return 'vendor-motion';
          }
          if (id.includes('@supabase')) {
            return 'vendor-supabase';
          }
          return 'vendor';
        },
      },
    },
  },
  ssr: {
    // react-router-dom's "node" export condition resolves to a CJS build
    // that Vite's SSR module runner can't cleanly interop with (used by
    // scripts/prerender.mjs). Bundling it through Vite instead of treating
    // it as an external require, and preferring the ESM export condition,
    // fixes that.
    noExternal: ['react-router-dom', 'react-router'],
    resolve: {
      conditions: ['import', 'module', 'browser', 'default'],
    },
  },
})
