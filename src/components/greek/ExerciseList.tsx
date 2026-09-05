import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GreekField } from "@/components/greek/GreekKeyboard";
import { stripDiacritics } from "@/lib/greek";
import { useProgress } from "@/lib/progress";
import type { ExerciseItem } from "@/data/types";
import { cn } from "@/lib/utils";

function norm(s: string) {
  return stripDiacritics(s).replace(/[·.,;:!?«»""'']/g, "").replace(/\s+/g, " ").trim();
}

export function ExerciseList({ items }: { items: ExerciseItem[] }) {
  return (
    <ol className="space-y-6">
      {items.map((ex, i) => (
        <li key={ex.id} className="rounded-xl border border-border bg-surface p-4">
          <p className="mb-3 text-xs tracking-wide text-muted uppercase">
            {i + 1}. {ex.type === "mcq" ? "Escolha" : ex.type === "tf" ? "V/F" : ex.type === "fill" ? "Completar" : ex.type === "parse" ? "Análise" : "Correspondência"}
          </p>
          <Item ex={ex} />
        </li>
      ))}
    </ol>
  );
}

function Item({ ex }: { ex: ExerciseItem }) {
  if (ex.type === "match") return <Match ex={ex} />;
  if (ex.type === "fill") return <Fill ex={ex} />;
  if (ex.type === "parse") return <Parse ex={ex} />;
  return <Choice ex={ex} />;
}

function Choice({ ex }: { ex: ExerciseItem }) {
  const [pick, setPick] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const mark = useProgress((s) => s.markExercise);
  const options = ex.options ?? (ex.type === "tf" ? ["Verdadeiro", "Falso"] : []);
  const ok = pick !== null && norm(pick) === norm(ex.answer);

  return (
    <div className="space-y-3">
      <p className="text-sm">{ex.prompt}</p>
      {ex.greek && <p lang="grc" className="font-greek text-xl">{ex.greek}</p>}
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <Button
            key={o}
            type="button"
            size="sm"
            variant={pick === o ? "default" : "outline"}
            onClick={() => setPick(o)}
          >
            {o}
          </Button>
        ))}
      </div>
      <Button
        size="sm"
        disabled={!pick}
        onClick={() => {
          setDone(true);
          mark(ex.id, ok);
        }}
      >
        Verificar
      </Button>
      {done && (
        <p className={cn("text-sm", ok ? "text-emerald-800" : "text-primary")}>
          {ok ? "Correcto." : `A resposta é: ${ex.answer}`}
          {ex.hint && !ok ? ` — ${ex.hint}` : ""}
        </p>
      )}
    </div>
  );
}

function Fill({ ex }: { ex: ExerciseItem }) {
  const [val, setVal] = useState("");
  const [done, setDone] = useState(false);
  const mark = useProgress((s) => s.markExercise);
  const ok = norm(val) === norm(ex.answer) || norm(val).includes(norm(ex.answer));
  return (
    <div className="space-y-3">
      <p className="text-sm">{ex.prompt}</p>
      {ex.greek && <p lang="grc" className="font-greek text-xl">{ex.greek}</p>}
      <GreekField value={val} onChange={setVal} placeholder="forma grega" />
      <Button
        size="sm"
        disabled={!val}
        onClick={() => {
          setDone(true);
          mark(ex.id, ok);
        }}
      >
        Verificar
      </Button>
      {done && (
        <p className={cn("text-sm", ok ? "text-emerald-800" : "text-primary")}>
          {ok ? "Correcto." : `Esperava: ${ex.answer}`}
        </p>
      )}
    </div>
  );
}

function Parse({ ex }: { ex: ExerciseItem }) {
  const [val, setVal] = useState("");
  const [done, setDone] = useState(false);
  const mark = useProgress((s) => s.markExercise);
  const ok = norm(val) === norm(ex.answer) || norm(ex.answer).includes(norm(val));
  return (
    <div className="space-y-3">
      <p className="text-sm">{ex.prompt}</p>
      {ex.greek && <p lang="grc" className="font-greek text-xl">{ex.greek}</p>}
      <Input value={val} onChange={(e) => setVal(e.target.value)} placeholder="ex. nom. sg. m." />
      <Button
        size="sm"
        disabled={!val}
        onClick={() => {
          setDone(true);
          mark(ex.id, ok);
        }}
      >
        Verificar
      </Button>
      {done && (
        <p className={cn("text-sm", ok ? "text-emerald-800" : "text-primary")}>
          {ok ? "Correcto." : `Esperava: ${ex.answer}`}
        </p>
      )}
    </div>
  );
}

function Match({ ex }: { ex: ExerciseItem }) {
  const pairs = ex.pairs ?? [];
  const rights = useMemo(() => [...pairs.map((p) => p.right)].sort(() => Math.random() - 0.5), [pairs]);
  const [map, setMap] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const mark = useProgress((s) => s.markExercise);
  const ok = pairs.every((p) => map[p.left] === p.right);

  return (
    <div className="space-y-3">
      <p className="text-sm">{ex.prompt}</p>
      <div className="space-y-2">
        {pairs.map((p) => (
          <div key={p.left} className="flex flex-wrap items-center gap-2">
            <span lang="grc" className="font-greek min-w-32">{p.left}</span>
            <select
              className="h-9 rounded-md border border-border bg-surface px-2 text-sm"
              value={map[p.left] ?? ""}
              onChange={(e) => setMap({ ...map, [p.left]: e.target.value })}
            >
              <option value="">—</option>
              {rights.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <Button
        size="sm"
        onClick={() => {
          setDone(true);
          mark(ex.id, ok);
        }}
      >
        Verificar
      </Button>
      {done && (
        <p className={cn("text-sm", ok ? "text-emerald-800" : "text-primary")}>
          {ok ? "Correcto." : "Há pares por corrigir."}
        </p>
      )}
    </div>
  );
}
