// Page copy for each service — deliberately distinct per page (no copy-paste
// templating) to avoid thin/duplicate content. Pricing/turnaround/payment
// specifics always match data/constants.ts; do not hardcode different
// numbers here.
import type { BrandCategory } from "@/data/constants";

export interface ServiceContent {
  tagline: string;
  bluf: string;
  commonIssues: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  relatedBrandCategory?: BrandCategory;
  audienceNote?: string;
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "espresso-machine-repair": {
    tagline: "Boilers, pumps, leaks, and group heads — repaired at our shop.",
    bluf: "If your espresso machine won't heat up, won't build pressure, or is leaking water, we can likely fix it. We pick up your machine, run a full diagnostic at our shop for a flat $145 fee (waived completely if we complete the repair), and return it once it's working again.",
    commonIssues: [
      { title: "No power or won't heat up", body: "Often an electrical or heating-element issue — we test the full power path before replacing anything." },
      { title: "Low or no pressure", body: "Usually a pump, gasket, or valve problem that keeps your shots from pulling correctly." },
      { title: "Water leaking from the base or group head", body: "Worn seals and gaskets are a common culprit, especially on older machines." },
      { title: "Noisy or failing pump", body: "A grinding or whining pump rarely fixes itself and tends to get worse." },
      { title: "Group head not sealing or dripping after a shot", body: "Can affect extraction quality and is usually a quick fix once diagnosed." },
      { title: "Mineral buildup affecting flow or flavor", body: "Hard water scale inside the boiler and lines can choke flow over time." },
    ],
    faqs: [
      { q: "What brands of espresso machines do you repair?", a: "We work on all major brands, including Breville, Gaggia, Rancilio, DeLonghi, and more. Visit our Brands page for brand-specific notes." },
      { q: "Is there a charge just to find out what's wrong?", a: "Our diagnostic fee is a flat $145, which covers pickup and a full inspection at our shop. It's waived completely if we complete the repair." },
      { q: "Do I need to bring my machine to you?", a: "No — pickup is included. We bring your machine to our shop and return it once it's repaired." },
    ],
    relatedServices: ["super-automatic-repair", "coffee-grinder-repair", "maintenance-service"],
  },

  "super-automatic-repair": {
    tagline: "Built-in grinder, brew unit, and error-code issues on machines like Jura and Miele.",
    bluf: "Super-automatic machines pack a grinder, brew unit, and milk system into one unit — which means more that can go wrong internally. If yours is throwing an error code, jamming mid-brew, or the milk frother has stopped working, we can diagnose and repair it at our shop.",
    commonIssues: [
      { title: "Brew unit jammed or won't eject", body: "A common failure point on super-automatics — often fixable without a full replacement." },
      { title: "Error codes on the display", body: "Most manufacturers use codes for specific faults; we can read and resolve the underlying issue." },
      { title: "Internal grinder clogging or jamming", body: "Oily beans and infrequent cleaning are frequent causes." },
      { title: "Milk frother or steam wand not working", body: "Clogged milk lines or a failing frothing unit are both repairable." },
      { title: "Descale or water sensor stuck on", body: "Sometimes a sensor issue rather than an actual descaling need." },
    ],
    faqs: [
      { q: "My machine shows an error code — can you fix it?", a: "In most cases, yes. We diagnose the cause behind the code rather than just clearing it, so the problem doesn't come right back." },
      { q: "Can you fix just the milk frother?", a: "Yes, we can diagnose and repair the milk system on its own if that's the only issue." },
      { q: "Do you work on Jura machines specifically?", a: "Yes — Jura is one of the brands we service most often. See our Jura repair page for more detail." },
    ],
    relatedServices: ["espresso-machine-repair", "coffee-grinder-repair", "maintenance-service"],
    relatedBrandCategory: "super-automatic",
  },

  "coffee-grinder-repair": {
    tagline: "Standalone and built-in grinder repair — motor, burr, and jamming issues.",
    bluf: "A grinder that won't start, grinds inconsistently, or keeps jamming is more than just an inconvenience — it affects every cup you make. We repair both standalone grinders and the grinding units built into super-automatic machines.",
    commonIssues: [
      { title: "Motor won't start or stalls", body: "Can be an electrical fault or a jammed burr set putting too much load on the motor." },
      { title: "Inconsistent or dull grind", body: "Worn burrs are a common cause and are often replaceable without a new unit." },
      { title: "Jamming or clogging", body: "Oily beans, moisture, or foreign debris can bind up the burr chamber." },
      { title: "Doser or hopper issues", body: "Mechanical wear in the doser mechanism can cause uneven or stuck dosing." },
    ],
    faqs: [
      { q: "Do you repair grinders that aren't part of an espresso machine?", a: "Yes — we service standalone coffee and espresso grinders in addition to the grinders built into super-automatic machines." },
      { q: "Is it worth repairing an old grinder?", a: "Often, yes — many grinder issues come down to worn burrs or a jammed chamber rather than a failed motor. We'll give you an upfront quote before doing any work." },
    ],
    relatedServices: ["espresso-machine-repair", "super-automatic-repair", "maintenance-service"],
  },

