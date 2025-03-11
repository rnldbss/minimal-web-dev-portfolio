import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/lib/resolve";
import { schema } from "./sanity";
import { structure } from "./sanity/deskStructure";
import { structureTool } from "sanity/structure";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      resolve,
      previewUrl: location.origin,
    }),
  ],
  schema,
});
