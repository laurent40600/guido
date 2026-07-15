import type { BlogPost } from "@/data/blog";

export interface StructuredSteps {
  type: "HowTo" | "ItemList";
  items: { name: string; text: string }[];
}

// Détecte les articles structurés en étapes numérotées ("Étape 1 : ...") ou en
// liste numérotée ("Erreur 1 : ...", "1. ...") directement à partir des
// titres déjà affichés dans post.body, pour garantir que le balisage
// HowTo/ItemList reste toujours en correspondance exacte avec le texte visible.
const STEP_PATTERNS: { regex: RegExp; type: "HowTo" | "ItemList" }[] = [
  { regex: /^Étape\s+\d+\s*:\s*(.+)$/i, type: "HowTo" },
  { regex: /^Erreur\s+\d+\s*:\s*(.+)$/i, type: "ItemList" },
  { regex: /^\d+\.\s+(.+)$/, type: "ItemList" },
];

export function getStructuredSteps(post: BlogPost): StructuredSteps | undefined {
  let detectedType: "HowTo" | "ItemList" | undefined;
  const headings: { index: number; name: string }[] = [];

  post.body.forEach((block, index) => {
    if (block.type !== "heading") return;
    for (const { regex, type } of STEP_PATTERNS) {
      const match = block.text.match(regex);
      if (!match) continue;
      if (!detectedType) detectedType = type;
      if (type === detectedType) {
        headings.push({ index, name: match[1].trim() });
      }
      break;
    }
  });

  // Au moins 3 étapes/éléments détectés pour que le balisage ait du sens.
  if (!detectedType || headings.length < 3) return undefined;

  const items = headings.map((heading, i) => {
    const nextIndex = headings[i + 1]?.index ?? post.body.length;
    const textParts: string[] = [];
    for (let j = heading.index + 1; j < nextIndex; j++) {
      const block = post.body[j];
      if (block.type === "paragraph" || block.type === "prompt") {
        textParts.push(block.text);
      } else if (block.type === "list") {
        textParts.push(block.items.join(" "));
      }
    }
    return { name: heading.name, text: textParts.join(" ").slice(0, 500) };
  });

  return { type: detectedType, items };
}

export function buildStructuredStepsJsonLd(
  post: BlogPost,
  structured: StructuredSteps,
  siteUrl: string,
) {
  if (structured.type === "HowTo") {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: post.title,
      description: post.seoDescription,
      step: structured.items.map((item) => ({
        "@type": "HowToStep",
        name: item.name,
        text: item.text || item.name,
      })),
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: post.title,
    url: `${siteUrl}/blog/${post.slug}`,
    itemListElement: structured.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.text ? { description: item.text } : {}),
    })),
  };
}
