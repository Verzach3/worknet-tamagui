/// <reference types="vitest" />

import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { telefunc } from "telefunc/vite";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		legacy(),
		// @ts-expect-error
		telefunc({
			disableNamingConvention: true,
		}),
	],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
	},
  resolve: {
    alias: {
      "@/": fileURLToPath(new URL("./src", import.meta.url)),
      "@/backend": fileURLToPath(new URL("./backend", import.meta.url)),
      "@/functions": fileURLToPath(new URL("./backend/functions", import.meta.url)),
    },
  },
  optimizeDeps: {
  }
});
