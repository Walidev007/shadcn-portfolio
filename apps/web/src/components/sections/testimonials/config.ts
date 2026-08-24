import type { Locale } from "@/i18n/routing";
import type { Testimonial } from "@/types/testimonial";

const testimonialsByLocale: Record<Locale, Testimonial[]> = {
  en: [
    {
      name: "Cédric Laemlin",
      image: "/images/person/cedric-laemlin.png",
      username: "Risk & Collections Officer",
      testimonial:
        "It's a pleasure to recommend Walid. I took a full training course with him on Notion, and his teaching approach was particularly effective. He was able to explain concepts that can seem complex at first by breaking them down clearly, especially with visual aids, which helped me really understand the tool's logic and how to structure a CRM. Thanks to his guidance, I came away with a much more concrete, hands-on grasp of Notion. Thanks again for your help and expertise.",
    },
    {
      name: "Thomas Groell",
      image: "/images/person/thomas-groell.png",
      username:
        "Co-founder @ JIB - Empowering the autonomy and communication of people with disabilities",
      testimonial:
        "Walid supported us on a fairly specific no-code implementation (via Make) within our internal processes. The project wasn't straightforward, and Walid got us unstuck by finding a clever solution tailored to our needs. Project follow-up was excellent and communication was very smooth! I'd recommend Walid for your projects!",
    },
    {
      name: "Nadine Mayassi",
      image: "/images/person/nadine-mayassi.png",
      username:
        "AI Business Developer & Growth Strategist | I build B2B acquisition systems that fill your pipeline | Human-Centered AI & Agentic Automation | Europe & GCC",
      testimonial:
        "Walid is a rigorous, engaged professional who is always solution-oriented. His interpersonal skills, kindness, and ability to bring people together make working with him smooth and effective. He combines expertise, reliability, and human qualities in a rare balance.",
    },
    {
      name: "Carolina Salazar Estrada",
      image: "/images/person/carolina-salazar-estrada.png",
      username:
        "QA Analyst | Disney projects via Globant – France & US | Agile Scrum/SAFe | Multilingual: ES/EN/FR/IT",
      testimonial:
        "Working with Walid at Disneyland Paris was a real pleasure. Beyond his technical skills, he's someone deeply human, always attentive and in good spirits. His ability to bring the team together and stay positive even under pressure makes all the difference. A gold-standard colleague you can always count on!",
    },
    {
      name: "Riaz Abdul",
      image: "/images/person/riaz-abdul.jpg",
      username: "QA Consultant at Disneyland Paris",
      testimonial:
        "I highly recommend Walid for his professionalism, rigor, and excellent team spirit. Working together was always smooth and enjoyable!",
    },
    {
      name: "Imen Hechkel",
      image: "/images/person/imen-hechkel.jpg",
      username: "IT Project Manager",
      testimonial:
        "I worked with Walid on a complex Tridion project, and he delivered flawless work despite tight deadlines. His command of the Tridion CMS, attention to detail, and responsiveness were invaluable to the project's success. He's a reliable, effective technical coordinator, always solution-focused.",
    },
    {
      name: "Salime Ben Yedder",
      image: "/images/person/salime-ben-yedder.jpg",
      username: "Technical Product Owner | API | Architecture",
      testimonial:
        "Walid is exactly the kind of colleague you want on a digital project. Always sharp, always clear, never vague. He understands both the technical and functional stakes, and knows how to turn constraints into an action plan. Thanks to his attention to detail and coordination skills, the project moved forward without friction. A reliable, rigorous professional who's genuinely pleasant to work with. His command of AI will also be a major asset for your digitalization projects.",
    },
    {
      name: "Karim Ennajjar",
      image: "/images/person/karim-ennajjar.png",
      username:
        "Lead Web Integrator | Front End JavaScript | RGAA Digital Accessibility Expert",
      testimonial:
        "We worked together on a large-scale digital project. Walid played a key role in coordinating between teams, prioritizing tasks, and tracking deliverables. His grasp of both technical and business stakes helped us deliver a solid project, on time and without slippage. Effective, structured, and highly engaged, he's clearly someone you can count on.",
    },
    {
      name: "Fatima Benali",
      image: "/images/person/fatima-benali.jpg",
      username: "Global Quality General Manager",
      testimonial:
        "Working with Walid means having a project manager who understands both the technical side and the operational stakes. He led the creation of our internal portal from start to finish: UX, automations, API integrations... The result: a tailor-made tool that's reliable and, above all, actually used daily by our teams. His ability to simplify complexity is impressive. I recommend him without hesitation for any digitalization project.",
    },
  ],
  fr: [
    {
      name: "Cédric Laemlin",
      image: "/images/person/cedric-laemlin.png",
      username: "Chargé de mission risque et recouvrement",
      testimonial:
        "C'est un plaisir de recommander Walid. J'ai suivi avec lui une formation complète sur l'outil Notion et son approche pédagogique a été particulièrement efficace. Il a su expliquer des concepts qui peuvent paraître complexes au départ en les schématisant clairement, notamment à l'aide de supports visuels, ce qui m'a permis de mieux comprendre la logique de l'outil et la structuration d'un CRM. Grâce à son accompagnement, j'ai pu appréhender Notion de manière beaucoup plus concrète et opérationnelle. Merci encore pour ton aide et ton expertise.",
    },
    {
      name: "Thomas Groell",
      image: "/images/person/thomas-groell.png",
      username:
        "Co-fondateur @ JIB - Favoriser l'autonomie et la communication des personnes en situation de handicap",
      testimonial:
        "Walid nous a accompagné sur une mission assez spécifique d'implémentation no-code (via Make) dans nos process internes. Le projet n'était pas évident et Walid nous a débloqué en trouvant une solution ingénieuse et adaptée à nos besoins. Le suivi de projet était top et la communication très fluide ! Je vous recommande Walid pour vos projets !",
    },
    {
      name: "Nadine Mayassi",
      image: "/images/person/nadine-mayassi.png",
      username:
        "AI Business Developer & Growth Strategist | I build B2B acquisition systems that fill your pipeline | Human-Centered AI & Agentic Automation | Europe & GCC",
      testimonial:
        "Walid est un professionnel rigoureux, impliqué et toujours orienté vers les solutions. Son sens du relationnel, sa bienveillance et sa capacité à fédérer rendent la collaboration fluide et efficace. Il allie expertise, fiabilité et qualités humaines avec un rare équilibre.",
    },
    {
      name: "Carolina Salazar Estrada",
      image: "/images/person/carolina-salazar-estrada.png",
      username:
        "Analyste QA | Projets Disney via Globant – France & US | Agile Scrum/SAFe | Polyglotte : ES/EN/FR/IT",
      testimonial:
        "Travailler avec Walid chez Disneyland Paris a été un vrai plaisir. Au-delà de ses compétences techniques, c'est quelqu'un de profondément humain, toujours à l'écoute et de bonne humeur. Sa capacité à fédérer l'équipe et à garder un esprit positif même sous pression fait toute la différence. Un collègue en or, sur qui on peut toujours compter !",
    },
    {
      name: "Riaz Abdul",
      image: "/images/person/riaz-abdul.jpg",
      username: "Consultant QA chez Disneyland Paris",
      testimonial:
        "Je recommande vivement Walid pour son professionnalisme, sa rigueur et son excellent esprit d'équipe. Une collaboration toujours fluide et agréable !",
    },
    {
      name: "Imen Hechkel",
      image: "/images/person/imen-hechkel.jpg",
      username: "Chef de Projet IT",
      testimonial:
        "J'ai collaboré avec Walid sur un projet complexe sous Tridion, et il a su livrer un travail impeccable malgré les délais serrés. Sa maîtrise du CMS Tridion, son sens du détail et sa réactivité ont été précieux pour la réussite du projet. C'est un coordinateur technique fiable, efficace et toujours orienté solution.",
    },
    {
      name: "Salime Ben Yedder",
      image: "/images/person/salime-ben-yedder.jpg",
      username: "Product Owner Technique | API | Architecture",
      testimonial:
        "Walid, c'est le genre de collègue qu'on veut avoir sur un projet digital. Toujours carré, toujours clair, jamais dans le flou. Il comprend aussi bien les enjeux techniques que fonctionnels, et sait transformer les contraintes en plan d'action. Grâce à son sens du détail et de la coordination, le projet a avancé sans heurts. Un professionnel fiable, rigoureux et très agréable à suivre. Sa maîtrise de l'IA sera également un atout majeur pour vos projets de digitalisation.",
    },
    {
      name: "Karim Ennajjar",
      image: "/images/person/karim-ennajjar.png",
      username:
        "Lead Intégrateur Web | Front End Javascript | Expert accessibilité numérique RGAA",
      testimonial:
        "Nous avons travaillé ensemble sur un projet digital d'envergure. Walid a joué un rôle clé dans la coordination entre les équipes, la priorisation des tâches et le suivi des livrables. Sa compréhension des enjeux techniques et métiers a permis de livrer un projet solide, dans les délais et sans dérapage. Efficace, structuré et très impliqué, il fait clairement partie des profils sur qui on peut compter.",
    },
    {
      name: "Fatima Benali",
      image: "/images/person/fatima-benali.jpg",
      username: "Global Quality General Manager",
      testimonial:
        "Travailler avec Walid, c'est avoir un chef de projet qui comprend à la fois la technique et les enjeux opérationnels. Il a piloté la création de notre portail interne de A à Z : ergonomie, automatisations, intégrations API... Résultat : un outil sur mesure, fiable et surtout utilisé au quotidien par nos équipes. Sa capacité à simplifier la complexité est bluffante. Je recommande sans hésitation pour tout projet de digitalisation.",
    },
  ],
};

function getTestimonials(locale: Locale): Testimonial[] {
  return testimonialsByLocale[locale];
}

const testimonials = testimonialsByLocale.en;

export { testimonials, getTestimonials };
