import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "/src"),
            "@assets": resolve(__dirname, "/src/assets"),
        },
    },
    server: {
        proxy: {
            "/admin": {
                target: `http://localhost:5173`,
                changeOrigin: true,
                rewrite: (path) => {
                    console.log(path);
                    return path.replace(/^\/admin/, "/src/admin");
                },
            },
            "/vendor": {
                target: "http://localhost:5173",
                changeOrigin: true,
                rewrite: (path) => {
                    console.log(path);
                    return path.replace(/^\/vendor/, "/src/vendor");
                },
            },
            "/main": {
                target: "http://localhost:5173",
                changeOrigin: true,
                rewrite: (path) => {
                    console.log(path);
                    return path.replace(/^\/main/, "/src/main");
                },
            },
        },
    },
    build: {
        manifest: true,
        outDir: "dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/main/index.html"),
                admin: resolve(__dirname, "src/admin/index.html"),
                vendor: resolve(__dirname, "src/vendor/index.html"),
            },
            output: {
                dir: "dist",
                entryFileNames: ({ name }) => `${name}/assets/[name]-[hash].js`,
                chunkFileNames: ({ name }) => `${name}/assets/[name]-[hash].js`,
                assetFileNames: ({ name }) =>
                    `shared/assets/[name]-[hash].[ext]`,
            },
        },
        emptyOutDir: true,
    },
});
