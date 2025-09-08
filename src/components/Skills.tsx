import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skillCategories, methodologies } from "@/data/portfolio";

const Skills: React.FC = React.memo(() => {
  return (
    <section id="skills" className="section-spacing gradient-subtle" aria-labelledby="skills-heading">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="skills-heading" className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit combining strategic thinking, technical knowledge, and user-centered design principles.
          </p>
        </div>

        {/* Methodologies */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elegant mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Product Methodologies & Frameworks
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary rounded-full" aria-hidden="true"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{method.name}</h4>
                  <p className="text-muted-foreground">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-elegant">
              <CardHeader className="p-8">
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" aria-label={`${skill.name} skill level: ${skill.level}%`} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
