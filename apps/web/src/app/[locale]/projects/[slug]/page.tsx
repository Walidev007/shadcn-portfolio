import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { metadata as meta } from "@/app/[locale]/config";
import { getProjectSource, project } from "@/app/source";
import type { Locale } from "@/i18n/routing";
import { MDXLink } from "@/lib/mdx/default-components";
import { createMetadata } from "@/lib/metadata";
import { MDXContent } from "@content-collections/mdx/react";
import defaultMdxComponents from "fumadocs-ui/mdx";

import Header from "./header";

export function generateStaticParams() {
  return project.generateParams().map(({ slug }) => ({ slug: slug[0] }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const params = await props.params;
  const { locale, slug } = params;
  const page = getProjectSource(locale).getPage([slug]);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: "article",
      images: [
        {
          alt: "banner",
          width: 1200,
          height: 630,
          url: `/images/projects/${slug}/cover.jpg`,
          type: "image/png",
        },
      ],
      authors: meta.author.name,
      // modifiedTime: page.data.date.toISOString()
    },
    twitter: {
      images: [
        {
          alt: "banner",
          width: 1200,
          height: 630,
          url: `/images/projects/${slug}/cover.jpg`,
        },
      ],
    },
  }) satisfies Metadata;
}

export default async function ProjectPage(props0: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const params = await props0.params;
  const { locale, slug } = params;
  const page = getProjectSource(locale).getPage([slug]);
  if (!page) notFound();

  const {
    data: { body },
  } = page;

  return (
    <main className="my-14 flex-1">
      <div className="container mx-auto">
        <Header metadata={page.data} locale={locale} />
        <Image
          src={`/images/projects/${slug}/cover.jpg`}
          width={1280}
          height={832}
          alt={
            locale === "fr"
              ? `Image de ${page.data.title}`
              : `Image of ${page.data.title}`
          }
          className="my-12 h-auto w-full rounded-lg"
        />
        <div className="prose min-w-full">
          <MDXContent
            code={body}
            components={{
              ...defaultMdxComponents,
              a: MDXLink,
            }}
          />
        </div>
      </div>
    </main>
  );
}
