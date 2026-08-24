import type { Locale } from "@/i18n/routing";
import type { Skill } from "@/types/skill";

const skillsByLocale: Record<Locale, Skill[]> = {
  en: [
    {
      name: "Business Analysis & Solution Design",
      description: `Analyzing existing processes, running workshops, and identifying tasks that can be automated.

Formalizing requirements, modeling data and workflows, defining business rules, and designing solutions tailored to the need.

Documenting processes, testing, and coordinating with stakeholders through to deployment.`,
    },
    {
      name: "No-Code, Automation & AI",
      description: `Designing and deploying business apps, CRMs, automations, and AI workflows.

Building connected systems across tools via APIs, webhooks, and integrations.

Using LLMs and AI agents to automate tasks and embed AI directly into workflows.`,
    },
    {
      name: "Integration & Product Building",
      description: `Building custom solutions when no-code tools aren't enough: interfaces, business logic, APIs, and integrations.

Experience with web apps, databases, and SaaS services to connect systems and avoid data silos.

Able to combine no-code, low-code, and custom development depending on the project's needs.`,
    },
  ],
  fr: [
    {
      name: "Analyse Métier & Solution Design",
      description: `Analyse des processus existants, animation d'ateliers et identification des tâches automatisables.

Formalisation des besoins, modélisation des données et des workflows, définition des règles métier et conception de solutions adaptées.

Documentation des processus, tests et coordination avec les différentes parties prenantes jusqu'au déploiement.`,
    },
    {
      name: "No-Code, Automatisation & IA",
      description: `Conception et déploiement d'applications métier, CRM, automatisations et workflows IA.

Création de systèmes connectés entre les différents outils via APIs, webhooks et intégrations.

Utilisation de LLM et d'agents IA pour automatiser certaines tâches et intégrer l'IA directement dans les workflows.`,
    },
    {
      name: "Intégration & Product Building",
      description: `Construction de solutions sur mesure lorsque les outils no-code ne suffisent pas : interfaces, logique métier, APIs et intégrations.

Expérience avec des applications web, bases de données et services SaaS pour connecter les différents systèmes et éviter les silos.

Capacité à combiner no-code, low-code et développement sur mesure selon les besoins du projet.`,
    },
  ],
};

function getSkills(locale: Locale): Skill[] {
  return skillsByLocale[locale];
}

const skills = skillsByLocale.en;

export { skills, getSkills };
