import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
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

  const methodologies = [
    {
      name: "Outcome-Driven Strategy",
      description: "OKR framework for aligning product initiatives with business objectives"
    },
    {
      name: "Growth Loops",
      description: "Data-driven growth strategies and user acquisition optimization"
    },
    {
      name: "AI/ML Applications",
      description: "Leveraging artificial intelligence for personalization and recommendations"
    },
    {
      name: "Digital Experience Strategy",
      description: "End-to-end customer journey optimization across all touchpoints"
    },
    {
      name: "Internationalization & Localization",
      description: "Global product strategy and market adaptation frameworks"
    },
    {
      name: "API-First Product Development",
      description: "Technical architecture strategy for scalable, integrable solutions"
    }
  ];

  return (
    <section id="skills" className="section-spacing gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit combining strategic thinking, technical knowledge, and user-centered design principles.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Methodologies */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elegant">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Product Methodologies & Frameworks
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{method.name}</h4>
                  <p className="text-muted-foreground">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;