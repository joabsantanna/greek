# Ἀθήναζε

Companheiro de estudo de **grego ático** para os capítulos **I–V** do Athenaze.

Ler o grego, não só decliná-lo: texto clicável, análise morfológica, teclado politónico, paradigmas, léxico e a casa de Dicaiópolis.

## Conteúdo

- Leituras α e β dos capítulos 1–5, com tradução
- Gramática viva (presente, casos, contratos em -ε- e -α-, 1ª declinação, artigo)
- Léxico I–V, fichas com repetição espaçada
- Treino: formas, partículas, preposições, frases PT ↔ grego
- Alfabeto e pronúncia (reconstrução erasmiana / Allen)
- ὁ οἶκος: Dicaiópolis, Xântias, Filipe, Mirrina, Melissa, o avô e Argos
- Notas de cultura ática (433 a.C.)

## Como correr

```bash
npm install
npm run dev
```

Abre em `http://localhost:8080`.

O progresso (leituras, vocabulário, exercícios, fichas) fica no `localStorage` do browser.

## Estrutura

```
src/
  data/          capítulos, léxico, paradigmas, alfabeto
  components/    leitor, exercícios, teclado politónico
  routes/        páginas
  lib/           morfologia, fonética, progresso
```

Feito para estudar em voz alta. O acento no teclado é opcional na correção.
