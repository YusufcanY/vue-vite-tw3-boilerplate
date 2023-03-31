import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import svg from 'vite-svg-loader'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

export default defineConfig({
  plugins: [vue(), eslint(), svg(), ReactivityTransform()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