  "drip-coffee-maker-repair": {
    tagline: "Everyday drip coffee maker repair for home and office.",
    bluf: "Espresso machines are our specialty, but we also repair standard drip coffee makers — the kind you'll find on a kitchen counter or in an office break room. If yours won't brew, is leaking, or the warming plate has stopped working, we can take a look.",
    commonIssues: [
      { title: "Won't power on or won't brew", body: "Often an internal electrical or heating-element issue." },
      { title: "Leaking during the brew cycle", body: "Usually a seal, valve, or cracked reservoir." },
      { title: "Slow or incomplete brew cycle", body: "Mineral buildup in the internal tubing is a frequent cause." },
      { title: "Warming plate not heating", body: "A failed heating element or related wiring issue." },
    ],
    faqs: [
      { q: "Do you work on office coffee makers too?", a: "Yes — the same repair process applies whether your drip coffee maker is at home or in an office break room." },
      { q: "Is the diagnostic fee the same as for espresso machines?", a: "Yes, our $145 flat diagnostic fee applies across machine types, and it's waived if we complete the repair." },
    ],
    relatedServices: ["espresso-machine-repair", "maintenance-service", "installation"],
  },

  "commercial-espresso-machine-repair": {
    tagline: "Multi-group-head equipment for cafés and coffee shops.",
    audienceNote:
      "This is a separate service from our residential and office work — it covers the larger, multi-group-head equipment used in cafés and coffee shops, not standard home-style machines.",
    bluf: "Running a café or coffee shop means your equipment can't afford extended downtime. We repair commercial-grade, multi-group-head espresso machines — diagnosing the issue at our shop and getting your equipment back in service as quickly as the repair allows.",
    commonIssues: [
      { title: "Group head wear from high daily volume", body: "High-cycle use wears seals and gaskets faster than home machines ever see." },
      { title: "Boiler or temperature control (PID) issues", body: "Inconsistent water temperature affects every drink that goes out the window." },
      { title: "Steam wand or frothing system failure", body: "A critical point of failure during a morning rush." },
      { title: "Water filtration or softener problems", body: "Poor filtration accelerates scale buildup across the whole machine." },
      { title: "Pump wear from continuous use", body: "Commercial pumps work far harder than residential ones and show wear accordingly." },
    ],
    faqs: [
      { q: "Do you work with cafés and coffee shops?", a: "Yes — this service is built specifically for commercial, multi-group-head equipment used in café and coffee shop settings." },
      { q: "Is this the same as your office repair service?", a: "No. Our office service covers standard, residential-style machines in a break room. Commercial repair covers larger café-grade equipment — a distinct service with different parts and expertise." },
      { q: "Do you pick up commercial equipment too?", a: "Yes, pickup is included, the same as with our residential and office service." },
    ],
    relatedServices: ["espresso-machine-repair", "installation", "maintenance-service"],
    relatedBrandCategory: "commercial",
  },

  installation: {
    tagline: "Connecting your new machine to existing power and water lines.",
    bluf: "A new espresso machine needs to be connected, leveled, and tested correctly before it's ready to use. We handle installation by connecting your machine to your existing power and water lines, then testing it to make sure everything runs the way it should.",
    commonIssues: [
      { title: "Connecting to existing water lines", body: "We connect your machine to water lines that are already in place." },
      { title: "Connecting to existing power", body: "We wire your machine into existing power supply points and confirm it's drawing correctly." },
      { title: "Leveling and initial setup", body: "Proper leveling affects boiler performance and extraction consistency." },
      { title: "Initial test run", body: "We run your machine through its first cycles to confirm everything is working before we leave." },
    ],
    faqs: [
      { q: "Can you run a new water line or electrical circuit for my machine?", a: "No — our installation service connects your machine to existing power and water lines. We do not modify electrical circuits or plumbing." },
      { q: "Do you install commercial equipment for cafés too?", a: "Yes, we install both residential/office machines and commercial café equipment." },
    ],
    relatedServices: ["maintenance-service", "espresso-machine-repair", "commercial-espresso-machine-repair"],
  },

  "maintenance-service": {
    tagline: "A standalone maintenance visit — not a plan or subscription.",
    bluf: "Regular maintenance can catch small issues before they turn into a full repair. Our maintenance service is a standalone visit — not an ongoing plan or subscription — so you can schedule one whenever it makes sense for you.",
    commonIssues: [
      { title: "Descaling and mineral buildup", body: "We clear scale from the boiler and internal lines, which affects both flavor and machine health." },
      { title: "Group head and gasket cleaning", body: "Residue buildup around the group head can affect seal quality over time." },
      { title: "Seal and gasket inspection", body: "We check wear points before they turn into a leak." },
      { title: "Pump pressure check", body: "We confirm your machine is still pulling the pressure it should." },
    ],
    faqs: [
      { q: "Is this a subscription or recurring plan?", a: "No — it's a standalone service you can schedule whenever you'd like, with no ongoing commitment." },
      { q: "How often should I schedule maintenance?", a: "It depends on how often you use your machine and your local water hardness. Give us a call and we can help you figure out what makes sense for your situation." },
    ],
    relatedServices: ["espresso-machine-repair", "super-automatic-repair", "installation"],
  },
};
