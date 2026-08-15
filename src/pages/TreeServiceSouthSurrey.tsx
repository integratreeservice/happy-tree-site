/**
 * TreeServiceSouthSurrey.tsx — South Surrey / Ocean Park city landing page
 *
 * WIRING (3 steps):
 * 1. Save this file as: src/pages/TreeServiceSouthSurrey.tsx
 * 2. Also upload TreeServiceTsawwassen.tsx to src/pages/
 * 3. Then replace src/App.tsx and public/sitemap.xml with the updated versions
 *    supplied alongside this file. No other files need to change.
 */
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "Removal of mature Douglas-fir and cedar on estate lots",
  "Wind-firm thinning for bluff and shoreline exposure",
  "Structural pruning and crown care",
  "Danger tree assessments and arborist reports",
  "Storm damage response",
  "City of Surrey tree rules flagged first",
];

const steps = [
  { t: "Free site visit", d: "We walk the property — acreage, bluff edge or beach lane — and note anything Surrey's tree protection bylaw may cover, so nothing surprises you later." },
  { t: "Clear written quote", d: "One number covering the work, rigging, cleanup and haul-away. Large firs near houses take planning, and the plan is in the price." },
  { t: "Rig, drop, process", d: "Big conifers beside homes come down in sections on lines — every piece under control from the first cut to the last, lawns and gardens protected." },
  { t: "Final walkthrough", d: "You inspect the trees and the cleanup with us before we call it done." },
];

const faqs = [
  { q: "Do I need a permit to remove a tree in South Surrey?", a: "South Surrey is the City of Surrey, and Surrey protects larger trees under its tree protection bylaw. Permits are the property owner's responsibility, but we flag anything likely protected during the free site visit — before a single cut is made." },
  { q: "The wind off Semiahmoo Bay hammers my trees — should they be topped?", a: "No — topping ruins a conifer's structure and grows back weaker. What bluff-top trees in Ocean Park and Crescent Beach actually need is wind-firm thinning: selective crown work that lets storms pass through. It keeps the tree, the view corridor and the safety margin." },
  { q: "Can you get equipment into Crescent Beach's small lanes?", a: "Yes — narrow lanes and tight lots are normal working conditions for us. Where trucks can't reach, we rig and carry out in sections. The quote reflects the access, not a surprise on the day." },
  { q: "A hundred-foot fir drops limbs on my roof every winter — prune or remove?", a: "Depends on the tree's health, lean and rooting, not just its size. Often a proper crown clean and end-weight reduction solves the roof problem for years; sometimes the honest answer is removal. We tell you which you're looking at, with reasons." },
  { q: "Which parts of South Surrey do you serve?", a: "All of it — Ocean Park, Crescent Beach, Elgin, Chantrell Creek, Morgan Creek, Grandview Heights and Sunnyside — plus White Rock next door." },
];

export default function TreeServiceSouthSurrey() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Tree Service South Surrey & Ocean Park | Integra Tree Service"
        description="Tree removal, pruning and danger tree assessments in South Surrey — Ocean Park, Crescent Beach, Elgin and Grandview. Big-fir specialists, free quotes."
        canonicalPath="/tree-service-south-surrey"
      />

      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Tree Service in South Surrey
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          Estate-lot firs, bluff-top cedars and sea wind off Semiahmoo Bay —
          South Surrey trees are big, beautiful and exposed. Free quotes from an
          insured local crew.
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
        <h2 className="text-2xl font-bold sm:text-3xl">Tree work built for the peninsula</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Trees on the Semiahmoo Peninsula</h2>
          <p className="mt-4 text-gray-700">
            South Surrey grew up under its firs. The half-acre lots in Elgin and
            Chantrell Creek keep Douglas-firs that top thirty metres, Ocean Park and
            Crescent Beach sit on a bluff that takes the full southwesterly off the
            bay, and Sunnyside Acres reminds everyone what the whole peninsula once
            looked like. Trees this size next to homes reward care and punish
            neglect — our job is keeping them on the right side of that line.
          </p>
          <p className="mt-4 text-gray-700">
            Two local wrinkles matter here. Surrey protects larger trees under its
            tree protection bylaw, so we flag anything that may need a permit during
            the free quote. And on the bluff, the fix for wind is never topping — for
            trees worth keeping, our approach to{" "}
            <Link to="/tree-pruning-surrey" className="underline">
              structural pruning
            </Link>{" "}
            keeps them healthy and wind-firm instead.
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
          <h2 className="text-2xl font-bold sm:text-3xl">South Surrey tree questions, answered</h2>
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
          Serving South Surrey — Ocean Park, Crescent Beach, Elgin, Chantrell Creek,
          Morgan Creek, Grandview Heights and Sunnyside — plus White Rock next door
        </p>
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Big firs, sea wind, straight answers</h2>
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
