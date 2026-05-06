import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle, Clock, Shield } from "lucide-react";

const EmergencyTreeService = () => {
  return (
    <div className="py-12">
      <SEO
        title="Emergency Tree Service | Integra Tree Service"
        description="Integra Tree Service provides emergency tree service for storm-damaged, fallen, hazardous, or leaning trees in Surrey and the Lower Mainland. Call 604-968-9997."
        canonicalPath="/emergency-tree-service"
      />

      <section className="container max-w-4xl">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Emergency Tree Service
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Storm-damaged, fallen, or hazardous trees can create immediate safety risks. Integra Tree Service provides emergency tree service across Surrey and the Lower Mainland to help protect homes, driveways, fences, vehicles, and nearby structures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl border bg-card">
            <AlertTriangle className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold text-lg mb-2">Hazardous Trees</h2>
            <p className="text-sm text-muted-foreground">
              Call if a tree is cracked, leaning, fallen, or threatening property.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card">
            <Clock className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold text-lg mb-2">Fast Response</h2>
            <p className="text-sm text-muted-foreground">
              We prioritize urgent tree hazards and storm-related cleanup calls.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold text-lg mb-2">Safety First</h2>
            <p className="text-sm text-muted-foreground">
              Our team assesses the risk before removing branches, trunks, or debris.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            When to call for emergency tree service
          </h2>
          <p>
            Call for emergency help if a tree has fallen, is leaning suddenly, has large cracked limbs, is blocking access, or appears likely to damage a home, driveway, fence, vehicle, or utility area. If there are downed power lines, stay away and call the utility provider first.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Emergency service area
          </h2>
          <p>
            We provide emergency tree service in Surrey, White Rock, Delta, Richmond, Langley, and nearby Lower Mainland communities.
          </p>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">
            Need urgent tree help?
          </h2>
          <p className="mb-6">
            Call now or request a free estimate.
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

export default EmergencyTreeService;