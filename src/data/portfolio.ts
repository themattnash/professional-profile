import { Experience, SkillCategory, Methodology, ContactMethod, Highlight, Education } from '@/types';
import heroImage from '@/assets/hero-workspace.jpg';

export const heroData = {
  name: 'Matt Nash',
  title: 'Product leader with 15+ years of experience building impactful, scalable solutions in e-commerce, marketplaces, and SaaS. Passionate about using emerging tech and data to solve complex problems.',
  backgroundImage: heroImage,
};

export const highlights: Highlight[] = [
  {
    number: "15+",
    label: "Years Experience",
    description: "Product Leadership"
  },
  {
    number: "$150M+",
    label: "Revenue Unlocked",
    description: "Product Innovation"
  },
  {
    number: "100%",
    label: "System Uptime",
    description: "BFCM Traffic Spikes"
  },
  {
    number: "2x",
    label: "Team Velocity",
    description: "Cross-Functional Leadership"
  }
];

export const experiences: Experience[] = [
  {
    title: "Director, Digital Product",
    company: "MANSCAPED",
    period: "Jun. 2023 - Feb. 2025",
    location: "Remote",
    description: "Drove the digital product transformation at a unicorn-status DTC brand, scaling platform reliability, accelerating delivery, and enabling global growth.",
    achievements: [
      "Led a cross-functional team of 25+ to deliver a Shopify Plus rebuild, ensuring stability through record-breaking BFCM traffic.",
      "Built modern CMS, DAM, and payment infrastructure, improving platform uptime and deployment confidence by 30%.",
      "Owned $1.5M in vendor partnerships, overseeing technical discovery, documentation, and integration strategy.",
      "Reduced engineering rework and time-to-market by implementing clear, reusable design and integration systems."
    ],
    skills: ["Shopify Plus", "Headless CMS", "DAM", "Checkout Infrastructure", "Vendor Management", "Platform Reliability"]
  },
  {
    title: "Senior Product Manager - Arc XP",
    company: "The Washington Post",
    period: "Oct. 2021 - Jun. 2023",
    location: "Remote",
    description: "Led platform growth and ML/AI innovation for a Jeff Bezos–backed DXP, launching capabilities into new verticals, scaling personalization across global publishers, and boosting infrastructure resilience.",
    achievements: [
      "Drove Arc XP's expansion into e-commerce, consumer brands, and enterprise through vertical-specific product strategy and tailored demo environments.",
      "Deployed AI/ML-powered recommendation and personalization models across global publisher network, increasing session depth and engagement for leading media brands.",
      "Aligned product roadmaps with OKRs across engineering, design, and GTM teams, improving cross-functional execution and accelerating release cycles.",
    ],
    skills: ["AI/ML Personalization", "SaaS Product Development", "New Markets", "Vertical Expansion", "Publisher Platforms", "Outcome-Driven Product Strategy"]
  },
  {
    title: "Product Manager, Digital Retailing",
    company: "Trader Interactive",
    period: "Jan. 2020 - Sep. 2021",
    location: "Remote",
    description: "Led product innovation across Trader Interactive's marketplace network, serving 13.5M+ monthly users in the powersports, RV, and commercial vehicle space.",
    achievements: [
      "Shipped the first fully online checkout experience in the Powersports and RV segments, enabling digital purchase agreements, trade-in valuation, financing, and titling — unlocking $150M+ in new revenue.",
      "Led development of a machine learning image classification system with 97.5% accuracy, reducing manual vehicle categorization by 75% and improving listing quality across platforms.",
    ],
    skills: ["0 to 1 Product Development", "eCommerce Innovation", "Marketplace Platforms", "Checkout & Payments", "Fintech Integration", "Regulatory Compliance", "Dealer Experience", "Outcome-Driven Strategy"]
  },
  {
    title: "Director of Product Management & Technology",
    company: "Athletic Greens",
    period: "Apr. 2019 - Oct. 2019",
    location: "New York, NY",
    description: "Led product and technology strategy for leading nutrition and wellness DTC brand.",
    achievements: [
      "Directed product strategy for subscription-based nutrition platform",
      "Optimized customer acquisition and retention through data-driven product decisions",
      "Led cross-functional teams in rapid product iteration and testing",
      "Implemented growth-focused product development processes"
    ],
    skills: ["Subscription Products", "DTC Strategy", "Growth Optimization", "Team Leadership"]
  },
  {
    title: "Senior eCommerce Product Manager",
    company: "Leesa Sleep",
    period: "Dec. 2017 - Mar. 2019",
    location: "Virginia Beach, VA",
    description: "Product management for innovative DTC mattress and sleep technology company.",
    achievements: [
      "Led eCommerce platform optimization and user experience improvements",
      "Implemented A/B testing frameworks for conversion optimization",
      "Managed product roadmap for multi-million dollar revenue platform",
      "Collaborated with design and engineering on customer journey optimization"
    ],
    skills: ["eCommerce Optimization", "A/B Testing", "UX Strategy", "Conversion Optimization"]
  }
];

