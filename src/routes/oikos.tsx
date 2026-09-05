import { createFileRoute } from "@tanstack/react-router";
import { HOUSEHOLD } from "@/data/characters";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/oikos")({ component: Oikos });

function Oikos() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-greek text-3xl text-primary">ὁ οἶκος</h1>
        <p className="text-muted">A casa de Dicaiópolis no demo — 433 a.C., véspera da Guerra do Peloponeso.</p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        {HOUSEHOLD.map((h) => (
          <Card key={h.id} className="flex gap-3">
            <div className="bg-primary/10 font-greek flex size-14 shrink-0 items-center justify-center rounded-full text-2xl text-primary">
              {h.greek.replace(/^ὁ\s+/, "")[0]}
            </div>
            <div>
              <p className="font-greek text-xl">{h.greek}</p>
              <p className="text-sm">{h.pt}</p>
              <Badge tone="aegean" className="mt-1">{h.role} · cap. {h.chapter}</Badge>
              <p className="mt-2 text-sm text-muted">{h.blurb}</p>
            </div>
          </Card>
        ))}
      </div>
      <section className="space-y-2">
        <h2 className="text-lg">Ática</h2>
        <svg viewBox="0 0 320 200" className="w-full max-w-lg rounded-xl bg-aegean/10">
          <rect x="20" y="30" width="280" height="150" rx="40" fill="none" stroke="currentColor" className="text-aegean" />
          <circle cx="210" cy="90" r="8" fill="#8b3226" />
          <text x="222" y="94" fontSize="12" fill="currentColor">Ἀθῆναι</text>
          <circle cx="90" cy="120" r="6" fill="#2f4a4c" />
          <text x="102" y="124" fontSize="12" fill="currentColor">ὁ ἀγρός</text>
          <text x="24" y="24" fontSize="11" fill="currentColor">ἡ Ἀττική</text>
        </svg>
      </section>
    </div>
  );
}
