export type VocabEntry = {
  lemma: string;
  pos: "s." | "adj." | "v." | "adv." | "prep." | "conj." | "part." | "pron." | "interj." | "loc." | "n.pr." | "art.";
  gloss: string;
  chapter: string;
  extra?: string;
  gender?: "m" | "f" | "n";
};

export type GrammarTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type GrammarBlock = {
  title: string;
  paragraphs: string[];
  tables?: GrammarTable[];
};

export type MatchPair = { left: string; right: string };

export type ExerciseItem = {
  id: string;
  type: "mcq" | "tf" | "fill" | "parse" | "match";
  prompt: string;
  greek?: string;
  options?: string[];
  answer: string;
  hint?: string;
  pairs?: MatchPair[];
};

export type Reading = {
  id: string;
  title: string;
  titlePt: string;
  caption: string;
  paragraphs: { greek: string; translation: string }[];
};

export type Chapter = {
  id: number;
  roman: string;
  title: string;
  titlePt: string;
  kicker: string;
  summary: string;
  topics: string[];
  readings: Reading[];
  grammar: GrammarBlock[];
  exercises: ExerciseItem[];
  culture: { title: string; paragraphs: string[] };
  wordStudy: { prompt: string; items: { pt: string; roots: string; note: string }[] };
  wisdom?: { greek: string; author: string; pt: string };
};

export type HouseholdMember = {
  id: string;
  greek: string;
  pt: string;
  role: string;
  portrait: string;
  chapter: string;
  blurb: string;
};
