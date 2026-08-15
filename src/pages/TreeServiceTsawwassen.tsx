/**
 * TreeServiceTsawwassen.tsx — Tsawwassen city landing page
 *
 * WIRING (3 steps):
 * 1. Save this file as: src/pages/TreeServiceTsawwassen.tsx
 * 2. Also upload TreeServiceSouthSurrey.tsx to src/pages/
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
  "Removal of mature fir and cedar near homes",
  "Drought-stressed cedar and hedge assessments",
  "Wind-firm thinning for bluff-top exposure",
  "Structural pruning and crown care",
  "Storm damage response",
  "City of Delta tree rules flagged first",
];

const steps = [
  { t: "Free site visit", d: "We walk the property — bluff edge, beach lot or cul-de-sac — and note anything Delta's tree bylaw may protect, so nothing surprises you later." },
  { t: "Clear written quote", d: "One number covering the work, rigging, cleanup and haul-away. No surprises when the wind picks up off the Strait." },
  { t: "Rig, drop, process", d: "Trees beside homes come down in sections on lines — every piece under control from the first cut to the last, gardens and fences protected." },
  { t: "Final walkthrough", d: "You inspect the trees, the hedge line and the cleanup with us before we call it done." },
];

const faqs = [
  { q: "Do I need a permit to remove a tree in Tsawwassen?", a: "Tsawwassen falls under the City of Delta, and Delta protects larger trees under its tree bylaw. Permits are the property owner's responsibility, but we flag anything likely protected during the free site visit — before a single cut is made." },
  { q: "My cedar hedge is browning — can it be saved?", a: "Sometimes. Tsawwassen sits in a rain shadow and gets some of the driest summers in Metro Vancouver, so drought stress hits cedars here first. If the browning is heat stress, watering and a lighter trim can bring a hedge back; if sections are dead, we're honest that replacement or removal is the better spend." },
  { q: "How does the salt wind off the Strait affect my trees?", a: "English Bluff and Beach Grove trees take salt-laden southwesterlies head-on, which dries crowns and loads them in storms. The answer is wind-firm thinning — selective crown work that lets gusts pass through — not topping, which ruins the tree and grows back weaker." },
  { q: "A big fir overhangs my roof — prune it or remove it?", a: "Depends on health, lean and rooting, not just size. Often a crown clean and end-weight reduction solves the roof problem for years; sometimes the honest answer is removal. We tell you which you're looking at, with reasons." },
  { q: "Which parts of Tsawwassen do you serve?", a: "All of it — English Bluff, Beach Grove, Boundary Bay, Pebble Hill, Tsawwassen Heights and Imperial Village — plus Ladner and the rest of Delta next door." },
];

export default function TreeServiceTsawwassen() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Tree Service Tsawwassen | Integra Tree Service"
        description="Tree removal, pruning and cedar hedge care in Tsawwassen — bluff-wind and drought-stress specialists, with Delta's tree bylaw flagged first. Free quotes."
        canonicalPath="/tree-service-tsawwassen"
      />

      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Tree Service in Tsawwassen
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          Salt wind off the Strait, the driest summers on the coast, and cedars
          that feel both — Tsawwassen trees have their own weather. Free quotes
          from an insured local crew.
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
        <h2 className="text-2xl font-bold sm:text-3xl">Tree work built for the point</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Trees between the bluff and the bay</h2>
          <p className="mt-4 text-gray-700">
            Tsawwassen is a peninsula with two climates in one postcode. English
            Bluff and Beach Grove take salt-laden southwesterlies straight off the
            Strait of Georgia, while the rain shadow keeps summers here drier than
            almost anywhere else in Metro Vancouver. Firs and cedars in Pebble Hill
            and Tsawwassen Heights grew up big on old soil — and the same drought
            summers that brown out hedges are now stressing full-grown cedars too.
            Knowing which tree is thirsty, which is dying and which is dangerous is
            most of the job here.
          </p>
          <p className="mt-4 text-gray-700">
            Two local wrinkles matter. Tsawwassen is part of the City of Delta, and
            Delta protects larger trees — so we flag anything that may need a permit
            during the free quote. And the cedar hedges the neighbourhood is known
            for respond best to steady, well-timed care; our{" "}
            <Link to="/hedge-trimming-surrey" className="underline">
              hedge trimming
            </Link>{" "}
            crew keeps them dense, green and inside the property line.
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
          <h2 className="text-2xl font-bold sm:text-3xl">Tsawwassen tree questions, answered</h2>
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
          Serving Tsawwassen — English Bluff, Beach Grove, Boundary Bay, Pebble Hill,
          Tsawwassen Heights and Imperial Village — plus the rest of Delta
        </p>
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Dry summers, salt wind, straight answers</h2>
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
