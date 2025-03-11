interface Block {
  _type: string;
  style: string;
  children?: Array<{ text: string }>;
}

// Define the type for a TOC entry
interface TOCEntry {
  text: string;
  level: string;
  id: string;
}

// Generates a table of contents from content blocks
export function generateTOC(blocks) {
  return blocks
    .filter((block) => ["h1", "h2", "h3", "h4"].includes(block.style))
    .map((block) => {
      const text = block.children?.map((child) => child.text).join("") || "";
      const id = text.toLowerCase().replace(/\s+/g, "-");

      return {
        text,
        level: block.style,
        id,
      };
    });
}
