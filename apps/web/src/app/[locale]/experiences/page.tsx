import type { CollectionPage, WithContext } from "schema-dts";
import React from "react";
import { metadata as meta } from "@/app/[locale]/config";
import { getExperienceSource } from "@/app/source";
import Line from "@/components/fancy/line";
import TextReveal from "@/components/fancy/text-reveal";
import { type Locale, localizedHref } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";

import ExperienceCard from "./_components/experience-card";

const copy: Record<Locale, { title: string; description: string; heading: string }> = {
  en: {
    title: "Experience",
    description: "A detailed look at my professional experience.",
    heading: "My Experience",
  },
  fr: {
    title: "Expérience",
    description: "Voici un aperçu détaillé de mon expérience professionnelle.",
    heading: "Mon Expérience",
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
      url: "/experiences",
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  });
}

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<React.ReactElement> {
  const { locale } = await params;
  const { title, description, heading } = copy[locale];
  const experience = getExperienceSource(locale);
  const experiences = [...experience.getPages()].sort(
    (a, b) =>
      new Date(b.data.startDate).getTime() -
      new Date(a.data.startDate).getTime(),
  );

  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${meta.site.url}/experiences`,
    isPartOf: {
      "@type": "WebSite",
      name: meta.site.title,
      url: meta.site.url,
    },
    hasPart: experiences.map((page) => ({
      "@type": "SoftwareApplication",
      name: page.data.title,
      description: page.data.role,
      url: localizedHref(locale, page.url),
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
        {experiences.map((page, index) => (
          <ExperienceCard
            key={`experience_${index}`}
            title={page.data.title}
            role={page.data.role}
            company={page.data.company}
            startDate={page.data.startDate}
            endDate={page.data.endDate}
            tags={page.data.tags}
            href={localizedHref(locale, page.url)}
            locale={locale}
          />
        ))}
      </section>
    </main>
  );
}
