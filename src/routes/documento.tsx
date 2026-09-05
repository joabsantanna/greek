import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/documento")({ component: Documento });

function Documento() {
  return (
    <article className="paper font-serif mx-auto max-w-[42rem] text-[15.5px] leading-[1.75] text-fg">
      <div className="print:hidden mb-8 flex justify-end">
        <Button size="sm" variant="outline" onClick={() => window.print()}>
          <Printer className="size-3.5" /> Imprimir / guardar PDF
        </Button>
      </div>

      <header className="flex min-h-[80vh] flex-col items-center justify-between py-8 text-center">
        <div className="space-y-1 text-xs tracking-[0.18em] uppercase">
          <p>Universidade Federal do Ceará</p>
          <p>Núcleo de Cultura Clássica</p>
          <p>Curso de Grego Antigo e Koiné</p>
        </div>
        <div className="space-y-6">
          <p className="text-sm tracking-wide">Joab de Santana Santos</p>
          <h1 className="font-greek text-[2.1rem] leading-tight text-primary sm:text-4xl">
            Ἀθήναζε
          </h1>
          <p className="mx-auto max-w-md text-lg leading-snug">
            Aplicativo piloto para a aprendizagem do grego ático a partir dos capítulos I–V
            do método <em>Athenaze</em>
          </p>
          <p className="text-sm text-muted">
            Documento de apresentação de projeto · modelo piloto destinado a expansão
          </p>
        </div>
        <div className="space-y-1 text-sm">
          <p>Fortaleza</p>
          <p>2026</p>
        </div>
      </header>

      <section className="mt-16 space-y-3">
        <h2 className="text-center text-sm font-semibold tracking-[0.2em] uppercase">Resumo</h2>
        <p className="text-justify">
          Este documento apresenta o aplicativo <span lang="grc" className="font-greek">Ἀθήναζε</span>,
          companheiro digital de estudo do grego ático elaborado como <strong>modelo piloto</strong> sobre
          os capítulos I a V do manual <em>Athenaze: An Introduction to Ancient Greek</em>
          (Balme; Lawall; Morwood). O sistema privilegia a leitura do texto grego politónico —
          e não apenas a memorização de tabelas — mediante um leitor clicável com análise
          morfológica, transcrição fonética (reconstrução erasmiana / Allen), concordancias,
          teclado politónico, treino de produção (formas, partículas, preposições e frases),
          léxico com repetição espaçada, paradigmas recitáveis e um mapa da casa
          (<span lang="grc" className="font-greek">οἶκος</span>) de Dicaiópolis. A interface
          traduz o universo conceptual da cultura helénica (pergaminho, meandro, cerâmica
          ática, verde egeu) sem recorrer ao pastiche de colunas e mármore. O piloto cobre
          cinco capítulos; a pretensão declarada do projecto é estender o mesmo aparato a
          <strong>todos os capítulos</strong> do <em>Athenaze</em> (livros I e II). O aplicativo
          foi concebido e realizado por Joab de Santana Santos, discente do curso de Grego
          Antigo e Koiné do Núcleo de Cultura Clássica da Universidade Federal do Ceará.
        </p>
        <p className="text-sm">
          <strong>Palavras-chave:</strong> grego ático; <em>Athenaze</em>; humanidades digitais;
          aprendizagem de línguas clássicas; morfologia; interface.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-center text-sm font-semibold tracking-[0.2em] uppercase">Abstract</h2>
        <p className="text-justify">
          This paper presents <span lang="grc" className="font-greek">Ἀθήναζε</span>, a digital
          study companion for Attic Greek designed as a <strong>pilot</strong> covering chapters
          I–V of <em>Athenaze: An Introduction to Ancient Greek</em> (Balme, Lawall & Morwood).
          The application privileges reading polytonic Greek — not merely paradigm drill —
          through a clickable reader with morphological analysis, phonetic transcription
          (Erasmian / Allen reconstruction), concordances, a polytonic keyboard, production
          practice, spaced-repetition vocabulary, recitable paradigms and a household map of
          Dicaeopolis’s <span lang="grc" className="font-greek">οἶκος</span>. The visual language
          draws on the conceptual universe of Hellenic culture (parchment, meander, Attic
          pottery, Aegean green). The pilot is intended for expansion to the whole of
          <em>Athenaze</em> (Books I and II). The application was designed and built by Joab de
          Santana Santos, a student of Ancient Greek and Koine at the Núcleo de Cultura
          Clássica, Universidade Federal do Ceará (Brazil).
        </p>
        <p className="text-sm">
          <strong>Keywords:</strong> Attic Greek; <em>Athenaze</em>; digital humanities;
          classical language pedagogy; morphology; interface design.
        </p>
      </section>

      <Section n="1" title="Introdução">
        <p>
          Aprender grego antigo no século XXI ainda se faz, na maior parte das salas, com o
          livro aberto, o caderno de paradigmas e a voz do docente. O <em>Athenaze</em> de
          Maurice Balme, Gilbert Lawall e James Morwood (Oxford University Press) é, neste
          contexto, um dos manuais indutivos mais difundidos: ensina a língua pela narrativa
          contínua da família de Dicaiópolis, no demo ático, na véspera da Guerra do
          Peloponeso (433 a.C.), e só depois sistematiza a gramática que o texto acaba de
          tornar necessária (BALME; LAWALL; MORWOOD, 2016).
        </p>
        <p>
          O que o livro não oferece — e que o estudante contemporâneo espera de qualquer
          língua que aprenda — é um ambiente em que a forma grega possa ser <em>interrogada</em>
          no sítio em que ocorre: tocar numa palavra, ver o lema, o caso ou a pessoa, ouvir
          uma reconstrução da pronúncia, encontrar outras ocorrências, e em seguida
          <em>escrever</em> a forma, não apenas reconhecê-la. Os léxicos electrónicos e as
          bibliotecas digitais (Perseus, Logeion) resolvem a consulta do especialista; raramente
          acompanham o ritmo pedagógico de um capítulo do <em>Athenaze</em>.
        </p>
        <p>
          O aplicativo <span lang="grc" className="font-greek">Ἀθήναζε</span> nasceu dessa
          lacuna. Não substitui o manual nem a aula: é um <em>companheiro</em> dos capítulos
          I–V, desenhado para o discente que lê em voz alta, que erra o acento, que precisa
          de ver o dativo ao lado da preposição <span lang="grc" className="font-greek">ἐν</span>.
          Este texto descreve a fundamentação, a estrutura de conteúdos, as decisões de
          interface e o carácter piloto do projecto.
        </p>
      </Section>

      <Section n="2" title="Autoria, afiliação e natureza do projecto">
        <p>
          O aplicativo foi concebido, desenhado e implementado por{" "}
          <strong>Joab de Santana Santos</strong>, discente do curso de{" "}
          <strong>Grego Antigo e Koiné</strong> do{" "}
          <strong>Núcleo de Cultura Clássica</strong> da{" "}
          <strong>Universidade Federal do Ceará</strong> (UFC). O trabalho articula a
          formação filológica do autor com práticas das humanidades digitais: modelagem de
          um léxico de aprendizagem, um motor de morfologia restrito ao recorte do manual,
          e uma interface que trata o grego politónico como texto de primeira classe, não
          como imagem ou transcrição latina.
        </p>
        <p>
          Trata-se de um <strong>modelo piloto</strong>. O recorte — capítulos I a V do
          Livro I — não é o horizonte do projecto, senão a prova de arquitectura. A pretensão
          explícita é que o mesmo sistema (leitor, morfologia, teclado, treino, léxico,
          paradigmas, oikos e notas de cultura) se estenda, capítulo a capítulo, a{" "}
          <strong>todo o <em>Athenaze</em></strong>, isto é, aos dezasseis capítulos do
          Livro I e aos dezasseis do Livro II. O piloto serve para validar a pedagogia, a
          linguagem visual e o modelo de dados antes de se enfrentar o aoristo, os
          particípios, o optativo e o léxico crescente da segunda metade do método.
        </p>
      </Section>

      <Section n="3" title="Fundamentação pedagógica">
        <p>
          Três princípios orientam o desenho.
        </p>
        <p>
          <strong>3.1 Leitura antes da tabela.</strong> O <em>Athenaze</em> pertence à
          tradição indutiva que, no latim, tem o paralelo de Ørberg: a forma aparece no
          texto, e só então se nomeia. O aplicativo inverte a ordem ainda comum nos
          repositórios digitais de grego (primeiro o paradigma, depois, se houver, um
          exemplo). O capítulo abre na leitura α; a gramática, o vocabulário, a leitura β,
          os exercícios e a nota cultural seguem o percurso do livro.
        </p>
        <p>
          <strong>3.2 Reconhecimento e produção.</strong> A investigação em vocabulário de
          L2 insiste em que reconhecer uma forma não implica produzi-la (NATION, 2013). Por
          isso o piloto distingue o leitor (consulta, glosa, análise) do <em>treino</em>
          (escrita de formas, partículas, preposições e frases português ↔ grego) e das
          fichas com repetição espaçada. O teclado politónico existe precisamente para que
          a produção não dependa de um teclado de sistema operacional que o iniciante ainda
          não configurou.
        </p>
        <p>
          <strong>3.3 Morfologia situada.</strong> Uma desinência só se torna memorável
          quando o estudante a vê no sítio em que altera o sentido da frase. O motor de
          morfologia gera, a partir do léxico dos capítulos I–V, as formas da 1.ª e 2.ª
          declinações, os presentes temáticos, os contratos em{" "}
          <span lang="grc" className="font-greek">-ε-</span> e{" "}
          <span lang="grc" className="font-greek">-α-</span>, o verbo{" "}
          <span lang="grc" className="font-greek">εἰμί</span> e um conjunto de irregulares
          imprescindíveis ao texto (
          <span lang="grc" className="font-greek">ἀνήρ, γυνή, παῖς, Ζεύς, ὕδωρ</span>
          …). Clicar em{" "}
          <span lang="grc" className="font-greek">τοῖς ἀγροῖς</span> não abre um dicionário
          genérico: devolve o lema, a etiqueta «dat. pl.», a glosa e as ocorrências no
          corpus do próprio manual.
        </p>
        <p>
          A pronúncia adoptada é a reconstrução erasmiana pedagógica, alinhada a Allen
          (1987): oetas longos, ditongos distintos, oclusivas aspiradas{" "}
          <span lang="grc" className="font-greek">φ θ χ</span> como /pʰ tʰ kʰ/. Não se
          pretende reconstituir a koiné falada, senão dar ao iniciante um sistema
          pronunciável e coerente com a tradição escolar do ático clássico.
        </p>
      </Section>

      <Section n="4" title="O recorte do piloto: capítulos I–V">
        <p>
          O Livro I do <em>Athenaze</em> conduz o estudante do lote de Dicaiópolis à cidade,
          à lavoura, à fonte e ao medo do lobo. Os cinco primeiros capítulos instalam o
          essencial da frase ática simples: artigo, segunda declinação, presente, casos
          centrais, imperativo, preposições de movimento, primeira declinação, contratos e
          o início da terceira. O quadro 1 resume o recorte.
        </p>
        <Figure caption="Quadro 1 — Conteúdo programático do piloto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border">
                <th className="py-1.5 pr-2 font-medium">Cap.</th>
                <th className="py-1.5 pr-2 font-medium">Título</th>
                <th className="py-1.5 pr-2 font-medium">Gramática</th>
                <th className="py-1.5 font-medium">Cultura</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["I", "ὁ Δικαιόπολις", "artigo; 2.ª décl.; εἰμί; contratos -ε-; nom./ac.", "o demo e o αὐτουργός"],
                ["II", "ὁ Ξανθίας", "imperativo; μή; vocativo; neutro", "escravidão no oikos"],
                ["III", "ὁ ἄροτος", "genitivo e dativo; preposições de movimento", "Deméter e o trigo"],
                ["IV", "πρὸς τῇ κρήνῃ", "1.ª décl.; contratos em -α-", "a fonte, o gineceu, as Dionísias"],
                ["V", "ὁ λύκος", "médio; 3.ª décl. (início); τιμάω", "o lobo, o pastor, a noite ática"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-border/60 align-top">
                  {r.map((c, i) => (
                    <td key={i} className={`py-1.5 pr-2 ${i > 0 && i < 2 ? "font-greek" : ""}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Figure>
        <p>
          Cada capítulo contém duas leituras (α e β), blocos de gramática com tabelas,
          vocabulário alinhado ao léxico global, exercícios (escolha, verdadeiro/falso,
          completar, análise, correspondência), uma nota de cultura ática e um breve estudo
          de raízes gregas no português, encerrado por uma sentença sapiencial (Píndaro,
          Pítaco, Hesíodo, provérbios).
        </p>
      </Section>

      <Section n="5" title="Arquitectura da informação">
        <p>
          O sistema é uma aplicação web em TypeScript e React, com encaminhamento por
          ficheiros (TanStack Router) e persistência local do progresso (leituras feitas,
          lemas conhecidos, exercícios, série de treino e repetição espaçada). Não exige
          conta: o estudo fica no aparelho do estudante. A informação organiza-se em quatro
          camadas.
        </p>
        <p>
          <strong>5.1 Dados.</strong> Os capítulos, o léxico (~160 lemas dos caps. I–V), os
          paradigmas, o alfabeto (24 letras, diacríticos, ditongos), as partículas, as
          preposições, as frases de versão e a casa de Dicaiópolis são módulos declarativos.
          Esta separação permite acrescentar o capítulo VI sem reescrever o leitor.
        </p>
        <p>
          <strong>5.2 Motor de língua.</strong> Um indexador morfológico deriva formas a
          partir do lema (declinações 1 e 2, presentes temáticos e contractos, irregulares
          do recorte). Funções de normalização (NFC, supressão de diacríticos) tornam a
          correcção pedagógica: o acento é desejável, não eliminatório. A transcrição
          latina e o IPA acompanham cada forma consultada. Uma concordância percorre as
          leituras e devolve o contexto imediato.
        </p>
        <p>
          <strong>5.3 Superfície.</strong> O leitor oferece quatro modos — estudo (palavras
          desconhecidas sublinhadas), só grego, com glosas interlineares, e análise (texto
          corrido + quadro forma / análise / lema / glosa). O painel da palavra mostra IPA,
          morfologia, glosa e ocorrências. O teclado politónico aplica agudo, grave,
          circunflexo, espíritos, iota subscrito e diérese por marcas combinantes.
        </p>
        <p>
          <strong>5.4 Percurso.</strong> As rotas correspondem a gestos de estudo, não a
          um sítio institucional. O quadro 2 lista-as.
        </p>
        <Figure caption="Quadro 2 — Mapa de rotas do piloto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border">
                <th className="py-1.5 pr-2 font-medium">Rota</th>
                <th className="py-1.5 font-medium">Função pedagógica</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Início", "estado do estudo, acesso aos cinco capítulos, oikos"],
                ["Capítulo I–V", "leitura α → gramática → vocabulário → leitura β → exercícios → cultura"],
                ["Alfabeto", "as 24 letras, diacríticos, ditongos, quiz de som"],
                ["Treino", "produção: formas, partículas, frases, preposições"],
                ["Léxico", "consulta filtrada por capítulo, busca por lema ou glosa"],
                ["Fichas", "repetição espaçada (again / good / easy)"],
                ["Gramática / Paradigmas", "tabelas recitáveis; esconder formas; quiz morfológico"],
                ["Oikos", "Dicaiópolis, Xântias, Filipe, Mirrina, Melissa, o avô, Argos"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-border/60 align-top">
                  <td className="py-1.5 pr-2 font-medium">{r[0]}</td>
                  <td className="py-1.5">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Figure>
      </Section>

      <Section n="6" title="Linguagem visual: o universo conceptual helénico">
        <p>
          A encomenda de partida pedia um layout que «combinasse com o universo conceptual
          do grego antigo e da cultura helénica». A decisão foi recusar o cenário de
          cartão-postal — colunas dóricas em fotografia, mármore de stock, elmos dourados —
          e trabalhar em vez disso os <em>materiais e os signos</em> com que o ático de
          facto se encontra: o suporte da escrita, a geometria da cerâmica, a cor da terra
          e do mar.
        </p>
        <p>
          <strong>6.1 O pergaminho como campo.</strong> O fundo{" "}
          <code className="text-[13px]">#f3ede3</code> e a superfície{" "}
          <code className="text-[13px]">#faf6ef</code> evocam a cor do papiro e do
          pergaminho envelhecido, não o branco de um editor de texto. Uma vinheta suave
          (ocre e verde egeu) evita o aspecto de papel digital clínico. O texto corre em
          tinta <code className="text-[13px]">#1c1612</code>, próxima do negro de fumo.
        </p>
        <p>
          <strong>6.2 A paleta ática.</strong> O acento cromático é o vermelho-terra{" "}
          <code className="text-[13px]">#8b3226</code>, o miltos das figuras vermelhas e
          dos títulos de papiro. O verde-azulado <code className="text-[13px]">#2f4a4c</code>{" "}
          (egeu / pátina) marca o segundo polo: o mar, o bronze, o outro da terra interior.
          Um ouro de folha <code className="text-[13px]">#c4a574</code> aparece só como
          luz, nunca como luxo.
        </p>
        <p>
          <strong>6.3 O meandro.</strong> A faixa superior — o padrão de chave grega,
          <span lang="grc" className="font-greek">μαίανδρος</span> — é o único ornamento
          contínuo. Não é decoração aplicada sobre um sítio moderno: é a borda de um vaso
          geométrico que contém o texto. O meandro, motivo de continuidade e de limite,
          serve aqui de metáfora discreta do próprio método: o estudante avança em voltas
          (leitura, gramática, de novo o texto).
        </p>
        <p>
          <strong>6.4 A tipografia politónica.</strong> O grego compõe-se em{" "}
          <em>EB Garamond</em>, serifada humanista com cobertura OpenType de politónicos
          (incluindo iota subscrito e todos os espíritos). A escolha não é nostálgica: as
          garaldes do século XVI são precisamente o veículo em que o Ocidente reaprendeu a
          ler o grego impresso. O interface (rótulos, botões, notas) usa <em>Source Sans 3</em>,
          para que a prosa portuguesa não imite um incunábulo. Os botões de palavra no
          leitor herdam o corpo grande (~1,5 rem) e o interlinhado largo da edição escolar.
        </p>
        <p>
          <strong>6.5 A coruja, não a estátua.</strong> A marca é uma coruja esquemática —
          atributo de Atena, epónimo da cidade para a qual o título aponta
          (<span lang="grc" className="font-greek">Ἀθήναζε</span>, «para Atenas»). Evita-se
          a reprodução de escultura clássica, que transformaria o estudo em museu.
        </p>
        <p>
          Em conjunto, o layout não «ilustra a Grécia»: procura a sobriedade de um objecto
          que poderia ter sido um caderno de mestre, um óstraco, um papiro escolar. A
          cultura helénica entra como <em>modo de ver</em> — medida, geometria, tensão
          entre terra e mar — e não como figurino.
        </p>
      </Section>

      <Section n="7" title="Inventário do piloto">
        <p>O quadro 3 fixa a escala do modelo, tal como se encontra implementado.</p>
        <Figure caption="Quadro 3 — Inventário quantitativo (piloto, caps. I–V)">
          <table className="w-full text-left text-[13px]">
            <tbody>
              {[
                ["Capítulos narrativos", "5 (I–V), com leituras α e β (10 textos)"],
                ["Parágrafos gregos com tradução", "cerca de 37"],
                ["Lemas do léxico de aprendizagem", "cerca de 160"],
                ["Paradigmas recitáveis", "artigo; 2.ª m./n.; 1.ª (κρήνη, ὑδρία); adj. καλός; λύω, φιλέω, τιμάω, εἰμί; pronomes"],
                ["Membros do oikos", "7 (Dicaiópolis, Xântias, Filipe, Mirrina, Melissa, o avô, Argos)"],
                ["Letras do alfabeto", "24, com nome grego, som, IPA e exemplo"],
                ["Frases de versão PT ↔ grego", "33"],
                ["Partículas e preposições treináveis", "18 + 12"],
                ["Tipos de exercício", "escolha múltipla, V/F, completar, análise, correspondência"],
                ["Persistência", "local (sem autenticação obrigatória)"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-border/60 align-top">
                  <td className="py-1.5 pr-3 font-medium">{r[0]}</td>
                  <td className="py-1.5">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Figure>
      </Section>

      <Section n="8" title="Dispositivos de aprendizagem em detalhe">
        <p>
          <strong>O leitor.</strong> Tokeniza o politónico, distingue palavra de
          pontuação, e trata cada forma como botão. No modo estudo, o lema ainda não
          marcado como conhecido recebe um sublinhado ponteado — convite, não sanção. A
          tradução portuguesa fica à margem, accionável, para que o estudante possa
          habitar o grego sem a muleta permanente. O modo análise não explode o
          interlinhado (erro clássico dos glossários digitais): o parágrafo permanece
          corrido e a análise desce a um quadro, à maneira de uma edição escolar.
        </p>
        <p>
          <strong>O teclado.</strong> As vinte e quatro letras, o sigma final, os
          diacríticos por marcas combinantes normalizadas em NFC. A correcção compara
          formas sem exigir o acento, embora o mostre como modelo. Remove-se assim a
          barreira técnica que, na prática, impede o iniciante de <em>escrever</em> grego
          no computador ou no telefone.
        </p>
        <p>
          <strong>O treino.</strong> Quatro modos de produção: (i) células dos paradigmas
          (o estudante escreve a forma pedida; o artigo pode omitir-se); (ii) partículas
          — o nervo da frase ática, tão negligenciado quanto decisivo; (iii) frases de
          versão nos dois sentidos; (iv) preposição + caso. Uma série (streak) torna
          visível a regularidade do estudo, não a competição.
        </p>
        <p>
          <strong>As fichas.</strong> Algoritmo de repetição espaçada com três juízos
          (outra vez / soube / fácil), intervalos em dias e factor de facilidade, na
          linhagem de Leitner / SuperMemo simplificado. O léxico do piloto é pequeno o
          bastante para se percorrer; grande o bastante para não se esgotar numa sessão.
        </p>
        <p>
          <strong>A casa.</strong> O oikos não é um «sobre os personagens»: é o mapa
          afectivo do método. Quem reconhece Xântias a dormir à sombra lê melhor o
          imperativo do capítulo II. A Ática aparece como esquema (Atenas e o campo),
          não como mapa turístico.
        </p>
      </Section>

      <Section n="9" title="Limitações do piloto e plano de expansão">
        <p>
          As limitações são deliberadas e devem ser lidas como fronteiras do recorte, não
          como falhas ocultas.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            O motor morfológico não cobre aoristos, perfeitos, particípios em escala, nem
            a terceira declinação completa — porque o <em>Athenaze</em> também não os
            exige nos caps. I–V.
          </li>
          <li>
            As leituras são reconstituições pedagógicas alinhadas ao enredo e ao léxico
            do manual, destinadas ao estudo, e não uma reprodução integral da edição
            Oxford (cujos direitos permanecem da editora).
          </li>
          <li>
            A síntese de voz usa uma aproximação latina da reconstrução; não substitui a
            voz do docente.
          </li>
          <li>
            O progresso é local: adequado à privacidade do estudante, insuficiente ainda
            para uma turma com acompanhamento docente.
          </li>
        </ul>
        <p>
          A expansão prevista, e que justifica chamar «piloto» a este modelo, segue a
          ordem do próprio manual:
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <strong>Livro I, capítulos VI–XVI</strong> — aoristo, particípios, pronome
            relativo, graus do adjectivo, o infortúnio e a viagem da narrativa; acréscimo
            do léxico e dos paradigmas correspondentes.
          </li>
          <li>
            <strong>Livro II, capítulos XVII–XXXI</strong> (conforme a edição) — optativo,
            subjuntivo, discurso indirecto, prosa mais longa; o mesmo leitor, o mesmo
            teclado, um motor morfológico alargado.
          </li>
          <li>
            <strong>Camada docente</strong> — turma, progresso partilhável, listas de
            formas «desta semana».
          </li>
          <li>
            <strong>Áudio gravado</strong> — leitura humana das α e β, para além da
            síntese.
          </li>
        </ol>
        <p>
          A arquitectura em dados declarativos (capítulos, léxico, paradigmas) foi
          escolhida exactamente para que essa expansão não implique redesenhar a
          interface. O piloto é, neste sentido, um <em>cânone de medidas</em>: se o
          capítulo V cabe, o capítulo XV deve caber.
        </p>
      </Section>

      <Section n="10" title="Considerações finais">
        <p>
          <span lang="grc" className="font-greek">Ἀθήναζε</span> não pretende ser um
          curso autónomo de grego, nem um museu digital da Ática. Pretende ser o
          caderno que o <em>Athenaze</em> não pôde trazer: um sítio em que o texto grego
          se deixa tocar, analisar, ouvir e — sobretudo — escrever. O piloto dos
          capítulos I–V demonstra que esse sítio pode ter a medida da cultura que
          ensina: pergaminho, meandro, terra e mar, tipografia que honra o politónico,
          gramática que nasce da frase.
        </p>
        <p>
          Feito por um discente do Núcleo de Cultura Clássica da UFC, o projecto assume-se
          como contribuição situada — Fortaleza, o grego, o livro de Oxford — e como
          convite à continuação. A frase que o próprio método põe na boca de Dicaiópolis
          serve de fecho honesto: a vida do estudo é dura, o lote ainda é pequeno, mas o
          trabalho não é de escravo.{" "}
          <span lang="grc" className="font-greek">χαλεπὰ τὰ καλά</span>.
        </p>
      </Section>

      <section className="mt-14 space-y-3">
        <h2 className="text-center text-sm font-semibold tracking-[0.2em] uppercase">
          Referências
        </h2>
        <ul className="space-y-3 text-[14px] leading-relaxed">
          <Ref>
            ALLEN, W. Sidney. <em>Vox Graeca:</em> a guide to the pronunciation of classical
            Greek. 3. ed. Cambridge: Cambridge University Press, 1987.
          </Ref>
          <Ref>
            BALME, Maurice; LAWALL, Gilbert; MORWOOD, James. <em>Athenaze:</em> an
            introduction to ancient Greek. Book I. 3. ed. Oxford: Oxford University Press,
            2016.
          </Ref>
          <Ref>
            CRANE, Gregory (ed.). <em>Perseus Digital Library</em>. Tufts University.
            Disponível em: https://www.perseus.tufts.edu. Acesso em: 5 set. 2026.
          </Ref>
          <Ref>
            DICKEY, Eleanor. <em>An introduction to the composition and analysis of Greek
            prose</em>. Cambridge: Cambridge University Press, 2016.
          </Ref>
          <Ref>
            HORROCKS, Geoffrey. <em>Greek:</em> a history of the language and its speakers.
            2. ed. Oxford: Wiley-Blackwell, 2010.
          </Ref>
          <Ref>
            KRASHEN, Stephen D. <em>The input hypothesis:</em> issues and implications.
            London: Longman, 1985.
          </Ref>
          <Ref>
            MASTRONARDE, Donald J. <em>Introduction to Attic Greek</em>. 2. ed. Berkeley:
            University of California Press, 2013.
          </Ref>
          <Ref>
            NATION, I. S. P. <em>Learning vocabulary in another language</em>. 2. ed.
            Cambridge: Cambridge University Press, 2013.
          </Ref>
          <Ref>
            ØRBERG, Hans H. <em>Lingua Latina per se illustrata.</em> Pars I: Familia
            Romana. Grenoble: Éditions Soleil / Focus, 2011.
          </Ref>
          <Ref>
            SANTOS, Joab de Santana. <span lang="grc" className="font-greek">Ἀθήναζε</span>.
            Aplicativo piloto para os capítulos I–V do <em>Athenaze</em>. Fortaleza: Núcleo
            de Cultura Clássica, Universidade Federal do Ceará, 2026. Código-fonte:
            https://github.com/joabsantanna/greek.
          </Ref>
        </ul>
      </section>

      <p className="mt-16 text-center text-xs tracking-wide text-muted">
        Universidade Federal do Ceará · Núcleo de Cultura Clássica · 2026
      </p>
    </article>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-12 space-y-3">
      <h2 className="font-medium tracking-wide">
        {n} {title}
      </h2>
      {children}
    </section>
  );
}

function Figure({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="my-6 overflow-x-auto">
      {children}
      <figcaption className="mt-2 text-center text-[12px] text-muted">{caption}</figcaption>
    </figure>
  );
}

function Ref({ children }: { children: ReactNode }) {
  return <li className="text-justify indent-[-1.2rem] pl-5">{children}</li>;
}
