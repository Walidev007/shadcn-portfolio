"use client";

import React from "react";
import Link from "@/components/fancy/link";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { contact } from "@/components/sections/contact/config";
import { type Locale } from "@/i18n/routing";
import { useLocale } from "@/lib/locale";

import { cn } from "@repo/ui";
import { buttonVariants } from "@repo/ui/button";

import ContactForm from "./contact-form";

const copy: Record<
  Locale,
  { heading: string; subheading: string; socialsLabel: string }
> = {
  en: {
    heading: "Get in Touch",
    subheading:
      "Have a question or a project in mind? Send me a message using the form.",
    socialsLabel: "Elsewhere",
  },
  fr: {
    heading: "Contactez-moi",
    subheading:
      "Une question ou une envie de collaborer ? Envoyez-moi un message via le formulaire.",
    socialsLabel: "Réseaux",
  },
};

function Contact() {
  const locale = useLocale();
  const { heading, subheading, socialsLabel } = copy[locale];

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="contact">
      <div className="px-4 md:px-6">
        <div className="py-3">
          <TextReveal
            as="h2"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            {heading}
          </TextReveal>
          <TextReveal as="p" className="text-muted-foreground max-w-[600px]">
            {subheading}
          </TextReveal>
        </div>
        <div className="flex flex-wrap">
          <div className="flex w-full flex-col gap-4 py-3 lg:order-2 lg:w-1/4 lg:pl-3">
            <div>
              <p className="text-muted-foreground text-sm">Email</p>
              {/* todo: seperate this into animated text and use an a instead */}
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "text-md h-min w-min p-0 font-normal",
                )}
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </Link>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">{socialsLabel}</p>
              <div className="flex flex-col gap-1">
                {contact.socials.map(({ Icon, name, href }, index) => (
                  <Link
                    target="_blank"
                    href={href}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-md h-min w-min gap-1 !p-0",
                    )}
                    key={`contact-social_${index}`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 py-3 lg:w-3/4 lg:pr-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
