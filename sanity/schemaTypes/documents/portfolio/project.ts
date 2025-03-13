import { DesktopIcon, UlistIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const projectType = defineType({
  name: "project",
  type: "document",
  orderings: [orderRankOrdering],
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
    {
      title: "seo",
      name: "seo",
      icon: UlistIcon,
    },
  ],
  fields: [
    orderRankField({ type: "caseStudy" }),

    defineField({
      name: "mainImage",
      type: "customImage",
      group: "hero",
    }),
    defineField({
      name: "mainVideo",
      type: "video",
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
    defineField({
      name: "seo",
      type: "metadata",
      group: "seo",
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
