import { AgentNetwork } from '@mastra/core/network';
import { weatherAgent } from '../agents';
import { groq } from '@ai-sdk/groq';

export const myNetwork = new AgentNetwork({
  name: 'My Network',
  agents: [weatherAgent],
  model: groq('llama3-70b-8192'),
  instructions: `
        You are a helpful supervisor agent that can help users with a variety of tasks.
    `,
});
