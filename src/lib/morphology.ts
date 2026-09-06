import { LEXICON } from "@/data/lexicon";
import type { VocabEntry } from "@/data/types";
import { stripDiacritics } from "@/lib/greek";

export type MorphHit = { form: string; tag: string; entry: VocabEntry };

const INDEX = new Map<string, MorphHit[]>();

function add(form: string, tag: string, entry: VocabEntry) {
  const k = stripDiacritics(form);
  const list = INDEX.get(k) ?? [];
  if (!list.some((h) => h.entry.lemma === entry.lemma && h.tag === tag)) {
    list.push({ form, tag, entry });
    INDEX.set(k, list);
  }
}

function decline2m(stem: string, entry: VocabEntry) {
  add(stem + "ος", "nom. sg. m.", entry);
  add(stem + "ου", "gen. sg. m.", entry);
  add(stem + "ῳ", "dat. sg. m.", entry);
  add(stem + "ον", "ac. sg. m.", entry);
  add(stem + "ε", "voc. sg. m.", entry);
  add(stem + "οι", "nom. pl. m.", entry);
  add(stem + "ων", "gen. pl. m.", entry);
  add(stem + "οις", "dat. pl. m.", entry);
  add(stem + "ους", "ac. pl. m.", entry);
}

function decline2n(stem: string, entry: VocabEntry) {
  add(stem + "ον", "nom./ac. sg. n.", entry);
  add(stem + "ου", "gen. sg. n.", entry);
  add(stem + "ῳ", "dat. sg. n.", entry);
  add(stem + "α", "nom./ac. pl. n.", entry);
  add(stem + "ων", "gen. pl. n.", entry);
  add(stem + "οις", "dat. pl. n.", entry);
}

function decline1e(stem: string, entry: VocabEntry) {
  add(stem + "η", "nom. sg. f.", entry);
  add(stem + "ης", "gen. sg. f.", entry);
  add(stem + "ῃ", "dat. sg. f.", entry);
  add(stem + "ην", "ac. sg. f.", entry);
  add(stem + "αι", "nom. pl. f.", entry);
  add(stem + "ων", "gen. pl. f.", entry);
  add(stem + "αις", "dat. pl. f.", entry);
  add(stem + "ας", "ac. pl. f.", entry);
}

function decline1a(stem: string, entry: VocabEntry) {
  add(stem + "α", "nom. sg. f.", entry);
  add(stem + "ας", "gen. sg. f.", entry);
  add(stem + "ᾳ", "dat. sg. f.", entry);
  add(stem + "αν", "ac. sg. f.", entry);
  add(stem + "αι", "nom. pl. f.", entry);
  add(stem + "ων", "gen. pl. f.", entry);
  add(stem + "αις", "dat. pl. f.", entry);
  add(stem + "ας", "ac. pl. f.", entry);
}

function conjLuo(stem: string, entry: VocabEntry) {
  add(stem + "ω", "1ª sg. pres. ind.", entry);
  add(stem + "εις", "2ª sg. pres. ind.", entry);
  add(stem + "ει", "3ª sg. pres. ind.", entry);
  add(stem + "ομεν", "1ª pl. pres. ind.", entry);
  add(stem + "ετε", "2ª pl. pres. ind.", entry);
  add(stem + "ουσι", "3ª pl. pres. ind.", entry);
  add(stem + "ουσιν", "3ª pl. pres. ind.", entry);
  add(stem + "ε", "2ª sg. imper. pres.", entry);
  add(stem + "ετε", "2ª pl. imper. pres.", entry);
}

function conjEo(stem: string, entry: VocabEntry) {
  add(stem + "ω", "1ª sg. pres. ind. (contr. -ε-)", entry);
  add(stem + "εις", "2ª sg. pres. ind. (contr. -ε-)", entry);
  add(stem + "ει", "3ª sg. pres. ind. (contr. -ε-)", entry);
  add(stem + "ουμεν", "1ª pl. pres. ind. (contr. -ε-)", entry);
  add(stem + "ειτε", "2ª pl. pres. ind. (contr. -ε-)", entry);
  add(stem + "ουσι", "3ª pl. pres. ind. (contr. -ε-)", entry);
  add(stem + "ουσιν", "3ª pl. pres. ind. (contr. -ε-)", entry);
  add(stem + "ει", "2ª sg. imper. pres. (contr. -ε-)", entry);
}

