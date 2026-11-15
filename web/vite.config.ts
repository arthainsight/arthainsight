import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" tekee buildista siirrettävän: sivusto toimii niin domainin juuressa
// kuin alikansiossakin ilman asetusten muuttamista.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
