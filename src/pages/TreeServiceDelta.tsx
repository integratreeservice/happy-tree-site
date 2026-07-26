/**
 * TreeServiceDelta.tsx — Delta / Tsawwassen / Ladner city landing page
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/pages/TreeServiceDelta.tsx
 * 2. Use the updated App.tsx supplied alongside this file (adds the import and
 *    the /tree-service-delta route). No other files need to change.
 */
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "Wind-firm thinning for exposed trees",
  "Cottonwood and poplar limb management",
  "Storm damage and emergency response",
  "Windbreak hedge trimming and restoration",
  "Removals with Delta's tree rules flagged first",
  "Chipping and full debris haul-away",
];

const steps = [
  { t: "Free site visit", d: "We look at each tree's structure, lean and wind exposure — and note anything Delta's tree regulations may protect." },
  { t: "Clear written quote", d: "One price covering the work, the equipment and the disposal — no surprise dump fees after the fact." },
  { t: "Prune, remove, haul", d: "The crew works in a storm-smart order: the riskiest wood comes down first, everything gets chipped or bucked, and the site is left clean." },
  { t: "Final walkthrough", d: "You inspect the trees and the cleanup with us before we call it done." },
];

const faqs = [
  { q: "Do I need a permit to cut down a tree in Delta?", a: "Delta protects trees over a certain size on private property. Permits are the property owner's responsibility, but we flag anything likely protected during the free site visit — before a single cut is made." },
  { q: "My cottonwood drops branches every windstorm. Prune it or remove it?", a: "It depends on the tree's structure and what's underneath it. Often a crown reduction plus deadwood removal buys years of safe life; sometimes the honest answer is that it's past pruning. We tell you which one you're looking at, with reasons." },
  { q: "How fast can you respond after a storm?", a: "During storm season we prioritize emergency calls, with tree-on-structure situations first. Call or text and send a photo if you can — it helps us bring the right gear the first time." },
  { q: "Can you fix a wind-burned or thinning cedar windbreak?", a: "Usually, yes. Hard shearing a stressed windbreak makes it worse — we restore in stages, removing dead material and reshaping over a season or two so it thickens back up instead of dying back." },
  { q: "Do you cover Ladner and North Delta too?", a: "Yes — Tsawwassen, Ladner and North Delta are all regular territory for us, along with neighbouring South Surrey." },
];

export default function TreeServiceDelta() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Tree Service Delta & Tsawwassen | Integra Tree Service"
        description="Tree removal, wind-firm pruning and storm response in Tsawwassen, Ladner and North Delta — free quotes from a fully insured local crew, tree rules flagged first."
        canonicalPath="/tree-service-delta"
      />

      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Tree Service in Delta &amp; Tsawwassen
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          Open ground, big winds and big cottonwoods. We keep Delta's trees
          standing safely — and take down the ones that shouldn't be.
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
        <h2 className="text-2xl font-bold sm:text-3xl">Tree care built for open country</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Built for Delta wind</h2>
          <p className="mt-4 text-gray-700">
            Tsawwassen and Ladner sit on open, flat ground with nothing between your
            trees and a Boundary Bay southeaster. Cottonwoods and poplars — everywhere
            along ditches, driveways and property lines out here — are exactly the
            species that shed heavy limbs in that weather. We thin and reduce crowns so
            wind moves through them, and we're honest about which trees are past
            pruning.
          </p>
          <p className="mt-4 text-gray-700">
            Ladner's high water table adds a twist: roots stay shallow, so a saturated
            January storm can tip a full-canopy tree that looked fine all summer. If
            one does come down, our{" "}
            <Link to="/emergency-tree-service" className="underline">
              emergency tree service
            </Link>{" "}
            is built for exactly that call. And since Delta protects larger trees on
            private property, we flag anything that may need a permit during the free
            site visit — before anything is cut.
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
          <h2 className="text-2xl font-bold sm:text-3xl">Delta tree questions, answered</h2>
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
          Serving Tsawwassen, Ladner, North Delta and neighbouring South Surrey
        </p>
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Get your trees storm-ready</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-700">
          A free assessment now beats an emergency call in January. Call or text for a
          straight answer and one written number.
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
