import Link from "next/link";
import {
  BUSINESS,
  OWNER,
  SERVICES,
  PHASE_1_BRANDS,
  PHASE_1_CITIES,
} from "@/data/constants";
import { PickupRequestForm } from "@/components/PickupRequestForm";

const DIFFERENTIATORS = [
  {
    title: "$145 fee, waived if we repair it",
    body: "Our flat diagnostic fee covers pickup and a full shop diagnosis. If we complete the repair, the fee is waived entirely.",
  },
  {
    title: "All major brands",
    body: "Breville, Jura, Gaggia, Rancilio, La Marzocco, DeLonghi, and more — no brand restrictions.",
  },
  {
    title: "Average 7 business day turnaround",
    body: "Most machines are back in your hands within about a week of pickup.",
  },
  {
    title: "Upfront quote before we repair",
    body: "We tell you what's wrong and what it costs before any repair work begins.",
  },
  {
    title: "Pickup included",
    body: "No need to find a box or drive anywhere — we come to you.",
  },
  {
    title: "Open Monday–Saturday",
    body: `${BUSINESS.hoursDisplay}. ${BUSINESS.hoursClosedDisplay}.`,
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Call to schedule pickup",
    body: "Tell us what's going on with your machine and we'll schedule a time to pick it up.",
  },
  {
    step: "2",
    title: "We pick up your machine",
    body: "No drop-off needed — we come to you and bring your machine back to our shop.",
  },
  {
    step: "3",
    title: "Full diagnostic & repair",
    body: `A $145 flat fee covers pickup and diagnosis — waived completely if we complete the repair. Average turnaround is ${BUSINESS.averageTurnaroundDisplay}.`,
  },
  {
    step: "4",
    title: "We bring it back",
    body: "Once the repair is complete, we return your working machine to you.",
  },
];

const FAQ_PREVIEW = [
  {
    q: "Do I need to drop my machine off somewhere?",
    a: "No. We pick up your machine and bring it to our shop for diagnosis and repair — there's no drop-off option needed.",
  },
  {
    q: "How long does a repair take?",
    a: `Turnaround averages ${BUSINESS.averageTurnaroundDisplay} from pickup to return, depending on the issue and parts needed.`,
  },
  {
    q: "What payment methods do you accept?",
    a: `We accept ${BUSINESS.paymentMethods.join(", ")}.`,
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  telephone: BUSINESS.phoneTel,
  areaServed: PHASE_1_CITIES.map((c) => ({
    "@type": "City",
    name: c.name,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "17:00",
  },
  paymentAccepted: BUSINESS.paymentMethods.join(", "),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
              Expert Espresso &amp; Coffee Machine Repair in San Diego
            </h1>
            <p className="mt-5 text-lg text-slate sm:text-xl">
              A flat {BUSINESS.diagnosticFeeDisplay} diagnostic fee — completely waived if
              we complete the repair. We service all major brands and pick up
              your machine, so you don&apos;t have to go anywhere.
            </p>

            <p className="mt-6 text-sm text-slate">
              Proudly serving Chula Vista to Fallbrook and Downtown San Diego
              to Alpine.{" "}
              <Link href="/service-area" className="font-medium text-copper underline">
                See our full service area
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Pickup request form */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal">
            Request a Pickup
          </h2>
          <p className="mt-3 text-base text-slate">
            Fill out the form below and we&apos;ll get back to you to schedule
            your pickup.
          </p>
          <p className="mt-1 text-sm text-slate">
            Fields marked <span className="text-copper">*</span> are required.
          </p>
          <div className="mt-8 rounded-lg border border-line bg-paper p-6 sm:p-8">
            <PickupRequestForm />
          </div>
        </div>
      </section>

      {/* Differentiators strip */}
      <section className="bg-charcoal text-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title}>
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-copper-light">
                  {d.title}
                </h2>
                <p className="mt-2 text-sm text-offwhite/80">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal">
            How It Works
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-copper font-[family-name:var(--font-heading)] text-lg font-bold text-offwhite">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal">
              Our Services
            </h2>
            <Link href="/services" className="font-medium text-copper underline">
              View all services
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block rounded-lg border border-line bg-offwhite p-6 hover:border-copper"
              >
                <h3 className="text-lg font-semibold text-charcoal">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-slate">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal">
                Brands We Repair
              </h2>
              <p className="mt-2 text-base text-slate">
                We service all major brands — here are a few we work on most often.
              </p>
            </div>
            <Link href="/brands" className="font-medium text-copper underline">
              See all brands
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PHASE_1_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="flex items-center justify-center rounded-lg border border-line bg-paper px-4 py-6 text-center font-[family-name:var(--font-heading)] font-semibold text-charcoal hover:border-copper"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Owner */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
            <div
              aria-hidden="true"
              className="flex h-28 w-28 items-center justify-center rounded-full bg-copper font-[family-name:var(--font-heading)] text-4xl font-bold text-offwhite"
            >
              {OWNER.name.charAt(0)}
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal">
                Meet {OWNER.name}
              </h2>
              <p className="mt-1 text-base font-medium text-copper">
                {OWNER.role}
              </p>
              <p className="mt-4 max-w-2xl text-base text-slate">{OWNER.bio}</p>
              <Link
                href="/about"
                className="mt-4 inline-block font-medium text-copper underline"
              >
                Read more about our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal">
              Where We Work
            </h2>
            <Link href="/service-area" className="font-medium text-copper underline">
              View full service area
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {PHASE_1_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-area/${city.slug}`}
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-charcoal hover:border-copper hover:text-copper"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal">
              Common Questions
            </h2>
            <Link href="/pricing-faq" className="font-medium text-copper underline">
              View pricing &amp; full FAQ
            </Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {FAQ_PREVIEW.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-semibold text-charcoal">{item.q}</h3>
                <p className="mt-2 text-base text-slate">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal text-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
            Ready to get your machine running again?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-offwhite/80">
            Call us to schedule a pickup, or send us a message and we&apos;ll get
            back to you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              Request a Pickup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
