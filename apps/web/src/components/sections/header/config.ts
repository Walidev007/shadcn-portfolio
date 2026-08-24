import type { Link } from "@/types/link";

// This is a setting for the compact header
const linkLimit = 4;
//

const links: Link[] = [
  {
    title: "Accueil",
    href: "/",
    thumbnail: "home.jpg",
  },
  {
    title: "À propos",
    href: "/about",
    thumbnail: "about.jpg",
  },
  {
    title: "Projets",
    href: "/projects",
    thumbnail: "projects.jpg",
  },
  {
    title: "Expérience",
    href: "/experiences",
    thumbnail: "experience.jpg",
  },
  {
    title: "Blog",
    href: "/blog",
    thumbnail: "blog.jpg",
  },
];

export { linkLimit, links };
