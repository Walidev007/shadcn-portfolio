import type { Skill } from "@/types/skill";

const skills: Skill[] = [
  {
    name: "AI, Automation & Integrations",
    description: `Designing and deploying AI agents and automated workflows: LLMs, RAG, and orchestration platforms like n8n, Make, and Power Automate, wired into CRM, ERP, and SaaS tools through REST APIs, webhooks, and JSON — with Python and JavaScript for the custom logic no-code tools can't express.`,
  },
  {
    name: "Process Analysis & Optimization",
    description: `Mapping business processes end-to-end, running framing workshops to identify automatable tasks, configuring the resulting solutions, documenting the new process, and supporting teams through the change.`,
  },
  {
    name: "Delivery & Project Management",
    description: `Piloting Run & Build across Product, IT, and QA teams using Agile/Scrum and JIRA/Confluence, from backlog governance to deployment and continuous improvement of live platforms.`,
  },
];

export { skills };
