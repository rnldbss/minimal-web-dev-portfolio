import { DesktopIcon, UlistIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  type: "document",
  groups: [
    {
      title: "Hero",
      name: "hero",
      icon: DesktopIcon,
    },
    {
      title: "Overview",
      name: "overview",
      icon: UlistIcon,
    },
    {
      title: "Project body",
      name: "body",
      icon: UlistIcon,
    },
    {
      title: "Card",
      name: "card",
      icon: UlistIcon,
    },
  ],
  fields: [
    defineField({
      name: "mainImage",
      type: "customImage",
      group: "hero",
    }),
    defineField({
      name: "title",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "tagLine",
      type: "string",
      group: "hero",
    }),

    defineField({
      name: "launchYear",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "cardDescription",
      type: "blockContent",
      group: "overview",
    }),
    defineField({
      name: "projectOverview",
      type: "textAndListDetails",
      title: "Overview",
      group: "overview",
    }),
    defineField({
      name: "body",
      type: "blockContent",
      group: "body",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "hero",
    }),
    defineField({
      name: "linkLabel",
      type: "string",
      group: "hero",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "tagLine",
      media: "mainImage",
    },
  },
});
