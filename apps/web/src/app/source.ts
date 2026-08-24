import { createMDXSource } from "@fumadocs/content-collections";
import {
  allBlogMetas,
  allBlogs,
  allExperienceMetaEns,
  allExperienceMetas,
  allExperiences,
  allExperiencesEns,
  allProjectMetaEns,
  allProjectMetas,
  allProjects,
  allProjectsEns,
} from "content-collections";
import { loader } from "fumadocs-core/source";

export const project = loader({
  baseUrl: "/projects",
  source: createMDXSource(allProjects, allProjectMetas),
});

export const projectEn = loader({
  baseUrl: "/projects",
  source: createMDXSource(allProjectsEns, allProjectMetaEns),
});

export const experience = loader({
  baseUrl: "/experiences",
  source: createMDXSource(allExperiences, allExperienceMetas),
});

export const experienceEn = loader({
  baseUrl: "/experiences",
  source: createMDXSource(allExperiencesEns, allExperienceMetaEns),
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(allBlogs, allBlogMetas),
});

export function getProjectSource(locale: string) {
  return locale === "fr" ? project : projectEn;
}

export function getExperienceSource(locale: string) {
  return locale === "fr" ? experience : experienceEn;
}
