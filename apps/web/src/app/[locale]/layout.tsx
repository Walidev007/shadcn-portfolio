import { notFound } from "next/navigation";
import { Bricolage_Grotesque } from "next/font/google";

import "@/styles/globals.css";

import Script from "next/script";
import { getMetadata } from "@/app/[locale]/config";
import Loader from "@/app/[locale]/loader";
import Providers from "@/app/[locale]/providers";
import { env } from "@/env";
import { type Locale, routing } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { hasLocale } from "next-intl";

import { Toaster } from "@repo/ui/sonner";

// https://iamsteve.me/blog/the-best-ink-trap-typefaces-for-websites
const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = getMetadata(hasLocale(routing.locales, locale) ? locale : routing.defaultLocale);
  return createMetadata({
    title: {
      absolute: meta.site.title,
      template: `%s | ${meta.site.title}`,
    },
    description: meta.site.description,
    twitter: {
      title: meta.site.title,
      description: meta.site.description,
    },
  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale as Locale} suppressHydrationWarning>
      <head>
        {env.NODE_ENV === "development" ? (
          <Script src="https://unpkg.com/react-scan/dist/auto.global.js" />
        ) : null}
      </head>
      <body className={`${bricolage_grotesque.className} antialiased`}>
        <Providers locale={locale as Locale}>
          <Loader />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
