import type { Experience } from "@/types/experience";
import Link from "next/link";

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
          <h3 className="text-2xl font-semibold">{company}</h3>
          <span className="text-sm font-medium">{duration}</span>
        </div>
        <h4 className="mt-2 text-lg font-medium uppercase">{name}</h4>
        <p className="mt-2">{description}</p>
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
