// Page copy for each Phase 1 brand — distinct per brand (real model and
// failure-point detail, not a find-and-replace template) to avoid thin or
// duplicate content across brand pages.
export interface BrandContent {
  tagline: string;
  bluf: string;
  commonIssues: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const BRAND_CONTENT: Record<string, BrandContent> = {
  breville: {
    tagline: "From the Barista Express to the Oracle — repair for Breville's home espresso lineup.",
    bluf: "Breville is one of the most common brands we see, especially the Barista Express, Barista Touch, and Oracle models that pair a built-in grinder with the espresso machine. That built-in grinder is also one of the more common failure points, alongside pump and steam wand issues.",
    commonIssues: [
      { title: "Built-in grinder jamming or clumping", body: "Models with an integrated grinder (Barista Express, Barista Touch) are prone to grind path clogs, especially with oily beans." },
      { title: "Temperature or PID errors", body: "Inconsistent brew temperature often points to a heating element or sensor issue." },
      { title: "Steam wand weak or inconsistent", body: "A common complaint on both entry and higher-end Breville models." },
      { title: "Pump pressure dropping over time", body: "Pump wear is common after a few years of regular use." },
      { title: "Portafilter not locking in correctly", body: "Usually a worn gasket at the group head rather than the portafilter itself." },
    ],
    faqs: [
      { q: "Do you work on the Breville Oracle and Oracle Touch?", a: "Yes — we service Breville's full lineup, from entry-level machines through the semi-automatic Oracle line." },
      { q: "My Barista Express grinder jammed — can you fix just that?", a: "Yes, we can diagnose and repair the grinder mechanism without replacing the whole unit in most cases." },
    ],
  },

  jura: {
    tagline: "Super-automatic repair for Jura's brew unit, grinder, and electronics.",
    bluf: "Jura machines handle grinding, brewing, and often milk texturing automatically — which means more precision parts that can fail. We diagnose brew unit jams, internal grinder issues, and the error codes Jura machines display when something's wrong.",
    commonIssues: [
      { title: "Error codes on the display", body: "Jura uses on-screen codes to flag specific faults; we diagnose the underlying cause rather than just clearing the code." },
      { title: "Brew unit stuck or won't eject", body: "A frequent issue on heavily used machines, often resolved without a full brew unit replacement." },
      { title: "Internal grinder clogging", body: "Jura's internal grinder can clog with oily or stale beans over time." },
      { title: "Milk system or frother malfunction", body: "On models with automatic milk texturing, the milk lines are a common point of failure." },
      { title: "Descale program not completing", body: "Sometimes a sensor fault rather than an actual descaling failure." },
    ],
    faqs: [
      { q: "Can you fix a Jura that won't turn on at all?", a: "In most cases, yes — we diagnose the power and electronics path before assuming the worst." },
      { q: "Do you work on older Jura models?", a: "Yes, we service both current and older Jura super-automatics." },
    ],
  },

  gaggia: {
    tagline: "Repair for Gaggia's semi-automatic lineup, including the Classic Pro.",
    bluf: "Gaggia's semi-automatic machines, especially the Classic Pro, are popular with home enthusiasts who want more manual control. Their smaller boilers mean mineral scale builds up faster, and a few specific components tend to wear with regular use.",
    commonIssues: [
      { title: "Weak or inconsistent steam", body: "Often related to boiler scale or a weakening heating element." },
      { title: "Three-way solenoid valve issues", body: "A common wear point that affects how the machine releases pressure after a shot." },
      { title: "Over-pressure valve (OPV) problems", body: "Can cause inconsistent shot pressure if it's sticking or miscalibrated." },
      { title: "Scale buildup from the smaller boiler", body: "Gaggia's compact boiler design means descaling matters more here than on larger machines." },
    ],
    faqs: [
      { q: "Do you work on the Gaggia Classic Pro specifically?", a: "Yes, it's one of the more common machines we service." },
      { q: "Can you upgrade or repair a PID-modified Gaggia?", a: "We can diagnose and repair machines with aftermarket PID modifications, though we'll let you know if anything is outside the scope of a standard repair." },
    ],
  },

  rancilio: {
    tagline: "Repair for Rancilio's prosumer lineup, including the iconic Silvia.",
    bluf: "The Rancilio Silvia has been a favorite among home espresso enthusiasts for years, prized for its simple, durable single-boiler design. We repair the handful of components that tend to wear with heavy use, from the heating element to the steam wand.",
    commonIssues: [
      { title: "Heating element or pressurestat failure", body: "Core components that keep the single boiler at the right temperature and pressure." },
      { title: "Group head gasket wear", body: "A worn gasket is a common cause of leaking around the portafilter." },
      { title: "Steam wand performance issues", body: "Single-boiler machines like the Silvia rely on the steam wand working efficiently between shots." },
      { title: "Pump wear from daily use", body: "Common after years of regular home use." },
    ],
    faqs: [
      { q: "Do you work on PID-modified Silvia machines?", a: "Yes, we can diagnose and repair Silvia units with aftermarket PID controllers." },
      { q: "Is the Silvia worth repairing instead of replacing?", a: "In most cases, yes — it's a durable, repairable design. We'll give you an upfront quote so you can decide." },
    ],
  },

  "la-marzocco": {
    tagline: "From the home-sized Linea Mini to commercial café equipment.",
    bluf: "La Marzocco spans both ends of our business — the Linea Mini for serious home setups, and multi-group commercial machines in cafés and coffee shops. We service both, with the same attention to the dual-boiler and PID systems that make these machines consistent.",
    commonIssues: [
      { title: "Dual-boiler temperature control issues", body: "PID and boiler sensor problems can throw off the consistency La Marzocco machines are known for." },
      { title: "Group head wear under heavy use", body: "Especially relevant for commercial multi-group units in cafés." },
      { title: "Steam wand or frothing system problems", body: "Found on both the home Linea Mini and commercial lines." },
      { title: "Pump wear from continuous commercial use", body: "Commercial units see far more daily cycles than a home machine." },
    ],
    faqs: [
      { q: "Do you service La Marzocco for home use and for cafés?", a: "Yes — we repair both the home-sized Linea Mini and larger commercial La Marzocco equipment used in cafés and coffee shops." },
      { q: "Is commercial La Marzocco repair the same service as home repair?", a: "The diagnostic process is similar, but commercial equipment falls under our separate commercial repair service due to its scale and multi-group-head design." },
    ],
  },

  delonghi: {
    tagline: "Repair for DeLonghi's Dedica, Magnifica, and La Specialista lines.",
    bluf: "DeLonghi makes some of the most widely owned home espresso machines, from the compact Dedica to the super-automatic Magnifica and the semi-automatic La Specialista. We see a steady stream of pump, descaling, and frother issues across the lineup.",
    commonIssues: [
      { title: "Pump failure or pressure loss", body: "Common on entry-level and mid-range models after a few years of use." },
      { title: "Descale sensor stuck or inaccurate", body: "Can cause the machine to demand descaling even when it isn't needed, or fail to flag a real buildup." },
      { title: "Automatic milk frother clogging", body: "Models with an automatic milk carafe or frother are prone to clogging if not cleaned regularly." },
      { title: "Internal housing or component wear", body: "At DeLonghi's price point, certain internal components wear faster under heavy daily use." },
    ],
    faqs: [
      { q: "Do you work on the DeLonghi Magnifica?", a: "Yes, the Magnifica super-automatic line is one of the models we service most often." },
      { q: "My automatic milk frother is clogged — is that worth fixing?", a: "Usually, yes — it's often a cleaning or clog issue rather than a failed part. We'll diagnose it and give you an upfront quote." },
    ],
  },
};
