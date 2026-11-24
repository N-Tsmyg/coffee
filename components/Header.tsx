import Link from "next/link";
import { NAV_LINKS, BUSINESS } from "@/data/constants";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="relative border-b border-line bg-offwhite">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-copper focus:px-4 focus:py-2 focus:text-offwhite"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-charcoal sm:text-2xl"
        >
          Quick Espresso Repair
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-charcoal hover:text-copper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="rounded-md bg-copper px-5 py-3 text-base font-semibold text-offwhite hover:bg-copper-dark"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
