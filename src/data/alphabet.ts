export type Letter = {
  upper: string;
  lower: string;
  name: string;
  nameEl: string;
  sound: string;
  ipa: string;
  example: string;
  exampleGloss: string;
};

export const LETTERS: Letter[] = [
  { upper: "Α", lower: "α", name: "alfa", nameEl: "ἄλφα", sound: "a", ipa: "a", example: "ἀγρός", exampleGloss: "campo" },
  { upper: "Β", lower: "β", name: "beta", nameEl: "βῆτα", sound: "b", ipa: "b", example: "βίος", exampleGloss: "vida" },
  { upper: "Γ", lower: "γ", name: "gama", nameEl: "γάμμα", sound: "g", ipa: "g", example: "γεωργός", exampleGloss: "lavrador" },
  { upper: "Δ", lower: "δ", name: "delta", nameEl: "δέλτα", sound: "d", ipa: "d", example: "δοῦλος", exampleGloss: "escravo" },
  { upper: "Ε", lower: "ε", name: "épsilon", nameEl: "εἶ", sound: "e breve", ipa: "e", example: "ἔργον", exampleGloss: "trabalho" },
  { upper: "Ζ", lower: "ζ", name: "zeta", nameEl: "ζῆτα", sound: "zd", ipa: "zd", example: "Ζεύς", exampleGloss: "Zeus" },
  { upper: "Η", lower: "η", name: "eta", nameEl: "ἦτα", sound: "ē longo", ipa: "ɛː", example: "ἡμέρα", exampleGloss: "dia" },
  { upper: "Θ", lower: "θ", name: "teta", nameEl: "θῆτα", sound: "th", ipa: "tʰ", example: "θεός", exampleGloss: "deus" },
  { upper: "Ι", lower: "ι", name: "iota", nameEl: "ἰῶτα", sound: "i", ipa: "i", example: "ἰσχυρός", exampleGloss: "forte" },
  { upper: "Κ", lower: "κ", name: "capa", nameEl: "κάππα", sound: "k", ipa: "k", example: "κλῆρος", exampleGloss: "lote" },
  { upper: "Λ", lower: "λ", name: "lâmbda", nameEl: "λάμβδα", sound: "l", ipa: "l", example: "λύκος", exampleGloss: "lobo" },
  { upper: "Μ", lower: "μ", name: "mi", nameEl: "μῦ", sound: "m", ipa: "m", example: "μέγας", exampleGloss: "grande" },
  { upper: "Ν", lower: "ν", name: "ni", nameEl: "νῦ", sound: "n", ipa: "n", example: "νῦν", exampleGloss: "agora" },
  { upper: "Ξ", lower: "ξ", name: "xi", nameEl: "ξεῖ", sound: "ks", ipa: "ks", example: "ξένος", exampleGloss: "estrangeiro" },
  { upper: "Ο", lower: "ο", name: "ómicron", nameEl: "οὖ", sound: "o breve", ipa: "o", example: "οἶκος", exampleGloss: "casa" },
  { upper: "Π", lower: "π", name: "pi", nameEl: "πεῖ", sound: "p", ipa: "p", example: "πόνος", exampleGloss: "fadiga" },
  { upper: "Ρ", lower: "ρ", name: "ró", nameEl: "ῥῶ", sound: "r", ipa: "r", example: "ῥᾴδιος", exampleGloss: "fácil" },
  { upper: "Σ", lower: "σ/ς", name: "sigma", nameEl: "σίγμα", sound: "s", ipa: "s", example: "σῖτος", exampleGloss: "trigo" },
  { upper: "Τ", lower: "τ", name: "tau", nameEl: "ταῦ", sound: "t", ipa: "t", example: "τέχνη", exampleGloss: "ofício" },
  { upper: "Υ", lower: "υ", name: "ípsilon", nameEl: "ὖ", sound: "ü", ipa: "y", example: "ὕδωρ", exampleGloss: "água" },
  { upper: "Φ", lower: "φ", name: "fi", nameEl: "φεῖ", sound: "ph", ipa: "pʰ", example: "φίλος", exampleGloss: "amigo" },
  { upper: "Χ", lower: "χ", name: "qui", nameEl: "χεῖ", sound: "kh", ipa: "kʰ", example: "χαίρω", exampleGloss: "alegrar-se" },
  { upper: "Ψ", lower: "ψ", name: "psi", nameEl: "ψεῖ", sound: "ps", ipa: "ps", example: "ψυχή", exampleGloss: "alma" },
  { upper: "Ω", lower: "ω", name: "ómega", nameEl: "ὦ", sound: "ō longo", ipa: "ɔː", example: "ὥρα", exampleGloss: "estação" },
];

export const DIACRITICS = [
  { mark: "´", name: "agudo (ὀξύς)", note: "tom alto na sílaba" },
  { mark: "`", name: "grave (βαρύς)", note: "tom baixo; substitui o agudo no fim da palavra se outra segue" },
  { mark: "˜", name: "circunflexo (περισπώμενος)", note: "tom alto-baixo em vogal longa" },
  { mark: "᾿", name: "espírito suave (ψιλόν)", note: "ausência de /h/ inicial" },
  { mark: "῾", name: "espírito áspero (δασύ)", note: "/h/ inicial; sempre em ρ- e υ-" },
  { mark: "ͺ", name: "iota subscrito", note: "ditongo longo ᾳ ῃ ῳ" },
];

export const DIPHTHONGS = [
  { form: "αι", ipa: "ai", ex: "καί" },
  { form: "ει", ipa: "eː", ex: "εἰμί" },
  { form: "οι", ipa: "oi", ex: "οἶκος" },
  { form: "αυ", ipa: "au", ex: "αὐτουργός" },
  { form: "ευ", ipa: "eu", ex: "Ζεύς" },
  { form: "ου", ipa: "uː", ex: "δοῦλος" },
  { form: "υι", ipa: "yi", ex: "υἱός" },
];
