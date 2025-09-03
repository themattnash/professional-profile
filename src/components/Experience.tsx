import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolio";

const Experience: React.FC = React.memo(() => {
  return (
    <section id="experience" className="section-spacing bg-background" aria-labelledby="experience-heading">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="experience-heading" className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proven Product Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A history of building and scaling digital products that drive revenue, boost engagement, and create lasting user value.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-elegant transition-smooth hover:shadow-primary hover:-translate-y-1">
              <CardHeader className="p-8">
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
              
              <CardContent className="p-8 pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4">Key Achievements:</h4>
                  <ul className="space-y-2" role="list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
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
});

Experience.displayName = 'Experience';

export default Experience;