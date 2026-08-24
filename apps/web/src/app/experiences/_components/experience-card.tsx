import type { ExperienceDetail } from "@/types/experience";
import Link from "next/link";

import { cn } from "@repo/ui";
import { Badge } from "@repo/ui/badge";
import { Card, CardContent, CardFooter } from "@repo/ui/card";
import { Icons } from "@repo/ui/icons";

interface ExperienceCardProps
  extends Pick<
    ExperienceDetail,
    "title" | "role" | "company" | "startDate" | "endDate" | "tags"
  > {
  href: string;
  className?: string;
}

function formatDuration(startDate: Date | string, endDate?: Date | string) {
  const start = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const end = endDate
    ? new Date(endDate).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Present";
  return `${start} — ${end}`;
}

function ExperienceCard({
  title,
  role,
  company,
  startDate,
  endDate,
  tags,
  href,
  className,
}: ExperienceCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col justify-between border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900",
        className,
      )}
    >
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold">{company}</h3>
            <span className="text-sm font-medium whitespace-nowrap">
              {formatDuration(startDate, endDate)}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          <p className="mt-1 font-medium">{title}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge key={`experience-tag_${index}`}>{tag.label}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <span className="inline-flex items-center gap-1 text-sm font-medium">
          Full details
          <Icons.arrowUpRight className="size-4" />
        </span>
      </CardFooter>
      <Link href={href} className="absolute inset-0 z-1 block" />
    </Card>
  );
}

export default ExperienceCard;
