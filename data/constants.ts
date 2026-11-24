// =============================================================================
// Quick Espresso Repair — Site-wide source of truth
// =============================================================================
// Every confirmed business fact lives here, pulled from the project's
// business-facts.md and the workflows/ docs (especially 04-content-accuracy.md).
// Content components should read from this file rather than hard-coding
// values, so facts never drift out of sync across pages.
//
// IMPORTANT — do not add any of the following without an explicit, confirmed
// policy update to this file and to workflows/04-content-accuracy.md first:
//   - A repair price range (only the $145 diagnostic fee is confirmed)
//   - A warranty period or warranty claim
//   - A card payment option (cards are not accepted)
//   - Same-day / next-day / rush turnaround language
//   - A shop drop-off option (pickup only)
// =============================================================================

// Base URL for sitemap/robots/canonical generation. Set NEXT_PUBLIC_SITE_URL
// in Vercel's project environment variables once the real domain is live —
// this placeholder must be replaced before launch so canonical URLs and the
// sitemap point at the real site instead of this placeholder.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.quickespressorepair.com"
).replace(/\/$/, "");

export const BUSINESS = {
  name: "Quick Espresso Repair",
  phoneDisplay: "(442) 445-0378",
  phoneTel: "+14424450378",
  email: null as string | null, // PLACEHOLDER — not yet created
  domain: null as string | null, // PLACEHOLDER — not yet chosen
  addressPublished: false, // no physical address published yet — service-area only
  hoursDisplay: "Monday–Saturday, 10:00 AM–5:00 PM",
  hoursClosedDisplay: "Closed Sundays",
  diagnosticFee: 145,
  diagnosticFeeDisplay: "$145",
  diagnosticFeeIncludes:
    "pickup of your machine and a full diagnostic at our shop",
  diagnosticFeeWaived: true, // waived completely if the repair is completed
  pickupOnly: true, // no shop drop-off — every machine comes in via scheduled pickup
  averageTurnaroundDays: 7,
  averageTurnaroundDisplay: "about 7 business days",
  paymentMethods: ["Cash", "Check", "Zelle", "Venmo"],
  cardPaymentsAccepted: false,
  warrantyConfirmed: false, // do not state any warranty period anywhere
  allBrandsServiced: true, // no brand restrictions
} as const;

export const OWNER = {
  name: "Aman",
  role: "Founder & Lead Technician",
  bio: "Aman brings 6 years of experience in dental machinery repair and 4 years as an appliance repair technician, with training in Germany. He started Quick Espresso Repair around a simple idea: give people an honest diagnosis, a fair price, and a repair that holds — nothing more, nothing less.",
} as const;

// -----------------------------------------------------------------------------
// Service Area — 20 confirmed cities
// -----------------------------------------------------------------------------
// phase: 1 = full dedicated page built now; 2 = listed on the hub, page to come
export type CityPhase = 1 | 2;

export interface City {
  name: string;
  slug: string;
  phase: CityPhase;
  /** 2–3 nearby cities to cross-link (by slug), per the SEO workflow's micro-location rule */
  nearby: string[];
}

export const CITIES: City[] = [
  { name: "Downtown San Diego", slug: "downtown-san-diego", phase: 1, nearby: ["la-mesa", "national-city"] },
  { name: "Chula Vista", slug: "chula-vista", phase: 1, nearby: ["national-city", "downtown-san-diego"] },
  { name: "National City", slug: "national-city", phase: 2, nearby: ["chula-vista", "downtown-san-diego"] },
  { name: "La Mesa", slug: "la-mesa", phase: 2, nearby: ["el-cajon", "lemon-grove"] },
  { name: "El Cajon", slug: "el-cajon", phase: 1, nearby: ["la-mesa", "santee"] },
  { name: "Santee", slug: "santee", phase: 2, nearby: ["el-cajon", "alpine"] },
  { name: "Alpine", slug: "alpine", phase: 2, nearby: ["santee", "el-cajon"] },
  { name: "La Jolla", slug: "la-jolla", phase: 1, nearby: ["del-mar", "downtown-san-diego"] },
  { name: "Del Mar", slug: "del-mar", phase: 2, nearby: ["la-jolla", "encinitas"] },
  { name: "Poway", slug: "poway", phase: 2, nearby: ["rancho-bernardo", "santee"] },
  { name: "Rancho Bernardo", slug: "rancho-bernardo", phase: 2, nearby: ["poway", "escondido"] },
  { name: "Ramona", slug: "ramona", phase: 2, nearby: ["poway", "escondido"] },
  { name: "Fallbrook", slug: "fallbrook", phase: 2, nearby: ["valley-center", "vista"] },
  { name: "Oceanside", slug: "oceanside", phase: 2, nearby: ["vista", "encinitas"] },
  { name: "Vista", slug: "vista", phase: 2, nearby: ["oceanside", "san-marcos"] },
  { name: "San Marcos", slug: "san-marcos", phase: 2, nearby: ["vista", "escondido"] },
  { name: "Encinitas", slug: "encinitas", phase: 1, nearby: ["del-mar", "san-marcos"] },
  { name: "Escondido", slug: "escondido", phase: 1, nearby: ["san-marcos", "rancho-bernardo"] },
  { name: "Valley Center", slug: "valley-center", phase: 2, nearby: ["escondido", "fallbrook"] },
  { name: "Lemon Grove", slug: "lemon-grove", phase: 2, nearby: ["la-mesa", "national-city"] },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);
