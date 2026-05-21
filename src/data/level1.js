import { SOURCES } from './sources'

export default {
  id: 1,
  title: 'I Ask',
  tagline: 'Mental model: AI = advanced search engine',
  description: "You know you can ask AI things, but you're still treating it like Google. This level builds your foundation for effective AI communication.",
  color: 'level-1',
  hex: '#22c55e',
  tips: [
    {
      id: 'l1-t1', type: 'must_know',
      title: 'Ask in natural language',
      summary: "Write to AI like you'd write to a smart colleague — not keywords.",
      steps: ['Write a full sentence instead of keywords', 'Notice how the answer improves'],
      example: {
        type: 'before_after',
        label: 'See the difference',
        before: { prompt: 'stockholm weather may', note: 'Keyword-style' },
        after: { prompt: 'What is the weather typically like in Stockholm during May?', note: 'Natural language' }
      }
    },
    {
      id: 'l1-t2', type: 'must_know',
      title: 'AI can be wrong — always verify',
      summary: 'AI states things confidently even when incorrect. Treat it like a smart but fallible colleague.',
      steps: ['Ask AI to explain its reasoning', 'Cross-check factual claims with a reliable source'],
      source: SOURCES.karpathy,
    },
    {
      id: 'l1-t3', type: 'must_know',
      title: 'AI has a knowledge cutoff',
      summary: "AI was trained on data up to a certain date. It doesn't know recent news or live events.",
      steps: ["Ask Claude when its knowledge cuts off", 'For current events, use a web search tool instead'],
      example: {
        type: 'reveal',
        question: "What happens if you ask Claude about last week's news?",
        answer: "Claude will either say it doesn't know, make an educated guess, or — if it has web search — look it up. Always check the date on the information you receive."
      },
      source: SOURCES.karpathy,
    },
    {
      id: 'l1-t4', type: 'must_know',
      title: 'One question at a time',
      summary: 'Asking multiple questions at once often leads to shallow answers on each.',
      steps: ['Pick your most important question', 'Ask follow-ups after getting a good answer'],
      example: {
        type: 'before_after',
        label: 'Compare approaches',
        before: { prompt: 'What is machine learning, how does it work, what are the types, and where is it used?', note: 'Four questions at once' },
        after: { prompt: 'What is machine learning, explained simply?', note: 'One focused question' }
      }
    },
    {
      id: 'l1-t5', type: 'must_know',
      title: "AI doesn't understand your context unless you share it",
      summary: 'AI starts every conversation knowing nothing about you. It only knows what you tell it.',
    },
    {
      id: 'l1-t6', type: 'nice_to_have',
      title: 'Ask for explanations in simple terms',
      summary: 'Adding "explain simply" or "explain like I\'m a beginner" dramatically changes complexity.',
      example: {
        type: 'before_after',
        label: 'Try it',
        before: { prompt: 'Explain blockchain', note: 'No guidance' },
        after: { prompt: "Explain blockchain like I'm 12 years old", note: 'With simplification cue' }
      }
    },
    {
      id: 'l1-t7', type: 'nice_to_have',
      title: 'Continue the conversation with follow-ups',
      summary: "You don't need to start a new chat for every question. Build on previous answers.",
    },
    {
      id: 'l1-t8', type: 'nice_to_have',
      title: 'Ask AI to summarize long texts',
      summary: 'Paste an article, document, or email and ask for a summary.',
      steps: ['Paste the text', 'Ask: "Summarize this in 3 bullet points"'],
    },
    {
      id: 'l1-t9', type: 'nice_to_have',
      title: 'Try different phrasings if the answer is poor',
      summary: 'Rephrasing a question — even slightly — can produce a much better answer.',
      example: {
        type: 'reveal',
        question: 'Why does rephrasing matter?',
        answer: '"How do I lose weight?" and "What are evidence-based strategies for sustainable weight loss?" signal very different levels of depth and intent. AI interprets your exact words — precision pays off.'
      }
    },
    {
      id: 'l1-t10', type: 'nice_to_have',
      title: 'Ask AI to check your writing',
      summary: 'Paste an email, document, or message and ask for grammar, clarity, or tone feedback.',
    },
    {
      id: 'l1-t11', type: 'nice_to_have',
      title: 'Use AI as a translator',
      summary: 'AI translates between virtually any language pair with high accuracy.',
    },
    {
      id: 'l1-t12', type: 'nice_to_have',
      title: "AI doesn't remember between conversations",
      summary: "Each new chat is a blank slate. You need to re-share context each time (unless using Projects).",
      source: SOURCES.karpathy,
    },
    {
      id: 'l1-t13', type: 'nice_to_have',
      title: 'Ask yes/no questions when you need clarity',
      summary: 'Sometimes the best prompt is the simplest. "Is X true?" or "Should I do Y?" can cut through noise.',
    },
  ]
}
