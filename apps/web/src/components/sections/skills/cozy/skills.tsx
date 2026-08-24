"use client";

import React from "react";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { getSkills } from "@/components/sections/skills/config";
import { type Locale } from "@/i18n/routing";
import { useLocale } from "@/lib/locale";

import SkillCard from "./skill-card";

const copy: Record<Locale, { heading: string; subheading: string }> = {
  en: {
    heading: "My Skills",
    subheading:
      "A few of the skills where I've turned know-how into real, field-tested expertise.",
  },
  fr: {
    heading: "Mes Compétences",
    subheading:
      "Voici quelques-unes de mes compétences où j'ai transformé la connaissance en expertise concrète, sur le terrain.",
  },
};

function Skills() {
  const locale = useLocale();
  const { heading, subheading } = copy[locale];
  const skills = getSkills(locale);

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skills">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              {heading}
            </TextReveal>
          </div>
          <p className="mt-4 hidden text-gray-500 lg:mt-0 lg:block lg:w-[35%] dark:text-gray-400">
            {subheading}
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={`skill_${index}`}
              index={index + 1}
              name={skill.name}
              description={skill.description}
              thumbnail={skill.thumbnail}
            />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
