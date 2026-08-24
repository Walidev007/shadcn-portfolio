"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "@/lib/locale";

import { Button } from "@repo/ui/button";

const labels: Record<(typeof routing.locales)[number], string> = {
  en: "EN",
  fr: "FR",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc) => (
        <Button
          key={loc}
          variant={loc === locale ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-2 text-xs"
          onClick={() => router.replace(pathname, { locale: loc })}
        >
          {labels[loc]}
        </Button>
      ))}
    </div>
  );
}
