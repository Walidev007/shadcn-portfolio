"use client";

import type { ExperienceDetail } from "@/types/experience";
import React from "react";
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
}

function formatDuration(startDate: Date | string, endDate?: Date | string) {
  const start = new Date(startDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const end = endDate
    ? new Date(endDate).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Present";
  return `${start} — ${end}`;
}

const Header = (props: HeaderProps) => {
  const {
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

  const facts: { label: string; value?: string }[] = [
    { label: "Company", value: company },
    { label: "Duration", value: formatDuration(startDate, endDate) },
    { label: "Location", value: location },
    { label: "Employment type", value: employmentType },
    { label: "Team size", value: teamSize },
    { label: "Company size", value: companySize },
    { label: "Company market", value: companyMarket },
    { label: "Company revenue", value: companyRevenue },
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
