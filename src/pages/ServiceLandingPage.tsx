import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, TreePine } from "lucide-react";

type ServiceLandingPageProps = {
  title: string;
  metaTitle: string;
  description: string;
  canonicalPath: string;
  intro: string;
  bullets: string[];
  sections: {
    heading: string;
    body: string;
  }[];
  serviceAreas?: string;
};

const ServiceLandingPage = ({
  title,
  metaTitle,
  description,
  canonicalPath,
  intro,
  bullets,
  sections,
  serviceAreas = "Surrey, South Surrey, White Rock, Delta, Langley, Coquitlam, and the Lower Mainland",
}: ServiceLandingPageProps) => {
  return (
    <div className="py-12">
      <SEO
        title={metaTitle}
        description={description}
        canonicalPath={canonicalPath}
      />

      <section className="container max-w-4xl">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl border bg-card">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold text-lg mb-2">Certified Arborists</h2>
            <p className="text-sm text-muted-foreground">
              Professional tree care recommendations from experienced arborists.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card">
            <TreePine className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold text-lg mb-2">Local Tree Service</h2>
            <p className="text-sm text-muted-foreground">
              Serving Surrey, White Rock, Delta, Langley, Coquitlam, and nearby areas.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card">
            <CheckCircle className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold text-lg mb-2">Free Estimates</h2>
            <p className="text-sm text-muted-foreground">
              Request a clear estimate before work begins.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
            What this service includes
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed mb-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-3">
                {section.heading}
              </h2>
              <p>{section.body}</p>
            </div>
          ))}

          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-3">
              Service area
            </h2>
            <p>
              Integra Tree Service provides this service across {serviceAreas}.
            </p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">
            Request a free estimate
          </h2>
          <p className="mb-6">
            Call Integra Tree Service or send a quote request online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:604-968-9997">
                <Phone className="h-4 w-4 mr-2" />
                604-968-9997
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link to="/quote">Request a Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLandingPage;