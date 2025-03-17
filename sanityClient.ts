import { createClient } from "@sanity/client";

// Use import.meta.env for Astro/Vite
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? "";
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION ?? "2023-01-01";

if (!projectId || !dataset || !apiVersion) {
  throw new Error("Missing Sanity environment variables");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
