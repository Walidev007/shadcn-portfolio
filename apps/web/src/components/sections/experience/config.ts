import type { Experience } from "@/types/experience";

const experiences: Experience[] = [
  {
    name: "AI & Automation Consultant / Functional Project Lead",
    duration: "Sept 2025 - Present",
    company: "WIDO (Freelance)",
    description:
      "Role: product builder and AI trainer, owning automation projects end-to-end for client businesses. Context: SMEs and teams with manual, repetitive processes (lead handling, onboarding, reporting) and no clear view of what could be automated. Problems encountered: undocumented business processes, scattered tools (CRM/ERP/SaaS) with no integration, and teams unfamiliar with AI agents or automation platforms. Solutions built: process-mapping and framing workshops to spot automation opportunities, then design, configuration, and deployment of AI agents and automated workflows connecting APIs, webhooks, and JSON payloads across the client's SaaS stack, plus documentation and hands-on AI/automation training for end users. Results: reliable, tested automations that removed manual steps from day-to-day operations, with teams trained and able to maintain them. Stack & why: n8n and Make for visual, low-code workflow orchestration (fast to build and hand off to non-developers); Power Automate where clients were already on Microsoft 365; Claude Code, ChatGPT, Gemini and Codex as LLM engines for agent reasoning and content generation; Python and JavaScript for custom logic the no-code tools couldn't express; REST APIs and webhooks as the integration backbone between CRM/ERP/SaaS systems.",
  },
  {
    name: "Technico-Functional Consultant",
    duration: "Oct 2022 - Jul 2024",
    company: "Disneyland Paris (Freelance)",
    description:
      "Role: cross-functional technical project lead and application support for an international CMS platform. Context: a CMS shared by Disney's Europe, Americas, and Asia entities, requiring coordinated Run and Build across Product, Design, IT, and QA teams with different priorities and release calendars. Problems encountered: conflicting requirements between regional entities, fragmented backlogs, and migration/release risk on a platform multiple teams depended on simultaneously. Solutions built: requirements gathering translated into functional specs and User Stories, a governed backlog run through JIRA and Agile/Scrum ceremonies, cross-team coordination to align Product/Design/IT/QA, migration planning with risk analysis, and documentation to support governance and change management. Results: stable Run operations alongside active Build work, with releases and migrations delivered with reduced risk across three regions. Stack & why: JIRA and Confluence for backlog governance and documentation visible to every team; Agile/Scrum ceremonies to keep multi-region priorities synchronized; structured functional specs and User Stories as the shared language between business and IT.",
  },
  {
    name: "WordPress & PrestaShop Web Integrator",
    duration: "2015 - 2021",
    company: "Lagence123, Priximbattable, X3d Group, Infeeny, Fimwy, Ohmyweb",
    description:
      "Role: web integrator across several agencies, building and maintaining e-commerce sites for agency clients. Context: small and mid-sized e-commerce businesses needing new storefronts, custom features, or ongoing technical support. Problems encountered: legacy themes/plugins slowing sites down, recurring technical debt from prior integrators, and clients needing fast turnaround on custom features and fixes. Solutions built: development and evolution of e-commerce sites, custom PrestaShop and WordPress themes and features, technical migrations, ongoing maintenance, and performance optimization, paired with direct client support. Results: faster, more stable storefronts and long-running client relationships across multiple agencies over six years. Stack & why: WordPress and PrestaShop as the client-mandated CMS/e-commerce platforms; custom PHP theming and plugin development where off-the-shelf features weren't enough; performance optimization techniques (caching, asset/image optimization) to address the load-time issues clients came in with.",
  },
];

export { experiences };
