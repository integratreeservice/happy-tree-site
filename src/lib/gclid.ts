/**
 * gclid.ts — captures the Google Ads click ID (gclid) so booked jobs can be
 * matched back to the exact ad click later (offline conversion import).
 *
 * WIRING (2 steps):
 * 1. Save this file as: src/lib/gclid.ts
 * 2. Use the updated main.tsx and QuoteForm.tsx supplied alongside this file.
 */

const KEY = "integra_gclid";
const TS_KEY = "integra_gclid_ts";
const NINETY_DAYS = 90 * 24 * 60 * 60 * 1000;

/** Call once on app load. If the URL has ?gclid=... (added automatically by
 *  Google Ads), store it for up to 90 days so it survives browsing around
 *  the site before the visitor submits the quote form. */
export function captureGclid(): void {
  try {
    const gclid = new URLSearchParams(window.location.search).get("gclid");
    if (gclid) {
      localStorage.setItem(KEY, gclid);
      localStorage.setItem(TS_KEY, String(Date.now()));
    }
  } catch {
    // localStorage unavailable (private mode etc.) — fail silently
  }
}

/** Returns the stored gclid, or "" if none was captured or it has expired. */
export function getStoredGclid(): string {
  try {
    const ts = Number(localStorage.getItem(TS_KEY) || 0);
    if (!ts || Date.now() - ts > NINETY_DAYS) return "";
    return localStorage.getItem(KEY) || "";
  } catch {
    return "";
  }
}
