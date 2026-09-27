import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // served at the root of project.insightsmastry.in
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false
  }
});
