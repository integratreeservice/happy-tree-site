/**
 * TreeServiceLangley.tsx — Langley City & Township city landing page
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/pages/TreeServiceLangley.tsx
 * 2. Use the updated App.tsx supplied alongside this file (adds the import and
 *    the /tree-service-langley route). No other files need to change.
 */
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "Big fir and cedar removals with rigging",
  "Acreage and multi-tree pruning, priced per visit",
  "Fence-line, paddock and driveway clearing",
  "Hedge and windbreak trimming",
  "Full cleanup with wood chipped and hauled away",
  "City vs Township tree rules flagged first",
];

const steps = [
  { t: "Free site visit", d: "We walk the whole property — acreage welcome — and tell you which Langley bylaw applies to your address and which trees it may protect." },
  { t: "Clear written quote", d: "Multi-tree work is priced for one mobilization, so the per-tree cost drops as the list grows. One written number, disposal included." },
  { t: "Rig, drop, process", d: "Big conifers come down in sections, lowered on lines — not felled and hoped for. Wood bucked for firewood or hauled away, your call." },
  { t: "Final walkthrough", d: "You inspect the trees and the cleanup with us before we call it done." },
];

const faqs = [
  { q: "Do I need a permit to remove a tree in Langley?", a: "It depends which Langley you're in. The City of Langley and the Township of Langley are separate municipalities with separate tree bylaws and size thresholds. Permits are the property owner's responsibility, but we tell you which rulebook applies to your address and flag anything likely protected during the free quote." },
  { q: "Can you take down a big fir close to my house?", a: "Yes — that's core work for us. Large conifers near structures come down in sections, with each piece rigged and lowered under control rather than dropped. Your roofline, fences and gardens stay exactly as we found them." },
  { q: "How do you price acreage or multi-tree jobs?", a: "By the visit, not tree-by-tree at full rate. Once the crew and gear are on site, each additional tree costs less — so it's worth walking the whole property with us and doing the full list in one go." },
  { q: "Can you clear an overgrown fence line or corner of the property?", a: "Yes — brush, blackberry and volunteer alders included. If the job grows into reclaiming a whole section of land, that rolls into our lot clearing service with the same crew." },
  { q: "Which parts of Langley do you serve?", a: "Both the City and the Township — Walnut Grove, Willoughby, Brookswood, Murrayville and Fort Langley are all regular territory for us." },
];

export default function TreeServiceLangley() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Tree Service Langley | Integra Tree Service"
        description="Arborist and tree removal for Langley City and Township — acreage specialists, big-tree rigging and fence-line clearing. Free quotes."
        canonicalPath="/tree-service-langley"
      />

      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Tree Service in Langley — City &amp; Township
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          From village lots in the City to five-acre parcels in the Township, we
          handle Langley's trees — big firs included.
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
        <h2 className="text-2xl font-bold sm:text-3xl">Tree work sized for Langley properties</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Two Langleys, two rulebooks</h2>
          <p className="mt-4 text-gray-700">
            The City of Langley and the Township of Langley are separate municipalities
            with separate tree bylaws — what needs a permit on one side of the boundary
            may not on the other. Permits are always the property owner's
            responsibility, but we tell you which rulebook applies to your address and
            flag anything likely protected during the free quote, before a single cut
            is made.
          </p>
          <p className="mt-4 text-gray-700">
            Most of our Langley work is acreage: mature firs and cedars standing close
            to homes, shops and barns, fence lines swallowed by brush and blackberry,
            and driveways that narrow a little more every year. Rigging lets us bring
            big wood down in sections in tight spots — and when the job grows into
            reclaiming a whole corner of the property, our{" "}
            <Link to="/lot-clearing-surrey" className="underline">
              lot clearing service
            </Link>{" "}
            picks up where tree work ends.
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
          <h2 className="text-2xl font-bold sm:text-3xl">Langley tree questions, answered</h2>
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
          Serving Langley City and Township — Walnut Grove, Willoughby, Brookswood,
          Murrayville and Fort Langley
        </p>
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Big trees, straight answers</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-700">
          Call or text and we'll walk your property — you'll get one written number
          and a real start date.
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
