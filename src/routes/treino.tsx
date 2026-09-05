import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PARADIGMS } from "@/data/paradigms";
import { PARTICLES, PREP_DRILLS } from "@/data/particles";
import { SENTENCES } from "@/data/sentences";
import { stripDiacritics } from "@/lib/greek";
import { useProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GreekField } from "@/components/greek/GreekKeyboard";

export const Route = createFileRoute("/treino")({ component: Treino });

type Mode = "formas" | "particulas" | "frases" | "preps";

function eqGreek(a: string, b: string) {
  return (
    stripDiacritics(a).replace(/[·.,;:!?«»]/g, "").trim() ===
    stripDiacritics(b).replace(/[·.,;:!?«»]/g, "").trim()
  );
}

function Treino() {
  const [mode, setMode] = useState<Mode>("formas");
  const streak = useProgress((s) => s.drillStreak);
  const best = useProgress((s) => s.bestStreak);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-greek text-3xl text-primary">ἡ ἄσκησις</h1>
        <p className="text-muted">Produção: escreva grego. Série {streak} · melhor {best}.</p>
      </header>
      <div className="flex flex-wrap gap-1">
        {(
          [
            ["formas", "Formas"],
            ["particulas", "Partículas"],
            ["frases", "Frases"],
            ["preps", "Preposições"],
          ] as const
        ).map(([k, l]) => (
          <Button key={k} size="sm" variant={mode === k ? "default" : "outline"} onClick={() => setMode(k)}>
            {l}
          </Button>
        ))}
      </div>
      {mode === "formas" && <FormDrill />}
      {mode === "particulas" && <ParticleDrill />}
      {mode === "frases" && <SentenceDrill />}
      {mode === "preps" && <PrepDrill />}
    </div>
  );
}

function FormDrill() {
  const cells = useMemo(() => {
    const out: { prompt: string; answer: string }[] = [];
    for (const p of PARADIGMS) {
      for (const row of p.rows) {
        for (let j = 1; j < row.length; j++) {
          const ans = row[j]!;
          if (ans && ans !== "—") out.push({ prompt: `${p.title} · ${row[0]} · ${p.headers[j]}`, answer: ans });
        }
      }
    }
    return out;
  }, []);
  const [i, setI] = useState(0);
  const q = cells[i % Math.max(cells.length, 1)] ?? { prompt: "λύω", answer: "λύει" };
  return (
    <WriteCard
      prompt={q.prompt}
      expected={q.answer}
      onNext={() => setI((n) => n + 1)}
    />
  );
}

function ParticleDrill() {
  const [i, setI] = useState(0);
  const q = PARTICLES[i % PARTICLES.length]!;
  const [val, setVal] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const record = useProgress((s) => s.recordDrill);
  return (
    <Card className="space-y-3">
      <p>Qual a partícula? {q.sense}</p>
      {q.extra && <p className="text-xs text-muted">{q.extra}</p>}
      <GreekField value={val} onChange={setVal} />
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => {
            const ok = eqGreek(val, q.form) || stripDiacritics(q.form).includes(stripDiacritics(val));
            record(ok);
            setMsg(ok ? "Correcto." : `Era ${q.form}`);
          }}
        >
          Verificar
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setI((n) => n + 1);
            setVal("");
            setMsg(null);
          }}
        >
          Seguinte
        </Button>
      </div>
      {msg && <p className="text-sm">{msg}</p>}
    </Card>
  );
}

function SentenceDrill() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<"pt" | "gr">("pt");
  const q = SENTENCES[i % SENTENCES.length]!;
  const expected = dir === "pt" ? q.greek : q.pt;
  const prompt = dir === "pt" ? `Traduza para grego: ${q.pt}` : `Traduza: ${q.greek}`;
  return (
    <div className="space-y-3">
      <Button size="sm" variant="outline" onClick={() => setDir((d) => (d === "pt" ? "gr" : "pt"))}>
        {dir === "pt" ? "PT → grego" : "Grego → PT"}
      </Button>
      <WriteCard
        prompt={`${prompt} (cap. ${q.chapter})`}
        expected={expected}
        greek={dir === "pt"}
        onNext={() => setI((n) => n + 1)}
      />
    </div>
  );
}

function PrepDrill() {
  const [i, setI] = useState(0);
  const q = PREP_DRILLS[i % PREP_DRILLS.length]!;
  return (
    <WriteCard
      prompt={`Preposição: ${q.sense}`}
      expected={q.form}
      onNext={() => setI((n) => n + 1)}
    />
  );
}

function WriteCard({
  prompt,
  expected,
  onNext,
  greek = true,
}: {
  prompt: string;
  expected: string;
  onNext: () => void;
  greek?: boolean;
}) {
  const [val, setVal] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const record = useProgress((s) => s.recordDrill);
  const article = /^(ὁ|ἡ|τό|τόν|τήν|τοῦ|τῆς|τῷ|τῇ|οἱ|αἱ|τά|τούς|τάς|τῶν|τοῖς|ταῖς)\s+/;
  function match(a: string, b: string) {
    if (eqGreek(a, b)) return true;
    const sa = a.replace(article, "");
    const sb = b.replace(article, "");
    return eqGreek(sa, sb) || eqGreek(a, sb) || eqGreek(sa, b);
  }
  return (
    <Card className="space-y-3">
      <p>{prompt}</p>
      {greek ? (
        <GreekField value={val} onChange={setVal} />
      ) : (
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="h-10 w-full rounded-md border border-border bg-surface px-3"
        />
      )}
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => {
            const ok = match(val, expected);
            record(ok);
            setMsg(ok ? "Correcto." : `Esperava: ${expected}`);
          }}
        >
          Verificar
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setVal("");
            setMsg(null);
            onNext();
          }}
        >
          Seguinte
        </Button>
      </div>
      {msg && <p className="text-sm">{msg}</p>}
    </Card>
  );
}
