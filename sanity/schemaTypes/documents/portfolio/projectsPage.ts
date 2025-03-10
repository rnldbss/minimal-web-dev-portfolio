import { defineField, defineType } from "sanity";

import { UlistIcon } from "@sanity/icons";

export const projectsPageType = defineType({
  name: "projectsPage",
  type: "document",
  groups: [
    {
      title: "Content",
      name: "content",
      icon: UlistIcon,
    },
    {
      title: "SEO",
      name: "seo",
      icon: UlistIcon,
    },
  ],
  fields: [
    defineField({
      name: "heading",
      type: "string",
      group: "content",
    }),

    defineField({
      name: "seo",
      type: "metadata",
      group: "seo",
    }),
  ],
});
