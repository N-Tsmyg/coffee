import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS, getService, getBrand } from "@/data/constants";
import { BLOG_POSTS } from "../_posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedServices = (post.relatedServiceSlugs ?? [])
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedBrands = (post.relatedBrandSlugs ?? [])
    .map((s) => getBrand(s))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: BUSINESS.name },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToSchema = post.howToSteps
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.title,
        step: post.howToSteps.map((s) => ({
          "@type": "HowToStep",
          name: s.name,
          text: s.text,
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <article className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm font-medium text-copper underline">
            ← All Posts
          </Link>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-slate">
            {formatDate(post.publishDate)} · By{" "}
            <Link href="/about" className="font-medium text-copper underline">
              {post.author}
            </Link>
          </p>

          <div className="mt-6 rounded-md border border-copper/30 bg-offwhite p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-copper">
              Quick Answer
            </p>
            <p className="mt-2 text-lg text-charcoal">{post.quickAnswer}</p>
          </div>
        </div>
      </article>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          {post.sections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-lg text-slate">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-slate">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {post.howToSteps && (
            <div className="mb-10">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
                Step by Step
              </h2>
              <ol className="mt-4 space-y-4">
                {post.howToSteps.map((step, i) => (
                  <li key={step.name} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copper font-[family-name:var(--font-heading)] font-bold text-offwhite">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-lg font-semibold text-charcoal">{step.name}</p>
                      <p className="mt-1 text-base text-slate">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-8">
            {post.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-charcoal">{faq.q}</h3>
                <p className="mt-2 text-base text-slate">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(relatedServices.length > 0 || relatedBrands.length > 0) && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
              Related Pages
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-charcoal hover:border-copper hover:text-copper"
                >
                  {s.name}
                </Link>
              ))}
              {relatedBrands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}`}
                  className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-charcoal hover:border-copper hover:text-copper"
                >
                  {b.name} Repair
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-charcoal text-offwhite">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Need a repair instead of advice?
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
