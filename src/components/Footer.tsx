const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Matt Nash</h3>
            <p className="text-background/80 leading-relaxed">
              Product leader with 15+ years building impactful, scalable solutions in e-commerce, marketplaces, and SaaS. Transforming ideas into products users love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
            {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-background/80">
              <p>matt.nash@productleader.dev</p>
              <p>linkedin.com/in/mattnashproduct</p>
              <p>Available for new opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60">
            © {currentYear} Matt Nash. All rights reserved.
          </p>
          <div className="flex gap-6 text-background/60">
            <span>&#127757; Built by Earthlings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;