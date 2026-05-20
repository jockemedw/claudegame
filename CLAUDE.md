# claudegame

Ett spel som hjälper och lär spelaren att använda AI (i synnerhet Claude) mer effektivt.

## Projektöversikt

**Målgrupp:** Nybörjare (nivå 1) och vardagsanvändare (nivå 2) — ambitionen är att ta spelaren till nivå 3–4. Nivå 5–6 finns med som aspirerande tak.

**Kärnbeslut:**
- AI-koppling: **Hybrid** — simulerade svar på nivå 1–3 (designkontroll), riktig Claude via API på nivå 4–6 (autenticitet)
- Spelformat: **Ej beslutat ännu** — pausat efter att nivåramverket etablerades
- Kvizformat som fristående: **Avfärdat** — kan ingå som hybrid-inslag

## Nivåramverk

Grunden för spelet. Definierar vad spelaren ska lära sig och i vilken ordning.

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

## Var vi slutade

Nivåramverket är etablerat och godkänt. Nästa steg är att återvända till **spelformatsdiskussionen** med ramverket som grund.

Kandidater för spelformat (diskuterades men inget beslutades):
- **A1** Prompt Quest — nivåbaserade pusselutmaningar
- **A2** Fix the Prompt — välj bäst bland alternativ
- **A3** Prompt Duel — tävla mot AI-motståndare
- **B1** The New Hire — jobbnarrativ, Claude som kollega
- **B2** Lost Signal — sci-fi, kommunicera med skadat AI
- **B3** The Detective — kriminal, ställ rätt frågor
- **C1** The Workshop — guided labs per koncept
- **C2** Mission Control — delegera uppgifter, betygsätt effektivitet
- **C3** AI Atelier — kreativ studio med kvalitetspoäng
- **E1** Claude Academy — RPG-skola
- **E2** The Agency — PR-byrå med berättelse + pussel
- **E3** Prompt Odyssey — äventyr i episoder

## Öppna frågor

- Vilket spelformat (eller kombination) bär hela upplevelsen?
- Plattform: webb, mobil, desktop?
- Enspelar eller multiplayer?
- Monetisering?
