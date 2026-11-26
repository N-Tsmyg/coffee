import Link from "next/link";
import { BUSINESS, SERVICES, PHASE_1_CITIES, PHASE_1_BRANDS } from "@/data/constants";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-copper-light">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-offwhite/80 hover:text-offwhite">
        {children}
      </Link>
    </li>
  );
}

// Computed once at build time — intentionally not request-time dynamic.
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <p className="font-[family-name:var(--font-heading)] text-lg font-bold">
              {BUSINESS.name}
            </p>
            <p className="mt-3 text-sm text-offwhite/80">
              Espresso &amp; coffee machine repair serving the greater San Diego area.
            </p>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="mt-4 inline-block text-base font-semibold text-copper-light hover:text-copper"
            >
              {BUSINESS.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-offwhite/80">
              {BUSINESS.hoursDisplay}
              <br />
              {BUSINESS.hoursClosedDisplay}
            </p>
            <p className="mt-3 text-sm text-offwhite/80">
              We accept {BUSINESS.paymentMethods.join(", ")}.
            </p>
            <a
              href={BUSINESS.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-copper-light underline hover:text-copper"
            >
              Find us on Google
            </a>
          </div>

          <FooterColumn title="Services">
            {SERVICES.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
            <FooterLink href="/services">All Services</FooterLink>
          </FooterColumn>

          <FooterColumn title="Service Area">
            {PHASE_1_CITIES.map((c) => (
              <FooterLink key={c.slug} href={`/service-area/${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
            <FooterLink href="/service-area">All Cities</FooterLink>
          </FooterColumn>

          <FooterColumn title="Brands">
            {PHASE_1_BRANDS.map((b) => (
              <FooterLink key={b.slug} href={`/brands/${b.slug}`}>
                {b.name} Repair
              </FooterLink>
            ))}
            <FooterLink href="/brands">All Brands</FooterLink>
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/pricing-faq">Pricing &amp; FAQ</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-12 border-t border-offwhite/15 pt-6 text-xs text-offwhite/60">
          <p>
            &copy; {currentYear} {BUSINESS.name}. Pickup-only service — we
            bring your machine to our shop for diagnosis and repair.
          </p>
        </div>
      </div>
    </footer>
  );
}
