/**
 * HedgeTrimmingSurrey.tsx — Hedge Trimming landing page
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/pages/HedgeTrimmingSurrey.tsx
 * 2. In src/App.tsx add:
 *      import HedgeTrimmingSurrey from "./pages/HedgeTrimmingSurrey";
 *    and inside <Routes>:
 *      <Route path="/hedge-trimming-surrey" element={<HedgeTrimmingSurrey />} />
 */
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "(604) 968-9997";
const PHONE_HREF = "tel:+16049689997";

const included = [
  "Cedar and laurel hedge trimming",
  "Straight tops and clean vertical faces",
  "Height reductions done the healthy way",
  "Privacy hedge thickening and repair advice",
  "All clippings raked, hauled and gone",
  "One-time trims or seasonal upkeep",
];

const faqs = [
  { q: "How often should a cedar hedge be trimmed?", a: "Most Lower Mainland cedar hedges look their best trimmed once or twice a year. Regular light trims keep the outer green layer dense — which matters, because cedars don't regrow from bare inner wood." },
  { q: "How much height can you take off?", a: "With cedars, only so much at a time: cut past the green growth and that section stays brown for good. We reduce height in healthy stages and tell you honestly what your hedge can and can't handle before we start." },
  { q: "Why is my hedge going brown in patches?", a: "Common causes here include summer drought stress, mites, or shading from neighbouring growth. Some browning recovers and some doesn't — we'll tell you which you have and whether trimming, watering or replacement is the right fix." },
  { q: "When's the best time of year to trim?", a: "Late spring and early fall are ideal for cedars in our climate, but light maintenance trims are fine most of the year. We avoid trimming during extreme heat, and we check hedges for active bird nests before cutting in season." },
  { q: "Do you take the clippings away?", a: "Always. The quote includes raking out the hedge line, hauling every clipping, and leaving the beds and lawn cleaner than we found them." },
];

export default function HedgeTrimmingSurrey() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Hedge Trimming Surrey | Integra Tree Service"
        description="Cedar and laurel hedge trimming in Surrey and White Rock. Straight lines, healthy hedges and full cleanup — free quotes from local ISA certified arborists."
        canonicalPath="/hedge-trimming-surrey"
      />

      {/* Hero */}
      <section className="bg-green-900 px-4 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          Hedge Trimming in Surrey &amp; White Rock
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
          Straight lines, healthy cedars, and every clipping hauled away.
          Free quotes across Surrey, White Rock, Delta, Langley and the Tri-Cities.
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
        <h2 className="text-2xl font-bold sm:text-3xl">What our hedge service includes</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Cedar hedge country</h2>
          <p className="mt-4 text-gray-700">
            The cedar hedge is practically the official fence of Surrey and White Rock —
            and it's also a living plant that punishes bad cuts. Shear too deep and you're
            looking at a permanent brown wall, because cedar doesn't push new growth from
            old wood. Our trims keep the green shell dense and the shape crisp, so your
            privacy screen stays a privacy screen.
          </p>
          <p className="mt-4 text-gray-700">
            Tall hedge that's gotten away from you? Overgrown laurel swallowing the
            walkway? We handle the big jobs with proper ladders, platforms and patience —
            clean faces, level tops, and a yard you don't have to clean up afterward.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Hedge questions, answered honestly</h2>
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
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Get your hedge back in shape</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-700">
          Send us a photo or book a free visit — you'll get a straight answer and a clear
          written price.
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
