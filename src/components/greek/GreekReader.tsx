import { useMemo, useState } from "react";
import { Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { speakGreek, toIpa, tokenizeGreek } from "@/lib/greek";
import { guessMorph, lookupForm, lookupMorph } from "@/lib/morphology";
import { findOccurrences } from "@/lib/concordance";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import type { Reading } from "@/data/types";

type Mode = "estudo" | "foco" | "apoio" | "analise";

export function GreekReader({
  reading,
  onRead,
}: {
  reading: Reading;
  onRead?: () => void;
}) {
  const [mode, setMode] = useState<Mode>("estudo");
  const [showTr, setShowTr] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const knownLemmas = useProgress((s) => s.knownLemmas);
  const markKnown = useProgress((s) => s.markKnown);
  const unmarkKnown = useProgress((s) => s.unmarkKnown);
  const markRead = useProgress((s) => s.markRead);

  const fullText = reading.paragraphs.map((p) => p.greek).join(" ");

  return (
    <article className="space-y-6 pb-24">
      <header className="space-y-2">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">{reading.id}</p>
        <h1 className="font-greek text-3xl text-primary">{reading.title}</h1>
        <p className="text-muted">{reading.titlePt}</p>
        <p lang="grc" className="font-greek text-sm text-muted italic">{reading.caption}</p>
      </header>
      <div className="flex flex-wrap gap-2">
        {(["estudo", "foco", "apoio", "analise"] as Mode[]).map((m) => (
          <Button key={m} size="sm" variant={mode === m ? "default" : "outline"} onClick={() => setMode(m)}>
            {m === "estudo" ? "Estudo" : m === "foco" ? "Só grego" : m === "apoio" ? "Com glosas" : "Análise"}
          </Button>
        ))}
        <Button size="sm" variant={showTr ? "default" : "outline"} onClick={() => setShowTr((v) => !v)}>
          Tradução
        </Button>
        <Button size="sm" variant="outline" onClick={() => speakGreek(fullText)}>
          <Volume2 className="size-3.5" /> Ouvir
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            markRead(reading.id);
            onRead?.();
          }}
        >
          Marcar lida
        </Button>
      </div>
      {reading.paragraphs.map((p, i) => (
        <Paragraph
          key={i}
          greek={p.greek}
          translation={p.translation}
          mode={mode === "foco" ? "estudo" : mode}
          showTr={showTr && mode !== "foco"}
          selected={selected}
          onSelect={setSelected}
          knownLemmas={knownLemmas}
        />
      ))}
      {selected && (
        <WordPanel
          form={selected}
          known={!!lookupForm(selected) && knownLemmas.includes(lookupForm(selected)!.lemma)}
          onKnown={() => {
            const e = lookupForm(selected);
            if (e) markKnown(e.lemma);
          }}
          onUnknown={() => {
            const e = lookupForm(selected);
            if (e) unmarkKnown(e.lemma);
          }}
          onClose={() => setSelected(null)}
        />
      )}
    </article>
  );
}

