import React from "react";
import { PortableText } from "@portabletext/react";
import Video from "../Video";
import SanityImage from "../SanityImage";

const headingClasses = {
  h1: "mb-4",
  h2: "mb-2 mt-14 first:mt-0 leading-snug",
  h3: "mb-2 mt-6",
  h4: "mb-2 mt-4",
};

const components = {
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
          <SanityImage
            image={value}
            alt={value.alt}
            width={1024}
            height={576}
            className="object-fit w-full h-full"
          />
        </div>
      );
    },

    video: ({ value }) => <Video className="mt-14" src={value} />,

    testimonial: ({ value }) => {
      if (!value) return null;
      const { name, info, body, image } = value;
      return (
        <div className="bg-level-1 dark:bg-level-1-dark p-4 mt-14 rounded space-y-3">
          <div className="flex gap-2 items-center">
            {image && image.asset && (
              <SanityImage
                image={image}
                alt={image.alt || "Testimonial Image"}
                width={100}
                height={100}
                className="rounded-full h-12 w-12"
              />
            )}
            <div>
              <p className="font-semibold">{name}</p>
              {info && <p className="text-xs">{info}</p>}
            </div>
          </div>
          <div className="[&>p]:mb-0 [&>p]:dark:text-on-level-0-dark">
            <PortableText value={body} components={components} />
          </div>
        </div>
      );
    },

    // Add a handler for "reference" blocks.
    reference: ({ value }) => {
      if (!value) return null;
      // Check if the referenced document is a testimonial.
      if (value._type === "testimonial") {
        return components.types.testimonial({ value });
      }
      // Fallback for other reference types.
      return <div>Unsupported reference type: {value._type}</div>;
    },
  },
};

export default function PortableTextWithToc({ content }) {
  return <PortableText value={content} components={components} />;
}
