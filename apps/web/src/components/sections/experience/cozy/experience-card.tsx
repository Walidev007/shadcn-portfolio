import type { Experience } from "@/types/experience";
import Link from "next/link";
import TextReveal from "@/components/fancy/text-reveal";

import { cn } from "@repo/ui";
import { Card, CardContent } from "@repo/ui/card";
import { Icons } from "@repo/ui/icons";

interface ExperienceCardProps extends Experience {
  className?: string;
}

function ExperienceCard({
  company,
  name,
  duration,
  description,
  slug,
  className,
}: ExperienceCardProps) {
  const card = (
    <Card
      className={cn(
        "border-none bg-transparent shadow-none",
        slug && "transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900",
        className,
      )}
    >
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <TextReveal as="h3" className="text-3xl font-semibold">
            {company}
          </TextReveal>
          <TextReveal as="span" className="text-sm font-medium">
            {duration}
          </TextReveal>
        </div>
        <TextReveal as="h4" className="mt-2 text-xl font-medium uppercase">
          {name}
        </TextReveal>
        <TextReveal
          as="p"
          className="mt-2 max-w-2xl text-lg font-light text-zinc-700 dark:text-zinc-400"
        >
          {description}
        </TextReveal>
        {slug && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
            Full details
            <Icons.arrowUpRight className="size-4" />
          </span>
        )}
        <hr className="border-border my-6 border-t" />
      </CardContent>
    </Card>
  );

  if (!slug) {
    return card;
  }

  return (
    <Link href={`/experiences/${slug}`} className="block">
      {card}
    </Link>
  );
}

export default ExperienceCard;
