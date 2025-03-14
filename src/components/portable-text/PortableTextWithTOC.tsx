import React from "react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "../../sanity/lib/image";
import Video from "../Video";

const headingClasses = {
  h1: "mb-4",
  h2: "mb-2 mt-14 first:mt-0 leading-snug",
  h3: "mb-2 mt-6",
  h4: "mb-2 mt-4",
};

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => {
      const text = children?.[0]?.toString() || "";
      const id = text.toLowerCase().replace(/\s+/g, "-");
      return (
        <h1 id={id} className={headingClasses.h1}>
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const text = children?.[0]?.toString() || "";
      const id = text.toLowerCase().replace(/\s+/g, "-");
      return (
        <h2 id={id} className={headingClasses.h2}>
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = children?.[0]?.toString() || "";
      const id = text.toLowerCase().replace(/\s+/g, "-");
      return (
        <h3 id={id} className={headingClasses.h3}>
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      const text = children?.[0]?.toString() || "";
      const id = text.toLowerCase().replace(/\s+/g, "-");
      return (
        <h4 id={id} className={headingClasses.h4}>
          {children}
        </h4>
      );
    },
    normal: ({ children }) => <p className="mb-2">{children}</p>,
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc mb-4 [&>li]:mb-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal mb-4 [&>li]:mb-2">{children}</ol>
    ),
  },

  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("https")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="hover:text-accent-primary decoration-accent-primary underline"
        >
          {children}
        </a>
      );
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <div className="rounded-md overflow-hidden w-max mx-auto mt-14">
          <img
            src={urlFor(value).url()}
            alt={value.alt || "Image"}
            className="h-[400px]"
          />
        </div>
      );
    },

    video: ({ value }) => {
      return <Video className={"mt-14"} src={value} />;
    },
  },
};

export default function PortableTextWithToc({ content }: { content: any }) {
  return <PortableText value={content} components={components} />;
}
