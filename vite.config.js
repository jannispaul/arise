// // vite.config.js
// export default {
//   // config options

// };

// vite.config.js
import { defineConfig } from "vite";
// import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  server: {
    host: "localhost",
    cors: "*",
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
  // build: { target: "esnext" },
  plugins: [
    // input https://www.npmjs.com/package/html-minifier-terser options
    // ViteMinifyPlugin(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: "js/index.js",
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
