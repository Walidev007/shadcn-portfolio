"use client";

import React from "react";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { type Locale } from "@/i18n/routing";
import { useLocale } from "@/lib/locale";

import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";

const copy: Record<
  Locale,
  { heading: string; bio: string; cvLabel: string; cvHref: string }
> = {
  en: {
    heading: "About Me",
    bio: "I'm Walid Mecheri, a Product Builder specialized in no-code, automation, and AI. I help companies turn real business problems into solutions people actually use: CRMs, internal apps, automations, AI workflows, and connected systems. My role doesn't stop at picking the right tools: I analyze needs and existing processes, design the solution and structure the data, then build, connect, test, and ship the different pieces while onboarding the end users. My approach is pragmatic: start from a concrete problem, ship something useful fast, and measure its impact in the field.",
    cvLabel: "View Resume",
    cvHref: "resume-en.pdf",
  },
  fr: {
    heading: "À propos de moi",
    bio: "Je suis Walid Mecheri, Product Builder spécialisé en no-code, automatisation et IA. J'aide les entreprises à transformer des problèmes métier concrets en solutions réellement utilisées : CRM, applications internes, automatisations, workflows IA et systèmes connectés. Mon rôle ne s'arrête pas au choix des outils : j'analyse les besoins et les processus existants, je conçois la solution et structure les données, puis je construis, connecte, teste et déploie les différents outils en accompagnant les utilisateurs. Mon approche est pragmatique : partir d'un problème concret, construire rapidement une solution utile et mesurer son impact sur le terrain.",
    cvLabel: "Voir le CV",
    cvHref: "resume.pdf",
  },
};

function About() {
  const locale = useLocale();
  const { heading, bio, cvLabel, cvHref } = copy[locale];

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              {heading}
            </TextReveal>
            <div className="space-y-4">
              <TextReveal
                as="p"
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                {bio}
              </TextReveal>
              <div className="flex gap-2">
                <Button asChild variant={"outline"}>
                  <a href={cvHref} target="_blank">
                    {cvLabel} <Icons.arrowUpRight className="ml-2 size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