function conjAo(stem: string, entry: VocabEntry) {
  add(stem + "ω", "1ª sg. pres. ind. (contr. -α-)", entry);
  add(stem + "ᾳς", "2ª sg. pres. ind. (contr. -α-)", entry);
  add(stem + "ᾳ", "3ª sg. pres. ind. (contr. -α-)", entry);
  add(stem + "ωμεν", "1ª pl. pres. ind. (contr. -α-)", entry);
  add(stem + "ατε", "2ª pl. pres. ind. (contr. -α-)", entry);
  add(stem + "ωσι", "3ª pl. pres. ind. (contr. -α-)", entry);
  add(stem + "ωσιν", "3ª pl. pres. ind. (contr. -α-)", entry);
}

const IRREGULAR: Record<string, [string, string][]> = {
  εἰμί: [
    ["εἰμί", "1ª sg. pres. ind."],
    ["εἶ", "2ª sg. pres. ind."],
    ["ἐστί", "3ª sg. pres. ind."],
    ["ἐστι", "3ª sg. pres. ind."],
    ["ἐστίν", "3ª sg. pres. ind."],
    ["ἐστιν", "3ª sg. pres. ind."],
    ["ἐσμέν", "1ª pl. pres. ind."],
    ["ἐστέ", "2ª pl. pres. ind."],
    ["εἰσί", "3ª pl. pres. ind."],
    ["εἰσίν", "3ª pl. pres. ind."],
    ["ἴσθι", "2ª sg. imper."],
  ],
  ἀνήρ: [
    ["ἀνήρ", "nom. sg."],
    ["ἀνδρός", "gen. sg."],
    ["ἀνδρί", "dat. sg."],
    ["ἄνδρα", "ac. sg."],
    ["ἄνδρες", "nom. pl."],
    ["ἀνδρῶν", "gen. pl."],
    ["ἀνδράσι", "dat. pl."],
    ["ἄνδρας", "ac. pl."],
  ],
  γυνή: [
    ["γυνή", "nom. sg."],
    ["γυναικός", "gen. sg."],
    ["γυναικί", "dat. sg."],
    ["γυναῖκα", "ac. sg."],
    ["γυναῖκες", "nom. pl."],
    ["γυναικῶν", "gen. pl."],
    ["γυναιξί", "dat. pl."],
    ["γυναῖκας", "ac. pl."],
  ],
  πατήρ: [
    ["πατήρ", "nom. sg."],
    ["πατρός", "gen. sg."],
    ["πατρί", "dat. sg."],
    ["πατέρα", "ac. sg."],
    ["πατέρες", "nom. pl."],
    ["πατέρων", "gen. pl."],
    ["πατράσι", "dat. pl."],
    ["πατέρας", "ac. pl."],
  ],
  μήτηρ: [
    ["μήτηρ", "nom. sg."],
    ["μητρός", "gen. sg."],
    ["μητρί", "dat. sg."],
    ["μητέρα", "ac. sg."],
    ["μητέρες", "nom. pl."],
  ],
  θυγάτηρ: [
    ["θυγάτηρ", "nom. sg."],
    ["θυγατρός", "gen. sg."],
    ["θυγατρί", "dat. sg."],
    ["θυγατέρα", "ac. sg."],
    ["θυγατέρες", "nom. pl."],
  ],
  παῖς: [
    ["παῖς", "nom. sg."],
    ["παιδός", "gen. sg."],
    ["παιδί", "dat. sg."],
    ["παῖδα", "ac. sg."],
    ["παῖδες", "nom. pl."],
    ["παίδων", "gen. pl."],
    ["παισί", "dat. pl."],
    ["παῖδας", "ac. pl."],
  ],
  βοῦς: [
    ["βοῦς", "nom. sg."],
    ["βοός", "gen. sg."],
    ["βοΐ", "dat. sg."],
    ["βοῦν", "ac. sg."],
    ["βόες", "nom. pl."],
    ["βοῶν", "gen. pl."],
    ["βουσί", "dat. pl."],
    ["βοῦς", "ac. pl."],
  ],
  κύων: [
    ["κύων", "nom. sg."],
    ["κυνός", "gen. sg."],
    ["κυνί", "dat. sg."],
    ["κύνα", "ac. sg."],
    ["κύνες", "nom. pl."],
    ["κυνῶν", "gen. pl."],
    ["κυσί", "dat. pl."],
    ["κύνας", "ac. pl."],
  ],
  Ζεύς: [
    ["Ζεύς", "nom. sg."],
    ["Διός", "gen. sg."],
    ["Διί", "dat. sg."],
    ["Δία", "ac. sg."],
    ["Ζεῦ", "voc. sg."],
  ],
  Δημήτηρ: [
    ["Δημήτηρ", "nom. sg."],
    ["Δήμητρος", "gen. sg."],
    ["Δήμητρι", "dat. sg."],
    ["Δήμητρα", "ac. sg."],
  ],
  ὄρος: [
    ["ὄρος", "nom./ac. sg. n."],
    ["ὄρους", "gen. sg. n."],
    ["ὄρει", "dat. sg. n."],
    ["ὄρη", "nom./ac. pl. n."],
  ],
  σπέρμα: [
    ["σπέρμα", "nom./ac. sg. n."],
    ["σπέρματος", "gen. sg. n."],
    ["σπέρματι", "dat. sg. n."],
    ["σπέρματα", "nom./ac. pl. n."],
  ],
  ἄστυ: [
    ["ἄστυ", "nom./ac. sg. n."],
    ["ἄστεως", "gen. sg. n."],
    ["ἄστει", "dat. sg. n."],
  ],
  γῆ: [
    ["γῆ", "nom. sg. f."],
    ["γῆς", "gen. sg. f."],
    ["γῇ", "dat. sg. f."],
    ["γῆν", "ac. sg. f."],
  ],
  Δικαιόπολις: [
    ["Δικαιόπολις", "nom. sg."],
    ["Δικαιοπόλιδος", "gen. sg."],
    ["Δικαιοπόλιδι", "dat. sg."],
    ["Δικαιόπολιν", "ac. sg."],
  ],
  φημί: [
    ["φημί", "1ª sg. pres. ind."],
    ["φής", "2ª sg. pres. ind."],
    ["φησί", "3ª sg. pres. ind."],
    ["φησίν", "3ª sg. pres. ind."],
    ["φαμέν", "1ª pl. pres. ind."],
    ["φατέ", "2ª pl. pres. ind."],
    ["φασί", "3ª pl. pres. ind."],
  ],
  ὕδωρ: [
    ["ὕδωρ", "nom./ac. sg. n."],
    ["ὕδατος", "gen. sg. n."],
    ["ὕδατι", "dat. sg. n."],
    ["ὕδατα", "nom./ac. pl. n."],
  ],
  "ὁ, ἡ, τό": [
    ["ὁ", "nom. sg. m."],
    ["ἡ", "nom. sg. f."],
    ["τό", "nom./ac. sg. n."],
    ["τοῦ", "gen. sg. m./n."],
    ["τῆς", "gen. sg. f."],
    ["τῷ", "dat. sg. m./n."],
    ["τῇ", "dat. sg. f."],
    ["τόν", "ac. sg. m."],
    ["τήν", "ac. sg. f."],
    ["οἱ", "nom. pl. m."],
    ["αἱ", "nom. pl. f."],
    ["τά", "nom./ac. pl. n."],
    ["τῶν", "gen. pl."],
    ["τοῖς", "dat. pl. m./n."],
    ["ταῖς", "dat. pl. f."],
    ["τούς", "ac. pl. m."],
    ["τάς", "ac. pl. f."],
  ],
};

