import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import svelte from '@sveltejs/vite-plugin-svelte'

const manifest = {
  "name": "タイピングゲーム",
  "short_name": "タイピングゲーム",
  "lang": "ja",
  "start_url": "/",
  "display": "standalone",
  "orientation": "landscape",
  "background_color": "#fff",
  "theme_color": "#c62368",
  "icons": [
    {
      "src": "icons/icon-48.png",
      "type": "image/png",
      "sizes": "48x48"
    },{
      "src": "icons/icon-64.png",
      "type": "image/png",
      "sizes": "64x64"
    },{
      "src": "icons/icon-128.png",
      "type": "image/png",
      "sizes": "128x128"
    },{
      "src": "icons/icon-180.png",
      "type": "image/png",
      "sizes": "180x180"
    },{
      "src": "icons/icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },{
      "src": "icons/icon-256.png",
      "type": "image/png",
      "sizes": "256x256"
    },{
      "src": "icons/icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}

export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({ manifest })
  ]
})
