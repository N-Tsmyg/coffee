import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/data/constants";

export const metadata: Metadata = {
  title: "Pricing & FAQ",
  description:
    "A flat $145 diagnostic fee, waived if we complete the repair. Learn how our pricing, payment methods, and turnaround time work.",
};

const FAQ_GROUPS = [
  {
    heading: "Pricing & Payment",
    items: [
      {
        q: "What does the diagnostic fee cover?",
        a: `The ${BUSINESS.diagnosticFeeDisplay} flat fee covers ${BUSINESS.diagnosticFeeIncludes}. If we complete the repair, this fee is waived completely.`,
      },
      {
        q: "How much will my repair cost?",
        a: "Every machine and issue is different, so we don't publish a fixed price list. After diagnosing your machine, we'll give you an upfront quote before doing any repair work — you'll always know the cost before we proceed.",
      },
      {
        q: "What if I decide not to go ahead with the repair?",
        a: `You're never obligated to proceed. If you choose not to repair after seeing the quote, the ${BUSINESS.diagnosticFeeDisplay} diagnostic fee still applies, since it covers the pickup and inspection already completed.`,
      },
      {
        q: "What payment methods do you accept?",
        a: `We accept ${BUSINESS.paymentMethods.join(", ")}.`,
      },
      {
        q: "Do you accept credit or debit cards?",
        a: "Not currently — we accept cash, check, Zelle, and Venmo.",
      },
    ],
  },
  {
    heading: "Turnaround & Pickup",
    items: [
      {
        q: "How long does a repair take?",
        a: `Turnaround averages ${BUSINESS.averageTurnaroundDisplay} from pickup to return, depending on the issue and whether parts need to be ordered.`,
      },
      {
        q: "Do you offer same-day or rush repair?",
        a: "Not at this time. We diagnose and repair every machine at our shop, and our average turnaround is about 7 business days.",
      },
      {
        q: "Do I need to drop my machine off?",
        a: "No — pickup is included with every repair. We come to you, bring your machine to our shop, and return it once it's fixed. We don't currently offer a drop-off option.",
      },
      {
        q: "What areas do you serve?",
        a: "We serve the greater San Diego area, from Chula Vista to Fallbrook and Downtown San Diego to Alpine.",
      },
    ],
  },
  {
    heading: "Services",
    items: [
      {
        q: "What brands do you repair?",
        a: "We service all major brands with no restrictions. Visit our Brands page for brand-specific detail.",
      },
      {
        q: "Do you repair machines for offices as well as homes?",
        a: "Yes — we treat standard, residential-style machines in an office break room the same as a home repair.",
      },
      {
        q: "Do you repair commercial equipment for cafés and coffee shops?",
        a: "Yes, as a separate commercial service built for larger, multi-group-head equipment — different from our residential and office work.",
      },
      {
        q: "Is Maintenance Service a recurring plan?",
        a: "No — it's a standalone visit you can schedule whenever makes sense for you, not an ongoing subscription.",
      },
      {
        q: "Can you install a new machine?",
        a: "Yes — we connect your machine to existing power and water lines, level it, and test it. We don't modify electrical circuits or plumbing.",
      },
    ],
  },
];

export default function PricingFaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_GROUPS.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            Pricing &amp; FAQ
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            Straightforward pricing, with no surprises. Here&apos;s exactly how it
            works.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-line bg-offwhite p-5">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-copper">
                {BUSINESS.diagnosticFeeDisplay}
              </p>
              <p className="mt-1 text-sm text-slate">
                Flat diagnostic fee — waived if we complete the repair
              </p>
            </div>
            <div className="rounded-lg border border-line bg-offwhite p-5">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-copper">
                ~7 days
              </p>
              <p className="mt-1 text-sm text-slate">
                Average turnaround, pickup to return
              </p>
            </div>
            <div className="rounded-lg border border-line bg-offwhite p-5">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-copper">
                Pickup Included
              </p>
              <p className="mt-1 text-sm text-slate">
                No drop-off needed — we come to you
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          {FAQ_GROUPS.map((group) => (
            <div key={group.heading} className="mb-12 last:mb-0">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
                {group.heading}
              </h2>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {group.items.map((item) => (
                  <details key={item.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-charcoal">
                      {item.q}
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-xl text-copper group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-base text-slate">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-charcoal text-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Still have a question?
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center justify-center rounded-md bg-copper px-8 py-4 text-lg font-semibold text-offwhite hover:bg-copper-dark"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-md border border-offwhite px-8 py-4 text-lg font-semibold text-offwhite hover:bg-offwhite hover:text-charcoal"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
