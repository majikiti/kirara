import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://kirara.kobe-kosen.org",
  compressHTML: false,
  build: {
    inlineStylesheets: "never",
  },
  devToolbar: {
    enabled: false,
  },
})
