import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, CITIES } from "@/data/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call ${BUSINESS.name} to schedule a pickup for your espresso or coffee machine repair.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            Contact Us
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate">
            The fastest way to reach us is by phone. Give us a call, tell us
            what&apos;s going on with your machine, and we&apos;ll schedule a pickup.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center justify-center rounded-md bg-copper px-10 py-5 text-xl font-semibold text-offwhite hover:bg-copper-dark"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-charcoal">
                Hours
              </h2>
              <p className="mt-3 text-base text-slate">
                {BUSINESS.hoursDisplay}
                <br />
                {BUSINESS.hoursClosedDisplay}
              </p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-charcoal">
                Service Area
              </h2>
              <p className="mt-3 text-base text-slate">
                Serving the greater San Diego area — from Chula Vista to
                Fallbrook and Downtown San Diego to Alpine.
              </p>
              <Link
                href="/service-area"
                className="mt-2 inline-block font-medium text-copper underline"
              >
                View all {CITIES.length} cities we serve
              </Link>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-charcoal">
                How Pickup Works
              </h2>
              <p className="mt-3 text-base text-slate">
                Call us, describe the issue, and we&apos;ll schedule a time to
                pick up your machine. There&apos;s no need to box it up or drop it
                off anywhere.
              </p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-charcoal">
                Payment
              </h2>
              <p className="mt-3 text-base text-slate">
                We accept {BUSINESS.paymentMethods.join(", ")}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-charcoal">
            Have a question first?
          </h2>
          <p className="mt-3 text-base text-slate">
            Check our{" "}
            <Link href="/pricing-faq" className="font-medium text-copper underline">
              Pricing &amp; FAQ page
            </Link>{" "}
            for answers about cost, turnaround time, and how repairs work —
            or just give us a call.
          </p>
        </div>
      </section>
    </>
  );
}
