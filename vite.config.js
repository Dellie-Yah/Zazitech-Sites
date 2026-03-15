import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import process from "process";

// ── Build-time XOR + Base64 encoder ──────────────────────────────────
// Mirrors the decoder in src/lib/secureConfig.js
function xorEncode(plaintext, key) {
  let encoded = '';
  for (let i = 0; i < plaintext.length; i++) {
    encoded += String.fromCharCode(
      plaintext.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return Buffer.from(encoded, 'binary').toString('base64');
}

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Key for XOR encoding — must match the decode key in secureConfig.js
  const cipherKey = env.VITE_APP_NAME || 'Zazitech';

  // SMTP config object → JSON → XOR → Base64
  const smtpConfig = JSON.stringify({
    smtpHost:       env.VITE_SMTP_HOST       || '',
    smtpUser:       env.VITE_SMTP_USER       || '',
    smtpPassword:   env.VITE_SMTP_PASS       || '',
    recipientEmail: env.VITE_EMAIL_RECIPIENT  || '',
    emailFromName:  env.VITE_EMAIL_FROM       || '',
  });
  const encodedSmtp = xorEncode(smtpConfig, cipherKey);

  // Google Maps key → XOR → Base64
  const encodedMapsKey = xorEncode(env.VITE_GOOGLE_MAPS_KEY || '', cipherKey);

  return {
    plugins: [react()],
    base: './',
    define: {
      'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
      // Encoded blobs — never plain text in the bundle
      '__ENCODED_SMTP__':     JSON.stringify(encodedSmtp),
      '__ENCODED_MAPS_KEY__': JSON.stringify(encodedMapsKey),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3300,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      minify: "esbuild",

      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks: undefined,
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      }
    },
  }
});
