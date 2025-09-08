import { ContactMethod } from '@/types';

export const contactMethods: ContactMethod[] = [
  {
    type: "LinkedIn",
    value: "/in/themattnash",
    action: "https://linkedin.com/in/themattnash",
    description: "Let's connect and discuss opportunities"
  },
  {
    type: "Github",
    value: "/themattnash",
    action: "https://github.com/themattnash",
    description: "Check out what I'm building"
  },
  {
    type: "Schedule Call",
    value: "30-min introduction",
    action: "https://calendly.com/themattnash",
    description: "Book a time that works for both of us"
  }
];

export const availableFor = [
  "Product Leadership Roles",
  "Product Strategy Consulting",
  "Digital Transformation Consulting",
  "E-Commerce Growth Consulting",
];

