import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: "**/*.vitest.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    globals: true,
    environment: "jsdom",
    setupFiles: "./config/vitest/setupTests.js",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
