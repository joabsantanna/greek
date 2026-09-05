import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LEXICON } from "@/data/lexicon";
import { useProgress } from "@/lib/progress";
import { speakGreek } from "@/lib/greek";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/flashcards")({ component: Flashcards });

function Flashcards() {
  const srs = useProgress((s) => s.srs);
  const review = useProgress((s) => s.reviewSrs);
  const now = Date.now();
  const due = useMemo(() => {
    const pending = LEXICON.filter((e) => {
      const c = srs[e.lemma];
      return !c || c.due <= now;
    });
    return pending.length ? pending : LEXICON.slice(0, 8);
  }, [srs, now]);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const card = due[i % due.length];

  if (!card) return <p>Léxico vazio.</p>;

  function grade(g: "again" | "good" | "easy") {
    review(card.lemma, g);
    setFlip(false);
    setI((n) => n + 1);
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <header>
        <h1 className="font-greek text-3xl text-primary">αἱ δέλτοι</h1>
        <p className="text-muted">Repetição espaçada do léxico I–V. {due.length} por rever.</p>
      </header>
      <Card className="min-h-48 cursor-pointer" onClick={() => setFlip((v) => !v)}>
        <Badge>cap. {card.chapter}</Badge>
        {!flip ? (
          <p lang="grc" className="font-greek mt-4 text-3xl">{card.lemma.split(",")[0]}</p>
        ) : (
          <div className="mt-4 space-y-1">
            <p className="text-xl">{card.gloss}</p>
            <p className="font-greek text-muted">{card.lemma}</p>
            <p className="text-sm text-muted">{card.pos}{card.extra ? ` · ${card.extra}` : ""}</p>
          </div>
        )}
        <p className="mt-6 text-xs text-muted">toque para virar</p>
      </Card>
      {flip && (
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => grade("again")}>Outra vez</Button>
          <Button onClick={() => grade("good")}>Soube</Button>
          <Button variant="aegean" onClick={() => grade("easy")}>Fácil</Button>
          <Button variant="ghost" onClick={() => speakGreek(card.lemma.split(",")[0]!)}>Ouvir</Button>
        </div>
      )}
    </div>
  );
}
