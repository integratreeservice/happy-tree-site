// Centralized lead tracking. Fires ONLY on a real, successful form submit.
// Used by both HomeQuoteForm and QuoteForm.

type LeadDetails = {
  service?: string;
  city?: string;
  source?: string;
};

// Google Ads conversion (matches the AW gtag loaded in index.html).
const GOOGLE_ADS_SEND_TO = "AW-16561777245/fW9lCPmcj4wcEN3Uotk9";

export function trackLead(details: LeadDetails = {}): void {
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  };

  // 1) Google Ads conversion — what Smart Bidding optimizes toward. Works via the
  //    gtag('config','AW-16561777245') already loaded in index.html. No GTM needed.
  if (typeof w.gtag === "function") {
    w.gtag("event", "conversion", { send_to: GOOGLE_ADS_SEND_TO });
  }

  // 2) GA4 lead event via dataLayer — gives GA4 a real completion event to key on.
  //    Requires a GA4 Event tag in GTM triggered on custom event "generate_lead".
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "generate_lead",
    lead_service: details.service ?? "",
    lead_city: details.city ?? "",
    lead_source: details.source ?? "",
  });
}
