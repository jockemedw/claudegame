const L = (en, sv) => ({ en, sv });

export const LEVELS = [
  {
    id: 1,
    roman: '1',
    color: 'var(--l1)',
    colorSoft: 'var(--l1-soft)',
    colorDeep: '#4D7A55',
    title: L('Ask', 'Frågar'),
    model: L('AI = an advanced search engine', 'AI = en avancerad sökmotor'),
    tagline: L(
      'You can ask AI things, but you treat it like Google.',
      'Du frågar AI saker, men behandlar det som Google.'
    ),
    description: L(
      "Build the foundation. Learn what AI is — and isn't — by asking real questions and noticing where it falters.",
      "Bygg grunden. Lär dig vad AI är — och inte är — genom att ställa riktiga frågor och se var den brister."
    ),
    transition: L(
      'You realize the answer would be better if you had said more.',
      'Du inser att svaret hade blivit bättre om du sagt mer.'
    ),
    tips: [
      {
        id: 'l1-t1', type: 'must_know',
        title: L('Ask in natural language', 'Fråga på naturligt språk'),
        summary: L(
          "Write to AI like you'd write to a smart colleague — not keywords.",
          'Skriv till AI som du skulle skriva till en smart kollega — inte som sökord.'
        ),
        steps: [
          L('Write a full sentence instead of keywords', 'Skriv en hel mening istället för sökord'),
          L('Notice how the answer improves', 'Lägg märke till hur svaret förbättras')
        ],
        demo: {
          kind: 'before_after',
          before: L('stockholm weather may', 'stockholm väder maj'),
          after: L('What is the weather typically like in Stockholm during May?', 'Hur är vädret vanligtvis i Stockholm under maj?')
        }
      },
      {
        id: 'l1-t2', type: 'must_know',
        title: L('AI can be wrong — always verify', 'AI kan ha fel — verifiera alltid'),
        summary: L(
          'AI states things confidently even when incorrect. Treat it like a smart but fallible colleague.',
          'AI uttalar sig med självsäkerhet även när det är fel. Behandla det som en smart men felbar kollega.'
        ),
        steps: [
          L('Ask AI to explain its reasoning', 'Be AI förklara sitt resonemang'),
          L('Cross-check factual claims with a reliable source', 'Kontrollera faktapåståenden mot en pålitlig källa')
        ]
      },
      {
        id: 'l1-t3', type: 'must_know',
        title: L('AI has a knowledge cutoff', 'AI har ett kunskapsstopp'),
        summary: L(
          "AI was trained up to a certain date. It doesn't know recent events.",
          'AI tränades fram till ett visst datum. Den känner inte till senaste händelser.'
        ),
        steps: [
          L("Ask Claude when its knowledge cuts off", 'Fråga Claude när dess kunskap tar slut'),
          L('For current events, use a web search tool', 'För aktuella händelser, använd en webbsökning')
        ],
        demo: {
          kind: 'reveal',
          q: L("What happens if you ask Claude about last week's news?", 'Vad händer om du frågar Claude om förra veckans nyheter?'),
          a: L(
            "Claude will either say it doesn't know, make an educated guess, or — if it has web search — look it up. Always check the date on the information you receive.",
            'Claude kommer antingen säga att den inte vet, gissa kvalificerat, eller — om den har webbsökning — slå upp det. Kontrollera alltid datumet på informationen du får.'
          )
        }
      },
      {
        id: 'l1-t4', type: 'must_know',
        title: L('One question at a time', 'En fråga åt gången'),
        summary: L(
          'Asking multiple questions at once leads to shallow answers on each.',
          'Att ställa flera frågor samtidigt ger ytliga svar på varje.'
        ),
        steps: [
          L('Pick your most important question', 'Välj din viktigaste fråga'),
          L('Ask follow-ups after getting a good answer', 'Ställ följdfrågor efter ett bra svar')
        ],
        demo: {
          kind: 'before_after',
          before: L('What is machine learning, how does it work, what are the types, and where is it used?', 'Vad är maskininlärning, hur fungerar det, vilka typer finns, och var används det?'),
          after: L('What is machine learning, explained simply?', 'Vad är maskininlärning, enkelt förklarat?')
        }
      },
      {
        id: 'l1-t5', type: 'must_know',
        title: L("AI doesn't know your context unless you share it", 'AI känner inte din kontext om du inte delar den'),
        summary: L(
          'AI starts every conversation knowing nothing about you. It only knows what you tell it.',
          'AI börjar varje samtal utan att veta något om dig. Den vet bara det du berättar.'
        )
      },
      {
        id: 'l1-t6', type: 'nice_to_have',
        title: L('Ask for simple explanations', 'Be om enkla förklaringar'),
        summary: L(
          'Adding "explain simply" or "like I\'m 12" dramatically changes complexity.',
          'Tillägget "förklara enkelt" eller "som jag är 12" ändrar svaret radikalt.'
        ),
        demo: {
          kind: 'before_after',
          before: L('Explain blockchain', 'Förklara blockchain'),
          after: L("Explain blockchain like I'm 12 years old", 'Förklara blockchain som jag är 12 år gammal')
        }
      },
      {
        id: 'l1-t7', type: 'nice_to_have',
        title: L('Continue with follow-ups', 'Fortsätt med följdfrågor'),
        summary: L(
          "You don't need a new chat for every question. Build on previous answers.",
          'Du behöver inte starta ett nytt samtal för varje fråga. Bygg vidare på tidigare svar.'
        )
      },
      {
        id: 'l1-t8', type: 'nice_to_have',
        title: L('Summarize long texts', 'Sammanfatta långa texter'),
        summary: L(
          'Paste an article or email and ask for a summary.',
          'Klistra in en artikel eller mejl och be om en sammanfattning.'
        ),
        steps: [
          L('Paste the text', 'Klistra in texten'),
          L('Ask: "Summarize this in 3 bullet points"', 'Be: "Sammanfatta i 3 punkter"')
        ]
      },
      {
        id: 'l1-t9', type: 'nice_to_have',
        title: L('Try different phrasings', 'Prova olika formuleringar'),
        summary: L(
          'Rephrasing a question — even slightly — can produce a much better answer.',
          'Att formulera om en fråga — även lite — kan ge ett mycket bättre svar.'
        )
      },
      {
        id: 'l1-t10', type: 'nice_to_have',
        title: L('Check your writing', 'Granska din text'),
        summary: L(
          'Paste an email or message and ask for grammar, clarity, or tone feedback.',
          'Klistra in ett mejl eller meddelande och be om feedback på grammatik, tydlighet eller ton.'
        )
      },
      {
        id: 'l1-t11', type: 'nice_to_have',
        title: L('Use AI as a translator', 'Använd AI som översättare'),
        summary: L(
          'AI translates between virtually any language pair with high accuracy.',
          'AI översätter mellan i stort sett alla språkpar med hög träffsäkerhet.'
        )
      },
      {
        id: 'l1-t12', type: 'nice_to_have',
        title: L('AI forgets between chats', 'AI glömmer mellan samtal'),
        summary: L(
          'Each new chat is a blank slate. Re-share context each time (unless using Projects).',
          'Varje nytt samtal är ett blankt blad. Dela kontext på nytt varje gång (utom i Projects).'
        )
      },
      {
        id: 'l1-t13', type: 'nice_to_have',
        title: L('Ask yes/no when you need clarity', 'Fråga ja/nej för tydlighet'),
        summary: L(
          'Sometimes the best prompt is the simplest. "Is X true?" cuts through noise.',
          'Ibland är den enklaste prompten bäst. "Är X sant?" skär igenom bruset.'
        )
      }
    ]
  },

  {
    id: 2,
    roman: '2',
    color: 'var(--l2)',
    colorSoft: 'var(--l2-soft)',
    colorDeep: '#8E6B1F',
    title: L('Communicate', 'Kommunicerar'),
    model: L('AI = a conversation partner I can influence', 'AI = en samtalspartner jag kan påverka'),
    tagline: L("You've moved past search. Now you shape responses.", 'Du har lämnat sökmotorn. Nu formar du svaren.'),
    description: L(
      "Context, format, length, tone — these are the controls you learn to use. The answer is no longer something you get; it's something you shape.",
      'Kontext, format, längd, ton — det är ratten du lär dig vrida. Svaret är inte längre något du får; det är något du formar.'
    ),
    transition: L("You realize you can design the situation before the answer comes.", 'Du inser att du kan designa situationen innan svaret kommer.'),
    tips: [
      {
        id: 'l2-t1', type: 'must_know',
        title: L('Give context before your question', 'Ge kontext före din fråga'),
        summary: L('Background information dramatically improves answer quality.', 'Bakgrundsinformation förbättrar svarskvaliteten dramatiskt.'),
        steps: [
          L('State who you are or your situation', 'Berätta vem du är eller din situation'),
          L('Then ask your question', 'Ställ sedan din fråga')
        ],
        demo: {
          kind: 'before_after',
          before: L('How do I write a good introduction?', 'Hur skriver jag en bra inledning?'),
          after: L("I'm writing a research paper on climate change for a university course. How do I write a compelling introduction?", 'Jag skriver en uppsats om klimatförändringar för en universitetskurs. Hur skriver jag en gripande inledning?')
        }
      },
      {
        id: 'l2-t2', type: 'must_know',
        title: L('Specify the desired format', 'Specificera önskat format'),
        summary: L('Tell AI whether you want a list, table, paragraph, or numbered steps.', 'Säg till AI om du vill ha en lista, tabell, prosa eller numrerade steg.'),
        steps: [
          L('State the format explicitly', 'Ange formatet explicit'),
          L('Examples: "as a bullet list", "in a table"', 'Exempel: "som punktlista", "i en tabell"')
        ],
        demo: {
          kind: 'reveal',
          q: L('What formats can you request?', 'Vilka format kan du be om?'),
          a: L('Bullet list, numbered list, table, paragraph, markdown, JSON, code block, step-by-step instructions, Q&A format, pros and cons list — and many more. Just name it.', 'Punktlista, numrerad lista, tabell, prosa, markdown, JSON, kodblock, stegvisa instruktioner, Q&A-format, för- och nackdelar — och mycket mer. Bara namnge det.')
        }
      },
      {
        id: 'l2-t3', type: 'must_know',
        title: L('Ask for shorter or longer responses', 'Be om kortare eller längre svar'),
        summary: L('"Be brief", "in one sentence", or "give me the full picture" all work.', '"Var kortfattad", "i en mening", eller "ge mig hela bilden" fungerar.')
      },
      {
        id: 'l2-t4', type: 'must_know',
        title: L('Iterate on the response', 'Iterera på svaret'),
        summary: L('"Make it shorter", "use a more formal tone", "give me 3 alternatives" — all work mid-conversation.', '"Gör kortare", "använd en mer formell ton", "ge mig 3 alternativ" — fungerar mitt i samtalet.'),
        steps: [
          L('Get an initial response', 'Få ett första svar'),
          L('Ask for one specific change', 'Be om en specifik ändring'),
          L('Repeat until satisfied', 'Upprepa tills du är nöjd')
        ]
      },
      {
        id: 'l2-t5', type: 'must_know',
        title: L('Upload files and images', 'Ladda upp filer och bilder'),
        summary: L('Attach a PDF, spreadsheet, image, or document. AI can read and answer questions about it.', 'Bifoga PDF, kalkylark, bild eller dokument. AI kan läsa och svara på frågor om det.'),
        steps: [
          L('Click the attachment icon', 'Klicka på bilage-ikonen'),
          L('Upload your file', 'Ladda upp din fil'),
          L('Ask a specific question about its content', 'Ställ en specifik fråga om innehållet')
        ]
      },
      {
        id: 'l2-t6', type: 'must_know',
        title: L('Verify important claims', 'Verifiera viktiga påståenden'),
        summary: L('AI can confidently cite incorrect stats or fake quotes. Verify high-stakes facts.', 'AI kan självsäkert citera fel statistik eller falska citat. Verifiera viktiga fakta.'),
        demo: {
          kind: 'reveal',
          q: L('What types of claims need verification?', 'Vilka påståenden behöver verifieras?'),
          a: L("Statistics, scientific studies, quotes from people, legal information, medical advice, recent news, and anything you'll share with others.", 'Statistik, vetenskapliga studier, citat från personer, juridisk information, medicinska råd, aktuella nyheter, och allt du ska dela med andra.')
        }
      },
      { id: 'l2-t7', type: 'nice_to_have', title: L('Specify your audience', 'Specificera målgrupp'), summary: L('"Explain to a non-technical manager" or "for teenagers" shapes everything.', '"Förklara för en icke-teknisk chef" eller "för tonåringar" formar allt.'), demo: { kind: 'before_after', before: L('Explain APIs', 'Förklara API:er'), after: L('Explain APIs to a marketing manager with no technical background', 'Förklara API:er för en marknadschef utan teknisk bakgrund') } },
      { id: 'l2-t8', type: 'nice_to_have', title: L('Ask for pros and cons', 'Be om för- och nackdelar'), summary: L('A pros/cons list forces balanced analysis instead of one-sided enthusiasm.', 'En för/nackdel-lista tvingar fram balanserad analys istället för ensidig entusiasm.') },
      { id: 'l2-t9', type: 'nice_to_have', title: L('Request concrete examples', 'Be om konkreta exempel'), summary: L('Abstract explanations become clear with examples. Ask: "Can you give me a real-world example?"', 'Abstrakta förklaringar blir tydliga med exempel. Fråga: "Kan du ge ett verkligt exempel?"') },
      { id: 'l2-t10', type: 'nice_to_have', title: L('Ask for step-by-step', 'Be om steg för steg'), summary: L('For any process, "give me step-by-step" turns vague guidance into a checklist.', 'För vilken process som helst, "steg för steg" gör vag vägledning till en checklista.') },
      { id: 'l2-t11', type: 'nice_to_have', title: L('Share drafts, ask for feedback', 'Dela utkast, be om feedback'), summary: L('Paste your draft and ask: "What would make this stronger?"', 'Klistra in ditt utkast och fråga: "Vad skulle göra detta starkare?"') },
      { id: 'l2-t12', type: 'nice_to_have', title: L('Ask for multiple options', 'Be om flera alternativ'), summary: L('"Give me 5 options" prevents you from anchoring on the first answer.', '"Ge mig 5 alternativ" hindrar dig från att fästa vid det första svaret.') },
      { id: 'l2-t13', type: 'nice_to_have', title: L('Specify tone', 'Specificera ton'), summary: L('Formal, casual, friendly, direct, empathetic, humorous — name the tone.', 'Formell, vardaglig, vänlig, direkt, empatisk, humoristisk — namnge tonen.') }
    ]
  },

  {
    id: 3,
    roman: '3',
    color: 'var(--l3)',
    colorSoft: 'var(--l3-soft)',
    colorDeep: '#B65A3C',
    title: L('Direct', 'Styr'),
    model: L('AI = a capable but junior colleague needing clear instructions', 'AI = en kapabel men junior medarbetare som behöver tydliga instruktioner'),
    tagline: L('You design the conditions before the first word is generated.', 'Du designar förutsättningarna innan det första ordet skapas.'),
    description: L("The critical shift: Level 2 reacts to output. Level 3 designs the conditions for output. You stop fixing answers and start shaping prompts.", 'Det avgörande skiftet: Nivå 2 reagerar på output. Nivå 3 designar förutsättningarna för output. Du slutar laga svar och börjar forma promptar.'),
    transition: L('You realize context vanishes — AI forgets who you are.', 'Du inser att kontext försvinner — AI minns inte vem du är.'),
    tips: [
      {
        id: 'l3-t1', type: 'must_know',
        title: L('Assign a role with a purpose', 'Tilldela en roll med syfte'),
        summary: L("Telling AI who it is shapes how it thinks, not just how it sounds.", 'Att säga vem AI är formar hur den tänker, inte bara hur den låter.'),
        steps: [
          L('Define the role', 'Definiera rollen'),
          L('Specify what to prioritize or avoid', 'Specificera vad som ska prioriteras eller undvikas')
        ],
        demo: {
          kind: 'before_after',
          before: L('Review my business plan', 'Granska min affärsplan'),
          after: L('You are a critical venture capitalist who has seen 500 pitches fail. Review my business plan and identify the 3 most likely reasons investors would pass.', 'Du är en kritisk riskkapitalist som sett 500 pitcher misslyckas. Granska min affärsplan och hitta de 3 mest troliga skälen till att investerare skulle tacka nej.')
        }
      },
      {
        id: 'l3-t2', type: 'must_know',
        title: L('Specify format, tone, audience, length upfront', 'Specificera format, ton, målgrupp, längd i förväg'),
        summary: L("Design the output before asking for it. Don't describe what you want after getting something wrong.", 'Designa output innan du ber om den. Beskriv inte vad du ville efter du fått fel sak.'),
        steps: [
          L('State format (e.g. bullet list)', 'Ange format (t.ex. punktlista)'),
          L('State tone (e.g. professional)', 'Ange ton (t.ex. professionell)'),
          L('State audience (e.g. non-technical manager)', 'Ange målgrupp (t.ex. icke-teknisk chef)'),
          L('State length (e.g. max 200 words)', 'Ange längd (t.ex. max 200 ord)')
        ]
      },
      {
        id: 'l3-t3', type: 'must_know',
        title: L('Use few-shot examples', 'Använd few-shot-exempel'),
        summary: L('Show AI exactly what you want with 1–3 examples. "Like this:" beats 100 words of description.', 'Visa AI exakt vad du vill ha med 1–3 exempel. "Så här:" slår 100 ord beskrivning.'),
        demo: { kind: 'reveal', q: L('What is few-shot prompting?', 'Vad är few-shot prompting?'), a: L("You give 1–3 examples of the format or style you want, then ask AI to continue the pattern. AI learns your format instantly.", 'Du ger 1–3 exempel på det format eller stil du vill ha, sedan ber du AI fortsätta mönstret. AI lär sig formatet direkt.') }
      },
      { id: 'l3-t4', type: 'must_know', title: L('Break complex tasks into steps', 'Bryt ner komplexa uppgifter i steg'), summary: L("Don't ask for a finished essay in one shot. Guide AI through research → outline → draft → revision.", 'Be inte om en färdig text på en gång. Vägled AI genom research → disposition → utkast → revision.') },
      { id: 'l3-t5', type: 'must_know', title: L('Understand hallucinations — challenge', 'Förstå hallucinationer — utmana'), summary: L('AI fabricates details confidently. Ask it to justify claims, cite sources, or express uncertainty.', 'AI hittar på detaljer självsäkert. Be den motivera påståenden, ange källor, eller uttrycka osäkerhet.'), demo: { kind: 'reveal', q: L('What are common hallucination traps?', 'Vilka är vanliga hallucinations-fällor?'), a: L('Fake citations and studies, incorrect statistics, wrong dates, misattributed quotes, non-existent laws, invented API methods in code, and plausible-but-wrong historical details.', 'Falska citat och studier, fel statistik, fel datum, felaktigt tillskrivna citat, lagar som inte finns, påhittade API-metoder i kod, och rimligt-men-fel historiska detaljer.') } },
      { id: 'l3-t6', type: 'must_know', title: L('Know when NOT to use AI', 'Veta när AI inte ska användas'), summary: L('Confidential data, legal/medical decisions without verification, anything requiring real-time data.', 'Konfidentiella data, juridiska/medicinska beslut utan verifiering, allt som kräver realtidsdata.') },
      { id: 'l3-t7', type: 'nice_to_have', title: L('Tell AI what NOT to do', 'Säg vad AI INTE ska göra'), summary: L("Negative constraints are as powerful as positive ones. \"Don't use jargon. Don't recommend paid tools.\"", 'Negativa begränsningar är lika starka som positiva. "Använd inte jargong. Rekommendera inte betalverktyg."') },
      { id: 'l3-t8', type: 'nice_to_have', title: L('Use constraints to sharpen output', 'Använd begränsningar för skärpa'), summary: L('"In exactly 3 bullet points" or "max 150 words" forces precision.', '"I exakt 3 punkter" eller "max 150 ord" tvingar fram precision.') },
      { id: 'l3-t9', type: 'nice_to_have', title: L('Ask AI to think step by step', 'Be AI tänka steg för steg'), summary: L('Adding "think step by step" before complex questions improves reasoning.', 'Tillägget "tänk steg för steg" före komplexa frågor förbättrar resonemanget.'), demo: { kind: 'before_after', before: L('Should I accept this job offer?', 'Ska jag tacka ja till det här jobberbjudandet?'), after: L('Think step by step: what factors should I consider when evaluating this job offer?', 'Tänk steg för steg: vilka faktorer bör jag väga när jag utvärderar det här jobberbjudandet?') } },
      { id: 'l3-t10', type: 'nice_to_have', title: L('Chain prompts deliberately', 'Kedja promptar avsiktligt'), summary: L('The output of one prompt becomes the input of the next.', 'Output från en prompt blir input till nästa.') },
      { id: 'l3-t11', type: 'nice_to_have', title: L('Ask for criticism of your own work', 'Be om kritik av ditt arbete'), summary: L('"What are the 3 weakest parts of this argument?" beats "Is this good?"', '"Vilka är de 3 svagaste delarna i argumentet?" slår "Är detta bra?"') },
      { id: 'l3-t12', type: 'nice_to_have', title: L('Use a persona to avoid sycophancy', 'Använd en persona mot inställsamhet'), summary: L('AI tends to agree. Assign a skeptic role for genuine pushback.', 'AI tenderar att hålla med. Ge den en skeptisk roll för äkta motargument.') },
      { id: 'l3-t13', type: 'nice_to_have', title: L('Test your prompt with edge cases', 'Testa din prompt med extremfall'), summary: L('Try unusual inputs to see where the prompt breaks.', 'Prova ovanliga indata för att se var prompten brister.') }
    ]
  },

  {
    id: 4,
    roman: '4',
    color: 'var(--l4)',
    colorSoft: 'var(--l4-soft)',
    colorDeep: '#7C3B1F',
    title: L('Think With AI', 'Tänker med AI'),
    model: L('AI = a thought partner I actively manage', 'AI = en tankepartner jag aktivt hanterar'),
    tagline: L("You're not producing text anymore — you're sharpening thought.", 'Du producerar inte längre text — du slipar tanke.'),
    description: L('You use AI to challenge your assumptions, manage cognitive load, and steelman opposing views. The output is your own better thinking.', 'Du använder AI för att utmana dina antaganden, hantera kognitiv belastning, och stärka motsidans argument. Utfallet är ditt eget bättre tänkande.'),
    transition: L('You want AI to do things, not just answer things.', 'Du vill att AI ska göra saker, inte bara svara på saker.'),
    tips: [
      { id: 'l4-t1', type: 'must_know', title: L('Chain-of-thought: reason first', 'Chain-of-thought: resonera först'), summary: L('Explicitly asking AI to reason first improves accuracy on complex problems.', 'Att uttryckligen be AI resonera först förbättrar precisionen i komplexa problem.'), demo: { kind: 'before_after', before: L("What's the best pricing model for my SaaS?", 'Vilken är bästa prismodellen för min SaaS?'), after: L('Before answering, think through the tradeoffs of different SaaS pricing models, then recommend one.', 'Innan du svarar, tänk igenom avvägningarna för olika SaaS-prismodeller, rekommendera sedan en.') } },
      { id: 'l4-t2', type: 'must_know', title: L('Manage the context window', 'Hantera kontextfönstret'), summary: L("AI memory is the current chat. Long chats degrade — summarize and restart.", "AI:s minne är det aktuella samtalet. Långa samtal degraderar — sammanfatta och börja om.") },
      { id: 'l4-t3', type: 'must_know', title: L('Use Projects for persistent context', 'Använd Projects för bestående kontext'), summary: L("Claude's Projects let you define persistent instructions and upload reference documents.", 'Claude:s Projects låter dig definiera bestående instruktioner och ladda upp referensdokument.') },
      { id: 'l4-t4', type: 'must_know', title: L('Steelman the opposing view', 'Stärk motsidans argument'), summary: L('Ask AI to make the strongest possible case against your position.', 'Be AI bygga det starkaste möjliga argumentet mot din position.'), demo: { kind: 'reveal', q: L('What is steelmanning?', 'Vad är steelmanning?'), a: L("The opposite of a strawman. You construct the strongest version of an opposing argument. It forces genuine engagement with counterarguments and leads to more robust decisions.", 'Motsatsen till halmgubbe. Du konstruerar den starkaste versionen av motståndarens argument. Det tvingar fram äkta engagemang med motargument och ger robustare beslut.') } },
      { id: 'l4-t5', type: 'must_know', title: L('Find weaknesses in your reasoning', 'Hitta svagheter i ditt resonemang'), summary: L('"What assumptions am I making that might be wrong?" is one of the most valuable prompts you can run.', '"Vilka antaganden gör jag som kan vara fel?" är en av de mest värdefulla promptar du kan köra.') },
      { id: 'l4-t6', type: 'nice_to_have', title: L('Use AI as a rubber duck', 'Använd AI som rubber duck'), summary: L('Explaining your problem out loud often reveals the solution.', 'Att förklara problemet högt avslöjar ofta lösningen.') },
      { id: 'l4-t7', type: 'nice_to_have', title: L('Ask "what am I missing?"', 'Fråga "vad missar jag?"'), summary: L('After presenting a plan, this surfaces blind spots you cannot see.', 'Efter du presenterat en plan synliggör frågan blinda fläckar du själv missar.') },
      { id: 'l4-t8', type: 'nice_to_have', title: L('Request explicit confidence levels', 'Be om uttalad säkerhetsgrad'), summary: L('"How confident are you, and what would change your answer?" forces epistemic honesty.', '"Hur säker är du, och vad skulle ändra ditt svar?" tvingar fram epistemisk ärlighet.') },
      { id: 'l4-t9', type: 'nice_to_have', title: L('Ask for explicit assumptions', 'Be om explicita antaganden'), summary: L('"List the assumptions built into this recommendation" makes hidden reasoning visible.', '"Lista antagandena i den här rekommendationen" gör dolt resonemang synligt.') },
      { id: 'l4-t10', type: 'nice_to_have', title: L('Use extended thinking for hard problems', 'Använd extended thinking för svåra problem'), summary: L('Claude has an extended thinking mode for complex reasoning. Enable it when accuracy matters more than speed.', 'Claude har ett extended thinking-läge för komplext resonemang. Aktivera när precision väger tyngre än hastighet.') },
      { id: 'l4-t11', type: 'nice_to_have', title: L('Know when AI is the wrong tool', 'Veta när AI är fel verktyg'), summary: L("AI is bad at: knowing what's true, real-time data, precise calculations, knowing your true preferences.", 'AI är dålig på: att veta vad som är sant, realtidsdata, precisa beräkningar, känna dina riktiga preferenser.') },
      { id: 'l4-t12', type: 'nice_to_have', title: L('Learn from AI rewrites', 'Lär av AI:s omskrivningar'), summary: L('Ask AI to rewrite your text, then study the differences. A personal writing coach.', 'Be AI skriva om din text, studera skillnaderna. En personlig skrivcoach.') }
    ]
  },

  {
    id: 5,
    roman: '5',
    color: 'var(--l5)',
    colorSoft: 'var(--l5-soft)',
    colorDeep: '#3F1E1F',
    title: L('Build With AI', 'Bygger med AI'),
    model: L('AI = a component in a larger system', 'AI = en komponent i ett större system'),
    tagline: L("AI is infrastructure you compose, not a chat you visit.", 'AI är infrastruktur du komponerar, inte en chatt du besöker.'),
    description: L("You call the API, write system prompts, give Claude tools to use, and chain models into workflows. The interface disappears.", 'Du kallar API:t, skriver systempromptar, ger Claude verktyg att använda, och kedjar modeller till workflows. Gränssnittet försvinner.'),
    transition: L('You realize one agent is not enough.', 'Du inser att en agent inte räcker.'),
    tips: [
      {
        id: 'l5-t1', type: 'must_know',
        title: L('Call the Claude API programmatically', 'Kalla Claude:s API programmatiskt'),
        summary: L('Everything in the UI can be automated via API. One HTTP call, JSON in, JSON out.', 'Allt i UI:t kan automatiseras via API:t. Ett HTTP-anrop, JSON in, JSON ut.'),
        steps: [
          L('Install the SDK: npm install @anthropic-ai/sdk', 'Installera SDK:t: npm install @anthropic-ai/sdk'),
          L('Get an API key from console.anthropic.com', 'Hämta API-nyckel från console.anthropic.com'),
          L('Write your first API call', 'Skriv ditt första API-anrop')
        ],
        demo: {
          kind: 'code',
          q: L('Minimal API call example', 'Minimalt API-anrop'),
          a: `import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const msg = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Hello, Claude" }],
});
console.log(msg.content[0].text);`
        }
      },
      { id: 'l5-t2', type: 'must_know', title: L('Write effective system prompts', 'Skriv effektiva systempromptar'), summary: L("The system prompt defines AI's persistent persona, constraints, and instructions.", "Systemprompten definierar AI:s bestående persona, begränsningar och instruktioner.") },
      { id: 'l5-t3', type: 'must_know', title: L('Tool use / function calling', 'Tool use / function calling'), summary: L('Give Claude tools to call. AI decides when to call them; you execute them.', 'Ge Claude verktyg att kalla. AI bestämmer när — du kör.') },
      { id: 'l5-t4', type: 'must_know', title: L('Prompt chaining', 'Prompt chaining'), summary: L('The output of one API call becomes the input of the next.', 'Output från ett API-anrop blir input till nästa.') },
      { id: 'l5-t5', type: 'must_know', title: L('RAG: connect AI to your documents', 'RAG: koppla AI till dina dokument'), summary: L('Retrieval-Augmented Generation lets AI answer questions on your own data.', 'Retrieval-Augmented Generation låter AI svara på frågor om dina egna data.') },
      { id: 'l5-t6', type: 'nice_to_have', title: L('Streaming responses', 'Strömmande svar'), summary: L("Stream tokens as they're generated for a better UX in chat interfaces.", 'Strömma tokens vartefter de genereras för bättre UX i chattgränssnitt.') },
      { id: 'l5-t7', type: 'nice_to_have', title: L('Structured output (JSON)', 'Strukturerad output (JSON)'), summary: L('Respond in JSON with a defined schema. Easy to process programmatically.', 'Svara i JSON med definierat schema. Lätt att processa programmatiskt.') },
      { id: 'l5-t8', type: 'nice_to_have', title: L('Prompt caching for cost', 'Prompt caching för kostnad'), summary: L('Cache long system prompts or context to reduce cost and latency.', 'Cacha långa systempromptar eller kontext för att minska kostnad och latens.') },
      { id: 'l5-t9', type: 'nice_to_have', title: L('Claude Code CLI', 'Claude Code CLI'), summary: L('An agentic coding assistant in your terminal. Reads your codebase, makes changes.', 'En agentisk kodassistent i terminalen. Läser kodbasen, gör ändringar.') },
      { id: 'l5-t10', type: 'nice_to_have', title: L('Batch API for bulk processing', 'Batch-API för bulk'), summary: L('Process thousands of items asynchronously at 50% cost.', 'Processa tusentals enheter asynkront till halva kostnaden.') },
      { id: 'l5-t11', type: 'nice_to_have', title: L('Multimodal API: images and PDFs', 'Multimodalt API: bilder och PDF:er'), summary: L('Pass images and PDFs directly in your API calls.', 'Skicka bilder och PDF:er direkt i API-anrop.') },
      { id: 'l5-t12', type: 'nice_to_have', title: L('Build a simple chatbot', 'Bygg en enkel chatbot'), summary: L('A chatbot is just an API call that includes conversation history every request.', 'En chatbot är bara ett API-anrop som inkluderar samtalshistoriken varje anrop.') }
    ]
  },

  {
    id: 6,
    roman: '6',
    color: 'var(--l6)',
    colorSoft: 'var(--l6-soft)',
    colorDeep: '#0E0D0C',
    title: L('Orchestrate AI', 'Orkestrerar AI'),
    model: L('AI = infrastructure', 'AI = infrastruktur'),
    tagline: L("You design systems. Agents talk to agents.", 'Du designar system. Agenter pratar med agenter.'),
    description: L('Multiple agents collaborate, run autonomously, and integrate deeply with external systems. You move from being the operator to being the architect.', 'Flera agenter samarbetar, kör autonomt, och integrerar djupt med externa system. Du går från operatör till arkitekt.'),
    transition: L('The horizon — this level has no end.', 'Horisonten — den här nivån har inget tak.'),
    tips: [
      { id: 'l6-t1', type: 'must_know', title: L('Multi-agent architecture', 'Multi-agent-arkitektur'), summary: L('A lead agent coordinates; specialist agents execute.', 'En lead-agent koordinerar; specialistagenter exekverar.'), demo: { kind: 'reveal', q: L('Example multi-agent setup', 'Exempel på multi-agent-setup'), a: L('A research pipeline: Coordinator receives a question → dispatches to Search Agent + Fact-Check Agent → Synthesis Agent combines results → Editor Agent formats the report. Each agent has a focused system prompt and clear output schema.', 'En research-pipeline: Koordinator får en fråga → skickar till Search Agent + Fact-Check Agent → Synthesis Agent kombinerar → Editor Agent formaterar rapporten. Varje agent har en fokuserad systemprompt och tydligt output-schema.') } },
      { id: 'l6-t2', type: 'must_know', title: L('MCP: Model Context Protocol', 'MCP: Model Context Protocol'), summary: L('MCP connects Claude to external systems through a standardized interface.', 'MCP kopplar Claude till externa system via ett standardiserat gränssnitt.') },
      { id: 'l6-t3', type: 'must_know', title: L('Autonomous workflows', 'Autonoma workflows'), summary: L('Agents that run without human input per step. Define success criteria upfront.', 'Agenter som kör utan mänsklig input per steg. Definiera framgångskriterier i förväg.') },
      { id: 'l6-t4', type: 'must_know', title: L('Agent memory and state', 'Agentminne och tillstånd'), summary: L('Short-term (conversation), working (task), long-term (vector store).', 'Korttids (samtal), arbets (uppgift), långtids (vektorstore).') },
      { id: 'l6-t5', type: 'must_know', title: L('Error handling and fallbacks', 'Felhantering och fallbacks'), summary: L('Agents fail silently. Build retry, validation, and human-escalation paths.', 'Agenter fallerar tyst. Bygg retry, validering och människo-eskalering.') },
      { id: 'l6-t6', type: 'nice_to_have', title: L('Parallelization patterns', 'Parallelliseringsmönster'), summary: L('Promise.all or a queue. Dramatically speeds up complex workflows.', 'Promise.all eller kö. Snabbar upp komplexa workflows dramatiskt.') },
      { id: 'l6-t7', type: 'nice_to_have', title: L('Evaluating AI system performance', 'Utvärdera AI-systems prestanda'), summary: L('Build an eval harness: test cases, expected outputs, automated scoring.', 'Bygg en utvärderingsrigg: testfall, förväntade outputs, automatisk scoring.') },
      { id: 'l6-t8', type: 'nice_to_have', title: L('Claude Code as autonomous agent', 'Claude Code som autonom agent'), summary: L('Multi-step coding tasks, command execution, pushing code — with minimal involvement.', 'Flerstegs kodningsuppgifter, kommando-exekvering, push:a kod — med minimal involvering.') },
      { id: 'l6-t9', type: 'nice_to_have', title: L('Security in AI systems', 'Säkerhet i AI-system'), summary: L('Prompt injection, data leakage, unauthorized tool calls. Validate everything.', 'Prompt injection, dataläckor, otillåtna verktygsanrop. Validera allt.'), demo: { kind: 'reveal', q: L('What is prompt injection?', 'Vad är prompt injection?'), a: L('Malicious instructions hidden in data that an AI processes. Defend with output validation, sandboxing, and never passing raw user input directly as system-level instructions.', 'Skadliga instruktioner gömda i data som AI processar. Försvara med output-validering, sandboxning, och skicka aldrig rå användarinput direkt som system-nivå-instruktioner.') } },
      { id: 'l6-t10', type: 'nice_to_have', title: L('Human-in-the-loop design', 'Human-in-the-loop-design'), summary: L("Don't fully automate decisions with irreversible consequences.", 'Automatisera inte beslut med irreversibla konsekvenser fullt ut.') },
      { id: 'l6-t11', type: 'nice_to_have', title: L('Continuous improvement', 'Kontinuerlig förbättring'), summary: L('Log inputs, outputs, feedback. Use it to improve prompts and catch regressions.', 'Logga input, output, feedback. Använd det för att förbättra promptar och fånga regressioner.') }
    ]
  }
];

