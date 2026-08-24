import type { CollectionPage, WithContext } from "schema-dts";
import React from "react";
import { metadata as meta } from "@/app/[locale]/config";
import ProjectCard from "@/app/[locale]/projects/_components/project-card";
import { getProjectSource } from "@/app/source";
import Line from "@/components/fancy/line";
import TextReveal from "@/components/fancy/text-reveal";
import { type Locale, localizedHref } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";

const copy: Record<Locale, { title: string; description: string; heading: string }> = {
  en: {
    title: "Projects",
    description: "A selection of projects I've shipped.",
    heading: "My Projects",
  },
  fr: {
    title: "Projets",
    description: "Voici quelques projets sur lesquels j'ai travaillé.",
    heading: "Mes Projets",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const { title, description } = copy[locale];
  return createMetadata({
    title,
    description,
    openGraph: {
      url: "/projects",
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<React.ReactElement> {
  const { locale } = await params;
  const { title, description, heading } = copy[locale];
  const project = getProjectSource(locale);
  const projects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${meta.site.url}/projects`,
    isPartOf: {
      "@type": "WebSite",
      name: meta.site.title,
      url: meta.site.url,
    },
    hasPart: projects.map((project) => ({
      "@type": "SoftwareApplication",
      name: project.data.title,
      description: project.data.description,
      url: localizedHref(locale, project.url),
      applicationCategory: "WebApplication",
    })),
  };

  return (
    <main className="my-14 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            {heading}
          </TextReveal>

          <Line className={"mt-16"} />
        </div>
      </section>
      <section className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.data.title}
            href={localizedHref(locale, project.url)}
            description={project.data.description}
            key={`project_${index}`}
            tags={project.data.tags}
            thumbnail={`/images/projects/${project.slugs[0]}/cover.jpg`}
          />
        ))}
      </section>
    </main>
  );
}
