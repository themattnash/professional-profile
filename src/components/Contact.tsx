import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contactMethods, availableFor } from "@/data/portfolio";
import { openExternalLink } from "@/lib/utils";

const Contact: React.FC = React.memo(() => {

  return (
    <section id="contact" className="section-spacing gradient-subtle" aria-labelledby="contact-heading">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your product vision into reality? I'm always interested in discussing new opportunities and challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="transition-smooth hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-primary rounded-full" aria-hidden="true"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{method.type}</h4>
                        <p className="text-primary font-medium mb-2">{method.value}</p>
                        <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                        <Button 
                          onClick={() => openExternalLink(method.action)}
                          variant="outline" 
                          size="sm"
                          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                          aria-label={`Connect via ${method.type}`}
                        >
                          Connect
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Available For
            </h3>
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {availableFor.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" aria-hidden="true"></div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-primary-light rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3">
                    Current Status
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Open to new opportunities and always excited to discuss innovative product challenges. 
                    Currently exploring senior product leadership roles and consulting projects.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="text-success font-medium">Available for new projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <Card className="bg-card shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Start a Conversation?
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking to optimize your current product strategy or build something entirely new, 
                I'd love to hear about your challenges and explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => openExternalLink('mailto:matt.nash@productleader.dev')}
                  className="btn-primary"
                  aria-label="Send email to matt.nash@productleader.dev"
                >
                  Send Email
                </Button>
                <Button 
                  onClick={() => openExternalLink('https://calendly.com/mattnash')}
                  variant="outline"
                  className="btn-outline"
                  aria-label="Schedule a call via Calendly"
                >
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;