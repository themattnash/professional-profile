import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
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

  return (
    <section id="about" className="section-spacing gradient-subtle">
      <div className="container-custom">
        {/*<div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Matt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Product leader with 15+ years of experience building impactful, scalable solutions in e-commerce, marketplaces, and SaaS. Passionate about using emerging tech and data to solve complex problems.
          </p>
        </div>*/}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Digital Product Leadership
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I’ve led product at unicorn-status DTC brands, built AI-powered personalization systems for global SaaS platforms, and delivered eCommerce infrastructure responsible for over $150M+ in new revenue. My focus is on building scalable digital platforms and high-trust, high-impact teams that ship systems users love and businesses rely on.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Across eCommerce, marketplaces, and SaaS, I’ve led cross-functional squads through ambiguity to deliver lasting outcomes. From launching an industry-first digital checkout to deploying AI/ML-powered recommendation engines, I specialize in product strategy, growth experimentation, and platform architecture that drives measurable business value.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center shadow-elegant transition-smooth hover:shadow-primary hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elegant">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Core Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-3">Impact-Driven</h4>
              <p className="text-muted-foreground">
                Relentlessly focused on outcomes. I prioritize solving real problems for real users, with clear metrics and business results to back it up.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-3">Entrepreneurial Mindset</h4>
              <p className="text-muted-foreground">
                I treat product like a business. From discovery to delivery, I own outcomes end to end, make bold bets, and ship fast to learn faster.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-success rounded-full"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-3">Craft + Collaboration</h4>
              <p className="text-muted-foreground">
                I bring cross-functional teams together around a shared vision, balancing sharp product instincts with research, data, and iterative refinement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;