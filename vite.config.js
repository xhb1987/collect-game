import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

export default defineConfig({
  plugins: [react()],
  esbuild: {},
  build: {
    sourcemap: true,
    outDir: path.resolve(__dirname, "./dist"),
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
});
