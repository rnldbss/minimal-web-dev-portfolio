import { defineField, defineType } from "sanity";

export const linksType = defineType({
  name: "links",
  type: "document",

  fields: [
    defineField({
      name: "resume",
      type: "file",
    }),

    
    
  ],
});
