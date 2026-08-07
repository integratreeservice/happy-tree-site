/**
 * TreeServiceCoquitlam.tsx — Coquitlam city landing page
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/pages/TreeServiceCoquitlam.tsx
 * 2. Use the updated App.tsx supplied alongside this file (adds the import and
 *    the /tree-service-coquitlam route). No other files need to change.
 */
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "Danger tree assessments on slopes and ravine lots",
  "Removal of large hemlock, fir and cedar",
  "Wind-firm thinning above greenbelts",
  "Structural pruning and crown care",
  "Storm damage response",
  "City of Coquitlam tree rules flagged first",
];

const steps = [
  { t: "Free site visit", d: "We walk the property — slope, ravine edge and all — and note anything Coquitlam's tree regulations may protect, plus which trees are yours versus the city's." },
  { t: "Clear written quote", d: "One number covering the work, rigging, cleanup and haul-away. No surprises when the terrain gets interesting." },
  { t: "Rig, drop, process", d: "On slopes and tight ravine lots, big conifers come down in sections on lines — every piece under control from the first cut to the last." },
  { t: "Final walkthrough", d: "You inspect the trees, the slope and the cleanup with us before we call it done." },
];

const faqs = [
  { q: "Do I need a permit to remove a tree in Coquitlam?", a: "Coquitlam protects trees over a certain size, and slopes and streamside areas can add extra rules. Permits are the property owner's responsibility, but we flag anything likely protected during the free site visit — before a single cut is made." },
  { q: "The trees behind my fence are in a greenbelt — can you remove them?", a: "Often those trees belong to the City, not you, even when they lean over your yard. We tell you which trees are yours and which are the City's during the visit, and for city-owned trees we'll point you to the right municipal request process." },
  { q: "Can you work on a steep or ravine-edge lot?", a: "That's core Coquitlam work for us. We dismantle trees in sections, lower wood on rigging lines, and stage the work so nothing ends up down the slope or in the creek." },
  { q: "There's a huge hemlock close to my house — prune it or remove it?", a: "Hemlocks grow tall and root shallow, so exposure matters as much as size. Sometimes wind-firm thinning buys years of safe life; sometimes the honest answer is removal. We tell you which you're looking at, with reasons." },
  { q: "Which parts of Coquitlam do you serve?", a: "All of it — Westwood Plateau, Burke Mountain, Como Lake, Maillardville, Ranch Park and everywhere between, plus Port Coquitlam next door." },
];

export default function TreeServiceCoquitlam() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Tree Service Coquitlam | Integra Tree Service"
        description="Tree removal, pruning and danger tree assessments in Coquitlam — slope and ravine specialists, with the city tree bylaw flagged first. Free quotes."
        canonicalPath="/tree-service-coquitlam"
      />

      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Tree Service in Coquitlam
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          Slopes, ravines and hundred-foot conifers — Coquitlam trees are big
          work, and it's the work we do best. Free quotes from an insured local crew.
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
        <h2 className="text-2xl font-bold sm:text-3xl">Tree work built for the slopes</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Trees on Coquitlam's slopes</h2>
          <p className="mt-4 text-gray-700">
            Half of Coquitlam backs onto something green — Westwood Plateau and Burke
            Mountain homes sit against conifer stands, and older neighbourhoods run down
            to ravines and creeks. The trees are gorgeous and genuinely big: hemlocks
            and firs that top thirty metres, with hemlock's shallow roots making wind
            exposure the thing to watch. We thin crowns so storms pass through them, and
            we're straight with you about which trees are past that point.
          </p>
          <p className="mt-4 text-gray-700">
            Two local wrinkles matter here. Coquitlam protects larger trees — and slopes
            and streamside areas add extra rules — so we flag anything that may need a
            permit during the free quote. And greenbelt trees behind your fence are often
            the City's, not yours; we tell you which is which before anyone gets attached
            to a plan. For trees worth keeping, our approach to{" "}
            <Link to="/tree-pruning-surrey" className="underline">
              structural pruning
            </Link>{" "}
            keeps them healthy and wind-firm.
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
          <h2 className="text-2xl font-bold sm:text-3xl">Coquitlam tree questions, answered</h2>
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
          Serving Coquitlam — Westwood Plateau, Burke Mountain, Como Lake, Maillardville
          and Ranch Park — plus Port Coquitlam next door
        </p>
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Big trees, steep lots, straight answers</h2>
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
