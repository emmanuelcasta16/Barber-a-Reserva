import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resumen: resolve(__dirname, 'resumen.html'),
        confirmacion: resolve(__dirname, 'confirmacion.html'),
      },
    },
  },
})

