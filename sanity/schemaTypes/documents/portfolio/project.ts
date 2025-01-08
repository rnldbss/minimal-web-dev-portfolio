import {DesktopIcon, UlistIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  type: "document",
  groups:[
    {
      title: 'Hero',
      name: 'hero',
      icon: DesktopIcon,
    },
    {
      title: 'Overview',
      name: 'overview',
      icon: UlistIcon,
    },
    {
      title: 'Project body',
      name: 'body',
      icon: UlistIcon,
    }

  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: 'hero'
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: 'hero'
    }),
    defineField({
      name: "tagLine",
      type: "string",
      group: 'hero'
    }),
    defineField({
      name: "mainImage",
      type: "customImage",
      group: 'hero'
    }),
    defineField({
      name: "launchYear",
      type: "datetime",
      group: 'hero'
    }),
    defineField({
      name: "projectOverview",
      type: "textAndDetailsWithImage",
      title: "Overview",
      group: 'overview'
    }),
    defineField({
      name: "body",
      type: "blockContent",
      group: 'body'
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