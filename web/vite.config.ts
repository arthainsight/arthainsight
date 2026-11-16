import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" tekee buildista siirrettävän: sivusto toimii niin domainin juuressa
// kuin alikansiossakin ilman asetusten muuttamista.
// Kaksi sivua: index.html (suomi) ja en/index.html (englanti).
const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        fi: resolve(root, "index.html"),
        en: resolve(root, "en/index.html"),
      },
    },
  },
});
