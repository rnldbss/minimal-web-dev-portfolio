import { defineConfig } from "sanity";
import { schema } from "./sanity";
import { structure } from "./sanity/deskStructure";
import { structureTool } from "sanity/structure";
import { codeInput } from "@sanity/code-input";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? "";

if (!projectId || !dataset) {
  throw new Error("Missing Sanity environment variables");
}

export default defineConfig({
  projectId,
  dataset,
  plugins: [structureTool({ structure }), codeInput()],
  schema,
});
