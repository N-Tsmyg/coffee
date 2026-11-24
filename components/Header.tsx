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

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-charcoal sm:text-xl"
        >
          Quick Espresso Repair
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="whitespace-nowrap text-sm font-medium text-charcoal hover:text-copper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
            className="whitespace-nowrap rounded-md bg-copper px-5 py-2.5 text-sm font-semibold text-offwhite hover:bg-copper-dark"
          >
            Call
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
