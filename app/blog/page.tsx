import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "./_posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, common repair issues, and guidance on espresso and coffee machine care from the Quick Espresso Repair team.",
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogHubPage() {
  const posts = [...BLOG_POSTS].sort((a, b) =>
    b.publishDate.localeCompare(a.publishDate)
  );

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            Practical guidance on keeping your espresso and coffee machines
            running, written by our own repair team.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-line bg-offwhite p-6 hover:border-copper"
              >
                <p className="text-sm text-slate">
                  {formatDate(post.publishDate)} · By {post.author}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-charcoal">
                  {post.title}
                </h2>
                <p className="mt-2 text-base text-slate">{post.description}</p>
                <span className="mt-3 inline-block font-medium text-copper">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
