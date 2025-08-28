import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import project1Image from "@/assets/placeholder.jpg";
import project2Image from "@/assets/placeholder.jpg";
import project3Image from "@/assets/placeholder.jpg";

const Projects = () => {
  const projects = [
    {
      title: "MANSCAPED Shopify Plus Transformation",
      category: "DTC E-commerce Platform",
      image: project2Image,
      description: "Led full-scale digital transformation of unicorn DTC brand's e-commerce platform, managing cross-functional team of 25+ through peak traffic periods.",
      challenge: "MANSCAPED needed to scale their Shopify Plus integration while maintaining platform stability during high-traffic events like Black Friday Cyber Monday.",
      solution: "Spearheaded development of modern CMS, DAM, payment infrastructure, and design system while maintaining feature continuity through traffic spikes.",
      impact: [
        "30% increase in platform reliability",
        "Seamless BFCM traffic handling",
        "$1.5M vendor partnerships managed",
        "Accelerated time-to-market delivery"
      ],
      technologies: ["Shopify Plus", "Modern CMS", "DAM", "Payment Systems"],
      timeline: "18 months",
      team: "25+ people"
    },
    {
      title: "Powersports Industry-First eCommerce Checkout",
      category: "Marketplace Innovation",
      image: project3Image,
      description: "Launched the powersports industry's first end-to-end eCommerce checkout solution, revolutionizing how dealers and customers transact online.",
      challenge: "The powersports industry lacked digital purchase capabilities, forcing customers to complete transactions offline and limiting dealer reach.",
      solution: "Built comprehensive checkout with digital purchase agreements, trade-in valuation, financing, direct payments, and 50-state DMV titling integration.",
      impact: [
        "$150M+ annual revenue unlocked",
        "Industry-first digital capabilities",
        "$100K/month monetization increase",
        "13.5M+ monthly visitors served"
      ],
      technologies: ["Digital Payments", "DMV Integration", "Fintech APIs", "Trade-in Systems"],
      timeline: "12 months",
      team: "15 people"
    },
    {
      title: "Arc XP AI/ML Personalization Platform",
      category: "Media Technology Platform",
      image: project1Image,
      description: "Deployed AI/ML-powered recommendation and personalization models across Arc XP's global publisher network, transforming content delivery for media brands.",
      challenge: "Media publishers needed better user engagement and personalized content delivery to compete in the digital landscape.",
      solution: "Implemented vertical-specific demos and AI/ML personalization models aligned with OKRs and ideal customer profiles for different market segments.",
      impact: [
        "17% increase in qualified leads",
        "3% YoY customer acquisition lift",
        "Enhanced user engagement globally",
        "Multi-vertical market expansion"
      ],
      technologies: ["AI/ML Models", "Personalization Engines", "Publisher APIs", "Analytics"],
      timeline: "20 months",
      team: "12 people"
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
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
                              <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
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
};

export default Projects;