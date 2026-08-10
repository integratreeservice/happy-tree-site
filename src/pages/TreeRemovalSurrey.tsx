import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Shield, TreePine, CheckCircle } from "lucide-react";

const faqs = [
  {
    q: "Do I need a permit to remove a tree in Surrey?",
    a: "Often, yes. Many trees in Surrey are protected under the City's Tree Protection Bylaw, and as a general rule, healthy trees around 30 cm in trunk diameter or larger require a City permit before removal. Dead or hazardous trees may be handled differently. During your free estimate we'll tell you whether your tree likely needs a permit and point you to the City's application process. White Rock, Delta, Langley, and other municipalities each have their own tree bylaws with different rules.",
  },
  {
    q: "How much does tree removal cost in Surrey?",
    a: "Every removal is different. Price depends on the tree's height and trunk size, how close it is to your house, fences, or wires, and how easy it is to access with equipment. Small, open-access trees cost far less than large trees that have to be dismantled piece by piece over a roof. We provide free written estimates so you know the exact price before any work begins.",
  },
  {
    q: "Can you remove a tree that's close to my house or fence?",
    a: "Yes. Trees in tight spots are dismantled in sections rather than felled in one piece. We use rigging lines to lower branches and trunk sections under control, so nothing free-falls near your home, fence, garden beds, or vehicles. Protecting your property is planned before the first cut is made.",
  },
  {
    q: "What about trees near power lines?",
    a: "If a tree or branch is touching or hanging near a BC Hydro line, do not touch it and keep everyone away. BC Hydro must deal with anything in contact with their lines first — you can reach them at 1 800 224 9376. Once the area around the line is safe, we can complete the rest of the removal.",
  },
  {
    q: "What happens to the wood and branches?",
    a: "Cleanup is part of the job. Branches are chipped on site and hauled away along with the trunk wood, and we rake and blow the work area before we leave. If you'd like to keep firewood, just ask — we can cut the trunk into rounds and leave them stacked for you at no extra charge.",
  },
  {
    q: "How long does a tree removal take?",
    a: "Most residential removals in Surrey are completed in a single visit. A small tree in an open yard may take an hour or two, while a large tree beside a house that has to come down in sections can take most of a day. We'll give you a realistic time estimate along with your written quote.",
  },
  {
    q: "What happens to the stump?",
    a: "We cut the stump as low to the ground as practical during the removal. Stump grinding itself isn't a service we offer, so if you want the stump completely gone, a dedicated stump-grinding company can grind it out afterward — and we're happy to point you in the right direction.",
  },
];

const TreeRemovalSurrey = () => {
  return (
    <div className="py-12">
      <SEO
        title="Tree Removal Surrey | Integra Tree Service"
        description="Safe tree removal in Surrey and the Lower Mainland by certified arborists. Insured, careful crews and free written estimates. Call 604-968-9997."
        canonicalPath="/tree-removal-surrey"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <section className="container max-w-4xl">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tree Removal in Surrey
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Integra Tree Service provides safe, professional tree removal for homeowners and properties across Surrey and the Lower Mainland. Our certified arborists assess tree hazards, protect nearby structures, and complete removals with careful cleanup. As a family-run team, we treat every yard like it's our own — from the first assessment to the final rake.
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
            Tree removal may be needed when a tree is dead, leaning, diseased, storm-damaged, growing too close to a structure, or creating a safety risk. Common warning signs include large dead limbs, fungal growth at the base of the trunk, cracks where major branches attach, roots lifting after wind storms, and trees that have started leaning noticeably toward a house, driveway, or play area. Sometimes a healthy tree simply has to go because it was planted too close to a foundation or is blocking a renovation or new fence line.
          </p>
          <p>
            Not every problem tree needs to come down. If you are unsure whether a tree should be removed or preserved, we can inspect it and explain your options — in many cases, <Link to="/tree-pruning-surrey" className="text-primary underline underline-offset-4">pruning</Link> or cabling can solve the problem and save the tree.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-foreground">
            How our tree removal process works
          </h2>
          <p>
            Every job starts with a free on-site assessment. A certified arborist looks at the tree's condition, what's around it, and how it can come down safely, then gives you a clear written estimate — no surprises. On removal day, trees in open areas are felled and processed, while trees near homes, fences, sheds, or wires are climbed and dismantled in sections, with each piece rigged and lowered under control. Branches are chipped on site, wood is hauled away, and the area is cleaned before we leave.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Tree removal service area
          </h2>
          <p>
            We provide tree removal throughout Surrey — including South Surrey, Cloverdale, Fleetwood, Guildford, Newton, Panorama Ridge, Crescent Beach, Grandview Heights, Morgan Creek, and Elgin. South Surrey properties with large mature firs, cedars, and maples make up a big part of our work, and we know the neighbourhood's tight lots and treed streets well.
          </p>
          <p>
            Beyond Surrey, our crews regularly serve <Link to="/tree-service-white-rock" className="text-primary underline underline-offset-4">White Rock and Ocean Park</Link>, <Link to="/tree-service-delta" className="text-primary underline underline-offset-4">Delta and Tsawwassen</Link>, <Link to="/tree-service-langley" className="text-primary underline underline-offset-4">Langley</Link>, Coquitlam, and Port Coquitlam. If you're anywhere south of the Fraser or in the Tri-Cities, give us a call.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Tree removal FAQs
          </h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-xl text-foreground mb-2">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
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