export const STR = {
  brand: { en: 'Claude Guide', sv: 'Claude Guide' },
  levels: { en: 'Levels', sv: 'Nivåer' },
  journey: { en: 'Journey', sv: 'Resa' },
  introHero: { en: 'Become fluent in Claude.', sv: 'Bli flytande i Claude.' },
  introHeroAccent: { en: 'Six levels.', sv: 'Sex nivåer.' },
  introLede: { en: "Most guides teach prompts. This one teaches mental models — six of them, from typing your first question to orchestrating autonomous agents. Pick a level. Try the demos. Track what you've mastered.", sv: 'De flesta guider lär ut promptar. Den här lär ut mentala modeller — sex stycken, från din första fråga till orkestrering av autonoma agenter. Välj en nivå. Testa demonstrationerna. Spåra vad du bemästrat.' },
  start: { en: 'Start at Level 1', sv: 'Börja på Nivå 1' },
  jumpJourney: { en: 'See my journey', sv: 'Se min resa' },
  mentalModel: { en: 'Mental model', sv: 'Mental modell' },
  whenYouReReady: { en: "When you're ready", sv: 'När du är redo' },
  mustKnow: { en: 'Must know', sv: 'Måste-kunna' },
  niceToHave: { en: 'Nice to have', sv: 'Bra att kunna' },
  coreSkills: { en: '— core competencies for this level', sv: '— kärnkompetenser för den här nivån' },
  goDeeper: { en: '— go deeper at your own pace', sv: '— gå djupare i din takt' },
  practiceSteps: { en: 'Practice steps', sv: 'Övningssteg' },
  tryItLive: { en: 'Try it', sv: 'Prova' },
  before: { en: 'Before', sv: 'Före' },
  after: { en: 'After', sv: 'Efter' },
  status: { en: 'Status', sv: 'Status' },
  wantToLearn: { en: 'Want to learn', sv: 'Vill lära mig' },
  mastered: { en: 'Mastered', sv: 'Bemästrad' },
  showAnswer: { en: 'Show answer', sv: 'Visa svar' },
  hideAnswer: { en: 'Hide answer', sv: 'Dölj svar' },
  expand: { en: 'Open', sv: 'Öppna' },
  collapse: { en: 'Close', sv: 'Stäng' },
  prev: { en: 'Previous', sv: 'Föregående' },
  next: { en: 'Next', sv: 'Nästa' },
  level: { en: 'Level', sv: 'Nivå' },
  journeyTitle: { en: 'My Journey', sv: 'Min resa' },
  journeySub: { en: "A quiet ledger of what you've picked up — and what you've set aside.", sv: 'En stilla bok över vad du plockat upp — och vad du lagt åt sidan.' },
  mustKnowsMastered: { en: 'must-knows mastered', sv: 'måste-kunna bemästrade' },
  toMaster: { en: 'To master', sv: 'Att bemästra' },
  bookmarks: { en: 'Bookmarked to learn', sv: 'Bokmärkta att lära' },
  allDone: { en: 'All mastered ✓', sv: 'Allt bemästrat ✓' },
  emptyMaster: { en: 'Every must-know is mastered. Quietly remarkable.', sv: 'Varje måste-kunna är bemästrad. Stilla imponerande.' },
  emptyBookmarks: { en: 'Nothing bookmarked yet. Open a level and mark tips as Want to learn.', sv: 'Inget bokmärkt än. Öppna en nivå och markera tips som Vill lära mig.' },
  remaining: { en: 'remaining', sv: 'kvar' },
  bookmarked: { en: 'bookmarked', sv: 'bokmärkta' },
  tierBeginner: { en: 'Beginner', sv: 'Nybörjare' },
  tierIntermediate: { en: 'Intermediate', sv: 'Mellan' },
  tierAdvanced: { en: 'Advanced', sv: 'Avancerad' },
  level1To6: { en: 'Level 1 → Level 6', sv: 'Nivå 1 → Nivå 6' },
  clawdHello: { en: "Hi! I'm Gawd. Pick a level — I'll be here.", sv: 'Hej! Jag heter Gawd. Välj en nivå — jag är här.' },
  clawdLevel: { en: "Take your time. There's no rush.", sv: 'Ta din tid. Ingen brådska.' },
  clawdMastered: { en: "Nice. That one's locked in.", sv: 'Snyggt. Den sitter.' },
  clawdHalfway: { en: "You're halfway through this level.", sv: 'Du är halvvägs genom nivån.' },
  clawdAllDone: { en: "Every must-know — done. Well done.", sv: 'Varje måste-kunna — klart. Bra jobbat.' },
  liveDemo: { en: 'Demo', sv: 'Demo' },
  side: { en: 'Side by side', sv: 'Sida vid sida' },
  emptyResponse: { en: 'See how wording changes the response →', sv: 'Se hur formuleringen förändrar svaret →' },
  asking: { en: 'Asking…', sv: 'Frågar…' },
  ask: { en: 'Ask Claude', sv: 'Fråga Claude' },
  resetDemo: { en: 'Reset', sv: 'Återställ' },
  loadingClaude: { en: 'Loading…', sv: 'Laddar…' },
};

export function getLevel(id) {
  return LEVELS.find(l => l.id === id);
}
