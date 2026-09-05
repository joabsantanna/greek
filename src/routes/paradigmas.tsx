import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CONTRACTION_RULES, PARADIGMS, PREPOSITIONS } from "@/data/paradigms";
import { randomQuizForm } from "@/lib/morphology";
import { stripDiacritics } from "@/lib/greek";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GreekField } from "@/components/greek/GreekKeyboard";

export const Route = createFileRoute("/paradigmas")({ component: Paradigmas });

function Paradigmas() {
  const [hide, setHide] = useState(false);
  const [id, setId] = useState(PARADIGMS[0]!.id);
  const p = PARADIGMS.find((x) => x.id === id) ?? PARADIGMS[0]!;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-greek text-3xl text-primary">τὰ παραδείγματα</h1>
        <p className="text-muted">Recite em voz alta. Esconda as formas e escreva-as de memória.</p>
      </header>
      <div className="flex flex-wrap gap-1">
        {PARADIGMS.map((x) => (
          <Button key={x.id} size="sm" variant={x.id === id ? "default" : "outline"} onClick={() => setId(x.id)}>
            {x.title.split("—")[0]}
          </Button>
        ))}
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant={hide ? "default" : "outline"} onClick={() => setHide((v) => !v)}>
          {hide ? "Mostrar formas" : "Esconder formas"}
        </Button>
      </div>
      <div className="overflow-x-auto rounded-lg bg-bg-deep/50">
        <table className="w-full text-left text-sm">
          <thead>
            <tr>
              {p.headers.map((h) => (
                <th key={h} className="px-3 py-2 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {p.rows.map((row, i) => (
              <tr key={i} className="border-t border-border/60">
                {row.map((cell, j) => (
                  <td key={j} className={`px-3 py-1.5 ${j > 0 ? "font-greek" : ""}`}>
                    {j === 0 ? cell : hide ? "—" : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MorphQuiz />
      <section className="space-y-2">
        <h2 className="text-lg">Preposições</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {PREPOSITIONS.map((pr) => (
            <li key={pr.form} className="rounded-md bg-surface px-3 py-2 text-sm">
              <span className="font-greek">{pr.form}</span> + {pr.cases} — {pr.sense}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-2 text-lg">Contracções</h2>
        {CONTRACTION_RULES.map((r) => (
          <p key={r.left} className="font-greek text-sm">{r.left} → {r.right} · {r.ex}</p>
        ))}
      </section>
    </div>
  );
}

function MorphQuiz() {
  const [q, setQ] = useState(() => randomQuizForm());
  const [val, setVal] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const ok = stripDiacritics(val) === stripDiacritics(q.form);
  return (
    <Card className="space-y-3">
      <p className="text-sm">Escreva a forma: {q.tag} de {q.lemma.split(",")[0]}</p>
      <GreekField value={val} onChange={setVal} />
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => setMsg(ok ? "Correcto." : `Era ${q.form}`)}
        >
          Verificar
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setQ(randomQuizForm());
            setVal("");
            setMsg(null);
          }}
        >
          Outra
        </Button>
      </div>
      {msg && <p className="text-sm">{msg}</p>}
    </Card>
  );
}
