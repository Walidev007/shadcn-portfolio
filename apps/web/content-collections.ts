import type { z as zType } from "zod";
import { defineCollection, defineConfig } from "@content-collections/core";
import {
  createDocSchema,
  createMetaSchema,
  transformMDX,
} from "@fumadocs/content-collections/configuration";

function dateField(z: typeof zType) {
  return z
    .string()
    .or(z.date())
    .transform((value, context) => {
      try {
        return new Date(value);
      } catch {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid date",
        });
        return z.NEVER;
      }
    });
}

function makeProjectCollection<TName extends string>(
  name: TName,
  directory: string,
) {
  return defineCollection({
    name,
    directory,
    include: "**/*.mdx",
    schema: (z) => {
      const docSchema = createDocSchema(z);
      return {
        ...docSchema,
        website: z.string().optional(),
        github: z.string().optional(),
        tags: z
          .array(
            z.object({
              label: z.string(),
            }),
          )
          .optional(),
        date: dateField(z),
      };
    },
    transform: transformMDX,
  });
}

function makeProjectMetaCollection<TName extends string>(
  name: TName,
  directory: string,
) {
  return defineCollection({
    name,
    directory,
    include: "**/meta.json",
    parser: "json",
    schema: createMetaSchema,
  });
}

function makeExperienceCollection<TName extends string>(
  name: TName,
  directory: string,
) {
  return defineCollection({
    name,
    directory,
    include: "**/*.mdx",
    schema: (z) => {
      const docSchema = createDocSchema(z);
      return {
        ...docSchema,
        role: z.string(),
        company: z.string(),
        companyWebsite: z.string().optional(),
        companySize: z.string().optional(),
        companyMarket: z.string().optional(),
        companyRevenue: z.string().optional(),
        location: z.string().optional(),
        employmentType: z.string().optional(),
        teamSize: z.string().optional(),
        startDate: dateField(z),
        endDate: dateField(z).optional(),
        tags: z
          .array(
            z.object({
              label: z.string(),
            }),
          )
          .optional(),
      };
    },
    transform: transformMDX,
  });
}

function makeExperienceMetaCollection<TName extends string>(
  name: TName,
  directory: string,
) {
  return defineCollection({
    name,
    directory,
    include: "**/meta.json",
    parser: "json",
    schema: createMetaSchema,
  });
}

const projects = makeProjectCollection("projects", "content/fr/projects");
const projectMetas = makeProjectMetaCollection(
  "projectMeta",
  "content/fr/projects",
);
const projectsEn = makeProjectCollection("projectsEn", "content/en/projects");
const projectMetasEn = makeProjectMetaCollection(
  "projectMetaEn",
  "content/en/projects",
);

const experiences = makeExperienceCollection(
  "experiences",
  "content/fr/experiences",
);
const experienceMetas = makeExperienceMetaCollection(
  "experienceMeta",
  "content/fr/experiences",
);
const experiencesEn = makeExperienceCollection(
  "experiencesEn",
  "content/en/experiences",
);
const experienceMetasEn = makeExperienceMetaCollection(
  "experienceMetaEn",
  "content/en/experiences",
);

const blog = defineCollection({
  name: "blog",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: (z) => {
    const docSchema = createDocSchema(z);
    return {
      ...docSchema,
      author: z.string(),
      date: dateField(z),
    };
  },
  transform: transformMDX,
});

const blogMetas = defineCollection({
  name: "blogMeta",
  directory: "content/blog",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
});

export default defineConfig({
  collections: [
    projects,
    projectMetas,
    projectsEn,
    projectMetasEn,
    experiences,
    experienceMetas,
    experiencesEn,
    experienceMetasEn,
    blog,
    blogMetas,
  ],
});
