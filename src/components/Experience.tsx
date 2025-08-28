import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
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
        "Drove Arc XP’s expansion into e-commerce, consumer brands, and enterprise through vertical-specific product strategy and tailored demo environments.",
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
      description: "Led product innovation across Trader Interactive’s marketplace network, serving 13.5M+ monthly users in the powersports, RV, and commercial vehicle space.",
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

  return (
    <section id="experience" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proven Product Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A history of building and scaling digital products that drive revenue, boost engagement, and create lasting user value.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-elegant transition-smooth hover:shadow-primary hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg">
                      <span className="font-semibold text-primary">{exp.company}</span>
                      <span className="hidden sm:inline text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary bg-primary-light w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Core Focus Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;