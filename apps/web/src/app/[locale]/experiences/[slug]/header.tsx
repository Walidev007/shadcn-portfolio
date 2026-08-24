"use client";

import type { ExperienceDetail } from "@/types/experience";
import React from "react";
import type { Locale } from "@/i18n/routing";
import { motion } from "motion/react";

import { Badge } from "@repo/ui/badge";

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface HeaderProps {
  metadata: ExperienceDetail;
  locale: Locale;
}

const localeTag: Record<Locale, string> = { en: "en-US", fr: "fr-FR" };
const presentLabel: Record<Locale, string> = {
  en: "Present",
  fr: "Aujourd'hui",
};
const factLabels: Record<
  Locale,
  {
    company: string;
    duration: string;
    location: string;
    employmentType: string;
    teamSize: string;
    companySize: string;
    companyMarket: string;
    companyRevenue: string;
  }
> = {
  en: {
    company: "Company",
    duration: "Duration",
    location: "Location",
    employmentType: "Employment type",
    teamSize: "Team size",
    companySize: "Company size",
    companyMarket: "Company market",
    companyRevenue: "Company revenue",
  },
  fr: {
    company: "Entreprise",
    duration: "Durée",
    location: "Localisation",
    employmentType: "Type de contrat",
    teamSize: "Taille de l'équipe",
    companySize: "Taille de l'entreprise",
    companyMarket: "Marché de l'entreprise",
    companyRevenue: "Chiffre d'affaires",
  },
};

function formatDuration(
  locale: Locale,
  startDate: Date | string,
  endDate?: Date | string,
) {
  const start = new Date(startDate).toLocaleDateString(localeTag[locale], {
    month: "long",
    year: "numeric",
  });
  const end = endDate
    ? new Date(endDate).toLocaleDateString(localeTag[locale], {
        month: "long",
        year: "numeric",
      })
    : presentLabel[locale];
  return `${start} — ${end}`;
}

const Header = (props: HeaderProps) => {
  const {
    locale,
    metadata: {
      title,
      role,
      company,
      companyWebsite,
      companySize,
      companyMarket,
      companyRevenue,
      location,
      employmentType,
      teamSize,
      startDate,
      endDate,
      tags,
    },
  } = props;

  const labels = factLabels[locale];
  const facts: { label: string; value?: string }[] = [
    { label: labels.company, value: company },
    {
      label: labels.duration,
      value: formatDuration(locale, startDate, endDate),
    },
    { label: labels.location, value: location },
    { label: labels.employmentType, value: employmentType },
    { label: labels.teamSize, value: teamSize },
    { label: labels.companySize, value: companySize },
    { label: labels.companyMarket, value: companyMarket },
    { label: labels.companyRevenue, value: companyRevenue },
  ].filter((fact) => Boolean(fact.value));

  return (
    <div className="space-y-8 pt-10">
      <motion.div
        className="flex items-center gap-3"
        initial={animation.hide}
        animate={animation.show}
      >
        <div className="flex flex-col gap-3">
          <div className="text-3xl font-bold">{title}</div>
          <div className="text-lg text-gray-500 dark:text-gray-400">
            {role}
          </div>
          {companyWebsite && (
            <a
              href={companyWebsite}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              {company}
            </a>
          )}
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-4 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-4"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1">
            <span className="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
              {fact.label}
            </span>
            <span className="font-medium">{fact.value}</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="mt-2 flex flex-wrap gap-2"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.15 }}
      >
        {tags?.map((tag, index) => (
          <Badge
            key={`experience-tag_${index}`}
            variant={"secondary"}
            className="px-3 py-1 text-sm"
          >
            {tag.label}
          </Badge>
        ))}
      </motion.div>
    </div>
  );
};
export default Header;
