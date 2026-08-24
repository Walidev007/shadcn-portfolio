import React from "react";
import Image from "next/image";
import MotionWrap from "@/components/motion-wrap";

import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              À propos de moi
            </h2>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
              </p>
              <div className="flex gap-2">
                <Button asChild variant={"outline"}>
                  <a href="resume.pdf" target="_blank">
                    Voir le CV <Icons.arrowUpRight className="ml-2 size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/images/hero.jpg"
              sizes="100vw"
              width="550"
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
