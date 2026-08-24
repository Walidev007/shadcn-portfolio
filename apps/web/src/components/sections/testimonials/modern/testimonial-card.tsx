import type { Testimonial } from "@/types/testimonial";
import React from "react";

import { cn } from "@repo/ui";
import { Card, CardContent } from "@repo/ui/card";

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

function TestimonialCard({
  image,
  name,
  username,
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "h-full w-full rounded-xl",
        "bg-muted/40 hover:bg-muted gap-4 p-0",
        className,
      )}
    >
      <div className="flex items-center gap-3 p-4">
        <div
          role="img"
          aria-label={name || "Anonyme"}
          className="border-border h-16 w-16 shrink-0 rounded-md border bg-cover bg-center xl:h-20 xl:w-20"
          style={{ backgroundImage: `url(${image || "/placeholder.svg"})` }}
        />
        <div>
          <p className="font-semibold xl:text-lg">{name || "Anonyme"}</p>
          {username && (
            <p className="lg:text-md text-sm text-gray-500">@{username}</p>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm leading-loose xl:text-lg">
          {testimonial || "Aucun témoignage fourni."}
        </p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
