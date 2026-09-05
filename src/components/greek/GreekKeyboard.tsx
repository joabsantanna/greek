import { Delete, Space } from "lucide-react";
import { cn } from "@/lib/utils";

const ROWS = [
  ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ"],
  ["ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π"],
  ["ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω", "ς"],
];

const MARKS: { label: string; mark: string; title: string }[] = [
  { label: "´", mark: "\u0301", title: "agudo" },
  { label: "`", mark: "\u0300", title: "grave" },
  { label: "˜", mark: "\u0342", title: "circunflexo" },
  { label: "᾿", mark: "\u0313", title: "suave" },
  { label: "῾", mark: "\u0314", title: "áspero" },
  { label: "ͺ", mark: "\u0345", title: "iota" },
  { label: "¨", mark: "\u0308", title: "diérese" },
];

function applyDiacritic(text: string, mark: string) {
  if (!text) return text;
  const last = text.slice(-1);
  return text.slice(0, -1) + (last + mark).normalize("NFC");
}

export function GreekKeyboard({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1.5">
      {ROWS.map((row, i) => (
        <div key={i} className="flex flex-wrap justify-center gap-1">
          {row.map((ch) => (
            <button
              key={ch}
              type="button"
              className="font-greek min-w-8 rounded-md border border-border bg-surface px-2 py-1.5 text-lg hover:bg-primary/10"
              onClick={() => onChange(value + ch)}
            >
              {ch}
            </button>
          ))}
        </div>
      ))}
      <div className="flex flex-wrap justify-center gap-1">
        {MARKS.map((m) => (
          <button
            key={m.title}
            type="button"
            title={m.title}
            className="min-w-8 rounded-md border border-border bg-bg-deep px-2 py-1 text-sm hover:bg-primary/10"
            onClick={() => onChange(applyDiacritic(value, m.mark))}
          >
            {m.label}
          </button>
        ))}
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs"
          onClick={() => onChange(value + " ")}
        >
          <Space className="size-3.5" />
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs"
          onClick={() => onChange(value.slice(0, -1))}
        >
          <Delete className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

export function GreekField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <input
        lang="grc"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "forma grega"}
        className="font-greek h-10 w-full rounded-md border border-border bg-surface px-3 text-lg outline-none focus:border-primary"
      />
      <GreekKeyboard value={value} onChange={onChange} />
    </div>
  );
}
