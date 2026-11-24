"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, BUSINESS } from "@/data/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-md border border-line text-charcoal"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-40 border-t border-line bg-offwhite shadow-lg"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col divide-y divide-line">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-lg font-medium text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-line p-6">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex w-full items-center justify-center rounded-md bg-copper px-6 py-4 text-lg font-semibold text-offwhite"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
