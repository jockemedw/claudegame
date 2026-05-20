export default {
  id: 3,
  title: 'I Direct',
  tagline: 'Mental model: AI = a capable junior employee needing clear instructions',
  description: "The key shift: you stop reacting to AI output and start designing the conditions for great output before the first word is generated.",
  color: 'level-3',
  hex: '#8b5cf6',
  tips: [
    {
      id: 'l3-t1', type: 'must_know',
      title: 'Assign a role with a purpose',
      summary: "Telling AI who it is shapes how it thinks, not just how it sounds.",
      steps: ['Define the role', 'Specify what that role should prioritize or avoid'],
      example: {
        type: 'before_after',
        label: 'Role changes everything',
        before: { prompt: 'Review my business plan', note: 'No role' },
        after: { prompt: 'You are a critical venture capitalist who has seen 500 pitches fail. Review my business plan and identify the 3 most likely reasons investors would pass.', note: 'Role + purpose' }
      }
    },
    {
      id: 'l3-t2', type: 'must_know',
      title: 'Specify output format, tone, audience, and length upfront',
      summary: "Design the output before asking for it. Don't describe what you want after getting something wrong.",
      steps: ['State format (e.g. bullet list)', 'State tone (e.g. professional)', 'State audience (e.g. non-technical manager)', 'State length (e.g. max 200 words)'],
    },
    {
      id: 'l3-t3', type: 'must_know',
      title: 'Use few-shot examples',
      summary: 'Show AI exactly what you want with 1–3 examples. "Like this:" beats 100 words of description.',
      steps: ['Write one example of what good output looks like', 'Ask AI to produce more in the same style'],
      example: {
        type: 'reveal',
        question: 'What is few-shot prompting?',
        answer: 'You give 1–3 examples of the format or style you want, then ask AI to continue the pattern. Example: "Write product descriptions in this style: [your example]. Now write one for: [new product]." AI learns your format instantly.'
      }
    },
    {
      id: 'l3-t4', type: 'must_know',
      title: 'Break complex tasks into steps',
      summary: "Don't ask for a finished essay in one shot. Guide AI through research → outline → draft → revision.",
      steps: ['Identify the phases of your task', 'Prompt AI for one phase at a time', 'Review output before moving to the next phase'],
    },
    {
      id: 'l3-t5', type: 'must_know',
      title: 'Understand hallucinations — challenge actively',
      summary: 'AI fabricates details confidently. Ask it to justify claims, cite sources, or express uncertainty.',
      steps: ['After getting an answer, ask: "How confident are you? What might be wrong here?"', 'For specific facts, ask: "Where would I verify this?"'],
      example: {
        type: 'reveal',
        question: 'What are the most common hallucination traps?',
        answer: 'Fake citations and studies, incorrect statistics, wrong dates, misattributed quotes, non-existent laws or regulations, invented API methods in code, and plausible-but-wrong historical details.'
      }
    },
    {
      id: 'l3-t6', type: 'must_know',
      title: 'Know when NOT to use AI',
      summary: 'Some tasks are wrong for AI: confidential business data, legal/medical decisions without verification, and anything requiring real-time data.',
      steps: ['Ask: "Would I be comfortable if this data was stored by a third party?"', 'Ask: "Is the cost of a wrong answer high enough to require a human expert?"'],
    },
    {
      id: 'l3-t7', type: 'nice_to_have',
      title: 'Tell AI what NOT to do',
      summary: "Negative constraints are as powerful as positive ones. \"Don't use jargon. Don't recommend paid tools.\" etc.",
    },
    {
      id: 'l3-t8', type: 'nice_to_have',
      title: 'Use constraints to sharpen output',
      summary: '"In exactly 3 bullet points" or "max 150 words" forces precision and prevents padding.',
    },
    {
      id: 'l3-t9', type: 'nice_to_have',
      title: 'Ask AI to think step by step',
      summary: 'Adding "think step by step" before complex questions improves reasoning quality significantly.',
      example: {
        type: 'before_after',
        label: 'Step-by-step matters',
        before: { prompt: 'Should I accept this job offer?', note: 'Direct answer' },
        after: { prompt: 'Think step by step: what factors should I consider when evaluating this job offer? [details]', note: 'Guided reasoning' }
      }
    },
    {
      id: 'l3-t10', type: 'nice_to_have',
      title: 'Chain prompts deliberately',
      summary: 'The output of one prompt becomes the input of the next. Plan multi-step workflows.',
    },
    {
      id: 'l3-t11', type: 'nice_to_have',
      title: 'Ask for criticism of your own work',
      summary: '"What are the 3 weakest parts of this argument?" is more useful than "Is this good?"',
    },
    {
      id: 'l3-t12', type: 'nice_to_have',
      title: 'Use a persona to avoid sycophancy',
      summary: 'AI tends to agree with you. Assign a skeptic role to get genuine pushback.',
      example: {
        type: 'reveal',
        question: 'What is sycophancy in AI?',
        answer: "AI is trained on human feedback, which means it's rewarded for making people feel good. It often validates your ideas even when they're wrong. Assigning a critical role (\"be a harsh critic\") counteracts this."
      }
    },
    {
      id: 'l3-t13', type: 'nice_to_have',
      title: 'Test your prompt with edge cases',
      summary: 'Try your prompt with unusual inputs to see where it breaks before relying on it for real work.',
    },
  ]
}
