"use client";

import { unstable_ViewTransition as ViewTransition } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import type { Locale } from "@/i18n/routing";
import { LocaleProvider } from "@/lib/locale";

export default function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <LocaleProvider locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ViewTransition>{children}</ViewTransition>
      </ThemeProvider>
    </LocaleProvider>
  );
}
