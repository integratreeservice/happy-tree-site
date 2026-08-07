/**
 * TreeServicePortCoquitlam.tsx — Port Coquitlam city landing page
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/pages/TreeServicePortCoquitlam.tsx
 * 2. Use the updated App.tsx supplied alongside this file (adds the import and
 *    the /tree-service-port-coquitlam route). No other files need to change.
 */
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "Tree removal on tight-access city lots",
  "Cedar hedge trimming and restoration",
  "Cottonwood and fast-growth management",
  "Structural pruning and crown care",
  "Stump grinding after removal",
  "PoCo tree rules flagged before any cut",
];

const steps = [
  { t: "Free site visit", d: "We check the tree, the access — gates, fences, neighbouring yards — and anything Port Coquitlam's tree rules may protect." },
  { t: "Clear written quote", d: "One number covering the work, cleanup and haul-away. Tight access is our problem to solve, not a surcharge surprise." },
  { t: "Careful execution", d: "In close-set neighbourhoods, trees come down in sections and travel out through the gate — not over your fence or your neighbour's flower bed." },
  { t: "Final walkthrough", d: "You inspect the work and the cleanup with us before we call it done." },
];

const faqs = [
  { q: "Do I need a permit to remove a tree in Port Coquitlam?", a: "Port Coquitlam protects trees over a certain size on private property. Permits are the property owner's responsibility, but we flag anything likely protected during the free site visit — before a single cut is made." },
  { q: "My only access is a backyard gate — can you still remove the tree?", a: "Yes — that's most of our PoCo work. We dismantle in sections, lower wood on lines, and carry it out piece by piece. Lawns, fences and gardens stay exactly as we found them." },
  { q: "Can you bring an overgrown cedar hedge back under control?", a: "Usually, yes. A hedge that's gone tall and bare at the bottom needs staged reduction, not one brutal shearing — we reshape it over a season or two so it thickens back instead of dying back. If it's shared with a neighbour, we're happy to talk to both sides." },
  { q: "Our cottonwood drops branches every windstorm — is that normal?", a: "For cottonwoods near the river corridor, unfortunately yes. Fast growth means weak wood. A crown reduction plus deadwood removal often buys years; if it's past that, we'll say so honestly." },
  { q: "Which parts of Port Coquitlam do you serve?", a: "All of them — Mary Hill, Citadel Heights, Oxford Heights, Glenwood and Birchland Manor included, plus Coquitlam next door." },
];

export default function TreeServicePortCoquitlam() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Tree Service Port Coquitlam | Integra Tree Service"
        description="Tree removal, cedar hedge trimming and pruning in Port Coquitlam — tight-access specialists, PoCo tree bylaw flagged before any cut. Free quotes."
        canonicalPath="/tree-service-port-coquitlam"
      />

      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Tree Service in Port Coquitlam
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          Big cedars, close-set homes and gates a wheelbarrow barely fits through —
          PoCo tree work is precision work. Free quotes from an insured local crew.
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
        <h2 className="text-2xl font-bold sm:text-3xl">Tree care for close quarters</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Big trees, close quarters</h2>
          <p className="mt-4 text-gray-700">
            Port Coquitlam's established neighbourhoods — Mary Hill, Oxford Heights,
            Citadel — were planted generously and built snugly. The result, decades on,
            is mature cedars and firs standing a few metres from houses, and hedges
            that have quietly become walls. Working here means sectional dismantling,
            rigging lines and hand-carrying wood out through gates — the kind of
            careful, tight-access work we've built our reputation on. Overgrown hedges
            get the same patience: staged{" "}
            <Link to="/hedge-trimming-surrey" className="underline">
              hedge restoration
            </Link>{" "}
            that brings them back thick and green instead of scalped.
          </p>
          <p className="mt-4 text-gray-700">
            Down toward the Coquitlam River, moisture-loving cottonwoods grow fast and
            shed hard in wind — we manage them honestly, keeping the keepers and being
            straight about the rest. And since Port Coquitlam protects trees over a
            certain size, we flag anything that may need a permit during the free
            quote, before a single cut is made.
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
          <h2 className="text-2xl font-bold sm:text-3xl">Port Coquitlam tree questions, answered</h2>
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
          Serving Port Coquitlam — Mary Hill, Citadel Heights, Oxford Heights, Glenwood
          and Birchland Manor — plus Coquitlam next door
        </p>
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Tight access, tidy results</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-700">
          Call or text and we'll take a look — you'll get one written number and a
          clear plan for getting it done without drama.
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
