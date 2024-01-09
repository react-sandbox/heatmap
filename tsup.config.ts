import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'es6',
  external: ['react'],
  format: ['esm', 'cjs'],
  minify: true,
  sourcemap: true,
  injectStyle: true
})
