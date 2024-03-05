import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import redirects from "./redirects.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://nivani.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  redirects,
});
