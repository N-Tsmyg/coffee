import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, OWNER } from "@/data/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet ${OWNER.name}, the founder of ${BUSINESS.name}, and learn how our team approaches espresso and coffee machine repair in San Diego.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            About {BUSINESS.name}
          </h1>
          <p className="mt-5 text-lg text-slate">
            We started {BUSINESS.name} around a simple idea: give people an
            honest diagnosis, a fair price, and a repair that holds — nothing
            more, nothing less. No pressure to replace a machine that can be
            fixed, and no guesswork about what something will cost before we
            start.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
            <div
              aria-hidden="true"
              className="flex h-28 w-28 items-center justify-center rounded-full bg-copper font-[family-name:var(--font-heading)] text-4xl font-bold text-offwhite"
            >
              {OWNER.name.charAt(0)}
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
                Meet {OWNER.name}
              </h2>
              <p className="mt-1 text-base font-medium text-copper">{OWNER.role}</p>
              <p className="mt-4 text-lg text-slate">{OWNER.bio}</p>
              <p className="mt-4 text-lg text-slate">
                That background — precision repair work on complex machinery,
                combined with hands-on appliance repair experience — carries
                directly into how {OWNER.name} and the team approach every
                espresso machine that comes through the shop: methodically,
                and without cutting corners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            How We Work
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-line bg-offwhite p-5">
              <h3 className="text-lg font-semibold text-charcoal">
                An honest diagnosis first
              </h3>
              <p className="mt-2 text-base text-slate">
                Every repair starts with a full diagnostic at our shop so we
                know exactly what&apos;s wrong before we talk about fixing it.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-offwhite p-5">
              <h3 className="text-lg font-semibold text-charcoal">
                A fair, upfront quote
              </h3>
              <p className="mt-2 text-base text-slate">
                You&apos;ll know what the repair costs before any work begins — no
                surprises when you get your machine back.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-offwhite p-5">
              <h3 className="text-lg font-semibold text-charcoal">
                A small, hands-on team
              </h3>
              <p className="mt-2 text-base text-slate">
                Our technicians handle every machine personally, from pickup
                through diagnosis and repair.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-offwhite p-5">
              <h3 className="text-lg font-semibold text-charcoal">
                No brand restrictions
              </h3>
              <p className="mt-2 text-base text-slate">
                Whether it&apos;s a simple drip machine or a commercial setup, we
                work on all major brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-charcoal text-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Ready to get your machine looked at?
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
