import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experience } from "@/app/source";
import { MDXLink } from "@/lib/mdx/default-components";
import { createMetadata } from "@/lib/metadata";
import { MDXContent } from "@content-collections/mdx/react";
import defaultMdxComponents from "fumadocs-ui/mdx";

import Header from "./header";

export function generateStaticParams() {
  return experience.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const page = experience.getPage([slug]);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.role,
  }) satisfies Metadata;
}

export default async function ExperiencePage(props0: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props0.params;
  const { slug } = params;
  const page = experience.getPage([slug]);
  if (!page) notFound();

  const {
    data: { body },
  } = page;

  return (
    <main className="my-14 flex-1">
      <div className="container mx-auto">
        <Header metadata={page.data} />
        <div className="prose mt-12 min-w-full">
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
