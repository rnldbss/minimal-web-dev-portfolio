import type { SchemaTypeDefinition } from "sanity";

// Document Types - Main content schemas
import { homeType } from "./schemaTypes/documents/home/home";
import { contactType } from "./schemaTypes/documents/contact/contact";
import { projectType } from "./schemaTypes/documents/portfolio/project";
import { projectsPageType } from "./schemaTypes/documents/portfolio/projectsPage";
import { linksType } from "./schemaTypes/documents/components/links";
import { testimonialType } from "./schemaTypes/documents/references/testimonial";

// Plugin Types - Reusable field configurations
import { experienceType } from "./schemaTypes/plugins/experience";
import { headingWithTextType } from "./schemaTypes/plugins/headingWithText";
import { heroSecondaryType } from "./schemaTypes/plugins/heroSecondary";
import { imageWithLinkType } from "./schemaTypes/plugins/imageWithLink";
import { metadataType } from "./schemaTypes/plugins/siteMetadata";
import { textAndListDetailsType } from "./schemaTypes/plugins/textAndListDetails";
import { twoStringsType } from "./schemaTypes/plugins/twoStrings";
import { twoStringsWithUrlType } from "./schemaTypes/plugins/twoStringsWithHref";

// Utility Types - Base schemas and shared configurations
import { blockContentType } from "./schemaTypes/utils/blockContent";
import { customImageType } from "./schemaTypes/utils/customImage";
import { videoType } from "./schemaTypes/utils/video";

/**
 * Schema Configuration for Sanity Studio
 *
 * This file exports all schema types used in the portfolio project.
 * The schemas are organized into three main categories:
 *
 * 1. Document Types: Main content schemas that represent full documents in Sanity
 * 2. Plugin Types: Reusable field configurations that can be embedded in other schemas
 * 3. Utility Types: Base schemas and shared configurations used across multiple schemas
 */
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document Types
    homeType,
    contactType,
    projectType,
    projectsPageType,
    linksType,
    testimonialType,

    // Plugin Types
    experienceType,
    headingWithTextType,
    heroSecondaryType,
    imageWithLinkType,
    metadataType,
    textAndListDetailsType,
    twoStringsType,
    twoStringsWithUrlType,

    // Utility Types
    blockContentType,
    customImageType,
    videoType,
  ],
};
