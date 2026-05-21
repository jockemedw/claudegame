import { SOURCES } from './sources'

export default {
  id: 2,
  title: 'I Communicate',
  tagline: 'Mental model: AI = a conversation partner I can influence',
  description: "You've moved beyond search. Now you're learning to shape AI responses by giving richer context and iterating on output.",
  color: 'level-2',
  hex: '#3b82f6',
  tips: [
    {
      id: 'l2-t1', type: 'must_know',
      title: 'Give context before your question',
      summary: 'Background information dramatically improves answer quality.',
      steps: ['State who you are or your situation', 'Then ask your question'],
      example: {
        type: 'before_after',
        label: 'See the improvement',
        before: { prompt: 'How do I write a good introduction?', note: 'No context' },
        after: { prompt: "I'm writing a research paper on climate change for a university course. How do I write a compelling introduction?", note: 'With context' }
      }
    },
    {
      id: 'l2-t2', type: 'must_know',
      title: 'Specify your desired format',
      summary: 'Tell AI whether you want a list, table, paragraph, numbered steps, or something else.',
      steps: ['State the format explicitly', 'Examples: "as a bullet list", "in a table", "in 3 steps"'],
      example: {
        type: 'reveal',
        question: 'What formats can you request?',
        answer: 'Bullet list, numbered list, table, paragraph, markdown, JSON, code block, headers and sections, step-by-step instructions, Q&A format, pros and cons list, executive summary — and many more. Just name it.'
      },
      source: SOURCES.anthropic,
    },
    {
      id: 'l2-t3', type: 'must_know',
      title: 'Ask for shorter or longer responses',
      summary: 'You control length. "Be brief", "in one sentence", or "give me the full picture" all work.',
      example: {
        type: 'slider',
        label: 'Response length control',
        leftLabel: '"Answer in one sentence"',
        rightLabel: '"Give me a comprehensive explanation"',
        leftDesc: 'Concise, scannable, easy to act on. Great for quick lookups and decisions.',
        rightDesc: 'Thorough, nuanced, good for learning. Covers edge cases and context.'
      }
    },
    {
      id: 'l2-t4', type: 'must_know',
      title: 'Iterate on the response',
      summary: '"Make it shorter", "use a more formal tone", "give me 3 alternatives" — these all work mid-conversation.',
      steps: ['Get an initial response', 'Ask for one specific change', 'Repeat until satisfied'],
    },
    {
      id: 'l2-t5', type: 'must_know',
      title: 'Upload files and images',
      summary: 'Attach a PDF, spreadsheet, image, or document. AI can read, summarize, and answer questions about it.',
      steps: ['Click the attachment icon', 'Upload your file', 'Ask a specific question about its content'],
    },
    {
      id: 'l2-t6', type: 'must_know',
      title: 'Source criticism — verify important claims',
      summary: 'AI can confidently cite incorrect statistics or attribute fake quotes. Always verify high-stakes facts.',
      steps: ['Identify the most important factual claim', 'Search for it in a primary source'],
      example: {
        type: 'reveal',
        question: 'What types of claims need verification?',
        answer: 'Statistics and percentages, scientific studies, quotes from people, legal information, medical advice, recent news, and anything you\'ll share with others or base important decisions on.'
      }
    },
    {
      id: 'l2-t7', type: 'nice_to_have',
      title: 'Specify your audience',
      summary: '"Explain to a non-technical manager", "write for teenagers", or "assume expert knowledge" shapes everything.',
      example: {
        type: 'before_after',
        label: 'Audience matters',
        before: { prompt: 'Explain APIs', note: 'No audience specified' },
        after: { prompt: 'Explain APIs to a marketing manager with no technical background', note: 'Audience specified' }
      },
      source: SOURCES.anthropic,
    },
    {
      id: 'l2-t8', type: 'nice_to_have',
      title: 'Ask for pros and cons',
      summary: 'A structured pros/cons list forces balanced analysis instead of one-sided enthusiasm.',
    },
    {
      id: 'l2-t9', type: 'nice_to_have',
      title: 'Request concrete examples',
      summary: 'Abstract explanations become clear with examples. Ask: "Can you give me a real-world example?"',
    },
    {
      id: 'l2-t10', type: 'nice_to_have',
      title: 'Ask for step-by-step instructions',
      summary: 'For any process, "give me step-by-step instructions" turns vague guidance into an actionable checklist.',
    },
    {
      id: 'l2-t11', type: 'nice_to_have',
      title: 'Share your draft, ask for feedback',
      summary: 'Paste your email, essay, or plan and ask: "What would make this stronger?"',
    },
    {
      id: 'l2-t12', type: 'nice_to_have',
      title: 'Ask for multiple options',
      summary: '"Give me 5 options" or "suggest 3 different approaches" prevents you from anchoring on the first answer.',
    },
    {
      id: 'l2-t13', type: 'nice_to_have',
      title: 'Specify tone',
      summary: 'Formal, casual, friendly, direct, empathetic, humorous — just name the tone you need.',
    },
  ]
}
