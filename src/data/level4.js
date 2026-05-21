import { SOURCES } from './sources'

export default {
  id: 4,
  title: 'I Think With AI',
  tagline: 'Mental model: AI = a thought partner with strengths and weaknesses I actively manage',
  description: "You're no longer just producing text — you're using AI to enhance your own thinking, challenge your assumptions, and manage cognitive overhead.",
  color: 'level-4',
  hex: '#f59e0b',
  tips: [
    {
      id: 'l4-t1', type: 'must_know',
      title: 'Chain-of-thought: ask AI to reason before answering',
      summary: 'Explicitly asking AI to reason first improves accuracy on complex problems.',
      steps: ['Add "before answering, think through this step by step"', 'Review the reasoning, not just the conclusion'],
      example: {
        type: 'before_after',
        label: 'Reasoning quality',
        before: { prompt: "What's the best pricing model for my SaaS?", note: 'Answer first' },
        after: { prompt: 'Before answering, think through the tradeoffs of different SaaS pricing models, then recommend one based on: [context]', note: 'Reasoning first' }
      }
    },
    {
      id: 'l4-t2', type: 'must_know',
      title: 'Manage the context window deliberately',
      summary: "AI's memory is limited to the current conversation. Long chats degrade quality — summarize and restart.",
      steps: ["When a conversation feels stale or off-track, ask AI to summarize what's been decided", 'Start a new chat with that summary as the opening context'],
      source: SOURCES.karpathy,
    },
    {
      id: 'l4-t3', type: 'must_know',
      title: 'Use Projects for persistent context',
      summary: "Claude's Projects feature lets you define persistent instructions and upload reference documents that stay active across all chats.",
      steps: ['Create a Project for a recurring use case', 'Add instructions and relevant files', "Note how you don't need to re-explain context each time"],
      source: SOURCES.anthropic,
    },
    {
      id: 'l4-t4', type: 'must_know',
      title: 'Ask AI to steelman the opposing view',
      summary: 'Before making a decision, ask AI to make the strongest possible case against your position.',
      steps: ['Present your view or plan', 'Ask: "Make the strongest possible argument against this"', 'Update your thinking based on what holds up'],
      example: {
        type: 'reveal',
        question: 'What is steelmanning?',
        answer: "The opposite of a strawman. Instead of attacking the weakest version of an opposing argument, you construct the strongest version. It forces genuine engagement with counterarguments and leads to more robust decisions."
      }
    },
    {
      id: 'l4-t5', type: 'must_know',
      title: 'Use AI to find weaknesses in your reasoning',
      summary: '"What assumptions am I making that might be wrong?" is one of the most valuable prompts you can run.',
      steps: ['Present your plan or argument', 'Ask: "What assumptions am I making? Which are most likely wrong?"'],
    },
    {
      id: 'l4-t6', type: 'nice_to_have',
      title: 'Use AI as a rubber duck',
      summary: 'Explaining your problem out loud (to AI) often reveals the solution. AI can also ask clarifying questions.',
    },
    {
      id: 'l4-t7', type: 'nice_to_have',
      title: 'Ask "what am I missing?"',
      summary: 'After presenting a plan, this question surfaces blind spots AI can see that you cannot.',
    },
    {
      id: 'l4-t8', type: 'nice_to_have',
      title: 'Request explicit confidence levels',
      summary: '"How confident are you in this, and what would change your answer?" forces epistemic honesty.',
    },
    {
      id: 'l4-t9', type: 'nice_to_have',
      title: 'Ask for explicit assumptions',
      summary: '"List all the assumptions built into this recommendation" makes hidden reasoning visible.',
    },
    {
      id: 'l4-t10', type: 'nice_to_have',
      title: 'Use extended thinking for hard problems',
      summary: 'Claude has an extended thinking mode for complex reasoning tasks. Enable it when accuracy matters more than speed.',
    },
    {
      id: 'l4-t11', type: 'nice_to_have',
      title: 'Know when AI is the wrong tool',
      summary: "AI is bad at: knowing what's true, real-time data, complex math, and understanding your true preferences.",
      example: {
        type: 'reveal',
        question: 'When should you NOT use AI?',
        answer: "When you need verified facts (use primary sources), real-time information (use search), precise calculations (use a calculator or code), or when the right answer requires deep personal knowledge of your situation that would take too long to convey."
      }
    },
    {
      id: 'l4-t12', type: 'nice_to_have',
      title: 'Improve your own writing by studying AI rewrites',
      summary: 'Ask AI to rewrite your text, then study the differences. Use it as a personal writing coach.',
    },
  ]
}
