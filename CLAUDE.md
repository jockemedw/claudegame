# Claude Guide

En interaktiv webbguide som hjälper och lär användaren att använda AI (i synnerhet Claude) mer effektivt.

> **Inriktning:** Projektet utforskade tidigare ett *spelkoncept*, men har **pivoterat från spel till en strukturerad HTML-/webbguide**. Det finns ingen spelmekanik — guiden är ett kurerat, interaktivt referensverk organiserat i nivåer.

## Projektöversikt

**Målgrupp:** Nybörjare (nivå 1) och vardagsanvändare (nivå 2) — ambitionen är att ta användaren till nivå 3–4. Nivå 5–6 finns med som aspirerande tak.

**Format:** Interaktiv webbguide. Innehållet är organiserat i sex nivåer, var och en med kurerade tips uppdelade i "Must Know" och "Nice to Have". Användaren kan markera tips som *vill lära mig* eller *behärskar*, bocka av steg, och följa sina framsteg över tid.

**AI-koppling:** Nuvarande app är en **statisk, kurerad guide** — inga live-AI-anrop. (Den tidigare hybrid-idén med simulerade respektive riktiga Claude-svar hörde till spelkonceptet och är vilande.)

**Designstatus:** Den visuella designen omarbetas separat via **Claude.Design**. Undvik större stil-/layoutändringar i denna kodbas utan avstämning, för att inte krocka med det arbetet.

## Nivåramverk

Grunden för guiden. Definierar vad användaren ska lära sig och i vilken ordning. Ramverket är etablerat och godkänt. (I appen är själva innehållet författat på engelska; ramverket nedan är på svenska.)

---

### Nivå 1 — "Jag frågar"
**Mental modell:** AI = en avancerad sökmotor

**Kompetenser:**
- Formulerar enkla frågor på naturligt språk
- Förstår att AI svarar på text, inte knappar
- Testar vad AI kan och inte kan

**Övergångstriggern:** Inser att svaret hade blivit bättre om de sagt mer.

---

### Nivå 2 — "Jag kommunicerar"
**Mental modell:** AI = en samtalspartner jag kan påverka

**Kompetenser:**
- Ger kontext och bakgrundsinformation
- Itererar på svar — kortare, längre, annan ton
- Anger önskat format: lista, tabell, punkter
- Laddar upp filer, bilder och dokument
- Grundläggande källkritik: verifierar viktiga påståenden

**Övergångstriggern:** Inser att man kan designa situationen *innan* svaret kommer — inte bara reagera efteråt.

---

### Nivå 3 — "Jag styr"
**Mental modell:** AI = en kapabel men junior medarbetare som behöver tydliga instruktioner

Avgörande skillnad från nivå 2: nivå 2 *reagerar* på output, nivå 3 *designar* förutsättningarna innan output skapas.

**Kompetenser:**
- Ger roller med syfte: "du är en kritisk redaktör, inte en som bekräftar"
- Anger ton, målgrupp, längd och format *innan* svaret
- Ger exempel på exakt vad man vill ha (few-shot)
- Bryter ner komplexa uppgifter i steg
- Förstår hallucinationer — utmanar aktivt, vet vad som kräver extern verifiering
- Vet vad AI *inte* ska användas till: konfidentiell data, beslut med höga konsekvenser utan verifiering

**Övergångstriggern:** Inser att kontext försvinner — AI minns inte vem de är eller vad de bygger.

---

### Nivå 4 — "Jag tänker med AI"
**Mental modell:** AI = en tanke­partner med specifika styrkor och svagheter jag aktivt hanterar

**Kompetenser:**
- Chain-of-thought: ber AI resonera explicit innan det svarar
- Hanterar kontextfönstret medvetet — kondenserar, vet när man startar om
- Systemprompts och Projects för persistent kontext och personlighet
- Använder AI för att förbättra sitt *eget* tänkande, inte bara producera text
- Vet när AI är fel verktyg — och väljer aktivt bort det
- Ber AI anta motståndarens perspektiv, hitta svagheter i egna resonemang