function Paragraph({
  greek,
  translation,
  mode,
  showTr,
  selected,
  onSelect,
  knownLemmas,
}: {
  greek: string;
  translation: string;
  mode: Mode;
  showTr: boolean;
  selected: string | null;
  onSelect: (f: string) => void;
  knownLemmas: string[];
}) {
  const tokens = useMemo(() => tokenizeGreek(greek), [greek]);
  const words = tokens.filter((t) => t.isWord);

  return (
    <div className="space-y-3">
      <p lang="grc" className="font-greek text-[1.35rem] leading-[1.85] text-fg sm:text-[1.5rem]">
        {tokens.map((t, i) => {
          if (!t.isWord) return <span key={i}>{t.punct}</span>;
          const entry = lookupForm(t.form);
          const known = entry ? knownLemmas.includes(entry.lemma) : false;
          const active = selected === t.form;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(t.form)}
              className={cn(
                "rounded-sm px-0.5 transition-colors duration-150",
                mode === "estudo" && "hover:bg-primary/10",
                active && "bg-primary/15 text-primary",
                known && mode === "estudo" && !active && "text-fg",
                !known &&
                  mode === "estudo" &&
                  !active &&
                  "decoration-primary/40 underline decoration-dotted underline-offset-4",
              )}
            >
              {t.form}
              {mode === "apoio" && entry && (
                <span className="mt-0.5 block font-sans text-[0.65rem] leading-tight font-normal tracking-normal text-muted not-italic">
                  {entry.gloss.split(",")[0]}
                </span>
              )}
            </button>
          );
        })}
      </p>
      {mode === "analise" && (
        <div className="overflow-x-auto rounded-lg bg-bg-deep/60">
          <table className="w-full min-w-[20rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs tracking-wide text-muted uppercase">
                <th className="px-3 py-2 font-medium">Forma</th>
                <th className="px-3 py-2 font-medium">Análise</th>
                <th className="px-3 py-2 font-medium">Lema</th>
                <th className="px-3 py-2 font-medium">Glosa</th>
              </tr>
            </thead>
            <tbody>
              {words.map((t, i) => {
                const hits = lookupMorph(t.form);
                const entry = hits[0]?.entry;
                return (
                  <tr key={i} className="border-b border-border/50">
                    <td className="font-greek px-3 py-1.5">
                      <button type="button" onClick={() => onSelect(t.form)} className="text-left hover:text-primary">
                        {t.form}
                      </button>
                    </td>
                    <td className="px-3 py-1.5 text-muted">{hits[0]?.tag ?? guessMorph(t.form)}</td>
                    <td className="font-greek px-3 py-1.5">{entry?.lemma.split(",")[0] ?? "—"}</td>
                    <td className="px-3 py-1.5 text-muted">{entry?.gloss.split(",")[0] ?? "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {showTr && (
        <p className="border-l-2 border-primary/30 pl-3 text-sm leading-relaxed text-muted">{translation}</p>
      )}
    </div>
  );
}

function WordPanel({
  form,
  known,
  onKnown,
  onUnknown,
  onClose,
}: {
  form: string;
  known: boolean;
  onKnown: () => void;
  onUnknown: () => void;
  onClose: () => void;
}) {
  const hits = lookupMorph(form);
  const entry = hits[0]?.entry;
  const occ = findOccurrences(form, 4);

  return (
    <aside className="fixed inset-x-0 bottom-16 z-40 mx-auto max-h-[50vh] max-w-5xl overflow-y-auto rounded-t-xl border border-border bg-surface p-4 shadow-lg md:bottom-4 md:rounded-xl">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p lang="grc" className="font-greek text-2xl">{form}</p>
          <p className="text-xs text-muted">/{toIpa(form)}/</p>
        </div>
        <button type="button" onClick={onClose} className="rounded-md p-1 hover:bg-bg-deep" aria-label="Fechar">
          <X className="size-4" />
        </button>
      </div>
      {entry ? (
        <div className="mt-2 space-y-1">
          <p className="font-greek text-lg">{entry.lemma}</p>
          <p className="text-sm">{entry.gloss}</p>
          <div className="flex flex-wrap gap-1.5">
            <Badge tone="terra">{entry.pos}</Badge>
            <Badge>cap. {entry.chapter}</Badge>
            {hits[0] && <Badge tone="aegean">{hits[0].tag}</Badge>}
          </div>
        </div>
      ) : (
        <p className="mt-2 text-sm text-muted">Forma não indexada. Análise aproximada: {guessMorph(form)}.</p>
      )}
      {occ.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm">
          {occ.map((o, i) => (
            <li key={i} className="text-muted">
              <span className="text-primary">{o.reading}</span>{" "}
              <span lang="grc" className="font-greek">{o.snippet}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3 flex gap-2">
        <Button size="sm" variant={known ? "secondary" : "default"} onClick={known ? onUnknown : onKnown}>
          {known ? "Marcar por rever" : "Já sei"}
        </Button>
        <Button size="sm" variant="outline" onClick={() => speakGreek(form)}>
          <Volume2 className="size-3.5" />
        </Button>
      </div>
    </aside>
  );
}
