import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle, Clock, Shield } from "lucide-react";

const faqs = [
  {
    q: "What counts as a tree emergency?",
    a: "Anything that puts people or property at immediate risk: a tree that has fallen on a house, garage, vehicle, or fence; a large limb that has cracked and is hanging over a walkway or driveway; a tree that has suddenly started leaning after a storm or heavy rain; or a fallen tree blocking your driveway or access to your home. If you're looking at a tree and wondering whether it's safe to wait — call us and describe it. We'll tell you honestly whether it can wait or not.",
  },
  {
    q: "A tree fell on my house or car — will insurance cover it?",
    a: "In many cases, yes. Damage from fallen trees is commonly covered under home and vehicle insurance policies, though every policy is different, so check with your provider. Take photos of the damage before anything is moved, and contact your insurer early. We provide detailed invoices and can document the work we do, which is the paperwork insurers typically ask for in a claim.",
  },
  {
    q: "What if a tree or branch is on a power line?",
    a: "Stay well away and keep everyone else away too — a downed or contacted line can be live even if it looks dead. If there is immediate danger to people, call 911. Report the line contact to BC Hydro at 1 800 224 9376. Tree companies cannot legally work on anything in contact with BC Hydro's lines; once the utility has made the line safe, we can handle the rest of the tree.",
  },
  {
    q: "Do you answer emergency calls outside business hours?",
    a: "Storms don't keep business hours, and neither do falling trees. Call us any time — if we can't pick up right away, leave a message and we'll get back to you as quickly as we can. Genuine safety hazards always go to the top of the list, ahead of scheduled work.",
  },
  {
    q: "How fast can you get here?",
    a: "It depends on where you are and what's happening across the region. On a normal day, we can often assess an urgent hazard the same day. During a major wind or snow storm, when calls come in from all over Surrey and the surrounding communities at once, we triage — the situations most dangerous to people and homes get handled first. When you call, we'll give you a realistic timeline, not a guess.",
  },
  {
    q: "Does emergency tree work cost more than regular work?",
    a: "Emergency jobs are priced on the same factors as any other job — the size of the tree, what it's resting on, how difficult and dangerous the access is, and how much cleanup is involved. Work on a tree that's tangled in a structure is more complex than a standard removal, and pricing reflects that complexity. You'll always get clear pricing before we start.",
  },
  {
    q: "Can you just make it safe now and finish the cleanup later?",
    a: "Yes, and it's often the smart approach. In an emergency, the first priority is removing the danger — getting the weight off your roof, clearing your driveway, or taking down the cracked limb. Full cleanup, wood removal, and stump grinding can be scheduled for a follow-up visit once the urgent hazard is gone, which can also help spread out the cost.",
  },
];

const EmergencyTreeService = () => {
  return (
    <div className="py-12">
      <SEO
        title="Emergency Tree Service | Integra Tree Service"
        description="Integra Tree Service provides emergency tree service for storm-damaged, fallen, hazardous, or leaning trees in Surrey and the Lower Mainland. Call 604-968-9997."
        canonicalPath="/emergency-tree-service"
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
            Emergency Tree Service
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Storm-damaged, fallen, or hazardous trees can create immediate safety risks. Integra Tree Service provides emergency tree service across Surrey and the Lower Mainland to help protect homes, driveways, fences, vehicles, and nearby structures. Our certified arborists assess the hazard first, then remove the danger safely — no shortcuts, even under pressure.
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
            Call for emergency help if a tree has fallen, is leaning suddenly, has large cracked limbs, is blocking access, or appears likely to damage a home, driveway, fence, vehicle, or utility area. After the wind and rain storms that roll through the Lower Mainland every fall and winter, the most common calls we get are for snapped tops hanging in cedars and firs, uprooted trees resting on roofs, and heavy limbs down across driveways. If there are downed power lines, stay away and call the utility provider first.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-foreground">
            What to do while you wait
          </h2>
          <p>
            Keep people and pets well away from the tree — a partially fallen tree is under tension and can shift without warning. Don't try to cut anything yourself, even branches that look small; wood under load behaves unpredictably and is one of the most common causes of chainsaw injuries. If the tree has damaged your home or vehicle, take photos from a safe distance for your insurance claim before anything is moved. Then give us a call and describe what you're seeing, and we'll tell you what needs to happen and how quickly.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Emergency service area
          </h2>
          <p>
            We respond to tree emergencies throughout Surrey — including South Surrey, Cloverdale, Fleetwood, Guildford, Newton, Panorama Ridge, Crescent Beach, and Grandview Heights. When storms hit the exposed neighbourhoods of South Surrey and the peninsula, we're close by.
          </p>
          <p>
            We also serve <Link to="/tree-service-white-rock" className="text-primary underline underline-offset-4">White Rock and Ocean Park</Link>, <Link to="/tree-service-delta" className="text-primary underline underline-offset-4">Delta and Tsawwassen</Link>, <Link to="/tree-service-langley" className="text-primary underline underline-offset-4">Langley</Link>, Coquitlam, and Port Coquitlam for urgent tree hazards and storm cleanup.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Emergency tree service FAQs
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
