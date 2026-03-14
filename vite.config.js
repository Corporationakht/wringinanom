import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'logodesa.png'],
      manifest: {
        name: 'Dewi Anom - Desa Wisata Wringinanom',
        short_name: 'Dewi Anom',
        description: 'Aplikasi Desa Wisata Wringinanom (Dewi Anom)',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logodesa.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'logodesa.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
