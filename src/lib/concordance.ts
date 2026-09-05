import { CHAPTERS } from "@/data/chapters";
import { lookupForm } from "@/lib/morphology";
import { stripDiacritics, tokenizeGreek } from "@/lib/greek";

export type Occurrence = {
  chapter: number;
  reading: string;
  form: string;
  snippet: string;
};

export function findOccurrences(formOrLemma: string, limit = 3): Occurrence[] {
  const key = stripDiacritics(formOrLemma);
  const lemma = lookupForm(formOrLemma)?.lemma;
  const lemmaKey = lemma ? stripDiacritics(lemma.split(",")[0]!) : "";
  const out: Occurrence[] = [];
  for (const ch of CHAPTERS) {
    for (const r of ch.readings) {
      for (const p of r.paragraphs) {
        const tokens = tokenizeGreek(p.greek).filter((t) => t.isWord);
        for (let i = 0; i < tokens.length; i++) {
          const t = tokens[i]!;
          const k = stripDiacritics(t.form);
          const hitLemma = lookupForm(t.form)?.lemma;
          if (k === key || (lemma && hitLemma === lemma) || (lemmaKey && k === lemmaKey)) {
            const from = Math.max(0, i - 3);
            const to = Math.min(tokens.length, i + 4);
            const snippet = tokens
              .slice(from, to)
              .map((x) => x.form)
              .join(" ");
            out.push({ chapter: ch.id, reading: r.id, form: t.form, snippet });
            if (out.length >= limit) return out;
          }
        }
      }
    }
  }
  return out;
}
