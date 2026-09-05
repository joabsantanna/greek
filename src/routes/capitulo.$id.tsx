import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { getChapter, CHAPTERS } from "@/data/chapters";
import { LEXICON } from "@/data/lexicon";
import { GreekReader } from "@/components/greek/GreekReader";
import { ExerciseList } from "@/components/greek/ExerciseList";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import type { GrammarBlock } from "@/data/types";

export const Route = createFileRoute("/capitulo/$id")({ component: ChapterPage });

const TABS = [
  { id: "a", label: "Leitura α" },
  { id: "g", label: "Gramática" },
  { id: "v", label: "Vocabulário" },
  { id: "b", label: "Leitura β" },
  { id: "e", label: "Exercícios" },
  { id: "c", label: "Cultura" },
] as const;

function ChapterPage() {
  const { id } = Route.useParams();
  const ch = getChapter(Number(id));
  const setLast = useProgress((s) => s.setLastChapter);
  const readPassages = useProgress((s) => s.readPassages);
  const known = useProgress((s) => s.knownLemmas);
  const markKnown = useProgress((s) => s.markKnown);
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("a");

  useEffect(() => {
    setTab("a");
    const n = Number(id);
    if (!Number.isNaN(n)) setLast(n);
  }, [id, setLast]);

  if (!ch) {
    return <p>Capítulo não encontrado.</p>;
  }

  const voc = LEXICON.filter((e) => e.chapter === ch.roman);
  const rA = ch.readings[0];
  const rB = ch.readings[1];

  return (
    <div className="space-y-6">
      <nav className="flex flex-wrap gap-1">
        {CHAPTERS.map((c) => (
          <Link
            key={c.id}
            to="/capitulo/$id"
            params={{ id: String(c.id) }}
            className={cn(
              "rounded-md px-2 py-1 text-sm",
              c.id === ch.id ? "bg-primary text-primary-fg" : "text-muted hover:text-fg",
            )}
          >
            {c.roman}
          </Link>
        ))}
      </nav>
      <header>
        <p className="text-xs tracking-[0.2em] text-muted uppercase">Capítulo {ch.roman}</p>
        <h1 className="font-greek text-3xl text-primary">{ch.title} · {ch.titlePt}</h1>
        <p className="text-muted">{ch.kicker}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {ch.topics.map((t) => (
            <Badge key={t} tone="terra">{t}</Badge>
          ))}
        </div>
      </header>
      <div className="flex flex-wrap gap-1 border-b border-border pb-2">
        {TABS.map((t) => {
          const done =
            (t.id === "a" && rA && readPassages.includes(rA.id)) ||
            (t.id === "b" && rB && readPassages.includes(rB.id));
          return (
            <Button key={t.id} size="sm" variant={tab === t.id ? "default" : "ghost"} onClick={() => setTab(t.id)}>
              {t.label}
              {done && <Check className="size-3" />}
            </Button>
          );
        })}
      </div>
      {tab === "a" && rA && (
        <>
          <GreekReader reading={rA} />
          <NextStep onClick={() => setTab("g")} label="Seguir para a gramática" />
        </>
      )}
      {tab === "g" && (
        <>
          <GrammarView blocks={ch.grammar} />
          <NextStep onClick={() => setTab("v")} label="Seguir para o vocabulário" />
        </>
      )}
      {tab === "v" && (
        <>
          <VocabView items={voc} known={known} onKnown={markKnown} />
          <NextStep onClick={() => setTab("b")} label="Seguir para a leitura β" />
        </>
      )}
      {tab === "b" && rB && (
        <>
          <GreekReader reading={rB} />
          <NextStep onClick={() => setTab("e")} label="Seguir para os exercícios" />
        </>
      )}
      {tab === "e" && (
        <>
          <ExerciseList items={ch.exercises} />
          <NextStep onClick={() => setTab("c")} label="Seguir para a cultura" />
        </>
      )}
      {tab === "c" && <CultureView ch={ch} />}
    </div>
  );
}

function NextStep({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <div className="pt-2">
      <Button onClick={onClick}>{label}</Button>
    </div>
  );
}

function GrammarView({ blocks }: { blocks: GrammarBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b) => (
        <section key={b.title} className="space-y-3">
          <h2 className="font-greek text-2xl">{b.title}</h2>
          {b.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">{p}</p>
          ))}
          {b.tables?.map((t) => (
            <div key={t.caption} className="overflow-x-auto rounded-lg bg-bg-deep/50">
              <p className="px-3 pt-2 text-xs tracking-wide text-muted uppercase">{t.caption}</p>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    {t.headers.map((h) => (
                      <th key={h} className="px-3 py-2 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.rows.map((row, i) => (
                    <tr key={i} className="border-t border-border/60">
                      {row.map((cell, j) => (
                        <td key={j} className={cn("px-3 py-1.5", j > 0 && "font-greek")}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

function VocabView({
  items,
  known,
  onKnown,
}: {
  items: typeof LEXICON;
  known: string[];
  onKnown: (l: string) => void;
}) {
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
      {items.map((e) => (
        <li key={e.lemma} className="flex items-start justify-between gap-3 px-3 py-2">
          <div>
            <p className="font-greek text-lg">{e.lemma}</p>
            <p className="text-sm text-muted">{e.gloss}{e.extra ? ` · ${e.extra}` : ""}</p>
          </div>
          <Button size="sm" variant={known.includes(e.lemma) ? "secondary" : "outline"} onClick={() => onKnown(e.lemma)}>
            {known.includes(e.lemma) ? "soube" : "sei"}
          </Button>
        </li>
      ))}
    </ul>
  );
}

function CultureView({ ch }: { ch: NonNullable<ReturnType<typeof getChapter>> }) {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="font-greek text-2xl">{ch.culture.title}</h2>
        {ch.culture.paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed">{p}</p>
        ))}
      </section>
      <section className="space-y-3">
        <h2 className="text-lg">O grego no português</h2>
        <p className="text-sm text-muted">{ch.wordStudy.prompt}</p>
        <ul className="space-y-2">
          {ch.wordStudy.items.map((it) => (
            <li key={it.pt} className="rounded-lg bg-bg-deep/50 px-3 py-2">
              <p className="font-medium">{it.pt}</p>
              <p lang="grc" className="font-greek text-sm">{it.roots}</p>
              <p className="text-sm text-muted">{it.note}</p>
            </li>
          ))}
        </ul>
      </section>
      {ch.wisdom && (
        <blockquote className="border-l-2 border-primary/40 pl-4">
          <p lang="grc" className="font-greek text-xl">{ch.wisdom.greek}</p>
          <footer className="text-sm text-muted">{ch.wisdom.author} — {ch.wisdom.pt}</footer>
        </blockquote>
      )}
      {ch.id < 5 && (
        <Button asChild>
          <Link to="/capitulo/$id" params={{ id: String(ch.id + 1) }}>Capítulo seguinte</Link>
        </Button>
      )}
    </div>
  );
}
