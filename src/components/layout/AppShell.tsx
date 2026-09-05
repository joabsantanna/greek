import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, GraduationCap, Home, Library, PenLine } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Início", icon: Home },
  { to: "/alfabeto", label: "Alfabeto", icon: BookOpen },
  { to: "/treino", label: "Treino", icon: PenLine },
  { to: "/lexico", label: "Léxico", icon: Library },
  { to: "/flashcards", label: "Fichas", icon: GraduationCap },
] as const;

const DESKTOP_EXTRA = [
  { to: "/gramatica", label: "Gramática" },
  { to: "/paradigmas", label: "Paradigmas" },
  { to: "/oikos", label: "Oikos" },
  { to: "/documento", label: "Ensaio" },
] as const;

function OwlMark() {
  return (
    <svg viewBox="0 0 40 40" className="size-8 text-primary" aria-hidden>
      <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.12" />
      <ellipse cx="14" cy="17" rx="5" ry="6" fill="currentColor" />
      <ellipse cx="26" cy="17" rx="5" ry="6" fill="currentColor" />
      <circle cx="14" cy="17" r="2" fill="var(--color-bg)" />
      <circle cx="26" cy="17" r="2" fill="var(--color-bg)" />
      <path d="M18 26 L20 29 L22 26" fill="currentColor" />
    </svg>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="parchment meander-top min-h-screen pb-20 md:pb-0">
      <header className="print:hidden sticky top-0 z-30 border-b border-border/70 bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <OwlMark />
            <span className="leading-tight">
              <span className="font-greek block text-lg text-primary">Ἀθήναζε</span>
              <span className="text-[0.65rem] tracking-[0.18em] text-muted uppercase">Capítulos I–V</span>
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm",
                  pathname === n.to ? "bg-primary/10 text-primary" : "text-muted hover:text-fg",
                )}
              >
                {n.label}
              </Link>
            ))}
            {DESKTOP_EXTRA.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm",
                  pathname === n.to ? "bg-primary/10 text-primary" : "text-muted hover:text-fg",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
      <nav className="print:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur md:hidden">
        <div className="grid grid-cols-5">
          {NAV.map((n) => {
            const Icon = n.icon;
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "flex flex-col items-center gap-0.5 py-2 text-[0.65rem]",
                  active ? "text-primary" : "text-muted",
                )}
              >
                <Icon className="size-4" />
                {n.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
