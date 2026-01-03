/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const getGitInfo = () => {
  try {
    const hash = execSync('git rev-parse --short HEAD').toString().trim()
    const message = execSync('git log -1 --pretty=%B').toString().trim()
    return { hash, message }
  } catch (e) {
    return { hash: 'unknown', message: 'unknown' }
  }
}

const getPackageVersion = () => {
  try {
    const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'))
    return packageJson.version
  } catch (e) {
    return 'unknown'
  }
}

const buildInfo = {
  time: new Date().toISOString(),
  version: getPackageVersion(),
  ...getGitInfo()
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __BUILD_INFO__: JSON.stringify(buildInfo)
  },
  plugins: [
    react(),
    legacy(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.png', 'robots.txt', 'apple-touch-icon.png'],
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      manifest: {
        name: 'Tagalog Anywhere',
        short_name: 'TagalogApp',
        description: 'Learn Tagalog anywhere with flashcards',
        theme_color: '#3880ff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
