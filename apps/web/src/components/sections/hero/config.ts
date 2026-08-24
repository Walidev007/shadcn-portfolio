import type { Hero } from "@/types/hero";
import { metadata as meta } from "@/app/[locale]/config";

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description:
    "Je cartographie les processus métier, je conçois des agents IA et j'automatise les workflows d'entreprise avec n8n, Make et les LLM.",
};

export { hero };
