import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CHAPTERS } from "@/data/chapters";
import { HOUSEHOLD } from "@/data/characters";
import { LEXICON } from "@/data/lexicon";
import { useProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const known = useProgress((s) => s.knownLemmas);
  const read = useProgress((s) => s.readPassages);
  const last = useProgress((s) => s.lastChapter);
  const reset = useProgress((s) => s.reset);
  const streak = useProgress((s) => s.drillStreak);
  const best = useProgress((s) => s.bestStreak);
  const vocabPct = Math.round((known.length / Math.max(1, LEXICON.length)) * 100);
  const readPct = Math.round((read.length / 10) * 100);

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-xs tracking-[0.28em] text-muted uppercase">Introdução ao grego ático</p>
        <h1 className="font-greek text-5xl text-primary sm:text-6xl">Ἀθήναζε</h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Os cinco primeiros capítulos do Athenaze: ler o grego, tocar nas palavras, recitar paradigmas
          e viver no oikos de Dicaiópolis.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link to="/capitulo/$id" params={{ id: String(last) }}>
              Continuar cap. {last} <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/treino">Treino</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/documento">Documento académico</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <Card>
          <p className="text-xs tracking-wide text-muted uppercase">Léxico conhecido</p>
          <p className="mt-1 text-2xl">{known.length}</p>
          <Progress value={vocabPct} className="mt-2" />
        </Card>
        <Card>
          <p className="text-xs tracking-wide text-muted uppercase">Leituras</p>
          <p className="mt-1 text-2xl">{read.length}/10</p>
          <Progress value={readPct} className="mt-2" />
        </Card>
        <Card>
          <p className="text-xs tracking-wide text-muted uppercase">Série de treino</p>
          <p className="mt-1 text-2xl">{streak}</p>
          <p className="text-xs text-muted">melhor: {best}</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="font-greek text-2xl">Capítulos</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {CHAPTERS.map((ch) => (
            <Link key={ch.id} to="/capitulo/$id" params={{ id: String(ch.id) }}>
              <Card className="h-full transition-colors hover:border-primary/40">
                <p className="text-xs tracking-wide text-muted uppercase">Capítulo {ch.roman}</p>
                <h3 className="font-greek mt-1 text-xl text-primary">{ch.title}</h3>
                <p className="text-sm text-muted">{ch.titlePt} — {ch.kicker}</p>
                <p className="mt-2 line-clamp-2 text-sm">{ch.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h2 className="font-greek text-2xl">ὁ οἶκος</h2>
          <Link to="/oikos" className="text-sm text-primary">Ver casa</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {HOUSEHOLD.map((h) => (
            <Card key={h.id} className="min-w-36">
              <div className="bg-primary/10 font-greek mb-2 flex size-10 items-center justify-center rounded-full text-lg text-primary">
                {h.greek.replace(/^ὁ\s+/, "")[0]}
              </div>
              <p className="font-greek">{h.greek}</p>
              <p className="text-xs text-muted">{h.pt}</p>
              <Badge tone="aegean" className="mt-1">{h.role}</Badge>
            </Card>
          ))}
        </div>
      </section>

      <blockquote className="border-l-2 border-primary/40 pl-4">
        <p lang="grc" className="font-greek text-xl">πάντα ῥεῖ.</p>
        <footer className="text-sm text-muted">Heraclito — tudo flui.</footer>
      </blockquote>

      <button type="button" onClick={reset} className="text-xs text-muted underline">
        Reiniciar progresso
      </button>
    </div>
  );
}
