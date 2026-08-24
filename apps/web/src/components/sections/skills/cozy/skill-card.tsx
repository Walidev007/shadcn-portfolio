import type { Skill } from "@/types/skill";
import TextReveal from "@/components/fancy/text-reveal";
import { MemoizedReactMarkdown } from "@/components/markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { cn } from "@repo/ui";

interface SkillCardProps extends Skill {
  index: number;
  className?: string;
}

export default function SkillCard({
  name,
  description,
  className,
}: SkillCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 overflow-hidden rounded-xl border border-zinc-950/10 bg-white p-6 dark:border-zinc-50/10 dark:bg-zinc-900",
        className,
      )}
    >
      <TextReveal
        as="h3"
        className="text-3xl leading-8 font-bold tracking-tight text-zinc-950 dark:text-zinc-50"
      >
        {name}
      </TextReveal>
      <div className="text-md text-muted-foreground text-zinc-700 dark:text-zinc-400">
        <MemoizedReactMarkdown
          className="dark:prose-invert prose text-muted-foreground prose-p:leading-relaxed prose-pre:p-0 min-w-full break-words"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>;
            },
          }}
        >
          {description ?? ""}
        </MemoizedReactMarkdown>
      </div>
    </div>
  );
}
