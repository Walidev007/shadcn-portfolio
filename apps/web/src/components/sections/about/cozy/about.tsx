import React from "react";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";

import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              À propos de moi
            </TextReveal>
            <div className="space-y-4">
              <TextReveal
                as="p"
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                Je suis Walid Mecheri, Product Builder spécialisé en no-code,
                automatisation et IA. J'aide les entreprises à transformer des
                problèmes métier concrets en solutions réellement utilisées :
                CRM, applications internes, automatisations, workflows IA et
                systèmes connectés. Mon rôle ne s'arrête pas au choix des outils
                : j'analyse les besoins et les processus existants, je conçois
                la solution et structure les données, puis je construis,
                connecte, teste et déploie les différents outils en accompagnant
                les utilisateurs. Mon approche est pragmatique : partir d'un
                problème concret, construire rapidement une solution utile et
                mesurer son impact sur le terrain.
              </TextReveal>
              <div className="flex gap-2">
                <Button asChild variant={"outline"}>
                  <a href="resume.pdf" target="_blank">
                    Voir le CV <Icons.arrowUpRight className="ml-2 size-5" />
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
