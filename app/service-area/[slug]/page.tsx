import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS, CITIES, SERVICES, PHASE_1_CITIES, getCity } from "@/data/constants";
import { CITY_CONTENT } from "../_content";

export function generateStaticParams() {
  return PHASE_1_CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city || !CITY_CONTENT[slug]) return {};

  return {
    title: `Espresso Machine Repair in ${city.name}`,
    description: `Espresso and coffee machine pickup, diagnosis, and repair for ${city.name} and the surrounding area. Flat $145 diagnostic fee, waived if we complete the repair.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  const content = CITY_CONTENT[slug];
  if (!city || !content) notFound();

  const nearbyCities = city.nearby
    .map((s) => CITIES.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const faqs = [
    {
      q: `Do you repair espresso machines in ${city.name}?`,
      a: `Yes — ${city.name} is within our regular service area. We pick up your machine, diagnose it at our shop, and bring it back once it's repaired.`,
    },
    {
      q: "How does pickup work?",
      a: "Call to schedule a time, and we'll come to you. There's no need to box up your machine or drop it off anywhere.",
    },
    {
      q: "How much does a diagnostic cost?",
      a: `Our diagnostic fee is a flat ${BUSINESS.diagnosticFeeDisplay}, which is waived completely if we complete the repair.`,
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Espresso and coffee machine repair",
    areaServed: { "@type": "City", name: city.name },
    provider: {
      "@type": "ProfessionalService",
      name: BUSINESS.name,
      telephone: BUSINESS.phoneTel,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <Link href="/service-area" className="text-sm font-medium text-copper underline">
            ← All Service Areas
          </Link>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            Espresso Machine Repair in {city.name}
          </h1>
          <p className="mt-5 text-lg text-slate">{content.intro}</p>
          <p className="mt-4 rounded-md border border-copper/30 bg-offwhite p-4 text-base text-slate">
            {content.highlight}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center justify-center rounded-md bg-copper px-8 py-4 text-lg font-semibold text-offwhite hover:bg-copper-dark"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-md border border-charcoal px-8 py-4 text-lg font-semibold text-charcoal hover:bg-charcoal hover:text-offwhite"
            >
              Request a Pickup
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Services Available in {city.name}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block rounded-lg border border-line bg-offwhite p-5 hover:border-copper"
              >
                <h3 className="font-semibold text-charcoal">{service.name}</h3>
                <p className="mt-1 text-sm text-slate">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-charcoal">{faq.q}</h3>
                <p className="mt-2 text-base text-slate">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {nearbyCities.length > 0 && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
              Nearby Areas We Also Serve
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {nearbyCities.map((nearby) =>
                nearby.phase === 1 ? (
                  <Link
                    key={nearby.slug}
                    href={`/service-area/${nearby.slug}`}
                    className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-charcoal hover:border-copper hover:text-copper"
                  >
                    {nearby.name}
                  </Link>
                ) : (
                  <span
                    key={nearby.slug}
                    className="rounded-full border border-dashed border-line px-5 py-2.5 text-sm font-medium text-slate"
                  >
                    {nearby.name}
                  </span>
                )
              )}
              <Link
                href="/service-area"
                className="rounded-full px-5 py-2.5 text-sm font-medium text-copper underline"
              >
                View full service area
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-charcoal text-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Ready to schedule a pickup in {city.name}?
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
