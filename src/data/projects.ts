export interface Project {
  title: string;
  description: string;
  repoUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'AI SMS Receptionist',
    description:
      'Multi-tenant missed-call text-back and lead qualification microservice built for Australian tradespeople with Twilio, ServiceM8, and Gemini.',
    repoUrl: 'https://github.com/calebSmithDS/ai-receptionist-microservice',
    tags: ['TypeScript', 'Fastify', 'Twilio'],
  },
  {
    title: 'Review Requester',
    description:
      'Automated post-job Google review SMS microservice using Neon PostgreSQL, Drizzle ORM, and scheduled QStash workflows.',
    repoUrl: 'https://github.com/calebSmithDS/review-requester',
    tags: ['TypeScript', 'Fastify', 'PostgreSQL'],
  },
  {
    title: 'Multi-Tenant WaaS',
    description:
      'Website-as-a-Service platform for local trades and small businesses powered by Astro, TypeScript, and Sanity CMS.',
    repoUrl: 'https://github.com/calebSmithDS/boutique-waas-template',
    tags: ['Astro', 'TypeScript', 'Sanity'],
  },
  {
    title: 'B2B Lead Pipeline',
    description:
      'Standalone lead-generation tool integrating Google Places and PageSpeed Insights APIs to audit and source local business leads.',
    repoUrl: 'https://github.com/calebSmithDS/lead-hunter',
    tags: ['TypeScript', 'APIs'],
  },
  {
    title: 'Voice Notes Summarizer',
    description:
      'Python automation tool using the Whisper API to transcribe voice memos and export structured Markdown straight into Obsidian.',
    repoUrl: 'https://github.com/calebSmithDS',
    tags: ['Python', 'Obsidian'],
  },
  {
    title: 'Stan Video Sync',
    description:
      'Real-time video playback synchronizer for Stan using a Manifest V3 browser extension and Node.js WebSockets.',
    repoUrl: 'https://github.com/calebSmithDS/video-sync',
    tags: ['Node.js', 'WebSockets', 'Manifest V3'],
  },
  {
    title: 'Audio Flashcards',
    description:
      'Offline-first audio flashcard web app using browser IndexedDB for hands-free spaced repetition.',
    repoUrl: 'https://github.com/calebSmithDS',
    tags: ['JavaScript', 'IndexedDB'],
  },
  
];