function lemmaHead(lemma: string): string {
  return lemma.split(",")[0]!.split(" ")[0]!.trim();
}

function indexEntry(entry: VocabEntry) {
  const head = lemmaHead(entry.lemma);
  add(head, "lema", entry);
  const irrKey = Object.keys(IRREGULAR).find((k) => head === k || entry.lemma.startsWith(k));
  if (irrKey) {
    for (const [f, t] of IRREGULAR[irrKey]!) add(f, t, entry);
    return;
  }
  const n = stripDiacritics(head);
  if (entry.pos === "v.") {
    add(head, "lema verbal", entry);
    if (n.endsWith("εω") || (n.endsWith("ῶ") && entry.lemma.includes("έω"))) {
      const stem = n.endsWith("εω") ? n.slice(0, -2) : n.slice(0, -1);
      conjEo(stem, entry);
    } else if (n.endsWith("αω")) {
      conjAo(n.slice(0, -2), entry);
    } else if (n.endsWith("ω")) {
      conjLuo(n.slice(0, -1), entry);
    } else if (n.endsWith("ομαι") || n.endsWith("εομαι")) {
      add(head, "1ª sg. pres. méd.", entry);
    }
    return;
  }
  if (entry.pos === "adj." && n.endsWith("ος")) {
    const stem = n.slice(0, -2);
    decline2m(stem, entry);
    decline2n(stem, entry);
    decline1e(stem, entry);
    return;
  }
  if ((entry.pos === "s." || entry.pos === "n.pr.") && n.endsWith("ος")) {
    if (entry.gender === "n") decline2n(n.slice(0, -2), entry);
    else decline2m(n.slice(0, -2), entry);
    return;
  }
  if ((entry.pos === "s." || entry.pos === "n.pr.") && n.endsWith("ον")) {
    decline2n(n.slice(0, -2), entry);
    return;
  }
  if ((entry.pos === "s." || entry.pos === "n.pr.") && n.endsWith("η")) {
    decline1e(n.slice(0, -1), entry);
    return;
  }
  if ((entry.pos === "s." || entry.pos === "n.pr.") && n.endsWith("α")) {
    decline1a(n.slice(0, -1), entry);
  }
}

