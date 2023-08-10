import { defineConfig } from 'vite';
import path from 'path'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({
    customElement: true,
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  })],
  resolve: {
    alias: { '@': path.resolve('./', 'src') },
  }
});
