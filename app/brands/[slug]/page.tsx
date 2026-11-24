import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BUSINESS,
  PHASE_1_BRANDS,
  getBrand,
  getRelatedBrands,
} from "@/data/constants";
import { BRAND_CONTENT } from "../_content";
import { getPostsForBrand } from "@/app/blog/_posts";

export function generateStaticParams() {
  return PHASE_1_BRANDS.map((b) => ({ slug: b.slug }));
}

const CATEGORY_SERVICE_SLUG: Record<string, string> = {
  consumer: "espresso-machine-repair",
  prosumer: "espresso-machine-repair",
  "super-automatic": "super-automatic-repair",
  commercial: "commercial-espresso-machine-repair",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  const content = BRAND_CONTENT[slug];
  if (!brand || !content) return {};

  return {
    title: `${brand.name} Repair in San Diego`,
    description: content.bluf,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  const content = BRAND_CONTENT[slug];
  if (!brand || !content) notFound();

  const relatedBrands = getRelatedBrands(slug, 3);
  const relatedPosts = getPostsForBrand(slug);
  const primaryServiceSlug = CATEGORY_SERVICE_SLUG[brand.category];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <Link href="/brands" className="text-sm font-medium text-copper underline">
            ← All Brands
          </Link>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            {brand.name} Repair
          </h1>
          <p className="mt-2 text-lg font-medium text-copper">{content.tagline}</p>
          <p className="mt-5 text-lg text-slate">{content.bluf}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center justify-center rounded-md bg-copper px-8 py-4 text-lg font-semibold text-offwhite hover:bg-copper-dark"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              href={`/services/${primaryServiceSlug}`}
              className="flex items-center justify-center rounded-md border border-charcoal px-8 py-4 text-lg font-semibold text-charcoal hover:bg-charcoal hover:text-offwhite"
            >
              View Related Service
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Common {brand.name} Issues We Fix
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {content.commonIssues.map((issue) => (
              <div key={issue.title} className="rounded-lg border border-line p-5">
                <h3 className="text-lg font-semibold text-charcoal">{issue.title}</h3>
                <p className="mt-2 text-base text-slate">{issue.body}</p>
              </div>
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
            {content.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-charcoal">{faq.q}</h3>
                <p className="mt-2 text-base text-slate">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Related Brands
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedBrands.map((related) =>
              related.phase === 1 ? (
                <Link
                  key={related.slug}
                  href={`/brands/${related.slug}`}
                  className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-charcoal hover:border-copper hover:text-copper"
                >
                  {related.name}
                </Link>
              ) : (
                <span
                  key={related.slug}
                  className="rounded-full border border-dashed border-line px-5 py-2.5 text-sm font-medium text-slate"
                >
                  {related.name}
                </span>
              )
            )}
            <Link
              href="/brands"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-copper underline"
            >
              See all brands
            </Link>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
              From the Blog
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-lg border border-line bg-offwhite p-5 hover:border-copper"
                >
                  <h3 className="font-semibold text-charcoal">{post.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-charcoal text-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Have a {brand.name} that needs attention?
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
              Request a Pickup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
