import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "/",
  resolve: {
    extensions: [".ts", ".js"],
  },
  server: {
    port: 3000,
  },
});
