/**
 * LotClearingSurrey.tsx — Lot Clearing landing page
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/pages/LotClearingSurrey.tsx
 * 2. In src/App.tsx add:
 *      import LotClearingSurrey from "./pages/LotClearingSurrey";
 *    and inside <Routes>:
 *      <Route path="/lot-clearing-surrey" element={<LotClearingSurrey />} />
 *
 * If your existing service pages use a different route pattern (e.g. /services/...),
 * tell Claude and the paths in all three new pages will be matched to it.
 */
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "Tree, brush and blackberry removal",
  "Chipping and full debris haul-away",
  "Overgrown and invasive growth cleared",
  "Selective clearing — keep the trees you want",
  "Build-site and driveway line prep",
  "Clean, construction-ready finish",
];

const steps = [
  { t: "Free site visit", d: "We walk the lot with you, flag anything that may be protected under local tree bylaws, and confirm exactly what stays and what goes." },
  { t: "Clear written quote", d: "One price covering the work, the machines and the disposal — no surprise dump fees after the fact." },
  { t: "Clear, chip, haul", d: "Our crew drops, chips and hauls in an organized sequence so the site stays workable, not buried in slash." },
  { t: "Final walkthrough", d: "You inspect the finished lot with us. We leave it clean and ready for whatever comes next." },
];

const faqs = [
  { q: "What does lot clearing cost in Surrey?", a: "It depends on lot size, how dense the growth is, machine access and how much material has to leave the site. That's why we quote from a free site visit rather than over the phone — you get one written number that includes disposal." },
  { q: "What happens to all the debris?", a: "Smaller material is chipped on site and hauled away or left as chips if you want them. Logs can be bucked and left for firewood or removed entirely — your call, priced accordingly." },
  { q: "Do I need a permit to clear my lot?", a: "Many Lower Mainland municipalities, including Surrey, protect trees over a certain size. Permits are the property owner's responsibility, but we'll flag anything on your lot that may be protected during the site visit so you know before anything is cut." },
  { q: "Can you clear around structures, fences and septic?", a: "Yes. We work around houses, outbuildings, fences and marked services routinely — tell us what's on the lot and we'll plan the drop zones around it." },
  { q: "How long does it take?", a: "Most residential lots are cleared in one to three days once we start. Larger acreage is scheduled in phases with a timeline in your quote." },
];

export default function LotClearingSurrey() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Lot Clearing in Surrey &amp; the South Fraser
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          Trees, brush and blackberry cleared right down to a clean, usable site.
          Free on-site quotes across Surrey, Langley, Delta and nearby.
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
        <h2 className="text-2xl font-bold sm:text-3xl">What our lot clearing includes</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Built for Lower Mainland lots</h2>
          <p className="mt-4 text-gray-700">
            Around here, a lot that sits for even a couple of seasons disappears under
            Himalayan blackberry, alder whips and salmonberry. We clear that growth at the
            roots instead of just knocking it down, so your lot stays clear instead of
            bouncing back by next summer.
          </p>
          <p className="mt-4 text-gray-700">
            Building or subdividing? We prep sites so the next trades can start work:
            clean grades of debris, defined driveway lines, and any trees you're keeping
            protected and left standing. And because Surrey, Langley and Delta each treat
            protected trees differently, we flag anything that may need a permit before a
            single cut is made — so your project doesn't start with a bylaw problem.
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
          <h2 className="text-2xl font-bold sm:text-3xl">Lot clearing questions, answered</h2>
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
          Serving Surrey, South Surrey, White Rock, Ocean Park, Tsawwassen, Delta, Langley,
          Coquitlam and Port Coquitlam
        </p>
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Ready to see your lot again?</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-700">
          Call or text and we'll set up a free site visit — you'll get a clear price and a
          realistic start date.
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
