/**
 * TreeServiceWhiteRock.tsx — White Rock / Ocean Park city landing page
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/pages/TreeServiceWhiteRock.tsx
 * 2. Use the updated App.tsx supplied alongside this file (adds the import and
 *    the /tree-service-white-rock route). No other files need to change.
 */
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "View and vista pruning — thinning, never topping",
  "Wind-firm crown work for exposed bluff trees",
  "Salt-stressed cedar and hedge care",
  "Removals on steep, tight-access hillside lots",
  "Storm damage response after big southeasters",
  "Bylaw-protected trees flagged before any cut",
];

const steps = [
  { t: "Free site visit", d: "We walk the property, look at how your trees carry wind coming off the bay, and note anything White Rock's tree bylaw may protect." },
  { t: "Clear written quote", d: "One number covering the work, cleanup and haul-away — with any permit questions flagged before you commit to anything." },
  { t: "Careful execution", d: "Climbing and rigging sized for hillside lots, so limbs and wood come down under control — not through your garden or your neighbour's." },
  { t: "Final walkthrough", d: "You check the view, the trees and the cleanup with us before we call it done." },
];

const faqs = [
  { q: "Do I need a permit to remove a tree in White Rock?", a: "White Rock protects trees above a certain size, and slope stability can add extra considerations on the hillside. Permits are the property owner's responsibility, but we identify anything likely protected during the free site visit — before a single cut is made." },
  { q: "Can you prune trees to open up my ocean view?", a: "Yes — the right way. Topping a tree for a view wrecks its structure, triggers dense regrowth that closes the view again within a couple of seasons, and can put you offside with the bylaw. We use selective windowing and crown thinning instead, so you keep the view and the tree keeps its health." },
  { q: "Why do my cedars brown off every winter here?", a: "Salt-laden wind off Semiahmoo Bay dries cedar foliage faster than the roots can replace moisture, especially on exposed hedges. We prune out dead material, avoid hard shearing on stressed hedges, and tell you honestly whether a hedge is recoverable or done." },
  { q: "Can you work on steep or hard-to-access lots?", a: "That's most of White Rock. We dismantle trees in sections and lower the wood on rigging lines, and we bring equipment sized for narrow driveways and terraced yards rather than assuming machine access." },
  { q: "Do you also cover Ocean Park and South Surrey?", a: "Yes — same crew, minutes away. The whole Semiahmoo Peninsula is home turf for us." },
];

export default function TreeServiceWhiteRock() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Tree Service White Rock & Ocean Park | Integra Tree Service"
        description="Arborist services in White Rock and Ocean Park — view pruning done right, wind-firm trimming for bluff trees, and bylaw-aware removals. Free quotes."
        canonicalPath="/tree-service-white-rock"
      />

      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Tree Service in White Rock &amp; Ocean Park
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          Salt wind, steep slopes and protected views — hillside trees need
          different care. Free quotes from a local, fully insured crew.
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
        <h2 className="text-2xl font-bold sm:text-3xl">Tree care built for the hillside</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Trees on the White Rock bluff</h2>
          <p className="mt-4 text-gray-700">
            White Rock trees live a harder life than trees a few kilometres inland.
            Salt-laden wind off Semiahmoo Bay dries out cedars and hedges, and the firs
            and maples on the slope catch every winter southeaster at full strength. We
            prune for wind first — thinning crowns so storms pass through them instead
            of pushing them over.
          </p>
          <p className="mt-4 text-gray-700">
            Then there's the view. A bad "view job" — topping — ruins the tree, grows
            back thicker within a couple of seasons, and can create bylaw trouble. Our
            approach is selective windowing and thinning, the same careful standard as
            all{" "}
            <Link to="/tree-pruning-surrey" className="underline">
              our pruning work
            </Link>
            : you keep the view, and the tree keeps its structure.
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
          <h2 className="text-2xl font-bold sm:text-3xl">White Rock tree questions, answered</h2>
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
          Serving White Rock, Ocean Park, South Surrey and the Semiahmoo Peninsula
        </p>
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Keep the view. Keep the trees.</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-700">
          Call or text and we'll walk the property with you — you'll get a straight
          answer and one written number.
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
