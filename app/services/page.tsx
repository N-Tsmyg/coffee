import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, SERVICES } from "@/data/constants";
import { SERVICE_CONTENT } from "./_content";

export const metadata: Metadata = {
  title: "Espresso & Coffee Machine Repair Services",
  description:
    "Espresso machine, super-automatic, grinder, drip coffee maker, commercial equipment, installation, and maintenance services across the San Diego area.",
};

export default function ServicesHubPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            From a single leaking gasket to a full commercial setup, we
            diagnose and repair espresso and coffee equipment at our shop.
            Every repair starts with a flat {BUSINESS.diagnosticFeeDisplay} diagnostic fee,
            waived completely if we complete the repair.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block rounded-lg border border-line bg-offwhite p-6 hover:border-copper"
              >
                <h2 className="text-xl font-semibold text-charcoal">
                  {service.name}
                </h2>
                <p className="mt-2 text-base text-slate">
                  {SERVICE_CONTENT[service.slug]?.tagline ?? service.shortDescription}
                </p>
                <span className="mt-3 inline-block font-medium text-copper">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-charcoal text-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-offwhite/80">
            Give us a call and describe what&apos;s going on — we&apos;ll point you in
            the right direction.
          </p>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-copper px-8 py-4 text-lg font-semibold text-offwhite hover:bg-copper-dark"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
