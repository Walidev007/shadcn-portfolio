import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

export function localizedHref(locale: Locale, href: string): string {
  return locale === routing.defaultLocale ? href : `/${locale}${href}`;
}
