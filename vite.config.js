import { defineConfig } from "vite";

export default defineConfig({
  base: "./2d-old-portfolio",
  build: {
    minify: "terser",
  },
});
