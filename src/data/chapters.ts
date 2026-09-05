import { EXTRA_EXERCISES } from "./extra-exercises";
import type { Chapter } from "./types";

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    roman: "I",
    title: "ὁ Δικαιόπολις",
    titlePt: "Dicaiópolis",
    kicker: "O lavrador e o lote",
    summary: "Dicaiópolis, ateniense, vive no campo. O lote é pequeno, o trabalho é longo — mas o homem é livre.",
    topics: ["Artigo ὁ ἡ τό", "2ª declinação", "Presente de εἰμί e verbos em -ε-", "Nominativo e acusativo"],
    readings: [
      {
        id: "1α",
        title: "ὁ Δικαιόπολις (α)",
        titlePt: "Dicaiópolis chega ao campo",
        caption: "ὁ Δικαιόπολις αὐτουργός ἐστιν· φέρει δὲ τὸν μόσχον.",
        paragraphs: [
          {
            greek: "ὁ Δικαιόπολις Ἀθηναῖός ἐστιν· οἰκεῖ δὲ ὁ Δικαιόπολις οὐκ ἐν ταῖς Ἀθήναις ἀλλὰ ἐν τοῖς ἀγροῖς· αὐτουργὸς γάρ ἐστιν. γεωργεῖ οὖν τὸν κλῆρον καὶ πονεῖ ἐν τοῖς ἀγροῖς.",
            translation: "Dicaiópolis é ateniense; mas Dicaiópolis não habita em Atenas, senão nos campos: pois é lavrador. Cultiva portanto o lote e trabalha nos campos.",
          },
          {
            greek: "χαλεπὸς δὲ ἐστιν ὁ βίος· ὁ γὰρ κλῆρός ἐστι μικρός, μακρὸς δὲ ὁ πόνος. ἀεὶ οὖν πονεῖ ὁ Δικαιόπολις καὶ πολλάκις στενάζει καὶ λέγει· «ὦ Ζεῦ, χαλεπός ἐστιν ὁ βίος· ἀπέραντος γάρ ἐστιν ὁ πόνος, μικρὸς δὲ ὁ κλῆρος καὶ οὐ πολὺν σῖτον παρέχει.»",
            translation: "A vida é dura: pois o lote é pequeno, e o trabalho é longo. Por isso Dicaiópolis trabalha sempre e muitas vezes geme e diz: «Ó Zeus, a vida é dura: pois o trabalho não tem fim, o lote é pequeno e não dá muito trigo.»",
          },
          {
            greek: "ἀλλὰ ἰσχυρός ἐστιν ὁ ἄνθρωπος καὶ ἄοκνος. πολλάκις οὖν χαίρει· ἐλεύθερος γάρ ἐστι καὶ αὐτουργός. φιλεῖ δὲ τὸν οἶκον· καλὸς γάρ ἐστιν ὁ κλῆρος καὶ σῖτον παρέχει, οὐ πολὺν ἀλλὰ ἱκανόν.",
            translation: "Mas o homem é forte e diligente. Por isso muitas vezes se alegra: pois é livre e lavrador. Ama a casa: pois o lote é belo e dá trigo — não muito, mas suficiente.",
          },
        ],
      },
      {
        id: "1β",
        title: "ὁ Δικαιόπολις (β)",
        titlePt: "O homem e o oikos",
        caption: "ἐλεύθερος ὁ αὐτουργός.",
        paragraphs: [
          {
            greek: "οὕτως οὖν ζῇ ὁ Δικαιόπολις ἐν τοῖς ἀγροῖς. οὐκ ἔστι πλούσιος, ἀλλὰ οὐ δοῦλός ἐστιν. τὸν γὰρ αὑτοῦ κλῆρον γεωργεῖ, καὶ τοὺς βοῦς ἐλαύνει, καὶ τὸν σῖτον σπείρει.",
            translation: "Assim vive Dicaiópolis nos campos. Não é rico, mas não é escravo. Pois cultiva o seu próprio lote, conduz os bois e semeia o trigo.",
          },
          {
            greek: "καὶ ὅταν ὁ ἥλιος δύῃ, βαίνει πρὸς τὸν οἶκον. ἐκεῖ δέ ἐστιν ἡ γυνὴ καὶ οἱ παῖδες. χαίρει οὖν ὁ ἄνθρωπος· καλὸς γάρ ἐστιν ὁ οἶκος καὶ φίλοι οἱ ἐν τῷ οἴκῳ.",
            translation: "E quando o sol se põe, vai para casa. Aí estão a mulher e as crianças. Por isso o homem se alegra: pois a casa é bela e queridos os que nela estão.",
          },
        ],
      },
    ],
    grammar: [
      {
        title: "O artigo e a 2ª declinação",
        paragraphs: [
          "O artigo ὁ, ἡ, τό marca género, número e caso. A 2ª declinação (temas em -ο) cobre a maior parte dos masculinos em -ος e dos neutros em -ον.",
          "O nominativo é o caso do sujeito; o acusativo, o do objecto directo. «ὁ Δικαιόπολις γεωργεῖ τὸν κλῆρον» — Dicaiópolis (nom.) cultiva o lote (ac.).",
        ],
        tables: [
          {
            caption: "Artigo (m.)",
            headers: ["", "sg.", "pl."],
            rows: [
              ["nom.", "ὁ", "οἱ"],
              ["gen.", "τοῦ", "τῶν"],
              ["dat.", "τῷ", "τοῖς"],
              ["ac.", "τόν", "τούς"],
            ],
          },
        ],
      },
      {
        title: "Presente: εἰμί e verbos em -ε-",
        paragraphs: [
          "εἰμί («ser, estar») é irregular: ἐστί(ν) na 3ª sg., εἰσί(ν) na 3ª pl. O ν eufónico aparece antes de vogal ou no fim de frase.",
          "Verbos como οἰκέω, πονέω, φιλέω contraem ε+ε → ει, ε+ο → ου: οἰκεῖ, φιλοῦσι.",
        ],
      },
    ],
    exercises: [
      {
        id: "1-1",
        type: "mcq",
        prompt: "Em «γεωργεῖ τὸν κλῆρον», τὸν κλῆρον está em:",
        options: ["nominativo — sujeito", "acusativo — objecto directo", "genitivo — posse", "dativo — lugar"],
        answer: "acusativo — objecto directo",
      },
      {
        id: "1-2",
        type: "tf",
        prompt: "Dicaiópolis habita em Atenas.",
        answer: "falso",
        hint: "οὐκ ἐν ταῖς Ἀθήναις ἀλλὰ ἐν τοῖς ἀγροῖς",
      },
      {
        id: "1-3",
        type: "fill",
        prompt: "Completa: ὁ κλῆρος μικρός _____.",
        greek: "ὁ κλῆρος μικρός _____.",
        answer: "ἐστιν",
      },
      {
        id: "1-4",
        type: "mcq",
        prompt: "αὐτουργός significa:",
        options: ["escravo do campo", "lavrador da própria terra", "artesão da cidade", "mercador"],
        answer: "lavrador da própria terra",
      },
      {
        id: "1-5",
        type: "parse",
        prompt: "Analisa: οἰκεῖ",
        greek: "οἰκεῖ",
        answer: "3ª sg. pres. ind.",
      },
      {
        id: "1-6",
        type: "fill",
        prompt: "Grego: «A vida é dura.»",
        answer: "χαλεπός ἐστιν ὁ βίος",
      },
      {
        id: "1-7",
        type: "mcq",
        prompt: "γάρ é:",
        options: ["preposição + ac.", "partícula explicativa (pois)", "artigo", "verbo"],
        answer: "partícula explicativa (pois)",
      },
      {
        id: "1-8",
        type: "tf",
        prompt: "O lote dá trigo suficiente, embora pouco.",
        answer: "verdadeiro",
      },
    ],
    culture: {
      title: "O demo e o αὐτουργός",
      paragraphs: [
        "Em 433 a.C., a maior parte dos cidadãos atenienses não vivia intramuros. O demo (δῆμος) era a aldeia e a unidade cívica: aí se cultivava o κλῆρος, o lote familiar.",
        "O αὐτουργός trabalha a própria terra. Não é πλούσιος, mas é ἐλεύθερος: a liberdade ateniense começa no sulco, não só na Pnix.",
        "O oikos (casa, família, património) é a célula da pólis. Sem oikos estável não há cidadão.",
      ],
    },
    wordStudy: {
      prompt: "Reconhece as raízes gregas no português.",
      items: [
        { pt: "agricultura", roots: "ἀγρός + cultura", note: "cultivo do campo" },
        { pt: "biologia", roots: "βίος + λόγος", note: "estudo da vida" },
        { pt: "economia", roots: "οἶκος + νόμος", note: "lei / administração da casa" },
      ],
    },
    wisdom: { greek: "χαλεπὰ τὰ καλά.", author: "provérbio", pt: "As coisas belas são difíceis." },
  },
  {
    id: 2,
    roman: "II",
    title: "ὁ Ξανθίας",
    titlePt: "Xântias",
    kicker: "O escravo e os bois",
    summary: "Xântias deve levar os bois ao campo. Prefere a sombra. O senhor chama-o.",
    topics: ["Imperativo", "οὐ vs μή", "2ª décl. (neutro, vocativo)", "Perguntas com τί"],
    readings: [
      {
        id: "2α",
        title: "ὁ Ξανθίας (α)",
        titlePt: "Os bois e a sombra",
        caption: "ὁ δοῦλος οὐ πονεῖ.",
        paragraphs: [
          {
            greek: "ὁ Ξανθίας δοῦλός ἐστιν τοῦ Δικαιοπόλιδος. δεῖ δὲ αὐτὸν τοὺς βοῦς ἄγειν εἰς τὸν ἀγρόν καὶ τὸ ἄροτρον φέρειν. ἀλλὰ ὁ Ξανθίας οὐκ ἐθέλει πονεῖν· ἀργὸς γάρ ἐστιν.",
            translation: "Xântias é escravo de Dicaiópolis. Deve levar os bois ao campo e trazer o arado. Mas Xântias não quer trabalhar: pois é preguiçoso.",
          },
          {
            greek: "νῦν δὲ ὁ ἥλιος λάμπει ἰσχυρῶς. ὁ οὖν Ξανθίας τοὺς βοῦς μὲν ἄγει ἐκ τοῦ οἴκου, ἔπειτα δὲ οὐκ ἐλαύνει εἰς τὸν ἀγρόν, ἀλλὰ καθεύδει ὑπὸ τῇ σκιᾷ. ῥᾴδιος γάρ ἐστιν ὁ ὕπνος, χαλεπὸς δὲ ὁ πόνος.",
            translation: "Agora o sol brilha com força. Xântias leva os bois para fora de casa, mas depois não os conduz ao campo: dorme à sombra. Pois o sono é fácil, e o trabalho é duro.",
          },
        ],
      },
      {
        id: "2β",
        title: "ὁ Ξανθίας (β)",
        titlePt: "O senhor chama",
        caption: "τί ποιεῖς, ὦ δοῦλε;",
        paragraphs: [
          {
            greek: "ὁ δὲ Δικαιόπολις βαίνει πρὸς τὸν ἀγρὸν καὶ καλεῖ τὸν δοῦλον· «ὦ Ξανθία, ποῦ εἶ; τί ποιεῖς;» ὁ δὲ δοῦλος οὐκ ἀποκρίνεται· καθεύδει γάρ.",
            translation: "Dicaiópolis vai ao campo e chama o escravo: «Xântias, onde estás? Que fazes?» Mas o escravo não responde: pois dorme.",
          },
          {
            greek: "τέλος δὲ ὁ δεσπότης ὁρᾷ αὐτὸν ὑπὸ τῇ σκιᾷ καὶ λέγει· «ὦ μιαρὲ δοῦλε, μὴ κάθευδε. ἔγειρε καὶ ἐλαύνε τοὺς βοῦς. μακρὸς γάρ ἐστιν ὁ πόνος, βραχὺς δὲ ὁ χρόνος.»",
            translation: "Por fim o senhor vê-o à sombra e diz: «Ó escravo infame, não durmas. Levanta-te e conduz os bois. Pois o trabalho é longo, e o tempo é curto.»",
          },
        ],
      },
    ],
    grammar: [
      {
        title: "Imperativo e a negação μή",
        paragraphs: [
          "O imperativo presente 2ª sg. dos temas em -ε- contraídos: κάθευδε, ἐλαύνε. No plural: -ετε.",
          "οὐ nega factos (indicativo). μή nega a vontade: ordens, proibições, desejos. «οὐ πονεῖ» = não trabalha; «μὴ κάθευδε» = não durmas.",
        ],
      },
      {
        title: "Vocativo e o neutro",
        paragraphs: [
          "O vocativo sg. dos temas em -ο masculinos faz -ε: ὦ δοῦλε, ὦ ἄνθρωπε. No plural coincide com o nominativo.",
          "Os neutros em -ον (ἄροτρον, ἔργον) têm nom. = ac. = voc.",
        ],
      },
    ],
    exercises: [
      {
        id: "2-1",
        type: "mcq",
        prompt: "«μὴ κάθευδε» é:",
        options: ["indicativo negativo", "imperativo negativo", "infinitivo", "optativo"],
        answer: "imperativo negativo",
      },
      {
        id: "2-2",
        type: "tf",
        prompt: "Xântias conduz os bois logo ao campo.",
        answer: "falso",
      },
      {
        id: "2-3",
        type: "fill",
        prompt: "Completa: τί _____, ὦ δοῦλε;",
        greek: "τί _____, ὦ δοῦλε;",
        answer: "ποιεῖς",
      },
      {
        id: "2-4",
        type: "parse",
        prompt: "Analisa: καλεῖ",
        greek: "καλεῖ",
        answer: "3ª sg. pres. ind.",
      },
      {
        id: "2-5",
        type: "mcq",
        prompt: "O vocativo de δοῦλος é:",
        options: ["ὦ δοῦλος", "ὦ δοῦλε", "ὦ δοῦλον", "ὦ δούλου"],
        answer: "ὦ δοῦλε",
      },
      {
        id: "2-6",
        type: "fill",
        prompt: "Grego: «O escravo dorme.»",
        answer: "ὁ δοῦλος καθεύδει",
      },
      {
        id: "2-7",
        type: "tf",
        prompt: "οὐ usa-se em proibições.",
        answer: "falso",
        hint: "nas proibições usa-se μή",
      },
      {
        id: "2-8",
        type: "mcq",
        prompt: "ἄροτρον é:",
        options: ["masculino", "feminino", "neutro", "indeclinável"],
        answer: "neutro",
      },
    ],
    culture: {
      title: "Escravidão no oikos ático",
      paragraphs: [
        "O δοῦλος não é cidadão. Trabalha a terra, a oficina ou a casa. Pode ser castigado; também pode ser, na prática, quase um membro do oikos.",
        "O δεσπότης tem poder, mas a lavoura ática depende do par senhor–escravo. Sem Xântias, o arado não anda.",
        "O nome Ξανθίας («o louro») é típico de escravos na comédia: Aristófanes usa-o nas Rãs e noutros lugares.",
      ],
    },
    wordStudy: {
      prompt: "Raízes.",
      items: [
        { pt: "despótico", roots: "δεσπότης", note: "senhor absoluto" },
        { pt: "heliocêntrico", roots: "ἥλιος", note: "o sol no centro" },
        { pt: "argila / inerte", roots: "ἀργός", note: "sem ἔργον, sem obra" },
      ],
    },
    wisdom: { greek: "ἀργία μήτηρ κακίας.", author: "provérbio", pt: "A ociosidade é mãe do vício." },
  },
  {
    id: 3,
    roman: "III",
    title: "ὁ ἄροτος",
    titlePt: "A lavoura",
    kicker: "Filipe, o almoço e a lebre",
    summary: "Filipe leva o almoço ao pai. Quer conduzir os bois. Argos persegue a lebre. Semeia-se o trigo.",
    topics: ["Genitivo e dativo", "Contratos em -ε-", "παῖς e κύων", "Preposições ἐν εἰς ἐκ πρός"],
    readings: [
      {
        id: "3α",
        title: "ὁ ἄροτος (α)",
        titlePt: "O filho no sulco",
        caption: "ὁ παῖς φέρει τὸ ἄριστον.",
        paragraphs: [
          {
            greek: "τῇ δ’ ὑστεραίᾳ ὁ Δικαιόπολις καὶ ὁ Ξανθίας ἐλαύνουσι τοὺς βοῦς εἰς τὸν ἀγρόν. χαλεπὸς δέ ἐστιν ὁ ἄροτος· ἡ γὰρ γῆ σκληρά ἐστιν. ἰσχυρῶς οὖν πονεῦσιν.",
            translation: "No dia seguinte Dicaiópolis e Xântias conduzem os bois ao campo. A lavoura é dura: pois a terra é rija. Trabalham portanto com força.",
          },
          {
            greek: "ὁ δὲ Φίλιππος, παῖς ὤν, φέρει τὸ ἄριστον πρὸς τὸν πατέρα. ἐπιθυμεῖ δὲ καὶ αὐτὸς ἐλαύνειν τοὺς βοῦς. ὁ δὲ πατὴρ λέγει· «οὔπω, ὦ παῖ· μικρὸς γὰρ εἶ. ἀλλὰ μένε καὶ θεῶ τὸν ἄροτον.»",
            translation: "Filipe, sendo criança, leva o almoço ao pai. Ele próprio deseja também conduzir os bois. Mas o pai diz: «Ainda não, filho: pois és pequeno. Fica e observa a lavoura.»",
          },
        ],
      },
      {
        id: "3β",
        title: "ὁ ἄροτος (β)",
        titlePt: "Argos e a lebre",
        caption: "ὁ κύων διώκει τὸν λαγών.",
        paragraphs: [
          {
            greek: "ἐξαίφνης δὲ λαγὼς φεύγει ἐκ τοῦ ἀγροῦ. ὁ Ἄργος, ὁ κύων, διώκει αὐτόν. ὁ δὲ Φίλιππος τρέχει μετὰ τοῦ κυνός καὶ βοᾷ· «εὖ γε, ὦ Ἄργε.»",
            translation: "De repente uma lebre foge do campo. Argos, o cão, persegue-a. Filipe corre com o cão e grita: «Muito bem, Argos!»",
          },
          {
            greek: "ἔπειτα δὲ ὁ Δικαιόπολις σπείρει τὸ σπέρμα εἰς τὴν γῆν καὶ εὔχεται τῇ Δήμητρι· «ὦ Δήμητερ, δὸς σῖτον πολύν, ἵνα ὁ οἶκος ἔχῃ ἄρτον ἱκανόν.»",
            translation: "Depois Dicaiópolis semeia a semente na terra e faz um voto a Deméter: «Ó Deméter, dá muito trigo, para que a casa tenha pão suficiente.»",
          },
        ],
      },
    ],
    grammar: [
      {
        title: "Genitivo e dativo",
        paragraphs: [
          "O genitivo marca posse, origem e o complemento de certas preposições (ἐκ, ἀπό) e verbos (ἐπιθυμέω + gen.).",
          "O dativo marca o complemento indirecto, o instrumento e o lugar em (ἐν + dat.). τῷ πατρί — ao pai; ἐν τοῖς ἀγροῖς — nos campos.",
        ],
      },
      {
        title: "Preposições de movimento",
        paragraphs: [
          "εἰς + ac. = para dentro. ἐκ/ἐξ + gen. = de dentro. ἐν + dat. = em. πρός + ac. = em direcção a.",
          "O mesmo substantivo muda de caso com a preposição: εἰς τὸν ἀγρόν, ἐν τῷ ἀγρῷ, ἐκ τοῦ ἀγροῦ.",
        ],
      },
    ],
    exercises: [
      {
        id: "3-1",
        type: "mcq",
        prompt: "ἐπιθυμέω rege:",
        options: ["acusativo", "genitivo", "dativo", "nominativo"],
        answer: "genitivo",
      },
      {
        id: "3-2",
        type: "fill",
        prompt: "Completa: ὁ κύων διώκει τὸν _____.",
        greek: "ὁ κύων διώκει τὸν _____.",
        answer: "λαγών",
      },
      {
        id: "3-3",
        type: "parse",
        prompt: "Analisa: σπείρει",
        greek: "σπείρει",
        answer: "3ª sg. pres. ind.",
      },
      {
        id: "3-4",
        type: "tf",
        prompt: "Filipe conduz os bois.",
        answer: "falso",
      },
      {
        id: "3-5",
        type: "mcq",
        prompt: "ἐν τοῖς ἀγροῖς: ἐν rege",
        options: ["acusativo", "genitivo", "dativo", "vocativo"],
        answer: "dativo",
      },
      {
        id: "3-6",
        type: "fill",
        prompt: "Grego: «O filho leva o almoço.»",
        answer: "ὁ παῖς φέρει τὸ ἄριστον",
      },
      {
        id: "3-7",
        type: "mcq",
        prompt: "κύων no genitivo sg. é:",
        options: ["κύον", "κυνός", "κύνου", "κύωνος"],
        answer: "κυνός",
      },
      {
        id: "3-8",
        type: "tf",
        prompt: "Deméter é a deusa do cereal.",
        answer: "verdadeiro",
      },
    ],
    culture: {
      title: "Deméter e o ciclo do trigo",
      paragraphs: [
        "A lavoura ática é de sequeiro: cevada e trigo. O calendário religioso segue a sementeira (outono) e a colheita (fim da primavera).",
        "Deméter (Δημήτηρ) e a filha Perséfone organizam o mito eleusino: a terra dá e retém o grão.",
        "O cão do campo (κύων) guarda o oikos e caça a lebre. Homero já canta Argos, o cão de Ulisses.",
      ],
    },
    wordStudy: {
      prompt: "Raízes.",
      items: [
        { pt: "espermatozoide", roots: "σπέρμα", note: "semente" },
        { pt: "geografia", roots: "γῆ + γράφω", note: "descrição da terra" },
        { pt: "pedagogia", roots: "παῖς + ἄγω", note: "conduzir a criança" },
      ],
    },
    wisdom: { greek: "γῆς ἔργα θεῶν ἐστι δῶρα.", author: "após Hesíodo", pt: "Os trabalhos da terra são dons dos deuses." },
  },
  {
    id: 4,
    roman: "IV",
    title: "πρὸς τῇ κρήνῃ",
    titlePt: "Junto à fonte",
    kicker: "Mirrina, Melissa e as Dionísias",
    summary: "As mulheres vão à fonte com as hidrias. Falam da festa na cidade. Querem que Dicaiópolis as leve ao ἄστυ.",
    topics: ["1ª declinação", "Temas em -η e -ᾱ", "Feminino do artigo", "Verbos em -άω"],
    readings: [
      {
        id: "4α",
        title: "πρὸς τῇ κρήνῃ (α)",
        titlePt: "A hidria ao ombro",
        caption: "αἱ γυναῖκες βαίνουσι πρὸς τὴν κρήνην.",
        paragraphs: [
          {
            greek: "τῇ δ’ ὑστεραίᾳ, ἐπεὶ πρῶτον ἡ ἡμέρα γίγνεται, ἡ Μυρρίνη καλεῖ τὴν θυγατέρα· «ὦ Μέλιττα, ἔγειρε. δεῖ γὰρ ἡμᾶς βαίνειν πρὸς τὴν κρήνην καὶ ὑδρεύεσθαι.»",
            translation: "No dia seguinte, logo que o dia nasce, Mirrina chama a filha: «Melissa, levanta-te. Pois devemos ir à fonte e tirar água.»",
          },
          {
            greek: "αἱ οὖν γυναῖκες αἴρουσι τὰς ὑδρίας καὶ βαίνουσι κατὰ τὴν ὁδόν. ἐν δὲ τῇ ὁδῷ ἄλλαι γυναῖκες εἰσίν, φίλαι ἐκ τοῦ δήμου. ἀσπάζονται ἀλλήλας καὶ λέγουσι περὶ τῆς ἑορτῆς.",
            translation: "As mulheres erguem as hidrias e caminham pela via. No caminho estão outras mulheres, amigas do demo. Saúdam-se e falam da festa.",
          },
          {
            greek: "«αἱ Διονύσιαί» φησιν ἡ Μυρρίνη «ἐν τῷ ἄστει εἰσίν. ἐθέλω οὖν ἰέναι καὶ τὸν χορὸν θεᾶσθαι.» ἡ δὲ Μέλιττα χαίρει· ἐπιθυμεῖ γὰρ ἰδεῖν τὸ θέατρον.",
            translation: "«As Dionísias», diz Mirrina, «são na cidade. Quero ir e ver o coro.» Melissa alegra-se: pois deseja ver o teatro.",
          },
        ],
      },
      {
        id: "4β",
        title: "πρὸς τῇ κρήνῃ (β)",
        titlePt: "A fonte e o pedido",
        caption: "πλήρης ἐστὶν ἡ ὑδρία.",
        paragraphs: [
          {
            greek: "ἐπεὶ δὲ ἀφικνοῦνται πρὸς τὴν κρήνην, ὑδρεύονται. τὸ ὕδωρ ψυχρόν ἐστι καὶ καλόν. ταχέως οὖν πλήρεις εἰσὶν αἱ ὑδρίαι. ἔπειτα βαίνουσι πάλιν πρὸς τὸν οἶκον.",
            translation: "Quando chegam à fonte, tiram água. A água é fria e bela. Depressa as hidrias estão cheias. Depois voltam para casa.",
          },
          {
            greek: "ἡ δὲ Μυρρίνη λέγει τῷ ἀνδρί· «ὦ ἄνερ, ἐθέλομεν ἰέναι εἰς τὸ ἄστυ· αἱ γὰρ Διονύσιαί εἰσιν. ἄγε ἡμᾶς.» ὁ δὲ Δικαιόπολις στενάζει· «μακρὰ ἡ ὁδός, πολὺς δὲ ὁ πόνος. ἀλλὰ ἴσως.»",
            translation: "Mirrina diz ao marido: «Marido, queremos ir à cidade: pois são as Dionísias. Leva-nos.» Dicaiópolis geme: «O caminho é longo, e o trabalho é muito. Mas talvez.»",
          },
        ],
      },
    ],
    grammar: [
      {
        title: "A 1ª declinação",
        paragraphs: [
          "Temas em -η (κρήνη, ἡμέρα com η no sg. ático após ε, ι, ρ faz -α longo: ἡμέρᾱ, ὑδρίᾱ). O gen. sg. em -ης ou -ας; o dat. em -ῃ/-ᾳ; o ac. em -ην/-αν.",
          "O artigo feminino: ἡ τῆς τῇ τήν · αἱ τῶν ταῖς τάς.",
        ],
        tables: [
          {
            caption: "ἡ κρήνη",
            headers: ["", "sg.", "pl."],
            rows: [
              ["nom.", "ἡ κρήνη", "αἱ κρῆναι"],
              ["gen.", "τῆς κρήνης", "τῶν κρηνῶν"],
              ["dat.", "τῇ κρήνῃ", "ταῖς κρήναις"],
              ["ac.", "τὴν κρήνην", "τὰς κρήνας"],
            ],
          },
        ],
      },
      {
        title: "Contratos em -α-",
        paragraphs: [
          "τιμάω → τιμῶ. α+ε → α, α+ο → ω, α+ει → ᾳ. Assim τιμᾷ, τιμῶμεν, τιμῶσι.",
        ],
      },
    ],
    exercises: [
      {
        id: "4-1",
        type: "mcq",
        prompt: "ὑδρίᾱ no gen. sg. é:",
        options: ["ὑδρίης", "ὑδρίᾱς", "ὑδρίου", "ὑδρῶν"],
        answer: "ὑδρίᾱς",
      },
      {
        id: "4-2",
        type: "fill",
        prompt: "Completa: αἱ γυναῖκες βαίνουσι πρὸς τὴν _____.",
        greek: "αἱ γυναῖκες βαίνουσι πρὸς τὴν _____.",
        answer: "κρήνην",
      },
      {
        id: "4-3",
        type: "tf",
        prompt: "As Dionísias celebram-se no demo, não na cidade.",
        answer: "falso",
      },
      {
        id: "4-4",
        type: "parse",
        prompt: "Analisa: ἐθέλουσιν",
        greek: "ἐθέλουσιν",
        answer: "3ª pl. pres. ind.",
      },
      {
        id: "4-5",
        type: "mcq",
        prompt: "γυνή no genitivo é:",
        options: ["γυνῆς", "γυναικός", "γυνῆς / γυναικός", "γυνῆς"],
        answer: "γυναικός",
      },
      {
        id: "4-6",
        type: "fill",
        prompt: "Grego: «A hidria está cheia.»",
        answer: "πλήρης ἐστὶν ἡ ὑδρία",
      },
      {
        id: "4-7",
        type: "tf",
        prompt: "Melissa quer ver o teatro.",
        answer: "verdadeiro",
      },
      {
        id: "4-8",
        type: "mcq",
        prompt: "ἄστυ é:",
        options: ["masculino, 2ª décl.", "neutro, 3ª décl.", "feminino, 1ª décl.", "indeclinável"],
        answer: "neutro, 3ª décl.",
      },
    ],
    culture: {
      title: "A fonte, o gineceu e as Dionísias",
      paragraphs: [
        "A κρήνη é o poço social das mulheres: aí se tira água e se troca a notícia do demo.",
        "A hidria (ὑδρίᾱ) é o vaso de três asas. Enche-se na fonte e volta ao oikos sobre a cabeça ou o ombro.",
        "As Grandes Dionísias, na cidade, trazem o coro, a tragédia e a comédia. Ir ao ἄστυ é sair do demo para a pólis em festa.",
      ],
    },
    wordStudy: {
      prompt: "Raízes.",
      items: [
        { pt: "hidráulica", roots: "ὕδωρ", note: "água" },
        { pt: "teatro", roots: "θέατρον / θεάομαι", note: "lugar de ver" },
        { pt: "coro", roots: "χορός", note: "dança cantada" },
      ],
    },
    wisdom: { greek: "ὕδωρ μὲν ἄριστον.", author: "Píndaro", pt: "A água é o que há de melhor." },
  },
  {
    id: 5,
    roman: "V",
    title: "ὁ λύκος",
    titlePt: "O lobo",
    kicker: "O mito do avô",
    summary: "O avô conta a Filipe a história do lobo no monte. Argos ladra. As ovelhas precisam de guarda.",
    topics: ["3ª declinação (introdução)", "Médios em -ομαι", "τιμάω", "Relato (μῦθος)"],
    readings: [
      {
        id: "5α",
        title: "ὁ λύκος (α)",
        titlePt: "À lareira",
        caption: "ὁ πάππος λέγει μῦθον.",
        paragraphs: [
          {
            greek: "νυκτὸς δὲ γενομένης, οἱ ἐν τῷ οἴκῳ κάθηνται πρὸς τῷ πυρί. ὁ πάππος, γέρων ὤν, λέγει μῦθον τῷ Φιλίππῳ. ὁ δὲ παῖς ἀκούει σιγῇ.",
            translation: "Quando se faz noite, os da casa sentam-se junto ao fogo. O avô, sendo velho, conta um relato a Filipe. A criança escuta em silêncio.",
          },
          {
            greek: "«ἦν ποτε» φησὶν ὁ γέρων «λύκος μέγας καὶ δεινὸς ἐν τῷ ὄρει. πολλάκις καταβαίνει πρὸς τὰ πρόβατα καὶ ἁρπάζει ἀρνίον. οἱ δὲ ποιμένες φοβοῦνται.»",
            translation: "«Havia outrora», diz o velho, «um lobo grande e terrível no monte. Muitas vezes descia às ovelhas e arrebatava um cordeiro. Os pastores temiam.»",
          },
        ],
      },
      {
        id: "5β",
        title: "ὁ λύκος (β)",
        titlePt: "Argos ladra",
        caption: "ὁ κύων ὑλακτεῖ.",
        paragraphs: [
          {
            greek: "ἐξαίφνης δὲ ὁ Ἄργος ὑλακτεῖ πρὸς τῇ θύρᾳ. ὁ Φίλιππος φοβεῖται καὶ λέγει· «ἆρα ὁ λύκος πάρεστιν;» ὁ δὲ πάππος γελᾷ· «οὐχί, ὦ παῖ. κύων ὑλακτεῖ, οὐ λύκος. ἀλλὰ δεῖ φυλάττειν τὰ πρόβατα ἀεί.»",
            translation: "De repente Argos ladra à porta. Filipe teme e diz: «Estará o lobo aqui?» O avô ri: «Não, filho. É o cão que ladra, não o lobo. Mas é preciso guardar as ovelhas sempre.»",
          },
          {
            greek: "οὕτω δὲ μανθάνει ὁ παῖς ὅτι ὁ βίος ἐν τοῖς ἀγροῖς οὐ μόνον πόνον ἔχει ἀλλὰ καὶ κίνδυνον. τιμῶσι οὖν τὴν Δήμητρα καὶ τὸν Δία, καὶ φυλάττουσι τὸν οἶκον.",
            translation: "Assim a criança aprende que a vida nos campos não tem só trabalho, mas também perigo. Honram portanto Deméter e Zeus, e guardam a casa.",
          },
        ],
      },
    ],
    grammar: [
      {
        title: "Médio e 3ª declinação",
        paragraphs: [
          "φοβέομαι, ὑδρεύομαι: voz média, o sujeito é afectado. φοβεῖται — teme (por si).",
          "ὄρος, ὄρους, τό (tema em -εσ); κύων, κυνός; νύξ, νυκτός. A 3ª décl. mostra o radical no genitivo.",
        ],
      },
      {
        title: "τιμάω",
        paragraphs: [
          "Honrar os deuses: τιμῶσι τὴν Δήμητρα. Contratos em -α- como no cap. IV.",
        ],
      },
    ],
    exercises: [
      {
        id: "5-1",
        type: "mcq",
        prompt: "φοβεῖται está na voz:",
        options: ["activa", "média", "passiva (de forma distinta)", "nenhuma"],
        answer: "média",
      },
      {
        id: "5-2",
        type: "fill",
        prompt: "Completa: ὁ λύκος ἐστὶν ἐν τῷ _____.",
        greek: "ὁ λύκος ἐστὶν ἐν τῷ _____.",
        answer: "ὄρει",
      },
      {
        id: "5-3",
        type: "tf",
        prompt: "O lobo está à porta quando Argos ladra.",
        answer: "falso",
      },
      {
        id: "5-4",
        type: "parse",
        prompt: "Analisa: ὑλακτεῖ",
        greek: "ὑλακτεῖ",
        answer: "3ª sg. pres. ind.",
      },
      {
        id: "5-5",
        type: "mcq",
        prompt: "ὄρος no dativo sg. é:",
        options: ["ὄρῳ", "ὄρει", "ὄρῳ / ὄρει", "ὄρεσι"],
        answer: "ὄρει",
      },
      {
        id: "5-6",
        type: "fill",
        prompt: "Grego: «O avô conta um mito.»",
        answer: "ὁ πάππος λέγει μῦθον",
      },
      {
        id: "5-7",
        type: "tf",
        prompt: "Filipe escuta o avô em silêncio.",
        answer: "verdadeiro",
      },
      {
        id: "5-8",
        type: "mcq",
        prompt: "φυλάττετε é:",
        options: ["3ª pl. ind.", "2ª pl. imper. / ind.", "infinitivo", "particípio"],
        answer: "2ª pl. imper. / ind.",
      },
    ],
    culture: {
      title: "O lobo, o pastor e a noite ática",
      paragraphs: [
        "O λύκος é o predador do rebanho mediterrânico. Aparece em Homero, em fábula, no mito de Licaão.",
        "A noite no demo não tem iluminação pública: o fogo do oikos é o centro da palavra. Aí se transmite o μῦθος.",
        "Guardar (φυλάττειν) o rebanho e a casa é a virtude primeira do campo — a mesma raiz de φύλαξ, o guardião da pólis.",
      ],
    },
    wordStudy: {
      prompt: "Raízes.",
      items: [
        { pt: "licantropo", roots: "λύκος + ἄνθρωπος", note: "homem-lobo" },
        { pt: "mitologia", roots: "μῦθος + λόγος", note: "discurso sobre os relatos" },
        { pt: "orografia", roots: "ὄρος + γράφω", note: "descrição dos montes" },
      ],
    },
    wisdom: { greek: "ἀρχὴ ἄνδρα δείκνυσι.", author: "Pítaco", pt: "O poder revela o homem." },
  },
];

const cache = new Map<number, Chapter>();

export function getChapter(id: number): Chapter | undefined {
  if (cache.has(id)) return cache.get(id);
  const ch = CHAPTERS.find((c) => c.id === id);
  if (!ch) return undefined;
  const extra = EXTRA_EXERCISES[id] ?? [];
  const merged = { ...ch, exercises: [...ch.exercises, ...extra] };
  cache.set(id, merged);
  return merged;
}

export function allChapters(): Chapter[] {
  return CHAPTERS.map((c) => getChapter(c.id)!);
}
