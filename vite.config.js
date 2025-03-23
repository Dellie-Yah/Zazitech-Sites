import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: './',
    define: {
      'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
      'process.env.VITE_API_USERNAME': JSON.stringify(env.VITE_API_USERNAME),
      'process.env.VITE_API_PASSWORD': JSON.stringify(env.VITE_API_PASSWORD),
      'process.env.VITE_API_DOMAIN': JSON.stringify(env.VITE_API_DOMAIN),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      minify: "esbuild",
  
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks: undefined,
          // Ensure filenames are compatible with server config
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      }
    },
  }
});
