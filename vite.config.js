import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url"; // Use this to get the directory in ESM
import { dirname, resolve } from "path"; // Import 'dirname' and 'resolve' from path

// Convert the file URL to a path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // Define your alias for the 'src' folder
    },
  },
  build: {
    manifest: true,
    outDir: "dist",
  }
});
