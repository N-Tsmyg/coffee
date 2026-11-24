// Sample blog posts demonstrating the content system described in
// workflows/06-blog-seo.md and workflows/08-content-calendar.md. Each post
// follows the BLUF / quick-answer pattern, has its own FAQ (and HowTo where
// the content is genuinely a sequence of steps), and links to the relevant
// service, brand, or city pages. Additional posts from the content calendar
// can be added to this array following the same shape.
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string; // ISO date
  author: string;
  quickAnswer: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  faqs: { q: string; a: string }[];
  howToSteps?: { name: string; text: string }[];
  relatedServiceSlugs?: string[];
  relatedBrandSlugs?: string[];
}

/** Posts that reference a given service — used to link back from the service page. */
export function getPostsForService(serviceSlug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.relatedServiceSlugs?.includes(serviceSlug));
}

/** Posts that reference a given brand — used to link back from the brand page. */
export function getPostsForBrand(brandSlug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.relatedBrandSlugs?.includes(brandSlug));
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-signs-your-espresso-machine-needs-professional-repair",
    title: "5 Signs Your Espresso Machine Needs Professional Repair",
    description:
      "Not sure if your espresso machine's issue is a quick fix or something more serious? Here are five signs it's time to call a repair technician.",
    publishDate: "2026-10-23",
    author: "Aman",
    quickAnswer:
      "If your espresso machine is leaking, losing pressure, making new noises, throwing error codes, or producing noticeably worse shots than it used to, it's time for a professional diagnostic rather than guesswork at home.",
    sections: [
      {
        heading: "1. It's leaking water",
        paragraphs: [
          "A small drip during brewing can be normal, but water pooling under your machine or leaking steadily from the base usually points to a worn seal, gasket, or internal line. Left alone, a leak can lead to bigger problems — including electrical issues if water reaches the wrong components.",
        ],
      },
      {
        heading: "2. Pressure has dropped off",
        paragraphs: [
          "If your shots are pulling slower (or faster) than they used to, or your machine just doesn't feel like it's building the pressure it once did, that's usually a pump, valve, or gasket issue rather than something you can fix by adjusting your grind.",
        ],
      },
      {
        heading: "3. You're hearing new noises",
        paragraphs: [
          "Grinding, whining, or knocking sounds that weren't there before are your machine's way of telling you something is wearing out — often the pump or a motor component. Noises rarely go away on their own and tend to get louder over time.",
        ],
      },
      {
        heading: "4. The display is showing an error code",
        paragraphs: [
          "On super-automatic machines especially, an error code is the machine flagging a specific internal fault. Clearing the code without addressing the underlying issue usually means it comes right back.",
        ],
      },
      {
        heading: "5. Your shots just don't taste the way they used to",
        paragraphs: [
          "If you've ruled out your beans and grind size and your espresso still tastes off, it can point to temperature instability, mineral buildup, or worn internal components affecting extraction.",
        ],
      },
      {
        heading: "When to call a technician",
        paragraphs: [
          "If you're seeing one or more of these signs, it's worth getting a professional diagnostic rather than troubleshooting blind. We pick up your machine, run a full diagnostic at our shop for a flat $145 fee (waived completely if we complete the repair), and give you an upfront quote before doing any repair work.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I keep using my machine while one of these issues is happening?",
        a: "For minor issues, often yes in the short term — but a leak or an unusual noise can get worse with continued use, so it's worth having it looked at sooner rather than later.",
      },
      {
        q: "What if it turns out to be a simple fix?",
        a: "That's fine — we'll tell you exactly what we found and what it costs to fix before doing any work. If you decide not to proceed, the diagnostic fee still applies since it covers the pickup and inspection.",
      },
    ],
    relatedServiceSlugs: ["espresso-machine-repair", "maintenance-service"],
  },

  {
    slug: "common-jura-problems-and-when-to-call-a-repair-technician",
    title: "Common Jura Problems and When to Call a Repair Technician",
    description:
      "Jura super-automatics are precise machines — here's what commonly goes wrong with them and when it's worth calling in a professional.",
    publishDate: "2026-11-03",
    author: "Aman",
    quickAnswer:
      "The most common Jura issues we see are error codes, a jammed brew unit, internal grinder clogging, and milk system problems. Most of these are repairable without replacing the whole machine.",
    sections: [
      {
        heading: "Error codes on the display",
        paragraphs: [
          "Jura machines use on-screen codes to flag specific internal faults — anything from a brew unit issue to a sensor problem. Many people assume an error code means the machine is finished, but in most cases it's pointing to a single component that can be diagnosed and repaired.",
        ],
      },
      {
        heading: "Brew unit jams or won't eject",
        paragraphs: [
          "The brew unit is the mechanical heart of a Jura machine, and it takes on a lot of wear over thousands of cycles. A jammed or stuck brew unit is one of the most common issues we see, and it's usually fixable without a full replacement.",
        ],
      },
      {
        heading: "Internal grinder clogging",
        paragraphs: [
          "Because the grinder is built into the machine, a clog isn't as simple to clear as it would be on a standalone grinder. Oily or stale beans are the usual cause, and buildup inside the grinding chamber can eventually affect brew consistency.",
        ],
      },
      {
        heading: "Milk system or frother issues",
        paragraphs: [
          "On models with automatic milk texturing, the milk lines and frothing unit are common points of failure, especially if they aren't cleaned regularly. A frother that's gone from consistent microfoam to sputtering or inconsistent results is a sign it needs attention.",
        ],
      },
      {
        heading: "When it's worth repairing",
        paragraphs: [
          "Jura machines are a meaningful investment, and most of the issues above come down to a specific, repairable component rather than the whole machine failing. We diagnose the exact cause at our shop and give you an upfront quote, so you can decide whether repair makes sense before any work begins.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work on older Jura models, or just current ones?",
        a: "We service both current and older Jura super-automatics.",
      },
      {
        q: "Is it worth repairing a Jura instead of buying a new one?",
        a: "In most cases, yes — many common issues are tied to a single component. We'll give you a clear, upfront quote so you can weigh the cost against a new machine yourself.",
      },
    ],
    relatedServiceSlugs: ["super-automatic-repair", "maintenance-service"],
    relatedBrandSlugs: ["jura"],
  },

  {
    slug: "commercial-espresso-machine-repair-for-san-diego-cafes-and-coffee-shops",
    title: "Commercial Espresso Machine Repair for San Diego Cafés and Coffee Shops",
    description:
      "Downtime on commercial espresso equipment costs real money. Here's how our commercial repair service works for San Diego cafés and coffee shops.",
    publishDate: "2026-11-13",
    author: "Aman",
    quickAnswer:
      "We repair multi-group-head commercial espresso equipment for cafés and coffee shops across the San Diego area — a separate service from our residential and office work, built around the higher-volume demands of commercial machines.",
    sections: [
      {
        heading: "Commercial equipment works harder — and needs a different approach",
        paragraphs: [
          "A café machine pulling hundreds of shots a day sees a completely different level of wear than a home espresso machine. Group heads, pumps, and boilers all cycle far more often, which means failure points show up differently and need to be diagnosed with that volume in mind.",
        ],
      },
      {
        heading: "What we commonly see on commercial equipment",
        paragraphs: [
          "A few issues come up more often on commercial machines than residential ones:",
        ],
        list: [
          "Group head wear from high daily cycle counts",
          "Boiler or PID temperature control issues affecting shot consistency",
          "Steam wand or frothing system failure during peak hours",
          "Water filtration or softener problems accelerating scale buildup",
          "Pump wear from continuous, high-volume use",
        ],
      },
      {
        heading: "Minimizing downtime for your business",
        paragraphs: [
          "We understand that a broken machine during business hours isn't just an inconvenience — it's lost revenue. We pick up your equipment, diagnose it at our shop, and get you an upfront quote so you know exactly what to expect before we start the repair.",
        ],
      },
      {
        heading: "Not the same as our office repair service",
        paragraphs: [
          "It's worth noting that this commercial service is distinct from our office repair work. Office repair covers standard, residential-style machines sitting in a break room. Commercial repair is built specifically for the larger, multi-group-head equipment used in cafés and coffee shops — different parts, different wear patterns, and different expertise.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer pickup for commercial equipment the same way you do for home machines?",
        a: "Yes, pickup is included for commercial equipment the same as it is for residential and office repairs.",
      },
      {
        q: "Can you work on La Marzocco or Nuova Simonelli commercial equipment?",
        a: "Yes — commercial-grade equipment from brands like La Marzocco is part of what this service covers.",
      },
    ],
    relatedServiceSlugs: ["commercial-espresso-machine-repair", "installation"],
    relatedBrandSlugs: ["la-marzocco"],
  },

  {
    slug: "espresso-machine-breaks-before-the-holidays",
    title:
      "What to Do When Your Espresso Machine Breaks Before the Holidays (And How Early to Book Repair)",
    description:
      "If your espresso machine breaks down with holiday guests on the way, here's what to do — and why booking a repair early matters this time of year.",
    publishDate: "2026-11-20",
    author: "Aman",
    quickAnswer:
      "If your espresso machine breaks before the holidays, call to schedule a pickup as soon as you notice the issue. With average turnaround around 7 business days, booking early is the difference between having it back in time and not.",
    sections: [
      {
        heading: "Why timing matters more this time of year",
        paragraphs: [
          "Between Thanksgiving and New Year's, repair requests tend to pick up — more people are hosting, more machines are getting heavier use, and everyone wants their machine working before guests arrive. Our average turnaround is about 7 business days from pickup to return, so the earlier you call, the more buffer you have before a specific date on the calendar.",
        ],
      },
      {
        heading: "What to do the moment you notice a problem",
        paragraphs: [
          "Don't wait to see if the issue resolves itself. Leaks, pressure loss, and strange noises tend to get worse, not better, with continued use.",
        ],
      },
    ],
    howToSteps: [
      { name: "Stop using the machine", text: "If you're seeing a leak, unusual noise, or a steep drop in pressure, stop using the machine to avoid making the issue worse." },
      { name: "Call to describe the issue", text: "Call us and describe what's happening — when it started, what you've noticed, and any error messages on the display." },
      { name: "Schedule your pickup", text: "We'll schedule a pickup time that works for you. There's no need to box up the machine or drop it off anywhere." },
      { name: "We diagnose and quote", text: "At our shop, we run a full diagnostic for a flat $145 fee (waived if we complete the repair) and give you an upfront quote before any repair work begins." },
      { name: "We return your machine", text: "Once the repair is complete, we bring your working machine back to you — average turnaround is about 7 business days from pickup." },
    ],
    faqs: [
      {
        q: "How early should I book before a holiday gathering?",
        a: "As soon as you notice an issue. With an average turnaround of about 7 business days, calling early gives you the best chance of having your machine back before a specific date.",
      },
      {
        q: "Do you offer rush or same-day repair during the holidays?",
        a: "Not at this time — our process and average turnaround stay the same year-round, which is exactly why booking early matters most during busy periods.",
      },
    ],
    relatedServiceSlugs: ["espresso-machine-repair", "maintenance-service"],
  },
];
