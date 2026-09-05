import { cn } from "@/lib/utils";

const tones = {
  ink: "bg-fg/10 text-fg",
  terra: "bg-primary/15 text-primary",
  aegean: "bg-aegean/15 text-aegean",
  ok: "bg-emerald-700/15 text-emerald-800",
} as const;

export function Badge({
  className,
  tone = "ink",
  ...props
}: React.ComponentProps<"span"> & { tone?: keyof typeof tones }) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[0.7rem] font-medium", tones[tone], className)}
      {...props}
    />
  );
}
