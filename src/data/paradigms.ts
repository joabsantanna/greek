export type Paradigm = {
  id: string;
  title: string;
  note?: string;
  headers: string[];
  rows: string[][];
};

export const PARADIGMS: Paradigm[] = [
  {
    id: "article",
    title: "ὁ, ἡ, τό — artigo",
    note: "Declina-se em três géneros. Não tem vocativo.",
    headers: ["", "m.", "f.", "n."],
    rows: [
      ["nom. sg.", "ὁ", "ἡ", "τό"],
      ["gen. sg.", "τοῦ", "τῆς", "τοῦ"],
      ["dat. sg.", "τῷ", "τῇ", "τῷ"],
      ["ac. sg.", "τόν", "τήν", "τό"],
      ["nom. pl.", "οἱ", "αἱ", "τά"],
      ["gen. pl.", "τῶν", "τῶν", "τῶν"],
      ["dat. pl.", "τοῖς", "ταῖς", "τοῖς"],
      ["ac. pl.", "τούς", "τάς", "τά"],
    ],
  },
  {
    id: "doulos",
    title: "ὁ δοῦλος — 2ª décl. m.",
    headers: ["", "sg.", "pl."],
    rows: [
      ["nom.", "ὁ δοῦλος", "οἱ δοῦλοι"],
      ["gen.", "τοῦ δούλου", "τῶν δούλων"],
      ["dat.", "τῷ δούλῳ", "τοῖς δούλοις"],
      ["ac.", "τὸν δοῦλον", "τοὺς δούλους"],
      ["voc.", "ὦ δοῦλε", "ὦ δοῦλοι"],
    ],
  },
  {
    id: "arotron",
    title: "τὸ ἄροτρον — 2ª décl. n.",
    note: "No neutro, nom. = ac. = voc.",
    headers: ["", "sg.", "pl."],
    rows: [
      ["nom.", "τὸ ἄροτρον", "τὰ ἄροτρα"],
      ["gen.", "τοῦ ἀρότρου", "τῶν ἀρότρων"],
      ["dat.", "τῷ ἀρότρῳ", "τοῖς ἀρότροις"],
      ["ac.", "τὸ ἄροτρον", "τὰ ἄροτρα"],
    ],
  },
  {
    id: "krene",
    title: "ἡ κρήνη — 1ª décl. em -η",
    headers: ["", "sg.", "pl."],
    rows: [
      ["nom.", "ἡ κρήνη", "αἱ κρῆναι"],
      ["gen.", "τῆς κρήνης", "τῶν κρηνῶν"],
      ["dat.", "τῇ κρήνῃ", "ταῖς κρήναις"],
      ["ac.", "τὴν κρήνην", "τὰς κρήνας"],
      ["voc.", "ὦ κρήνη", "ὦ κρῆναι"],
    ],
  },
  {
    id: "hydria",
    title: "ἡ ὑδρίᾱ — 1ª décl. em -ᾱ (após ρ/ε/ι)",
    headers: ["", "sg.", "pl."],
    rows: [
      ["nom.", "ἡ ὑδρίᾱ", "αἱ ὑδρίαι"],
      ["gen.", "τῆς ὑδρίᾱς", "τῶν ὑδριῶν"],
      ["dat.", "τῇ ὑδρίᾳ", "ταῖς ὑδρίαις"],
      ["ac.", "τὴν ὑδρίᾱν", "τὰς ὑδρίᾱς"],
    ],
  },
  {
    id: "kalos",
    title: "καλός, καλή, καλόν",
    headers: ["", "m.", "f.", "n."],
    rows: [
      ["nom. sg.", "καλός", "καλή", "καλόν"],
      ["gen. sg.", "καλοῦ", "καλῆς", "καλοῦ"],
      ["dat. sg.", "καλῷ", "καλῇ", "καλῷ"],
      ["ac. sg.", "καλόν", "καλήν", "καλόν"],
      ["nom. pl.", "καλοί", "καλαί", "καλά"],
      ["gen. pl.", "καλῶν", "καλῶν", "καλῶν"],
      ["dat. pl.", "καλοῖς", "καλαῖς", "καλοῖς"],
      ["ac. pl.", "καλούς", "καλάς", "καλά"],
    ],
  },
  {
    id: "luo",
    title: "λύω — presente do indicativo (activo)",
    headers: ["", "sg.", "pl."],
    rows: [
      ["1ª", "λύω", "λύομεν"],
      ["2ª", "λύεις", "λύετε"],
      ["3ª", "λύει", "λύουσι(ν)"],
    ],
  },
  {
    id: "phileo",
    title: "φιλέω → φιλῶ (contr. -ε-)",
    note: "ε+ε→ει · ε+ο→ου · ε+ει→ει · ε+ου→ου · ε+ω→ω",
    headers: ["", "não contr.", "contr."],
    rows: [
      ["1 sg.", "φιλέω", "φιλῶ"],
      ["2 sg.", "φιλέεις", "φιλεῖς"],
      ["3 sg.", "φιλέει", "φιλεῖ"],
      ["1 pl.", "φιλέομεν", "φιλοῦμεν"],
      ["2 pl.", "φιλέετε", "φιλεῖτε"],
      ["3 pl.", "φιλέουσι", "φιλοῦσι(ν)"],
    ],
  },
  {
    id: "timao",
    title: "τιμάω → τιμῶ (contr. -α-)",
    note: "α+ε→α · α+ο→ω · α+ει→ᾳ · α+ου→ω · α+ω→ω",
    headers: ["", "não contr.", "contr."],
    rows: [
      ["1 sg.", "τιμάω", "τιμῶ"],
      ["2 sg.", "τιμάεις", "τιμᾷς"],
      ["3 sg.", "τιμάει", "τιμᾷ"],
      ["1 pl.", "τιμάομεν", "τιμῶμεν"],
      ["2 pl.", "τιμάετε", "τιμᾶτε"],
      ["3 pl.", "τιμάουσι", "τιμῶσι(ν)"],
    ],
  },
  {
    id: "eimi",
    title: "εἰμί — ser / estar",
    headers: ["", "sg.", "pl."],
    rows: [
      ["1ª", "εἰμί", "ἐσμέν"],
      ["2ª", "εἶ", "ἐστέ"],
      ["3ª", "ἐστί(ν)", "εἰσί(ν)"],
    ],
  },
  {
    id: "pronouns",
    title: "Pronomes pessoais",
    headers: ["", "1ª sg.", "2ª sg.", "1ª pl.", "2ª pl."],
    rows: [
      ["nom.", "ἐγώ", "σύ", "ἡμεῖς", "ὑμεῖς"],
      ["gen.", "ἐμοῦ / μου", "σοῦ / σου", "ἡμῶν", "ὑμῶν"],
      ["dat.", "ἐμοί / μοι", "σοί / σοι", "ἡμῖν", "ὑμῖν"],
      ["ac.", "ἐμέ / με", "σέ / σε", "ἡμᾶς", "ὑμᾶς"],
    ],
  },
];

