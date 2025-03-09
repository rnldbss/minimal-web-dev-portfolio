import type { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./utils/blockContent";
import { contactType } from "./documents/contact/contact";
import { customImageType } from "./utils/customImage";
import { experienceType } from "./plugins/experience";
import { headingWithTextType } from "./plugins/headingWithText";
import { heroSecondaryType } from "./plugins/heroSecondary";
import { homeType } from "./documents/home/home";
import { imageWithLinkType } from "./plugins/imageWithLink";
import { linksType } from "./documents/components/links";
import { metadataType } from "./plugins/siteMetadata";
import { projectType } from "./documents/portfolio/project";
import { textAndListDetailsType } from "./plugins/textAndListDetails";
import { twoStringsType } from "./plugins/twoStrings";
import { twoStringsWithUrlType } from "./plugins/twoStringsWithHref";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType,
    blockContentType,
    customImageType,
    heroSecondaryType,
    textAndListDetailsType,
    headingWithTextType,
    twoStringsType,
    twoStringsWithUrlType,
    imageWithLinkType,
    homeType,
    experienceType,
    linksType,
    metadataType,
    contactType
  ],
};
