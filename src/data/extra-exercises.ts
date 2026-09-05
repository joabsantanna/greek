import type { ExerciseItem } from "./types";

export const EXTRA_EXERCISES: Record<number, ExerciseItem[]> = {
  1: [
    {
      id: "1x-match",
      type: "match",
      prompt: "Liga cada forma ao caso.",
      pairs: [
        { left: "ὁ ἄνθρωπος", right: "nominativo sg." },
        { left: "τὸν κλῆρον", right: "acusativo sg." },
        { left: "τοῖς ἀγροῖς", right: "dativo pl." },
        { left: "τῶν Ἀθηνῶν", right: "genitivo pl." },
      ],
      answer: "",
    },
    {
      id: "1x-pt",
      type: "fill",
      prompt: "Grego: «Dicaiópolis habita nos campos.»",
      answer: "ὁ Δικαιόπολις οἰκεῖ ἐν τοῖς ἀγροῖς",
    },
    {
      id: "1x-parse",
      type: "parse",
      prompt: "Analisa: πονεῖ",
      greek: "πονεῖ",
      answer: "3ª sg. pres. ind.",
      hint: "verbo contratado em -ε-",
    },
  ],
  2: [
    {
      id: "2x-match",
      type: "match",
      prompt: "Liga.",
      pairs: [
        { left: "ὁ δοῦλος", right: "o escravo" },
        { left: "οἱ βόες", right: "os bois" },
        { left: "τὸ ἄροτρον", right: "o arado" },
        { left: "ὁ δεσπότης", right: "o senhor" },
      ],
      answer: "",
    },
    {
      id: "2x-pt",
      type: "fill",
      prompt: "Grego: «O escravo não trabalha.»",
      answer: "ὁ δοῦλος οὐ πονεῖ",
    },
    {
      id: "2x-mcq",
      type: "mcq",
      prompt: "μὴ κάθευδε é:",
      options: ["indicativo", "imperativo negativo", "infinitivo", "particípio"],
      answer: "imperativo negativo",
    },
  ],
  3: [
    {
      id: "3x-match",
      type: "match",
      prompt: "Liga o caso à função.",
      pairs: [
        { left: "nominativo", right: "sujeito" },
        { left: "acusativo", right: "objecto directo" },
        { left: "genitivo", right: "de / posse" },
        { left: "dativo", right: "a / em / com" },
      ],
      answer: "",
    },
    {
      id: "3x-pt",
      type: "fill",
      prompt: "Grego: «O cão persegue a lebre.»",
      answer: "ὁ κύων διώκει τὸν λαγών",
    },
    {
      id: "3x-fill",
      type: "fill",
      prompt: "Completa: ὁ Φίλιππος _____ ἐστιν.",
      greek: "ὁ Φίλιππος _____ ἐστιν.",
      answer: "παῖς",
    },
  ],
  4: [
    {
      id: "4x-match",
      type: "match",
      prompt: "Liga as formas da 1ª declinação.",
      pairs: [
        { left: "ἡ κρήνη", right: "nom. sg." },
        { left: "τὴν ὑδρίαν", right: "ac. sg." },
        { left: "τῆς γυναικός", right: "gen. sg." },
        { left: "ταῖς ὁδοῖς", right: "dat. pl." },
      ],
      answer: "",
    },
    {
      id: "4x-pt",
      type: "fill",
      prompt: "Grego: «As mulheres vão à fonte.»",
      answer: "αἱ γυναῖκες βαίνουσι πρὸς τὴν κρήνην",
    },
    {
      id: "4x-mcq",
      type: "mcq",
      prompt: "O tema em -α longo (ὑδρίᾱ) no gen. sg. faz:",
      options: ["-ης", "-ας", "-ης ou -ας", "-ου"],
      answer: "-ας",
    },
  ],
  5: [
    {
      id: "5x-match",
      type: "match",
      prompt: "Liga.",
      pairs: [
        { left: "ὁ λύκος", right: "o lobo" },
        { left: "τὸ ὄρος", right: "o monte" },
        { left: "τὰ πρόβατα", right: "as ovelhas" },
        { left: "ὁ μῦθος", right: "o relato" },
      ],
      answer: "",
    },
    {
      id: "5x-pt",
      type: "fill",
      prompt: "Grego: «O lobo está no monte.»",
      answer: "ὁ λύκος ἐστὶν ἐν τῷ ὄρει",
    },
    {
      id: "5x-parse",
      type: "parse",
      prompt: "Analisa: φοβεῖται",
      greek: "φοβεῖται",
      answer: "3ª sg. pres. ind. méd.",
    },
  ],
};
