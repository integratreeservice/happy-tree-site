/**
 * StumpGrindingSurrey.tsx — Stump Removal / Grinding landing page
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/pages/StumpGrindingSurrey.tsx
 * 2. In src/App.tsx add:
 *      import StumpGrindingSurrey from "./pages/StumpGrindingSurrey";
 *    and inside <Routes>:
 *      <Route path="/stump-grinding-surrey" element={<StumpGrindingSurrey />} />
 */
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "Stumps ground well below grade",
  "Tight-access backyards and side gates",
  "Surface roots ground down too",
  "Grindings raked into the hole or hauled",
  "Single stumps or the whole yard",
  "Works with fresh cuts or decades-old stumps",
];

const faqs = [
  { q: "How deep do you grind?", a: "Standard grinding goes well below lawn grade — enough for grass, garden beds or landscaping over top. Replanting a tree in the same spot or pouring concrete? Tell us and we'll grind deeper and quote it that way." },
  { q: "Can I plant a new tree where the old one was?", a: "Yes, with a little prep. We grind deep, then you (or we) clear the chip-heavy soil and back-fill with fresh soil. Planting slightly offset from the old stump gives a new tree the best start." },
  { q: "What's left after grinding?", a: "A pile of wood chips and soil. Most customers have us rake it back into the hole, where it settles over a season; we can also haul it away and leave the spot ready for topsoil and seed." },
  { q: "Will the stump grow back?", a: "Ground stumps don't regrow, though a few species (cherry, poplar, cottonwood) can send up suckers from leftover roots for a while. We'll tell you on site if yours is one of them and what to expect." },
  { q: "Can you get into my backyard?", a: "Usually, yes. Our grinding equipment is chosen for Lower Mainland lots — standard side gates and tight corridors are routine. Send a photo of the access and we'll confirm before we book." },
];

export default function StumpGrindingSurrey() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Stump Grinding in Surrey &amp; Beyond
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          That stump you mow around every week? Gone for good — ground below grade and
          left ready for lawn or garden. Free quotes across the South Fraser.
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
        <h2 className="text-2xl font-bold sm:text-3xl">What our stump service includes</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Why grind it out?</h2>
          <p className="mt-4 text-gray-700">
            A leftover stump isn't just ugly — it's a tripping hazard, a lawnmower
            obstacle, and in our wet coastal climate, an open invitation for rot, carpenter
            ants and fungus right next to your lawn and beds. Grinding removes the problem
            below the surface instead of leaving it to break down for the next decade.
          </p>
          <p className="mt-4 text-gray-700">
            Just had a tree taken down — by us or anyone else? We grind fresh stumps all
            the time. And if you've got a yard full of old ones from years past, we'll
            price the batch together so it finally gets done in one visit.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Stump grinding questions, answered</h2>
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
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Ready to lose the stump?</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-700">
          Text us a photo of the stump and a shot of the gate or access — we can usually
          quote it the same day.
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
