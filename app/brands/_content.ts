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

  nespresso: {
    tagline: "Repair for Nespresso's OriginalLine and Vertuo capsule machines.",
    bluf: "Nespresso's capsule-based machines are built for convenience, but that convenience relies on a precise piercing and brewing mechanism that can wear or clog over time. We diagnose both OriginalLine and Vertuo models, from a machine that won't brew to one that's leaking or making unusual noises.",
    commonIssues: [
      { title: "Capsule piercing needle clogging", body: "Coffee grounds and oils can build up around the piercing mechanism, causing weak extraction or brewing failures." },
      { title: "Pump priming or pressure issues", body: "A machine that hums but won't dispense water often points to a pump or air-lock issue." },
      { title: "Water tank sensor or float problems", body: "Can cause the machine to falsely report an empty tank even when it's full." },
      { title: "Descaling light stuck on", body: "Sometimes a sensor fault rather than an actual mineral buildup issue." },
    ],
    faqs: [
      { q: "Do you repair both OriginalLine and Vertuo Nespresso machines?", a: "Yes, we service both capsule systems." },
      { q: "My Nespresso won't brew at all — is that worth fixing?", a: "Usually, yes — it's often a clogged needle or pump issue rather than a failed motor. We'll diagnose it and give you an upfront quote." },
    ],
  },

  keurig: {
    tagline: "Repair for Keurig single-serve coffee brewers.",
    bluf: "Keurig brewers rely on a needle-and-pump system to pierce and brew from a K-Cup, and that system is exactly where most of the issues we see start. We diagnose brewing failures, leaks, and the error messages Keurig's newer models display.",
    commonIssues: [
      { title: "Clogged entrance or exit needle", body: "Coffee grounds buildup around the needles is the single most common cause of a weak or partial brew." },
      { title: "Pump not priming", body: "A machine that powers on but won't dispense water usually points to a pump or air-lock issue." },
      { title: "Internal scale buildup", body: "Mineral scale from hard water can restrict water flow through internal lines over time." },
      { title: "Water reservoir valve sticking", body: "Can cause the machine to run dry even with a full reservoir." },
    ],
    faqs: [
      { q: "My Keurig turns on but won't brew — can you fix that?", a: "In most cases, yes — it's usually a clogged needle or pump issue rather than a failed motor." },
      { q: "Do you work on all Keurig models?", a: "Yes, we service the full range of Keurig single-serve brewers." },
    ],
  },

  cuisinart: {
    tagline: "Repair for Cuisinart drip coffee makers and single-serve machines.",
    bluf: "Cuisinart makes some of the most common household drip coffee makers, along with a few single-serve and espresso-style machines. We see a steady stream of pump, heating, and control-board issues across the lineup.",
    commonIssues: [
      { title: "Warming plate not heating", body: "A frequent issue on carafe-style drip models after a few years of daily use." },
      { title: "Pump tube clogging or scale buildup", body: "Mineral scale is the most common cause of slow brewing or a machine that won't complete a cycle." },
      { title: "Control board or clock malfunction", body: "Can cause programmed brew times to stop working correctly." },
      { title: "Auto-shutoff failing to trigger", body: "A safety feature worth fixing promptly if it's not engaging correctly." },
    ],
    faqs: [
      { q: "Do you repair Cuisinart drip coffee makers?", a: "Yes — drip coffee makers are one of the machine types we regularly service, Cuisinart included." },
      { q: "My Cuisinart brews slowly — is that fixable?", a: "Usually, yes — it's often scale buildup restricting water flow, which we can clean and descale." },
    ],
  },

  saeco: {
    tagline: "Super-automatic repair for Saeco's bean-to-cup lineup.",
    bluf: "Saeco's super-automatic machines, including the Xelsis, Incanto, and PicoBaristo lines, handle grinding, brewing, and often milk texturing in one unit. We diagnose the brew group, ceramic grinder, and milk system issues that tend to show up with regular use.",
    commonIssues: [
      { title: "Brew group jamming or won't remove for cleaning", body: "A frequent issue on heavily used machines, often resolved without a full brew group replacement." },
      { title: "Ceramic grinder wear or inconsistent grind", body: "Saeco's ceramic grinders are durable but still wear down over years of daily use." },
      { title: "Error codes on the display", body: "We diagnose the underlying cause behind Saeco's on-screen fault codes rather than just clearing them." },
      { title: "Milk carafe or frother clogging", body: "On models with automatic milk texturing, the milk lines need regular cleaning to avoid clogs." },
    ],
    faqs: [
      { q: "Do you work on the Saeco Xelsis and Incanto?", a: "Yes, we service Saeco's full super-automatic lineup." },
      { q: "Can you fix a Saeco that won't grind?", a: "In most cases, yes — we diagnose whether it's the grinder itself or an electronic fault before recommending a repair." },
    ],
  },

  miele: {
    tagline: "Repair for Miele's built-in and countertop coffee systems.",
    bluf: "Miele's coffee systems are often built into custom kitchen cabinetry and plumbed directly to a water line, which makes them some of the more involved machines we service. We diagnose both the coffee-making mechanics and the plumbing connections specific to a built-in installation.",
    commonIssues: [
      { title: "Built-in water line connection issues", body: "Plumbed-in models can develop leaks or flow problems at the water line connection itself, not just inside the machine." },
      { title: "Brew unit jamming or wear", body: "The same precision brew unit mechanics found in other super-automatics, built to Miele's tighter tolerances." },
      { title: "Software or firmware error codes", body: "Miele's built-in systems display specific fault codes that point to the underlying issue." },
      { title: "Milk system or frother malfunction", body: "On models with integrated milk texturing, the milk lines are a common point of failure." },
    ],
    faqs: [
      { q: "Do you service built-in Miele coffee systems, not just countertop units?", a: "Yes — we work on both built-in, plumbed-in Miele systems and standalone countertop models." },
      { q: "Miele parts seem expensive — is repair still worth it?", a: "Often, yes. We'll diagnose the issue and give you an upfront quote before any work begins, so you can decide." },
    ],
  },

  "nuova-simonelli": {
    tagline: "Prosumer and commercial repair for Nuova Simonelli's Appia, Oscar, and Musica lines.",
    bluf: "Nuova Simonelli spans serious home setups (Oscar, Musica) and full commercial café equipment (Appia), and we service both. Commercial units in particular see far more daily cycles than a home machine, which shows up in group head and pump wear.",
    commonIssues: [
      { title: "Group head wear under heavy use", body: "Especially relevant for commercial Appia units running many cycles a day in a café." },
      { title: "PID or temperature stability issues", body: "Inconsistent brew temperature is one of the first things we check on Nuova Simonelli machines." },
      { title: "Volumetric dosing electronics malfunction", body: "On models with volumetric dosing, a fault here can throw off shot consistency." },
      { title: "Pump wear from continuous use", body: "Commercial units see significantly more pump cycles than home prosumer machines like the Oscar or Musica." },
    ],
    faqs: [
      { q: "Do you service commercial Nuova Simonelli equipment in cafés?", a: "Yes — commercial Nuova Simonelli repair falls under our commercial espresso machine service, separate from our residential work." },
      { q: "Do you work on the home-sized Oscar and Musica models?", a: "Yes, we service both the prosumer Oscar/Musica line and larger commercial Nuova Simonelli equipment." },
    ],
  },
};