export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
export const PHASE_1_CITIES = CITIES.filter((c) => c.phase === 1);

// -----------------------------------------------------------------------------
// Services
// -----------------------------------------------------------------------------
export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  audienceNote?: string;
}

export const SERVICES: Service[] = [
  {
    name: "Espresso Machine Repair",
    slug: "espresso-machine-repair",
    shortDescription:
      "Diagnosis and repair for home espresso machines — boilers, group heads, pumps, and more.",
  },
  {
    name: "Super-Automatic Espresso Machine Repair",
    slug: "super-automatic-repair",
    shortDescription:
      "Repair for super-automatic machines (built-in grinder and brew unit), including brands like Jura and Miele.",
  },
  {
    name: "Coffee Grinder Repair",
    slug: "coffee-grinder-repair",
    shortDescription:
      "Repair for espresso and coffee grinders — jamming, inconsistent grind, motor issues.",
  },
  {
    name: "Drip Coffee Maker Repair",
    slug: "drip-coffee-maker-repair",
    shortDescription: "Repair for standard drip coffee makers at home or in the office.",
  },
  {
    name: "Commercial Espresso Machine Repair",
    slug: "commercial-espresso-machine-repair",
    shortDescription:
      "Repair for large, multi-group-head commercial equipment used in cafés and coffee shops — a separate service from our residential/office work.",
    audienceNote: "commercial",
  },
  {
    name: "Espresso Machine Installation",
    slug: "installation",
    shortDescription:
      "Connecting a new machine to existing power and water lines, leveling, and testing.",
  },
  {
    name: "Maintenance Service",
    slug: "maintenance-service",
    shortDescription:
      "Standalone maintenance visits to help prevent breakdowns — not an annual plan or subscription.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// -----------------------------------------------------------------------------
// Brands
// -----------------------------------------------------------------------------
export type BrandCategory = "consumer" | "prosumer" | "super-automatic" | "commercial";

export interface Brand {
  name: string;
  slug: string;
  phase: 1 | 2;
  category: BrandCategory;
}

export const BRANDS: Brand[] = [
  // Phase 1 — build dedicated pages first
  { name: "Breville", slug: "breville", phase: 1, category: "consumer" },
  { name: "Jura", slug: "jura", phase: 1, category: "super-automatic" },
  { name: "Gaggia", slug: "gaggia", phase: 1, category: "prosumer" },
  { name: "Rancilio", slug: "rancilio", phase: 1, category: "prosumer" },
  { name: "La Marzocco", slug: "la-marzocco", phase: 1, category: "commercial" },
  { name: "DeLonghi", slug: "delonghi", phase: 1, category: "consumer" },

  // Phase 2 — confirm real repair volume with Aman before building full pages
  { name: "Nuova Simonelli", slug: "nuova-simonelli", phase: 2, category: "commercial" },
  { name: "Rocket Espresso", slug: "rocket-espresso", phase: 2, category: "prosumer" },
  { name: "ECM", slug: "ecm", phase: 2, category: "prosumer" },
  { name: "Profitec", slug: "profitec", phase: 2, category: "prosumer" },
  { name: "Miele", slug: "miele", phase: 2, category: "super-automatic" },
  { name: "Saeco", slug: "saeco", phase: 2, category: "super-automatic" },
  { name: "Nespresso", slug: "nespresso", phase: 2, category: "consumer" },
  { name: "Keurig", slug: "keurig", phase: 2, category: "consumer" },
  { name: "Krups", slug: "krups", phase: 2, category: "consumer" },
  { name: "Cuisinart", slug: "cuisinart", phase: 2, category: "consumer" },
  { name: "Bezzera", slug: "bezzera", phase: 2, category: "prosumer" },
  { name: "Lelit", slug: "lelit", phase: 2, category: "prosumer" },
  { name: "Quick Mill", slug: "quick-mill", phase: 2, category: "prosumer" },
];

export const PHASE_1_BRANDS = BRANDS.filter((b) => b.phase === 1);
export function getBrand(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
/** 2–3 related brands for cross-linking, per the "Brand Clusters" rule */
export function getRelatedBrands(slug: string, count = 3): Brand[] {
  const current = getBrand(slug);
  if (!current) return [];
  const sameCategory = BRANDS.filter(
    (b) => b.slug !== slug && b.category === current.category
  );
  const rest = BRANDS.filter(
    (b) => b.slug !== slug && b.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, count);
}

// -----------------------------------------------------------------------------
// Audiences (do not conflate — see workflows/05-brand-voice.md)
// -----------------------------------------------------------------------------
export const AUDIENCES = {
  residential: {
    label: "Residential",
    description: "Home espresso and coffee machine owners.",
  },
  office: {
    label: "Office",
    description:
      "Regular, residential-style machines located in an office break room — same service as residential.",
  },
  commercial: {
    label: "Commercial",
    description:
      "Large, multi-group-head equipment found in cafés and coffee shops — a distinct service, not an Office variant.",
  },
} as const;

// -----------------------------------------------------------------------------
// Primary navigation
// -----------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/service-area" },
  { label: "Brands", href: "/brands" },
  { label: "Pricing & FAQ", href: "/pricing-faq" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