export const PREPOSITIONS = [
  { form: "εἰς", cases: "ac.", sense: "para (interior)" },
  { form: "ἐκ / ἐξ", cases: "gen.", sense: "de dentro de" },
  { form: "ἐν", cases: "dat.", sense: "em" },
  { form: "πρός", cases: "ac. / dat. / gen.", sense: "para / junto a / da parte de" },
  { form: "ἀπό", cases: "gen.", sense: "de (afastamento)" },
  { form: "ὑπό", cases: "gen. / dat. / ac.", sense: "por / sob / debaixo de" },
  { form: "ἐπί", cases: "dat. / ac. / gen.", sense: "sobre / para / no tempo de" },
  { form: "ἀνά", cases: "ac.", sense: "para cima / ao longo de" },
  { form: "μετά", cases: "gen. / ac.", sense: "com / depois de" },
  { form: "κατά", cases: "ac. / gen.", sense: "segundo / contra" },
  { form: "διά", cases: "gen. / ac.", sense: "através / por causa de" },
  { form: "παρά", cases: "gen. / dat. / ac.", sense: "de junto de / junto a / para junto de" },
];

export const CONTRACTION_RULES = [
  { left: "ε + ε", right: "ει", ex: "φιλέεις → φιλεῖς" },
  { left: "ε + ο", right: "ου", ex: "φιλέομεν → φιλοῦμεν" },
  { left: "ε + ει", right: "ει", ex: "φιλέει → φιλεῖ" },
  { left: "ε + ου", right: "ου", ex: "φιλέουσι → φιλοῦσι" },
  { left: "ε + ω", right: "ω", ex: "φιλέω → φιλῶ" },
  { left: "α + ε", right: "α", ex: "τιμάετε → τιμᾶτε" },
  { left: "α + ο", right: "ω", ex: "τιμάομεν → τιμῶμεν" },
  { left: "α + ει", right: "ᾳ", ex: "τιμάει → τιμᾷ" },
  { left: "α + ου", right: "ω", ex: "τιμάουσι → τιμῶσι" },
  { left: "α + ω", right: "ω", ex: "τιμάω → τιμῶ" },
];
