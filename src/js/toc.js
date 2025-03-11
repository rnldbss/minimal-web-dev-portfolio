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
