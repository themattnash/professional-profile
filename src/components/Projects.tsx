import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

const Projects: React.FC = React.memo(() => {
  return (
    <section id="projects" className="section-spacing bg-background" aria-labelledby="projects-heading">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Case studies showcasing strategic product development, user-centered design, and measurable business impact.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant transition-smooth hover:shadow-primary">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" aria-hidden="true" />
                </div>
                
                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <Badge variant="outline" className="w-fit mb-4 text-primary border-primary bg-primary-light">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-3xl text-foreground mb-4">
                      {project.title}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="space-y-6">
                      {/* Challenge & Solution */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                        <p className="text-muted-foreground mb-4">{project.challenge}</p>
                        <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                        <p className="text-muted-foreground">{project.solution}</p>
                      </div>
                      
                      {/* Impact */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Impact & Results:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.impact.map((item, impactIndex) => (
                            <div key={impactIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" aria-hidden="true" />
                              <span className="text-muted-foreground text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span><strong>Timeline:</strong> {project.timeline}</span>
                        <span><strong>Team Size:</strong> {project.team}</span>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-secondary text-secondary-foreground">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button className="btn-primary text-lg">
            View More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;