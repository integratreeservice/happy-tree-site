import { Phone, TreePine, Scissors, CircleDot, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tree-service.jpg";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const services = [
    { icon: TreePine, title: "Tree Removal", description: "Safe and efficient removal of hazardous, dead, or unwanted trees from your property." },
    { icon: Scissors, title: "Tree Pruning", description: "Expert trimming and shaping to promote healthy growth and improve appearance." },
    { icon: CircleDot, title: "Stump Grinding", description: "Complete stump removal to reclaim your yard space and prevent regrowth." },
  ];

  const trustItems = [
    { icon: Shield, label: "Fully Insured" },
    { icon: Award, label: "Licensed & Certified" },
    { icon: Clock, label: "24/7 Emergency Service" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <TreePine className="h-7 w-7 text-primary-foreground" />
            <span className="font-display text-xl font-bold text-primary-foreground">Timber Pro</span>
          </div>
          <a href="tel:5551234567">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold">
              <Phone className="mr-2 h-4 w-4" />
              (555) 123-4567
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional tree service crew working on large oak tree" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container relative z-10 py-24">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Safe, Professional Tree Removal
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body">
              Trusted by homeowners for over 15 years. Fully insured, licensed, and ready to handle any job — big or small.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold text-lg px-8 py-6">
                  Get a Free Quote
                </Button>
              </a>
              <a href="tel:5551234567">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-display font-bold text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-8">
        <div className="container flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="h-8 w-8 text-primary" />
              <span className="font-display font-bold text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Our Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            From routine pruning to emergency removal, we have the equipment and expertise to get the job done right.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-secondary">
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Request a Free Quote</h2>
          <p className="text-center text-muted-foreground mb-10">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch soon."); }}
            className="bg-card rounded-lg p-8 shadow-sm border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text" required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                <input
                  type="tel" required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(555) 000-0000"
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@email.com"
                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">How can we help?</label>
              <textarea
                rows={4} required
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Describe your tree service needs..."
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold text-lg py-6">
              Send Request
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-10">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TreePine className="h-6 w-6 text-primary-foreground" />
            <span className="font-display text-lg font-bold text-primary-foreground">Timber Pro</span>
          </div>
          <p className="text-primary-foreground/70 text-sm">
            © 2026 Timber Pro Tree Service. All rights reserved. Fully Insured & Licensed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
