import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Shield, TreePine, CheckCircle } from "lucide-react";

const TreeRemovalSurrey = () => {
  return (
    <div className="py-12">
      <SEO
        title="Tree Removal Surrey | Integra Tree Service"
        description="Integra Tree Service provides safe tree removal in Surrey and the Lower Mainland. Certified arborists handle hazardous trees, removals, cleanup, and free estimates."
        canonicalPath="/tree-removal-surrey"
      />

      <section className="container max-w-4xl">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tree Removal in Surrey
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Integra Tree Service provides safe, professional tree removal for homeowners and properties across Surrey and the Lower Mainland. Our certified arborists assess tree hazards, protect nearby structures, and complete removals with careful cleanup.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl border bg-card">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold text-lg mb-2">Safe Removals</h2>
            <p className="text-sm text-muted-foreground">
              We remove hazardous, dead, storm-damaged, or unwanted trees while protecting your property.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card">
            <TreePine className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold text-lg mb-2">Certified Arborists</h2>
            <p className="text-sm text-muted-foreground">
              Our team can assess tree health, risk, and removal options before work begins.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card">
            <CheckCircle className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold text-lg mb-2">Cleanup Included</h2>
            <p className="text-sm text-muted-foreground">
              We remove branches, debris, and wood waste so the job is left clean and safe.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            When should a tree be removed?
          </h2>
          <p>
            Tree removal may be needed when a tree is dead, leaning, diseased, storm-damaged, growing too close to a structure, or creating a safety risk. If you are unsure whether a tree should be removed or preserved, we can inspect it and explain your options.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Tree removal service area
          </h2>
          <p>
            We provide tree removal in Surrey, White Rock, Delta, Langley, and nearby Lower Mainland communities.
          </p>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">
            Need a tree removed?
          </h2>
          <p className="mb-6">
            Call Integra Tree Service or request a free estimate online.
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

export default TreeRemovalSurrey;