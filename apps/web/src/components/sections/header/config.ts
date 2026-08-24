import type { Locale } from "@/i18n/routing";
import type { Link } from "@/types/link";

// This is a setting for the compact header
const linkLimit = 4;
//

const linksByLocale: Record<Locale, Link[]> = {
  en: [
    { title: "Home", href: "/", thumbnail: "home.jpg" },
    { title: "About", href: "/about", thumbnail: "about.jpg" },
    { title: "Projects", href: "/projects", thumbnail: "projects.jpg" },
    { title: "Experience", href: "/experiences", thumbnail: "experience.jpg" },
    { title: "Blog", href: "/blog", thumbnail: "blog.jpg" },
  ],
  fr: [
    { title: "Accueil", href: "/", thumbnail: "home.jpg" },
    { title: "À propos", href: "/about", thumbnail: "about.jpg" },
    { title: "Projets", href: "/projects", thumbnail: "projects.jpg" },
    { title: "Expérience", href: "/experiences", thumbnail: "experience.jpg" },
    { title: "Blog", href: "/blog", thumbnail: "blog.jpg" },
  ],
};

function getLinks(locale: Locale): Link[] {
  return linksByLocale[locale];
}

const links = linksByLocale.en;

export { getLinks, linkLimit, links };