for (const e of LEXICON) indexEntry(e);

export function lookupMorph(form: string): MorphHit[] {
  const hits = INDEX.get(stripDiacritics(form)) ?? [];
  const rank = (t: string) => (t === "lema" || t === "lema verbal" ? 1 : 0);
  return [...hits].sort((a, b) => rank(a.tag) - rank(b.tag));
}

export function lookupForm(form: string): VocabEntry | undefined {
  return lookupMorph(form)[0]?.entry;
}

export function guessMorph(form: string): string {
  const hits = lookupMorph(form);
  if (hits[0]) return hits[0].tag;
  const n = stripDiacritics(form);
  if (n.endsWith("ουσιν") || n.endsWith("ουσι")) return "3ª pl. pres. ind.";
  if (n.endsWith("ομεν") || n.endsWith("ουμεν")) return "1ª pl. pres. ind.";
  if (n.endsWith("ετε") || n.endsWith("ειτε")) return "2ª pl. pres. ind.";
  if (n.endsWith("εις")) return "2ª sg. pres. ind.";
  if (n.endsWith("ει")) return "3ª sg. pres. ind.";
  if (n.endsWith("ων")) return "gen. pl. / p. pres.";
  if (n.endsWith("οις") || n.endsWith("αις")) return "dat. pl.";
  if (n.endsWith("ους") || n.endsWith("ας")) return "ac. pl.";
  if (n.endsWith("ον") || n.endsWith("ην") || n.endsWith("αν")) return "ac. sg.";
  if (n.endsWith("ου") || n.endsWith("ης")) return "gen. sg.";
  if (n.endsWith("ῳ") || n.endsWith("ῃ")) return "dat. sg.";
  if (n.endsWith("οι") || n.endsWith("αι")) return "nom. pl.";
  if (n.endsWith("ος") || n.endsWith("η") || n.endsWith("ον")) return "nom. sg.";
  return "forma";
}

export function randomQuizForm(): { form: string; tag: string; lemma: string } {
  const keys = [...INDEX.keys()];
  for (let i = 0; i < 40; i++) {
    const k = keys[Math.floor(Math.random() * keys.length)]!;
    const hits = INDEX.get(k)!;
    const h = hits.find((x) => x.tag !== "lema" && x.tag !== "lema verbal") ?? hits[0]!;
    if (h.tag !== "lema") return { form: h.form, tag: h.tag, lemma: h.entry.lemma };
  }
  return { form: "λύει", tag: "3ª sg. pres. ind.", lemma: "λύω" };
}
