import type { Skill } from "@/types/skill";

const skills: Skill[] = [
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
];

export { skills };
