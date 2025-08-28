import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = {
    degree: "B.S. Social Sciences",
    school: "James Madison University",
    year: "2006",
    description: "Foundation in social sciences providing strong analytical and research skills that inform user-centered product development."
  };

  const certifications = [
    "Product Management Certification - General Assembly",
    "Agile Product Management - Scrum Alliance",
    "Google Analytics Individual Qualification",
    "AWS Cloud Practitioner"
  ];

  return (
    <section id="education" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Education & Continuous Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation combined with ongoing professional development to stay at the forefront of product management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Formal Education</CardTitle>
            </CardHeader>
            <CardContent>
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
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Professional Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground mb-6">
                  Committed to continuous learning and staying current with evolving product management practices and technologies.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
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
};

export default Education;