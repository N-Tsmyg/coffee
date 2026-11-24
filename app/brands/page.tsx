import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, BRANDS, PHASE_1_BRANDS } from "@/data/constants";
import { BRAND_CONTENT } from "./_content";

export const metadata: Metadata = {
  title: "Brands We Repair",
  description:
    "Espresso and coffee machine repair for all major brands, including Breville, Jura, Gaggia, Rancilio, La Marzocco, and DeLonghi.",
};

export default function BrandsHubPage() {
  const phase2 = BRANDS.filter((b) => b.phase === 2);

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            Brands We Repair
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            We don&apos;t restrict repairs to a single brand — if it&apos;s an espresso
            or coffee machine, we can likely help. Here&apos;s a closer look at
            the brands we see most often, plus the full list of brands we
            service.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Brand Pages
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PHASE_1_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="block rounded-lg border border-line bg-offwhite p-6 hover:border-copper"
              >
                <h3 className="text-xl font-semibold text-charcoal">
                  {brand.name}
                </h3>
                <p className="mt-2 text-base text-slate">
                  {BRAND_CONTENT[brand.slug]?.tagline}
                </p>
                <span className="mt-3 inline-block font-medium text-copper">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            All Brands We Service
          </h2>
          <p className="mt-2 max-w-2xl text-base text-slate">
            We service these brands too — we just haven&apos;t built a dedicated
            page for each one yet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {phase2.map((brand) => (
              <span
                key={brand.slug}
                className="rounded-full border border-line bg-offwhite px-5 py-2.5 text-sm font-medium text-charcoal"
              >
                {brand.name}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate">
            Don&apos;t see your brand listed? Give us a call — we work on far more
            than what&apos;s shown here.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-charcoal text-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Not sure if we service your machine?
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
