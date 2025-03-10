import { PortableText } from "@portabletext/react";

export default function MyPortableText({ content }) {
  return (
    <PortableText
      value={content}
      components={{
        list: ({ children, type }) => {
          const listClass =
            type === "bullet"
              ? "list-disc mb-4 [&>li]:mb-2"
              : "list-decimal mb-4 [&>li]:mb-2";
          const ListTag = type === "bullet" ? "ul" : "ol";

          return <ListTag className={listClass}>{children}</ListTag>;
        },
      }}
    />
  );
}
