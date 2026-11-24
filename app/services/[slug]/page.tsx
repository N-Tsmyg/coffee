import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BUSINESS,
  SERVICES,
  BRANDS,
  PHASE_1_BRANDS,
  getService,
} from "@/data/constants";
import { SERVICE_CONTENT } from "../_content";
import { getPostsForService } from "@/app/blog/_posts";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  const content = SERVICE_CONTENT[slug];
  if (!service || !content) return {};

  return {
    title: `${service.name} in San Diego`,
    description: content.bluf,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  const content = SERVICE_CONTENT[slug];
  if (!service || !content) notFound();

  const relatedServices = content.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedPosts = getPostsForService(slug);

  const brandsToShow = content.relatedBrandCategory
    ? BRANDS.filter((b) => b.category === content.relatedBrandCategory).slice(0, 4)
    : slug === "espresso-machine-repair"
      ? PHASE_1_BRANDS.slice(0, 4)
      : [];

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
          <Link href="/services" className="text-sm font-medium text-copper underline">
            ← All Services
          </Link>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            {service.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-copper">{content.tagline}</p>
          {content.audienceNote && (
            <p className="mt-4 rounded-md border border-copper/30 bg-offwhite p-4 text-base text-slate">
              {content.audienceNote}
            </p>
          )}
          <p className="mt-5 text-lg text-slate">{content.bluf}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center justify-center rounded-md bg-copper px-8 py-4 text-lg font-semibold text-offwhite hover:bg-copper-dark"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/pricing-faq"
              className="flex items-center justify-center rounded-md border border-charcoal px-8 py-4 text-lg font-semibold text-charcoal hover:bg-charcoal hover:text-offwhite"
            >
              See Pricing &amp; FAQ
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Common Issues We Fix
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

      {brandsToShow.length > 0 && (
        <section className="border-t border-line bg-paper">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
              Brands We Service
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {brandsToShow.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="rounded-full border border-line bg-offwhite px-5 py-2.5 text-sm font-medium text-charcoal hover:border-copper hover:text-copper"
                >
                  {brand.name}
                </Link>
              ))}
              <Link
                href="/brands"
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-copper underline"
              >
                See all brands
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line">
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

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Related Services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="block rounded-lg border border-line bg-offwhite p-5 hover:border-copper"
              >
                <h3 className="font-semibold text-charcoal">{related.name}</h3>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-base text-slate">
            Need this done at your address in a specific part of town?{" "}
            <Link href="/service-area" className="font-medium text-copper underline">
              View our full service area
            </Link>
            .
          </p>
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
            Ready to schedule a pickup?
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
