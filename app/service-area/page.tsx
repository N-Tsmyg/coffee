import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, CITIES } from "@/data/constants";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Espresso and coffee machine repair across the San Diego area, from Chula Vista to Fallbrook and Downtown San Diego to Alpine.",
};

export default function ServiceAreaHubPage() {
  const phase1 = CITIES.filter((c) => c.phase === 1);
  const phase2 = CITIES.filter((c) => c.phase === 2);

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            Our Service Area
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            We pick up and repair espresso and coffee machines across the
            greater San Diego area — from Chula Vista to Fallbrook, and
            Downtown San Diego to Alpine.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Cities We Serve
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {phase1.map((city) => (
              <Link
                key={city.slug}
                href={`/service-area/${city.slug}`}
                className="block rounded-lg border border-line bg-offwhite p-5 hover:border-copper"
              >
                <span className="font-semibold text-charcoal">{city.name}</span>
              </Link>
            ))}
            {phase2.map((city) => (
              <div
                key={city.slug}
                className="rounded-lg border border-dashed border-line bg-offwhite p-5 text-slate"
              >
                <span className="font-medium">{city.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate">
            Don&apos;t see a detailed page for your city yet? We likely still serve
            your area — give us a call to confirm.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-charcoal text-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Not sure if we cover your area?
          </h2>
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
