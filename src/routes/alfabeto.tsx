import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LETTERS, DIACRITICS, DIPHTHONGS } from "@/data/alphabet";
import { speakGreek } from "@/lib/greek";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/alfabeto")({ component: Alfabeto });

function Alfabeto() {
  const [sel, setSel] = useState(LETTERS[0]!);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const quiz = useMemo(() => {
    const target = LETTERS[round % LETTERS.length]!;
    const opts = [target, ...LETTERS.filter((l) => l.lower !== target.lower)]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    if (!opts.includes(target)) opts[0] = target;
    return { target, opts: opts.sort(() => Math.random() - 0.5) };
  }, [round]);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-greek text-3xl text-primary">τὸ ἀλφάβητον</h1>
        <p className="text-muted">Vinte e quatro letras. Pronúncia erasmiana / Allen.</p>
      </header>
      <div className="grid grid-cols-6 gap-1 sm:grid-cols-8">
        {LETTERS.map((l) => (
          <button
            key={l.upper}
            type="button"
            onClick={() => {
              setSel(l);
              speakGreek(l.lower[0]!);
            }}
            className="font-greek rounded-md border border-border bg-surface py-2 text-xl hover:border-primary"
          >
            {l.upper}
            <span className="mt-0.5 block text-sm">{l.lower.split("/")[0]}</span>
          </button>
        ))}
      </div>
      <Card>
        <p className="font-greek text-4xl">{sel.upper} {sel.lower}</p>
        <p>{sel.name} · {sel.nameEl}</p>
        <p className="text-sm text-muted">{sel.sound} · /{sel.ipa}/</p>
        <p lang="grc" className="font-greek mt-2 text-xl">{sel.example} — {sel.exampleGloss}</p>
      </Card>
      <section className="space-y-2">
        <h2 className="text-lg">Diacríticos</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {DIACRITICS.map((d) => (
            <li key={d.name} className="rounded-lg bg-bg-deep/50 px-3 py-2">
              <span className="font-greek mr-2 text-xl">{d.mark}</span>
              {d.name} — {d.note}
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg">Ditongos</h2>
        <div className="flex flex-wrap gap-2">
          {DIPHTHONGS.map((d) => (
            <Badge key={d.form} tone="aegean">
              <span className="font-greek">{d.form}</span> /{d.ipa}/ · {d.ex}
            </Badge>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg">Quiz ({Math.min(round + 1, 8)}/8)</h2>
        {round >= 8 ? (
          <p>Acertou {score} de 8.</p>
        ) : (
          <>
            <p>Qual é o som de <span className="font-greek text-2xl">{quiz.target.upper}</span>?</p>
            <div className="flex flex-wrap gap-2">
              {quiz.opts.map((o) => (
                <Button
                  key={o.upper}
                  size="sm"
                  variant={pick === o.upper ? "default" : "outline"}
                  onClick={() => setPick(o.upper)}
                >
                  {o.sound}
                </Button>
              ))}
            </div>
            <Button
              size="sm"
              disabled={!pick}
              onClick={() => {
                if (pick === quiz.target.upper) setScore((s) => s + 1);
                setPick(null);
                setRound((r) => r + 1);
              }}
            >
              Seguinte
            </Button>
          </>
        )}
      </section>
    </div>
  );
}
