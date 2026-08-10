/**
 * TreeServiceSurrey.tsx — Surrey city landing page
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/pages/TreeServiceSurrey.tsx
 * 2. Use the updated App.tsx supplied alongside this file (adds the import and
 *    the /tree-service-surrey route). No other files need to change.
 */
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "Hazard and danger tree removal, city lots to acreages",
  "Cottonwood and alder work along the Serpentine and Nicomekl lowlands",
  "Structural pruning for health, light and views",
  "Cedar and laurel hedge trimming",
  "Complete cleanup with wood chipped and hauled away",
  "Storm damage response across all of Surrey",
];

const steps = [
  { t: "Free site visit", d: "We're based in Surrey, so quotes here are the fastest we do. We walk the property with you, look at every tree in question, and flag anything the city's tree rules may protect — before a single cut." },
  { t: "Clear written quote", d: "One number covering the work, cleanup and haul-away. No add-ons appearing on the day." },
  { t: "Work day", d: "Removals come down in controlled sections; pruning follows proper arborist practice, not topping. Your lawn, fence and garden get treated like our own." },
  { t: "Final walkthrough", d: "You inspect the trees and the cleanup with us before we call the job done." },
];

const faqs = [
  { q: "Do I need a permit to remove a tree in Surrey?", a: "Surrey protects trees above a certain size, and some species and streamside areas have extra rules. Permits are the property owner's responsibility, but we check what applies during the free site visit and flag anything likely protected before work is planned." },
  { q: "Which Surrey neighbourhoods do you serve?", a: "All of them — Fleetwood, Guildford, Newton, Whalley and City Centre, Cloverdale, Panorama Ridge, South Surrey, Crescent Beach and Ocean Park. Surrey is our home base, so response times here are the shortest in our service area." },
  { q: "How fast can you come out?", a: "Most Surrey quotes happen within a couple of days, and booked work is usually scheduled inside one to two weeks. Storm damage and hazard trees jump the queue — call and we'll prioritize same-day or next-day." },
  { q: "My cottonwood keeps dropping big limbs — trim it or remove it?", a: "Cottonwoods grow fast and shed brittle limbs, especially on the wet ground near the Serpentine and Nicomekl. Sometimes a proper crown reduction buys years of safe life; sometimes removal is the honest answer. We tell you which you're looking at, with reasons." },
  { q: "Do you trim cedar hedges, and when's the best time?", a: "Yes — hedges are half of Surrey's fence lines and a big part of our week. Most cedar and laurel hedges do best trimmed in late spring or early fall, and we can put yours on a regular schedule so it never gets away from you." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TreeServiceSurrey() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Tree Service Surrey BC | Integra Tree Service"
        description="Surrey-based tree removal, pruning, hedge trimming and arborist services — our home city, our fastest response. Free written quotes from a certified, insured local crew."
        canonicalPath="/tree-service-surrey"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Tree Service in Surrey
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          Surrey is our home base — from Fleetwood to Crescent Beach, these are
          the streets we work every week. Free quotes from a certified, insured local crew.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-100">
            <a href={PHONE_HREF}>
              <Phone className="mr-2 h-5 w-5" /> Call or text {PHONE}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
            <Link to="/quote">Request a free quote</Link>
          </Button>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">Full tree care, right where we live</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Local context */}
      <section className="bg-green-50 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Surrey trees, street by street</h2>
          <p className="mt-4 text-gray-700">
            Surrey's trees are as varied as its neighbourhoods. South Surrey and the
            ravine edges carry big second-growth cedars and firs; the lowlands along
            the Serpentine and Nicomekl grow fast, brittle cottonwoods and alders that
            drop limbs in every windstorm; and newer streets in Clayton and Grandview
            are lined with young plantings that need shaping now to be good trees
            later. We handle all of it — <Link to="/tree-removal-surrey" className="underline">removals</Link>,{" "}
            <Link to="/tree-pruning-surrey" className="underline">structural pruning</Link> and the{" "}
            <Link to="/hedge-trimming-surrey" className="underline">cedar hedges</Link> that
            line half the fences in the city.
          </p>
          <p className="mt-4 text-gray-700">
            Being based here matters in practical ways: shorter drives mean faster
            quotes, easier scheduling and quicker storm response. Surrey also protects
            larger trees and some species, so we check what applies during the free
            site visit and flag anything likely protected before a plan is made —
            straight answers first, then the work.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">How it works</h2>
        <ol className="mt-6 space-y-6">
          {steps.map((s, i) => (
            <li key={s.t} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700 font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{s.t}</h3>
                <p className="mt-1 text-gray-700">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Surrey tree questions, answered</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-1 text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area + CTA */}
      <section className="px-4 py-16 text-center">
        <p className="mx-auto flex max-w-2xl items-center justify-center gap-2 text-gray-600">
          <MapPin className="h-5 w-5 text-green-700" />
          Serving every corner of Surrey — Fleetwood, Guildford, Newton, Whalley,
          Cloverdale, Panorama Ridge, South Surrey, Crescent Beach and Ocean Park
        </p>
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Your local crew, one call away</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-700">
          Call or text and we'll walk the property with you — you'll get one written
          number and a clear plan.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-green-700 text-white hover:bg-green-800">
            <a href={PHONE_HREF}>
              <Phone className="mr-2 h-5 w-5" /> Call or text {PHONE}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/quote">
              Request a free quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
