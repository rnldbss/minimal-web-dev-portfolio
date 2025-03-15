import { defineConfig } from "sanity";
import { schema } from "./sanity";
import { structure } from "./sanity/deskStructure";
import { structureTool } from "sanity/structure";

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.PUBLIC_SANITY_DATASET || "";

if (!projectId || !dataset) {
  throw new Error("Missing Sanity environment variables");
}

export default defineConfig({
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema,
});
