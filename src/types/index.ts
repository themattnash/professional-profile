export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Methodology {
  name: string;
  description: string;
}

export interface ContactMethod {
  type: string;
  value: string;
  action: string;
  description: string;
}

export interface Highlight {
  number: string;
  label: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  description: string;
} 