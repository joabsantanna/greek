import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SrsGrade = "again" | "good" | "easy";

export type SrsCard = {
  ease: number;
  interval: number;
  due: number;
  reps: number;
};

type ProgressState = {
  knownLemmas: string[];
  readPassages: string[];
  exerciseCorrect: Record<string, boolean>;
  lastChapter: number;
  srs: Record<string, SrsCard>;
  drillStreak: number;
  bestStreak: number;
  markKnown: (lemma: string) => void;
  unmarkKnown: (lemma: string) => void;
  markRead: (id: string) => void;
  markExercise: (id: string, ok: boolean) => void;
  setLastChapter: (n: number) => void;
  reviewSrs: (lemma: string, grade: SrsGrade) => void;
  recordDrill: (ok: boolean) => void;
  reset: () => void;
};

const DAY = 86_400_000;

function nextSrs(prev: SrsCard | undefined, grade: SrsGrade): SrsCard {
  const now = Date.now();
  const ease = prev?.ease ?? 2.5;
  const reps = prev?.reps ?? 0;
  const interval = prev?.interval ?? 0;
  if (grade === "again") {
    return { ease: Math.max(1.3, ease - 0.2), interval: 0, due: now, reps: 0 };
  }
  if (grade === "good") {
    const next = reps === 0 ? 1 : reps === 1 ? 3 : Math.round(interval * ease);
    return { ease, interval: next, due: now + next * DAY, reps: reps + 1 };
  }
  const nextEase = ease + 0.15;
  const next = reps === 0 ? 2 : Math.round(Math.max(interval, 1) * nextEase);
  return { ease: nextEase, interval: next, due: now + next * DAY, reps: reps + 1 };
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      knownLemmas: [],
      readPassages: [],
      exerciseCorrect: {},
      lastChapter: 1,
      srs: {},
      drillStreak: 0,
      bestStreak: 0,
      markKnown: (lemma) => {
        const k = get().knownLemmas;
        if (k.includes(lemma)) return;
        set({ knownLemmas: [...k, lemma] });
      },
      unmarkKnown: (lemma) =>
        set({ knownLemmas: get().knownLemmas.filter((x) => x !== lemma) }),
      markRead: (id) => {
        const r = get().readPassages;
        if (r.includes(id)) return;
        set({ readPassages: [...r, id] });
      },
      markExercise: (id, ok) =>
        set({ exerciseCorrect: { ...get().exerciseCorrect, [id]: ok } }),
      setLastChapter: (n) => set({ lastChapter: n }),
      reviewSrs: (lemma, grade) => {
        const srs = { ...(get().srs ?? {}) };
        srs[lemma] = nextSrs(srs[lemma], grade);
        const known = get().knownLemmas;
        if (grade !== "again" && !known.includes(lemma)) {
          set({ srs, knownLemmas: [...known, lemma] });
        } else if (grade === "again") {
          set({ srs, knownLemmas: known.filter((x) => x !== lemma) });
        } else {
          set({ srs });
        }
      },
      recordDrill: (ok) => {
        if (ok) {
          const next = (get().drillStreak ?? 0) + 1;
          set({ drillStreak: next, bestStreak: Math.max(get().bestStreak ?? 0, next) });
        } else {
          set({ drillStreak: 0 });
        }
      },
      reset: () =>
        set({
          knownLemmas: [],
          readPassages: [],
          exerciseCorrect: {},
          lastChapter: 1,
          srs: {},
          drillStreak: 0,
          bestStreak: get().bestStreak ?? 0,
        }),
    }),
    { name: "athenaze-progress" },
  ),
);