**Övergångstriggern:** Inser att man vill att AI ska *göra* saker, inte bara *svara* på saker.

---

### Nivå 5 — "Jag bygger med AI"
**Mental modell:** AI = en komponent i ett större system

**Kompetenser:**
- API-anrop programmatiskt — AI som tjänst, inte gränssnitt
- Avancerade systemprompts med strukturerade instruktionslager
- Tool use / function calling — Claude anropar externa verktyg
- RAG — kopplar AI till egna dokument och datakällor
- Prompt chaining — kedjar prompts i sekvens
- Multimodal hantering (bild, dokument, kod) programmatiskt

**Övergångstriggern:** Inser att en enskild agent inte räcker — parallellisering och specialisering krävs.

---

### Nivå 6 — "Jag orkestrerar AI"
**Mental modell:** AI = infrastruktur

**Kompetenser:**
- Multi-agent orchestration: lead-agent koordinerar specialistagenter parallellt
- Autonoma workflows utan mänsklig input
- MCP-servrar för djupintegration med externa system
- Minne, säkerhet och felhantering på systemnivå
- Kontinuerlig utvärdering och förbättring av AI-systemets prestanda

---

## Appens struktur

**Stack:** React 18 + Vite + Tailwind CSS, React Router, localStorage för progress.

**Vyer (`src/pages/`):**
- `Home.jsx` — landningssida: rubrik, övergripande framstegsindikator (must-knows mastered) och rutnät av nivåkort.
- `Level.jsx` — en enskild nivå: header med framstegsstapel, sektionerna "Must Know" och "Nice to Have" som listar `TipCard`, samt navigering till nästa nivå.
- `MyPages.jsx` — personlig dashboard: total progress i procent, nivåvis nedbrytning, "To Master" (kvarvarande must-knows) och "Want to Learn" (bokmärkta tips).

**Innehållsmodell (`src/data/`):**
- `level1.js`–`level6.js` exporterar var sitt nivåobjekt: `{ id, title, tagline, description, color, hex, tips[] }`.
- Varje tip: `{ id, type: 'must_know' | 'nice_to_have', title, summary, steps?: string[], example?, source? }`.
- `example` kan vara `{ type: 'before_after', ... }`, `{ type: 'reveal', question, answer }` eller `{ type: 'slider', ... }`.
- `sources.js` — källor för attributions-chips (Karpathy, Cherny, Anthropic).
- `index.js` — samlar nivåerna, exporterar `levels` och `getLevel(id)`.

**Komponenter (`src/components/`):** `Navbar`, `LevelCard`, `TipCard`, `ProgressBar`, `ExampleViewer`, samt interaktiva exempel i `examples/` (`BeforeAfter`, `Reveal`, `Slider`).

**Progress (`src/hooks/useProgress.js`):** localStorage-nyckel `claude-guide-progress`. Status per tip: `none | want_to_learn | mastered`. Steg bockas av individuellt; när alla steg är avklarade sätts tipet automatiskt till `mastered`.

## Var vi slutade

Projektet har pivoterat från spel till interaktiv webbguide. Nivåramverket och den kurerade tips-strukturen (nivå 1–6, med "Must Know"/"Nice to Have", steg, exempel och källor) är på plats och deployad. Den visuella designen omarbetas parallellt via Claude.Design.

## Öppna frågor

- Plattform: webb (klart), mobil?
- Backend + autentisering (nästa steg) — kandidat: Supabase
- Fler tips per nivå, fler interaktionstyper (utöver before/after, reveal, slider)
- Eventuell live-AI-integration i guiden (öva mot riktig Claude) — i så fall återupplivas hybrid-tanken
- Monetisering?

## Deployed

- **Production:** https://claudegame-pi.vercel.app
- **GitHub:** https://github.com/jockemedw/claudegame
- **Stack:** React + Vite + Tailwind CSS, localStorage för progress
- **Vercel project:** joakimweimar-2195s-projects/claudegame
