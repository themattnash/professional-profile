import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, certifications } from "@/data/portfolio";

const Education: React.FC = React.memo(() => {
  return (
    <section id="education" className="section-spacing bg-background" aria-labelledby="education-heading">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="education-heading" className="section-title">Education & Continuous Learning</h2>
          <p className="section-subtitle">Strong academic foundation combined with ongoing professional development to stay at the forefront of product management.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="shadow-elegant">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl text-foreground">Formal Education</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{education.degree}</h3>
                  <p className="text-lg text-primary font-medium">{education.school}</p>
                  <p className="text-muted-foreground mb-4">Class of {education.year}</p>
                  <p className="text-muted-foreground leading-relaxed">{education.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-elegant">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl text-foreground">Professional Development</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-4">
                <p className="text-muted-foreground mb-6">
                  Committed to continuous learning and staying current with evolving product management practices and technologies.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span className="text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

Education.displayName = 'Education';

export default Education;
