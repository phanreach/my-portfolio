export type profile = {
  name: string;
  initials: string;
  headline: string;
  intro: string;
  stack: string[];
  status: string;
  photo: string;
};

export type EducationCategory =
  | "university"
  | "training"
  | "high-school"
  | "additional";

export type EducationEntry = {
  institution: string;
  category: EducationCategory;
  degree?: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  period?: string;
  current?: boolean;
  image?: string;
  intro?: string;
};

export type ExperienceType = "Full time" | "Internship" | "Freelance";
export type TechItem = {
  name?: string;
  area?: string;
  logo?: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  type: ExperienceType;
  remote?: boolean;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  link?: { label: string; href: string };
  image?: string[];
  logo?: string;
  techstack?: TechItem[];
};
export type ProjectEntry = {
  title: string;
  kind: string;
  role?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  tags?: string[];
  link?: { label: string; href: string };
  image?: string[];
  techstack?: TechItem[];
};

export type UniProjectEntry = {
  title: string;
  tagline?: string;
  kind?: string;
  period?: string;
  description: string[];
  features?: string[];
  status?: { label: string; detail?: string };
  highlight?: {
    label: string;
    title: string;
    detail?: string;
    photo?: string;
    caption?: string;
  };
  tags?: string[];
  image?: string[];
  links?: { label: string; href: string }[];
  screens?: { src: string; title: string }[];
  website?: { label: string; href: string };
};
