import type { Locale } from "@/i18n/routing";
import type { Experience } from "@/types/experience";

const experiencesByLocale: Record<Locale, Experience[]> = {
  en: [
    {
      name: "AI & Automation Consultant / Functional Project Lead",
      duration: "2024 - Present",
      company: "WIDO (Freelance)",
      slug: "wido-ai-automation-consultant",
      description:
        "Independent consultant helping SMBs map their business processes, running discovery workshops, and designing, configuring, and deploying AI agents and automated workflows across CRM, ERP, and SaaS tools — from proof of concept to production.",
    },
    {
      name: "Techno-Functional Consultant",
      duration: "2021 - 2024",
      company: "Disneyland Paris (Freelance)",
      slug: "disneyland-paris-technico-functional-consultant",
      description:
        "Owned Run, Build, and release management for the Tridion CMS shared by Disney across the Europe, Americas, and Asia entities — coordinating Product, Design, IT, and QA teams via JIRA and Agile/Scrum, from requirements gathering through to production deployment.",
    },
    {
      name: "WordPress & PrestaShop Web Integrator",
      duration: "2015 - 2021",
      company:
        "Lagence123, Priximbattable, X3d Group, Infeeny, Fimwy, Ohmyweb",
      slug: "wordpress-prestashop-web-integrator",
      description:
        "Built and maintained e-commerce sites on WordPress and PrestaShop for six agencies based mainly in Paris and the Bordeaux region, with a focus on custom theming, platform migrations, and performance optimization.",
    },
  ],
  fr: [
    {
      name: "Consultant IA & Automatisation / Chef de Projet Fonctionnel",
      duration: "2024 - Aujourd'hui",
      company: "WIDO (Freelance)",
      slug: "wido-ai-automation-consultant",
      description:
        "Consultant indépendant accompagnant les PME dans la cartographie de leurs processus, l'animation d'ateliers de cadrage, et la conception, le paramétrage et le déploiement d'agents IA et de workflows automatisés sur des outils CRM, ERP et SaaS — de la preuve de concept à la production.",
    },
    {
      name: "Consultant Technico-Fonctionnel",
      duration: "2021 - 2024",
      company: "Disneyland Paris (Freelance)",
      slug: "disneyland-paris-technico-functional-consultant",
      description:
        "Pilotage du Run, du Build et des déploiements du CMS Tridion partagé par Disney entre les entités Europe, Amériques et Asie — coordination des équipes Produit, Design, IT et QA via JIRA et Agile/Scrum, du recueil des besoins jusqu'à la mise en production.",
    },
    {
      name: "Intégrateur Web WordPress & PrestaShop",
      duration: "2015 - 2021",
      company:
        "Lagence123, Priximbattable, X3d Group, Infeeny, Fimwy, Ohmyweb",
      slug: "wordpress-prestashop-web-integrator",
      description:
        "Développement et maintenance de sites e-commerce sur WordPress et PrestaShop pour six agences basées principalement à Paris et en région bordelaise, avec un focus sur le thème sur mesure, les migrations de plateforme et l'optimisation des performances.",
    },
  ],
};

function getExperiences(locale: Locale): Experience[] {
  return experiencesByLocale[locale];
}

const experiences = experiencesByLocale.en;

export { experiences, getExperiences };