// export const projects: Project[] = [
//   {
//     title: "MANSCAPED Shopify Plus Transformation",
//     category: "DTC E-commerce Platform",
//     image: project2Image,
//     description: "Led full-scale digital transformation of unicorn DTC brand's e-commerce platform, managing cross-functional team of 25+ through peak traffic periods.",
//     challenge: "MANSCAPED needed to scale their Shopify Plus integration while maintaining platform stability during high-traffic events like Black Friday Cyber Monday.",
//     solution: "Spearheaded development of modern CMS, DAM, payment infrastructure, and design system while maintaining feature continuity through traffic spikes.",
//     impact: [
//       "30% increase in platform reliability",
//       "Seamless BFCM traffic handling",
//       "$1.5M vendor partnerships managed",
//       "Accelerated time-to-market delivery"
//     ],
//     technologies: ["Shopify Plus", "Modern CMS", "DAM", "Payment Systems"],
//     timeline: "18 months",
//     team: "25+ people"
//   },
//   {
//     title: "Powersports Industry-First eCommerce Checkout",
//     category: "Marketplace Innovation",
//     image: project3Image,
//     description: "Launched the powersports industry's first end-to-end eCommerce checkout solution, revolutionizing how dealers and customers transact online.",
//     challenge: "The powersports industry lacked digital purchase capabilities, forcing customers to complete transactions offline and limiting dealer reach.",
//     solution: "Built comprehensive checkout with digital purchase agreements, trade-in valuation, financing, direct payments, and 50-state DMV titling integration.",
//     impact: [
//       "$150M+ annual revenue unlocked",
//       "Industry-first digital capabilities",
//       "$100K/month monetization increase",
//       "13.5M+ monthly visitors served"
//     ],
//     technologies: ["Digital Payments", "DMV Integration", "Fintech APIs", "Trade-in Systems"],
//     timeline: "12 months",
//     team: "15 people"
//     },
//   {
//     title: "Arc XP AI/ML Personalization Platform",
//     category: "Media Technology Platform",
//     image: project1Image,
//     description: "Deployed AI/ML-powered recommendation and personalization models across Arc XP's global publisher network, transforming content delivery for media brands.",
//     challenge: "Media publishers needed better user engagement and personalized content delivery to compete in the digital landscape.",
//     solution: "Implemented vertical-specific demos and AI/ML personalization models aligned with OKRs and ideal customer profiles for different market segments.",
//     impact: [
//       "17% increase in qualified leads",
//       "3% YoY customer acquisition lift",
//       "Enhanced user engagement globally",
//       "Multi-vertical market expansion"
//     ],
//     technologies: ["AI/ML Models", "Personalization Engines", "Publisher APIs", "Analytics"],
//     timeline: "20 months",
//     team: "12 people"
//   }
// ];

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

export const contactMethods: ContactMethod[] = [
  // {
  //   type: "Email",
  //   value: "matt.nash@productleader.dev",
  //   action: "mailto:matt.nash@productleader.dev",
  //   description: "Best for detailed discussions and project inquiries"
  // },
  {
    type: "LinkedIn",
    value: "/in/themattnash",
    action: "https://linkedin.com/in/themattnash",
    description: "Let's connect and discuss opportunities"
  },
  {
    type: "Schedule Call",
    value: "30-min consultation",
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

export const education: Education = {
  degree: "B.S. Social Sciences",
  school: "James Madison University",
  year: "2006",
  description: "Foundation in social sciences providing strong analytical and research skills that inform user-centered product development."
};

export const certifications = [
  "Pragmatic Marketing - Pragmatic Institute",
  "Product-led Certification - Pendo.io"
]; 