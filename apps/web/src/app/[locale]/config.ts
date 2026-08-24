import type { Locale } from "@/i18n/routing";
import type { Metadata } from "@/types/metadata";

const metadataByLocale: Record<Locale, Metadata> = {
  en: {
    author: {
      name: "Walid Mecheri",
      username: "widocode",
      label: "AI & Automation Consultant",
    },
    site: {
      title: "Walid Mecheri",
      description:
        "Portfolio of Walid Mecheri, AI & Automation Consultant — process mapping, AI agents, no-code integrations, and project delivery.",
      url: "https://www.widocode.com",
      keywords: [
        "AI",
        "automation",
        "AI agents",
        "no-code",
        "n8n",
        "technical project consultant",
        "product builder",
        "Walid Mecheri",
      ],
      language: "en",
      charset: "UTF-8",
    },
  },
  fr: {
    author: {
      name: "Walid Mecheri",
      username: "widocode",
      label: "Consultant IA & Automatisation",
    },
    site: {
      title: "Walid Mecheri",
      description:
        "Portfolio de Walid Mecheri, Consultant IA & Automatisation — cartographie de processus, agents IA, intégrations no-code et delivery projet.",
      url: "https://www.widocode.com",
      keywords: [
        "IA",
        "automatisation",
        "agents IA",
        "no-code",
        "n8n",
        "consultant technico-fonctionnel",
        "Walid Mecheri",
      ],
      language: "fr",
      charset: "UTF-8",
    },
  },
};

function getMetadata(locale: Locale): Metadata {
  return metadataByLocale[locale];
}

const metadata = metadataByLocale.en;

export { getMetadata, metadata };
