import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LEXICON } from "@/data/lexicon";
import { stripDiacritics } from "@/lib/greek";
import { useProgress } from "@/lib/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/lexico")({ component: Lexico });

const CHS = ["I", "II", "III", "IV", "V"] as const;

function Lexico() {
  const [q, setQ] = useState("");
  const [ch, setCh] = useState<string | null>(null);
  const known = useProgress((s) => s.knownLemmas);
  const mark = useProgress((s) => s.markKnown);
  const nq = stripDiacritics(q);
  const list = useMemo(
    () =>
      LEXICON.filter((e) => {
        if (ch && e.chapter !== ch) return false;
        if (!nq) return true;
        return stripDiacritics(e.lemma).includes(nq) || stripDiacritics(e.gloss).includes(nq);
      }),
    [nq, ch],
  );

  return (
    <div className="space-y-4">
      <header>
        <h1 className="font-greek text-3xl text-primary">τὸ λεξικόν</h1>
        <p className="text-muted">{LEXICON.length} lemas dos capítulos I–V.</p>
      </header>
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="buscar lema ou glosa" />
      <div className="flex flex-wrap gap-1">
        <Button size="sm" variant={!ch ? "default" : "outline"} onClick={() => setCh(null)}>Todos</Button>
        {CHS.map((c) => (
          <Button key={c} size="sm" variant={ch === c ? "default" : "outline"} onClick={() => setCh(c)}>
            {c}
          </Button>
        ))}
      </div>
      <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
        {list.map((e) => (
          <li key={e.lemma} className="flex items-start justify-between gap-3 px-3 py-2">
            <div>
              <p className="font-greek text-lg">{e.lemma}</p>
              <p className="text-sm text-muted">{e.gloss}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge>{e.chapter}</Badge>
              <Button size="sm" variant="ghost" onClick={() => mark(e.lemma)}>
                {known.includes(e.lemma) ? "soube" : "sei"}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
