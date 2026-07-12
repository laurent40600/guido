import type { Guide } from "@/data/guides";

const DIACRITICS = /[̀-ͯ]/g;

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(DIACRITICS, "");
}

export function searchGuides(guides: Guide[], query: string): Guide[] {
  const terms = normalize(query.trim())
    .split(/\s+/)
    .filter(Boolean);

  if (terms.length === 0) return guides;

  const fields: { get: (guide: Guide) => string; weight: number }[] = [
    { get: (g) => g.title, weight: 5 },
    { get: (g) => g.tagline, weight: 3 },
    { get: (g) => g.audience, weight: 3 },
    { get: (g) => g.pitch, weight: 1 },
    { get: (g) => g.highlights.join(" "), weight: 1 },
  ];

  return guides
    .map((guide) => {
      const haystacks = fields.map((field) => ({
        text: normalize(field.get(guide)),
        weight: field.weight,
      }));

      let score = 0;
      for (const term of terms) {
        const termScore = haystacks
          .filter((h) => h.text.includes(term))
          .reduce((sum, h) => sum + h.weight, 0);

        if (termScore === 0) return { guide, score: 0, matchesAll: false };
        score += termScore;
      }

      return { guide, score, matchesAll: true };
    })
    .filter((result) => result.matchesAll)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.guide);
}
