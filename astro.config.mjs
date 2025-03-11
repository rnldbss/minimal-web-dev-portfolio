import { defineConfig } from "astro/config";
// @ts-check
import { loadEnv } from "vite";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

const { PUBLIC_SANITY_PROJECT_ID } = loadEnv(
  process.env.PUBLIC_SANITY_PROJECT_ID,
  process.cwd(),
  ""
);
const { PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.PUBLIC_SANITY_DATASET,
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // Set useCdn to false if you're building statically.
      apiVersion: "2024-07-24",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
  ],

  adapter: netlify(),

  typescript: {
    enabled: false,
  },
});
