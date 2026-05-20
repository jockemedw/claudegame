export default {
  id: 5,
  title: 'I Build With AI',
  tagline: 'Mental model: AI = a component in a larger system',
  description: "You're calling the API, writing system prompts, and building workflows. AI is no longer a chat interface — it's infrastructure you compose.",
  color: 'level-5',
  hex: '#ef4444',
  tips: [
    {
      id: 'l5-t1', type: 'must_know',
      title: 'Call the Claude API programmatically',
      summary: 'Everything you do in the UI can be automated via API. One HTTP call, JSON in, JSON out.',
      steps: [
        'Install the SDK: npm install @anthropic-ai/sdk',
        'Get an API key from console.anthropic.com',
        'Write your first API call and read response.content[0].text'
      ],
      example: {
        type: 'reveal',
        question: 'Minimal API call example',
        answer: `import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const msg = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Hello, Claude" }],
});
console.log(msg.content[0].text);`
      }
    },
    {
      id: 'l5-t2', type: 'must_know',
      title: 'Write effective system prompts',
      summary: "The system prompt defines AI's persistent persona, constraints, and instructions for all messages in a session.",
      steps: ['Define the role and purpose', 'List what the AI should and should not do', 'Specify output format if consistent'],
    },
    {
      id: 'l5-t3', type: 'must_know',
      title: 'Tool use / function calling',
      summary: 'Give Claude tools (functions) it can call. AI decides when to call them; you execute them.',
      steps: ['Define a tool with name, description, and input schema', 'Pass tools array in your API call', 'Handle tool_use blocks in the response'],
    },
    {
      id: 'l5-t4', type: 'must_know',
      title: 'Prompt chaining',
      summary: 'The output of one API call becomes the input of the next. Chain calls for multi-step workflows.',
      steps: ['Step 1: extract data from input', 'Step 2: use that data to generate structured output', 'Step 3: use that output to take action'],
    },
    {
      id: 'l5-t5', type: 'must_know',
      title: 'RAG: connect AI to your documents',
      summary: 'Retrieval-Augmented Generation lets AI answer questions based on your own data, not just its training.',
      steps: ['Chunk your documents into segments', 'Embed and store in a vector database', 'At query time, retrieve relevant chunks and pass to Claude'],
    },
    {
      id: 'l5-t6', type: 'nice_to_have',
      title: 'Streaming responses',
      summary: 'Stream tokens as they\'re generated for a better UX in chat interfaces.',
    },
    {
      id: 'l5-t7', type: 'nice_to_have',
      title: 'Structured output (JSON mode)',
      summary: 'Ask Claude to respond in JSON with a defined schema. Makes output easy to process programmatically.',
    },
    {
      id: 'l5-t8', type: 'nice_to_have',
      title: 'Prompt caching for cost optimization',
      summary: 'Cache long system prompts or document context to reduce cost and latency on repeated calls.',
    },
    {
      id: 'l5-t9', type: 'nice_to_have',
      title: 'Claude Code CLI',
      summary: 'An agentic coding assistant that runs in your terminal, reads your codebase, and makes changes autonomously.',
      steps: ['Install: npm install -g @anthropic-ai/claude-code', 'Run: claude in your project directory', 'Ask it to fix bugs, add features, or explain code'],
    },
    {
      id: 'l5-t10', type: 'nice_to_have',
      title: 'Batch API for bulk processing',
      summary: 'Process thousands of items asynchronously at 50% cost using the Messages Batches API.',
    },
    {
      id: 'l5-t11', type: 'nice_to_have',
      title: 'Multimodal API: images and PDFs',
      summary: 'Pass images and PDFs directly in your API calls for analysis, extraction, and reasoning.',
    },
    {
      id: 'l5-t12', type: 'nice_to_have',
      title: 'Build a simple chatbot',
      summary: 'A chatbot is just an API call that includes the conversation history in every request.',
    },
  ]
}
