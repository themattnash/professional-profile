import { SkillCategory, Methodology } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Product Leadership",
    skills: [
      { name: "Vision & Roadmapping", level: 95 },
      { name: "Outcome-Driven Strategy (OKRs)", level: 92 },
      { name: "Cross-Functional Alignment", level: 94 },
      { name: "Portfolio Management", level: 88 }
    ]
  },
  {
    title: "Growth & Data",
    skills: [
      { name: "Product & Behavioral Analytics", level: 90 },
      { name: "A/B & Multivariate Testing", level: 88 },
      { name: "SQL & Python for Insights", level: 85 },
      { name: "AI/ML Applications", level: 82 }
    ]
  },
  {
    title: "Commerce & Marketplace",
    skills: [
      { name: "Shopify Plus & Headless Commerce", level: 92 },
      { name: "0 -> 1 Product Strategy", level: 90 },
      { name: "Global Payments & Tax", level: 85 },
      { name: "Subscription Billing Systems", level: 88 }
    ]
  },
  {
    title: "Technical & Collaboration",
    skills: [
      { name: "Agile & Dual-Track Development", level: 95 },
      { name: "API-First Thinking", level: 88 },
      { name: "UX/UI Partnership", level: 90 },
      { name: "Technical Discovery", level: 85 }
    ]
  }
];

export const methodologies: Methodology[] = [
  {
    name: "Outcome Operating System",
    description: "OKR-driven framework linking North Star metrics to input levers and roadmap priorities."
  },
  {
    name: "Continuous Discovery Practices",
    description: "Ongoing customer research using Opportunity Solution Trees to guide evidence-based decisions."
  },
  {
    name: "Guardrailed Experimentation",
    description: "AB testing and rapid iteration with built-in safety metrics, stop rules, and governance."
  },
  {
    name: "Compounding Growth Loops",
    description: "Self-reinforcing acquisition and retention strategies that scale more durably than funnels."
  },
  {
    name: "Platform & API Product System",
    description: "API-first design with productized governance, developer experience, and scalable integrations."
  },
  {
    name: "AI Product Reliability & Safety",
    description: "Evaluation harnesses, human-in-the-loop reviews, and red-teaming to launch trustworthy AI features."
  }
];

