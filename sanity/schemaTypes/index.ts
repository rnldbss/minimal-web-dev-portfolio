import type { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./utils/blockContent";
import { categoryType } from "./documents/blog/category";
import { customImageType } from "./utils/customImage";
import { heroSecondaryType } from "./plugins/heroSecondary";
import { pageType } from "./documents/page builder/page";
import { postType } from "./documents/blog/post";
import { projectType } from "./documents/portfolio/project";
import { textAndDetailsWithImageType } from "./plugins/textAndDetailsWithImage";
import { headingWithTextType } from "./plugins/headingWithText";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType, 
    blockContentType, 
    categoryType, 
    postType,
    customImageType,
    heroSecondaryType,
    pageType,
    textAndDetailsWithImageType,
    headingWithTextType,
  ],
};