export interface Experience {
  name: string;
  company: string;
  duration: string;
  description?: string;
  slug?: string;
}

export interface ExperienceDetail {
  title: string;
  role: string;
  company: string;
  companyWebsite?: string;
  companySize?: string;
  companyMarket?: string;
  companyRevenue?: string;
  location?: string;
  employmentType?: string;
  teamSize?: string;
  startDate: Date | string;
  endDate?: Date | string;
  tags?: { label: string }[];
}
