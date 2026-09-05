const COMBINING = /[\u0300-\u036f]/g;

const CHAR_MAP: Record<string, string> = {
  α: "a", ά: "á", ὰ: "à", ᾶ: "â", ἁ: "ha", ἅ: "há", ἃ: "hà", ἇ: "hâ", ἀ: "a", ἄ: "á", ἂ: "à", ἆ: "â",
  ᾳ: "āi", β: "b", γ: "g", δ: "d",
  ε: "e", έ: "é", ὲ: "è", ἑ: "he", ἕ: "hé", ἓ: "hè", ἐ: "e", ἔ: "é", ἒ: "è",
  ζ: "zd",
  η: "ē", ή: "ḗ", ὴ: "ḕ", ῆ: "ê", ἡ: "hē", ἥ: "hḗ", ἣ: "hḕ", ἧ: "hê", ἠ: "ē", ἤ: "ḗ", ἢ: "ḕ", ἦ: "ê",
  ῃ: "ēi", θ: "th",
  ι: "i", ί: "í", ὶ: "ì", ῖ: "î", ἱ: "hi", ἵ: "hí", ἳ: "hì", ἷ: "hî", ἰ: "i", ἴ: "í", ἲ: "ì", ἶ: "î",
  κ: "k", λ: "l", μ: "m", ν: "n", ξ: "ks",
  ο: "o", ό: "ó", ὸ: "ò", ὁ: "ho", ὅ: "hó", ὃ: "hò", ὀ: "o", ὄ: "ó", ὂ: "ò",
  π: "p", ρ: "r", ῥ: "rh", σ: "s", ς: "s", τ: "t",
  υ: "y", ύ: "ý", ὺ: "ỳ", ῦ: "ŷ", ὑ: "hy", ὕ: "hý", ὓ: "hỳ", ὗ: "hŷ", ὐ: "y", ὔ: "ý", ὒ: "ỳ", ὖ: "ŷ",
  φ: "ph", χ: "kh", ψ: "ps",
  ω: "ō", ώ: "ṓ", ὼ: "ṑ", ῶ: "ô", ὡ: "hō", ὥ: "hṓ", ὣ: "hṑ", ὧ: "hô", ὠ: "ō", ὤ: "ṓ", ὢ: "ṑ", ὦ: "ô",
  ῳ: "ōi",
};

const IPA_MAP: Record<string, string> = {
  α: "a", ά: "á", ὰ: "à", ᾶ: "âː", ἁ: "ha", ἅ: "há", ἃ: "hà", ἇ: "hâː", ἀ: "a", ἄ: "á", ἂ: "à", ἆ: "âː",
  ᾳ: "aːi", β: "b", γ: "g", δ: "d",
  ε: "e", έ: "é", ὲ: "è", ἑ: "he", ἕ: "hé", ἓ: "hè", ἐ: "e", ἔ: "é", ἒ: "è",
  ζ: "zd", η: "ɛː", ή: "ɛ́ː", ὴ: "ɛ̀ː", ῆ: "ɛ̂ː", ἡ: "hɛː", ἥ: "hɛ́ː", ἣ: "hɛ̀ː", ἧ: "hɛ̂ː", ἠ: "ɛː", ἤ: "ɛ́ː", ἢ: "ɛ̀ː", ἦ: "ɛ̂ː",
  ῃ: "ɛːi", θ: "tʰ",
  ι: "i", ί: "í", ὶ: "ì", ῖ: "îː", ἱ: "hi", ἵ: "hí", ἳ: "hì", ἷ: "hîː", ἰ: "i", ἴ: "í", ἲ: "ì", ἶ: "îː",
  κ: "k", λ: "l", μ: "m", ν: "n", ξ: "ks",
  ο: "o", ό: "ó", ὸ: "ò", ὁ: "ho", ὅ: "hó", ὃ: "hò", ὀ: "o", ὄ: "ó", ὂ: "ò",
  π: "p", ρ: "r", ῥ: "r̥", σ: "s", ς: "s", τ: "t",
  υ: "y", ύ: "ý", ὺ: "ỳ", ῦ: "ŷː", ὑ: "hy", ὕ: "hý", ὓ: "hỳ", ὗ: "hŷː", ὐ: "y", ὔ: "ý", ὒ: "ỳ", ὖ: "ŷː",
  φ: "pʰ", χ: "kʰ", ψ: "ps",
  ω: "ɔː", ώ: "ɔ́ː", ὼ: "ɔ̀ː", ῶ: "ɔ̂ː", ὡ: "hɔː", ὥ: "hɔ́ː", ὣ: "hɔ̀ː", ὧ: "hɔ̂ː", ὠ: "ɔː", ὤ: "ɔ́ː", ὢ: "ɔ̀ː", ὦ: "ɔ̂ː",
  ῳ: "ɔːi",
};

export function stripDiacritics(s: string): string {
  return s.normalize("NFD").replace(COMBINING, "").replace(/ς/g, "σ").toLowerCase();
}

export function toLatin(word: string): string {
  let out = "";
  const lower = word.toLowerCase();
  for (const ch of lower) out += CHAR_MAP[ch] ?? ch;
  return out.replace(/g([gkxc])/g, "n$1");
}

export function toIpa(word: string): string {
  let out = "";
  const lower = word.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    const ch = lower[i];
    const next = lower[i + 1];
    if (ch === "α" && next === "ι") { out += "ai"; i++; continue; }
    if (ch === "α" && next === "υ") { out += "au"; i++; continue; }
    if (ch === "ε" && next === "ι") { out += "eː"; i++; continue; }
    if (ch === "ε" && next === "υ") { out += "eu"; i++; continue; }
    if (ch === "ο" && next === "ι") { out += "oi"; i++; continue; }
    if (ch === "ο" && next === "υ") { out += "uː"; i++; continue; }
    if (ch === "γ" && next && "γκχξ".includes(next)) { out += "ŋ"; continue; }
    out += IPA_MAP[ch] ?? CHAR_MAP[ch] ?? ch;
  }
  return out.replace(/[«»""]/g, "");
}

export type GreekToken = { form: string; punct: string; isWord: boolean };

export function tokenizeGreek(text: string): GreekToken[] {
  const tokens: GreekToken[] = [];
  const re = /([A-Za-zÀ-ÿ\u0370-\u03FF\u1F00-\u1FFF]+)|([^A-Za-zÀ-ÿ\u0370-\u03FF\u1F00-\u1FFF]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m[1]) tokens.push({ form: m[1], punct: "", isWord: true });
    else tokens.push({ form: "", punct: m[2]!, isWord: false });
  }
  return tokens;
}

export function speakGreek(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(toLatin(text));
  u.rate = 0.78;
  u.pitch = 0.95;
  const voices = window.speechSynthesis.getVoices();
  const el = voices.find((v) => v.lang.startsWith("el")) ?? voices.find((v) => v.lang.startsWith("en"));
  if (el) u.voice = el;
  window.speechSynthesis.speak(u);
}
