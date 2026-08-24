"use client";

import React from "react";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { getExperiences } from "@/components/sections/experience/config";
import type { Locale } from "@/i18n/routing";
import { useLocale } from "@/lib/locale";

import ExperienceCard from "./experience-card";

const copy: Record<Locale, { heading: string; subheading: string }> = {
  en: {
    heading: "My Experience",
    subheading:
      "A few of the roles where I've turned tough business problems into shipped, working solutions.",
  },
  fr: {
    heading: "Mon Expérience",
    subheading:
      "Voici quelques-unes de mes expériences professionnelles où j'ai transformé des défis en réussites concrètes.",
  },
};

function Experiences() {
  const locale = useLocale();
  const experiences = getExperiences(locale);
  const { heading, subheading } = copy[locale];

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="experiences">
      <div className="px-4 md:px-6">
        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none"
            >
              {heading}
            </TextReveal>
            <TextReveal as="p" className="text-gray-500 dark:text-gray-400">
              {subheading}
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
    </MotionWrap>
  );
}

export default Experiences;
