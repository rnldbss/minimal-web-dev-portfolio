import { PortableText } from "@portabletext/react";

export default function MyPortableText({ content }) {
  const components = {
    // Customize block types
    block: {
      normal: ({ children }) => <p className="mb-4">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-accent-primary pl-4 mb-4 italic">
          {children}
        </blockquote>
      ),
    },

    // Customize lists
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc mb-4 pl-2 [&>li]:mb-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal mb-4 pl-4 [&>li]:mb-2">{children}</ol>
      ),
    },

    // Customize marks
    marks: {
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
      em: ({ children }) => <em className="italic">{children}</em>,
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
    },
  };

  return <PortableText value={content} components={components} />;
}
