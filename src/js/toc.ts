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

export function generateTOC(blocks: Block[]): TOCEntry[] {
  return blocks
    .filter(block => ['h1', 'h2', 'h3', 'h4'].includes(block.style)) // Filter for heading styles
    .map(block => {
      const text = block.children?.map(child => child.text).join('') || '';
      const id = text.toLowerCase().replace(/\s+/g, '-'); // Generate unique ID

      return {
        text,
        level: block.style,
        id, // Ensure `id` is always a string
      };
    });
}