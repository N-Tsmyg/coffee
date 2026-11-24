import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, CITIES } from "@/data/constants";
import { PickupRequestForm } from "@/components/PickupRequestForm";

export const metadata: Metadata = {
  title: "Request a Pickup",
  description: `Call ${BUSINESS.name} or submit a pickup request online to schedule a repair for your espresso or coffee machine.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
            Request a Pickup
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate">
            Call us and tell us what&apos;s going on with your machine, or
            submit a pickup request below — either way, we&apos;ll schedule a
            time to come get it.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center justify-center rounded-md bg-copper px-10 py-5 text-xl font-semibold text-offwhite hover:bg-copper-dark"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href="#pickup-form"
              className="flex items-center justify-center rounded-md border border-charcoal px-10 py-5 text-xl font-semibold text-charcoal hover:bg-charcoal hover:text-offwhite"
            >
              Fill Out the Form
            </a>
          </div>
        </div>
      </section>

      <section id="pickup-form">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
            Pickup Request Form
          </h2>
          <p className="mt-3 text-base text-slate">
            Fill out the fields below and we&apos;ll get back to you to confirm
            your pickup time. Fields marked{" "}
            <span className="text-copper">*</span> are required.
          </p>
          <div className="mt-8 rounded-lg border border-line bg-offwhite p-6 sm:p-8">
            <PickupRequestForm />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
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
                Call us or submit the form above, describe the issue, and
                we&apos;ll schedule a time to pick up your machine. There&apos;s no
                need to box it up or drop it off anywhere.
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

      <section className="border-t border-line">
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
