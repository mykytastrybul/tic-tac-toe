import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});

export const publicPath = "https://s3bull.github.io/tic-tac-toe/";
