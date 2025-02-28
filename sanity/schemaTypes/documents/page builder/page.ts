import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "heroSecondary",
        }),
        defineArrayMember({
          name: "textAndListDetails",
          type: "textAndListDetails",
        }),
        defineArrayMember({
          name: "headingWithText",
          type: "headingWithText",
        }),
      ],
      options: {
        layout: "grid",
        insertMenu: {
          filter: true,
          groups: [
            {
              name: "landing",
              title: "Landing Page",
              of: ["heroSecondary"],
            },
            {
              name: "promotions",
              title: "Promotions",
              of: ["textAndListDetails"],
            },
          ],
          views: [
            { name: "list" },
            {
              name: "grid",
              previewImageUrl: (schemaTypeName) =>
                `/static/preview-${schemaTypeName}.jpg`,
            },
          ],
        },
      },
    }),
  ],
});
