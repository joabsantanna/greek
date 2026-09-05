import { createFileRoute } from "@tanstack/react-router";
import { CONTRACTION_RULES, PARADIGMS, PREPOSITIONS } from "@/data/paradigms";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/gramatica")({ component: Gramatica });

function Gramatica() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-greek text-3xl text-primary">ἡ γραμματική</h1>
        <p className="text-muted">Paradigmas, preposições e contracções dos capítulos I–V.</p>
      </header>
      {PARADIGMS.map((p) => (
        <section key={p.id} className="space-y-2">
          <h2 className="font-greek text-xl">{p.title}</h2>
          {p.note && <p className="text-sm text-muted">{p.note}</p>}
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
                      <td key={j} className={`px-3 py-1.5 ${j > 0 ? "font-greek" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
      <section className="space-y-2">
        <h2 className="text-xl">Preposições</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {PREPOSITIONS.map((p) => (
            <Card key={p.form}>
              <p className="font-greek text-lg">{p.form}</p>
              <p className="text-sm text-muted">+ {p.cases} — {p.sense}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl">Contracções</h2>
        <ul className="space-y-1">
          {CONTRACTION_RULES.map((r) => (
            <li key={r.left} className="rounded-md bg-bg-deep/50 px-3 py-2 text-sm">
              <span className="font-greek">{r.left} → {r.right}</span>
              <span className="text-muted"> · {r.ex}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
