"use client";

import React from "react";
import Link from "@/components/fancy/link";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { contact } from "@/components/sections/contact/config";
import { type Locale } from "@/i18n/routing";
import { useLocale } from "@/lib/locale";

const copy: Record<
  Locale,
  {
    heading: string;
    subheading: string;
    emailLabel: string;
    linkedinLabel: string;
    locationLabel: string;
  }
> = {
  en: {
    heading: "Get in Touch",
    subheading: "Have a question or a project in mind? Reach out.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    locationLabel: "Location",
  },
  fr: {
    heading: "Contactez-moi",
    subheading: "Une question ou une envie de collaborer ? Écrivez-moi.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    locationLabel: "Localisation",
  },
};

function Contact() {
  const locale = useLocale();
  const { heading, subheading, emailLabel, linkedinLabel, locationLabel } =
    copy[locale];
  const linkedin = contact.socials.find((social) => social.name === "Linkedin");

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
          <TextReveal
            as="p"
            className="text-muted-foreground max-w-[600px] text-lg md:text-xl"
          >
            {subheading}
          </TextReveal>
        </div>
        <div className="grid grid-cols-1 gap-10 py-6 sm:grid-cols-3">
          <div>
            <p className="text-muted-foreground text-base md:text-lg">
              {emailLabel}
            </p>
            <Link
              className="text-2xl font-medium tracking-tight md:text-3xl"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </Link>
          </div>
          {linkedin && (
            <div>
              <p className="text-muted-foreground text-base md:text-lg">
                {linkedinLabel}
              </p>
              <Link
                target="_blank"
                href={linkedin.href}
                className="inline-flex items-center gap-2 text-2xl font-medium tracking-tight md:text-3xl"
              >
                {linkedin.Icon && (
                  <linkedin.Icon className="h-6 w-6 shrink-0 md:h-7 md:w-7" />
                )}
                {linkedin.name}
              </Link>
            </div>
          )}
          <div>
            <p className="text-muted-foreground text-base md:text-lg">
              {locationLabel}
            </p>
            <p className="text-2xl font-medium tracking-tight md:text-3xl">
              {contact.location}
            </p>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
