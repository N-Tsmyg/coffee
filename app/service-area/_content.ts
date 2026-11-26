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
  oceanside: {
    intro:
      "Oceanside sits right on the coast, with Camp Pendleton to the north and a busy harbor and pier at its center. The salt air here causes the same kind of corrosion we see in La Jolla and Encinitas, and with a mix of year-round residents, vacation rentals, and a strong café culture downtown, we service everything from small home machines to higher-volume prosumer setups.",
    highlight:
      "We see a good mix of coastal corrosion issues alongside the usual hard-water scale buildup common across the county.",
  },
  vista: {
    intro:
      "Vista sits just inland from Oceanside, with noticeably hotter, drier summers than its coastal neighbors. It's also home to a growing craft beverage and brewery scene, which tends to go hand-in-hand with serious home coffee setups. The same countywide hard water applies here, so scale buildup is a frequent diagnosis.",
    highlight:
      "Heat-related wear and mineral scale are the two issues we check first on Vista machines.",
  },
  "san-marcos": {
    intro:
      "San Marcos is one of North County's faster-growing suburban areas, with a mix of young families, Cal State San Marcos students and staff, and newer housing developments. We see plenty of entry-level and mid-range machines here, along with the hard-water scale issues typical of the region.",
    highlight:
      "A lot of the machines we pick up in San Marcos are relatively new, so the issue is usually maintenance-related rather than a major component failure.",
  },
  "la-mesa": {
    intro:
      "Known locally as the \"Jewel of the Hills,\" La Mesa has an established, walkable downtown village and some of the county's older residential neighborhoods. Like nearby El Cajon, its inland location means hotter summers and the same hard water that accelerates scale buildup in boilers and lines.",
    highlight:
      "We see a steady mix of long-owned machines here, often due for their first real descaling and internal cleaning in years.",
  },
  santee: {
    intro:
      "Santee sits just east of El Cajon in the same inland valley, with similarly hot, dry summers and dusty conditions that work their way into vents and internal components over time. It's a family-oriented community, and we see a lot of residential machines alongside office break-room units.",
    highlight:
      "Like El Cajon, boiler and group head wear from mineral buildup is one of the most common issues we diagnose here.",
  },
  "national-city": {
    intro:
      "National City is a dense, working-class community in the South Bay, sitting between Chula Vista and Downtown San Diego along the port. We service both home machines in National City's residential neighborhoods and office break-room units at the businesses along its busy commercial corridors.",
    highlight:
      "We regularly pick up machines here on the way through the South Bay, alongside our Chula Vista and Downtown San Diego routes.",
  },
  poway: {
    intro:
      "Poway calls itself the \"City in the Country,\" with a more spread-out, semi-rural feel than most of its North County neighbors, including horse properties and larger lots. The inland heat here is similar to Santee and Escondido, and we see both high-end prosumer setups and everyday home machines.",
    highlight:
      "Inland heat and the county's hard water are the two factors we weigh first when diagnosing a Poway machine.",
  },
  alpine: {
    intro:
      "Alpine sits at a higher elevation in the East County backcountry, with a more rural, wooded feel near Cleveland National Forest. Summers are hot and dry, and some homes here are on well water rather than the county system, which can mean different mineral content affecting descaling needs.",
    highlight:
      "Well water versus county water makes mineral buildup less predictable here, so we always ask about water source before diagnosing a scale-related issue.",
  },
  "del-mar": {
    intro:
      "Del Mar is one of the county's smaller, more affluent coastal communities, known for its beaches and the Del Mar racetrack. Coastal salt air causes the same corrosion we see in La Jolla and Encinitas, and we see a higher share of premium prosumer and super-automatic machines here.",
    highlight:
      "We handle a lot of higher-end machines in Del Mar, from prosumer semi-automatics to premium super-automatics.",
  },
  "rancho-bernardo": {
    intro:
      "Rancho Bernardo is one of San Diego's more established suburban communities, known for its golf courses and a large population of long-term and retired residents. That matches our client base well — we see a lot of well-maintained machines here that are simply due for routine service rather than a major repair.",
    highlight:
      "A large share of our Rancho Bernardo calls are for routine maintenance rather than emergency repairs.",
  },
  ramona: {
    intro:
      "Ramona sits in the inland backcountry, known locally for its growing wine country and large rural properties. Summers here run hotter and drier than almost anywhere else in the county, and like Alpine, some homes rely on well water rather than the county system.",
    highlight:
      "Inland heat and variable water sources are the two things we check first on a Ramona machine.",
  },
  fallbrook: {
    intro:
      "Fallbrook, known as the \"Avocado Capital of the World,\" sits in the rural North County near Camp Pendleton. It's a more spread-out, agricultural community, and like our other inland and rural service areas, well water is common alongside the county's harder municipal water.",
    highlight:
      "We factor in whether a Fallbrook home is on well or county water before diagnosing a scale-related issue.",
  },
  "valley-center": {
    intro:
      "Valley Center is one of the more rural North County communities, surrounded by citrus and avocado groves and larger agricultural properties. As in nearby Fallbrook and Ramona, well water is common here, and inland heat during the summer months adds extra wear on machines that aren't due for regular descaling.",
    highlight:
      "We see the same well-water variability here as in Fallbrook and Ramona, so we always confirm the water source first.",
  },
  "lemon-grove": {
    intro:
      "Lemon Grove is one of the county's smaller, more compact cities, tucked between La Mesa and National City in the East County. It's a dense, residential community, and we see mostly everyday home machines here rather than high-end prosumer setups.",
    highlight:
      "Lemon Grove calls are typically straightforward residential repairs — nothing unusual about the local conditions here.",
  },
};
