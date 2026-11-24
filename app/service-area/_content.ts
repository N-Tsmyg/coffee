// Local-flavor copy for Phase 1 city pages. Each entry is deliberately
// distinct (real local detail, not a find-and-replace template) to avoid
// thin/duplicate content across city pages. Add an entry here before
// promoting a Phase 2 city to Phase 1 in data/constants.ts.
export interface CityContent {
  intro: string;
  highlight: string;
}

export const CITY_CONTENT: Record<string, CityContent> = {
  "downtown-san-diego": {
    intro:
      "From Bankers Hill to the Gaslamp Quarter, Downtown San Diego is full of high-rise condos, offices, and coffee-loving professionals running espresso machines daily. The marine layer that rolls in off the bay adds extra humidity, which can accelerate corrosion on internal components if a machine isn't maintained.",
    highlight:
      "We regularly service both home machines in downtown condos and the same style of machine in office break rooms nearby.",
  },
  "chula-vista": {
    intro:
      "Chula Vista households run everything from single-serve machines to full prosumer espresso setups. Like most of San Diego County, Chula Vista's water supply runs hard, and mineral scale buildup inside boilers and lines is one of the most common issues we see here.",
    highlight:
      "If your machine is losing pressure or flow, hard-water scale is often the first thing we check.",
  },
  "el-cajon": {
    intro:
      "El Cajon's inland valley location means hotter, drier conditions than the coast, with more dust working its way into vents and internal components over a long summer. Combined with the same hard water found across the county, machines here tend to need descaling and internal cleaning a bit more often.",
    highlight:
      "We see a lot of boiler and group head wear from mineral buildup in this area.",
  },
  "la-jolla": {
    intro:
      "La Jolla's coastal air brings a steady mist of salt that can work its way into exposed metal components over time, and many of the machines we see here are higher-end prosumer and super-automatic setups. We treat each one with the same care, whatever the brand.",
    highlight:
      "We handle a lot of La Marzocco, Jura, and other premium machines in this area.",
  },
  encinitas: {
    intro:
      "Encinitas has one of the more active home-espresso cultures in the county, and we see everything from entry-level machines to serious prosumer setups along the coast here. Salt air and the marine layer are both factors we keep in mind when diagnosing corrosion-related issues.",
    highlight:
      "Whether it's your first machine or your fifth, we'll give you a straight answer on what it needs.",
  },
  escondido: {
    intro:
      "Escondido's inland valley heat and hard water both take a toll on espresso machines over time, especially during the long dry summer months. We see a steady mix of residential machines and office break-room units throughout the area.",
    highlight:
      "Scale buildup and heat-related wear are two of the most common issues we diagnose here.",
  },
};
