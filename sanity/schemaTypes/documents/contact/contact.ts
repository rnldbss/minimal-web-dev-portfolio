import { defineArrayMember, defineField, defineType } from "sanity";

import { UlistIcon } from "@sanity/icons";

export const contactType = defineType({
  name: "contact",
  type: "document",
  groups: [
    
    {
      title: "Links",
      name: "links",
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
         name: "links",
         type: "array",
         of: [defineArrayMember({ name: "links", type: "twoStringsWithUrl" })],
         group: "links",
       }),
     defineField({
      name: "seo",
      type: "metadata",
      group: "seo",
    }),
    
  ],
});
