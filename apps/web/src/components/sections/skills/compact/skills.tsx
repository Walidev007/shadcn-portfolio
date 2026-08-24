import React from "react";
import MotionWrap from "@/components/motion-wrap";
import { skills } from "@/components/sections/skills/config";

import SkillCard from "./skill-card";

function Skills() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skills">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              Mes Compétences
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Voici quelques-unes de mes compétences où j&apos;ai transformé
              la connaissance en expertise concrète, sur le terrain.
            </p>
          </div>
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={`skill_${index}`}
                name={skill.name}
                description={skill.description}
                thumbnail={skill.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
