import type { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./utils/blockContent";
import { categoryType } from "./documents/blog/category";
import { customImageType } from "./utils/customImage";
import { experienceType } from "./plugins/experience";
import { headingWithTextType } from "./plugins/headingWithText";
import { heroSecondaryType } from "./plugins/heroSecondary";
import { homeType } from "./documents/home/home";
import { imageWithLinkType } from "./plugins/imageWithLink";
import { pageType } from "./documents/page builder/page";
import { postType } from "./documents/blog/post";
import { projectType } from "./documents/portfolio/project";
import { textAndListDetailsType } from "./plugins/textAndListDetails";
import { twoStringsType } from "./plugins/twoStrings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType,
    blockContentType,
    categoryType,
    postType,
    customImageType,
    heroSecondaryType,
    pageType,
    textAndListDetailsType,
    headingWithTextType,
    twoStringsType,
    imageWithLinkType,
    homeType,
    experienceType,
  ],
};
