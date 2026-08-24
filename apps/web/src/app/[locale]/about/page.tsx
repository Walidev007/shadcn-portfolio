"use client";

import React, { useRef } from "react";
import SkillCard from "@/app/[locale]/about/_components/skill-card";
import Link from "@/components/fancy/link";
import ImageTrail from "@/components/fancy/motion-trail";
import TextReveal from "@/components/fancy/text-reveal";
import { contact } from "@/components/sections/contact/config";
import ContactForm from "@/components/sections/contact/cozy/contact-form";
import { getExperiences } from "@/components/sections/experience/config";
import ExperienceCard from "@/components/sections/experience/cozy/experience-card";
import { getSkills } from "@/components/sections/skills/config";
import { technologies } from "@/components/sections/technologies/config";
import TechnologyCard from "@/components/sections/technologies/modern/technology-card";
import { type Locale } from "@/i18n/routing";
import { exampleImages } from "@/lib/example-images";
import { useLocale } from "@/lib/locale";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@repo/ui";
import { Button, buttonVariants } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";
import { Separator } from "@repo/ui/separator";

const copy: Record<
  Locale,
  {
    heroLine1: string;
    heroLine2: string;
    aboutLabel: string;
    aboutHeadline: string;
    aboutBio: string;
    cvLabel: string;
    cvHref: string;
    skillsLabel: string;
    technologiesLabel: string;
    experienceLabel: string;
    contactLabel: string;
  }
> = {
  en: {
    heroLine1: "Automation",
    heroLine2: "Consultant",
    aboutLabel: "About",
    aboutHeadline:
      "I turn manual, repetitive business processes into reliable AI agents and automated workflows.",
    aboutBio:
      "I'm a Product Builder and techno-functional consultant. I help companies turn real needs into concrete solutions — business apps, automations, AI agents, CRM, ERP, and collaborative tools. I started with over six years in web development before moving into product coordination and consulting, notably leading the functional evolution of a CMS used by Disneyland Paris's international entities across Europe, the Americas, and Asia — coordinating business teams, the platform vendor, and other stakeholders on content management, documentation, migrations, and user support. Today I help organizations of all sizes with their digital and AI transformation: needs analysis and workshops, MVPs and business apps, AI agents and automation, systems integration, deployment, change management, and training. My approach is pragmatic: start from the real need, ship something useful fast, then improve it based on feedback from the field.",
    cvLabel: "View Resume",
    cvHref: "resume-en.pdf",
    skillsLabel: "Skills",
    technologiesLabel: "Technologies",
    experienceLabel: "Experience",
    contactLabel: "Contact",
  },
  fr: {
    heroLine1: "Automatisation",
    heroLine2: "Consultant",
    aboutLabel: "À propos",
    aboutHeadline:
      "Je transforme des processus métier manuels et répétitifs en agents IA fiables et workflows automatisés.",
    aboutBio:
      "Je suis Product Builder et consultant technico-fonctionnel. J'aide les entreprises à transformer leurs besoins réels en solutions concrètes — applications métier, automatisations, agents IA, CRM, ERP et outils collaboratifs. J'ai commencé par plus de six ans en développement web avant d'évoluer vers la coordination produit et le conseil, notamment en pilotant l'évolution fonctionnelle d'un CMS utilisé par les entités internationales de Disneyland Paris en Europe, aux Amériques et en Asie — en coordonnant les équipes métier, l'éditeur de la plateforme et les autres parties prenantes sur la gestion de contenu, la documentation, les migrations et le support utilisateur. Aujourd'hui, j'accompagne des organisations de toute taille dans leur transformation digitale et IA : analyse des besoins et ateliers, MVP et applications métier, agents IA et automatisation, intégrations systèmes, déploiement, conduite du changement et formation. Mon approche est pragmatique : partir du besoin réel, livrer rapidement quelque chose d'utile, puis l'améliorer grâce aux retours du terrain.",
    cvLabel: "Voir le CV",
    cvHref: "resume.pdf",
    skillsLabel: "Compétences",
    technologiesLabel: "Technologies",
    experienceLabel: "Expérience",
    contactLabel: "Contact",
  },
};

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = copy[locale];
  const skills = getSkills(locale);
  const experiences = getExperiences(locale);

  return (
    <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
      <section className="relative -mx-4 flex h-[calc(100svh-(--spacing(14)))] items-center justify-center overflow-hidden pb-12 sm:-mx-8 md:-mx-12 lg:-mx-16 2xl:-mx-24">
        <div className="absolute top-0 left-0 z-0" ref={heroRef}>
          <ImageTrail containerRef={heroRef}>
            {exampleImages.map((image, index) => (
              <div
                key={index}
                className="relative flex h-24 w-24 overflow-hidden"
              >
                <img
                  src={image}
                  alt="image"
                  loading="lazy"
                  className="absolute inset-0 object-cover"
                />
              </div>
            ))}
          </ImageTrail>
        </div>
        <div className="relative container mx-auto flex flex-col items-center px-4">
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            {t.heroLine1}
          </TextReveal>
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            {t.heroLine2}
          </TextReveal>
          <motion.div
            className="mt-8"
            style={{ opacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icons.chevronDown className="h-8 w-8" />
          </motion.div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {t.aboutLabel}
            </h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="space-y-8">
              <TextReveal
                as="h3"
                className="font-serif text-3xl leading-tight sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                {t.aboutHeadline}
              </TextReveal>
              <TextReveal
                as="p"
                className="text-muted-foreground text-base leading-relaxed sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
                {t.aboutBio}
              </TextReveal>
              <Button asChild variant={"outline"} className="rounded-full px-6">
                <a href={t.cvHref} target="_blank">
                  {t.cvLabel} <Icons.arrowUpRight className="ml-2 size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {t.skillsLabel}
            </h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {skills.map((skill, index) => (
                <SkillCard
                  key={`skill_${index}`}
                  index={index + 1}
                  name={skill.name}
                  description={skill.description}
                  thumbnail={skill.thumbnail}
                  className="flex rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {t.technologiesLabel}
            </h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div
              className="relative h-full w-full cursor-pointer items-center justify-center overflow-hidden"
              ref={testimonialsRef}
            >
              <div className="flex h-full w-full flex-wrap items-center justify-start gap-4">
                {technologies.map((technology, index) => (
                  <>
                    <TechnologyCard
                      key={`technology_${index}`}
                      name={technology.name}
                      containerRef={testimonialsRef}
                    />

                    {index < technologies.length - 1 && (
                      <TechnologyCard
                        key={`technology_sep_${index}`}
                        name={","}
                        containerRef={testimonialsRef}
                      />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {t.experienceLabel}
            </h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience_${index}`}
                  name={experience.name}
                  description={experience.description}
                  company={experience.company}
                  duration={experience.duration}
                  slug={experience.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {t.contactLabel}
            </h2>
            <div className="mt-2 flex flex-col gap-1">
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "h-min w-min p-0 text-sm font-normal sm:text-base md:text-lg",
                )}
                href={`mailto:${contact.email}`}
              >
                <Icons.mail className="h-4 w-4" />
                {contact.email}
              </Link>
              {contact.socials.map(({ Icon, name, href }, index) => (
                <Link
                  target="_blank"
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "h-min w-min gap-1 p-0 text-sm sm:text-base md:text-lg",
                  )}
                  key={`contact-social_${index}`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
