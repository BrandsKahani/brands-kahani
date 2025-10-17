import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ IMPORTANT: for GitHub Pages repo called "brands-kahani"
export default defineConfig({
  plugins: [react()],
  base: "/brands-kahani/", // 👈 this is critical
});
