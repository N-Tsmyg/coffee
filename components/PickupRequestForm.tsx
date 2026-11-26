"use client";

import { useEffect, useState } from "react";
import { BUSINESS, BRANDS, PICKUP_FORM_ENDPOINT } from "@/data/constants";

const BRAND_OPTIONS = [...BRANDS.map((b) => b.name)].sort((a, b) =>
  a.localeCompare(b)
);

type Status = "idle" | "submitting" | "success" | "error";

function toLocalDateValue(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function formatPreferredDate(preferredDate: string): string {
  // Parse as a local calendar date (not UTC midnight) so the displayed
  // weekday/day never shifts by a day depending on the browser's timezone.
  const [year, month, day] = preferredDate.split("-").map(Number);
  const date = new Date(year, (month || 1) - 1, day || 1);
  if (Number.isNaN(date.getTime())) return preferredDate;

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function PickupRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMinDate(toLocalDateValue(new Date()));
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const preferredDateRaw = String(data.get("preferredDate") || "");
    const description = String(data.get("description") || "");

    const payload = {
      name,
      phone: String(data.get("phone") || ""),
      address: String(data.get("address") || ""),
      brand: String(data.get("brand") || ""),
      preferredDate: preferredDateRaw
        ? formatPreferredDate(preferredDateRaw)
        : "Not specified — call to schedule",
      description: description.trim() ? description : "(none provided)",
      _subject: `Pickup request — ${name}`,
    };

    try {
      const res = await fetch(PICKUP_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const result = await res.json().catch(() => null);
      const message =
        result?.errors
          ?.map((e: { message: string }) => e.message)
          .join(", ") ||
        result?.error ||
        "Something went wrong submitting your request. Please call us instead.";
      setStatus("error");
      setErrorMessage(message);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong submitting your request. Please call us instead."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-line bg-paper p-8 text-center">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-charcoal">
          Request received
        </h3>
        <p className="mt-2 text-base text-slate">
          Thanks — we&apos;ll reach out shortly to confirm your pickup. If
          it&apos;s urgent, feel free to call us at{" "}
          <a href={`tel:${BUSINESS.phoneTel}`} className="font-medium text-copper underline">
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-copper underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal">
            Name <span className="text-copper">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-md border border-line bg-offwhite px-4 py-3 text-base text-charcoal"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal">
            Phone <span className="text-copper">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 w-full rounded-md border border-line bg-offwhite px-4 py-3 text-base text-charcoal"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-charcoal">
          Pickup address <span className="text-copper">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          required
          rows={2}
          autoComplete="street-address"
          className="mt-1.5 w-full rounded-md border border-line bg-offwhite px-4 py-3 text-base text-charcoal"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="brand" className="block text-sm font-semibold text-charcoal">
            Coffee machine brand <span className="text-copper">*</span>
          </label>
          <select
            id="brand"
            name="brand"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-md border border-line bg-offwhite px-4 py-3 text-base text-charcoal"
          >
            <option value="" disabled>
              Select a brand
            </option>
            {BRAND_OPTIONS.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-charcoal">
            Preferred pickup date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={minDate}
            className="mt-1.5 w-full rounded-md border border-line bg-offwhite px-4 py-3 text-base text-charcoal"
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-charcoal">
          What&apos;s going on with your machine?
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="mt-1.5 w-full rounded-md border border-line bg-offwhite px-4 py-3 text-base text-charcoal"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-base font-medium text-red-700">
          {errorMessage}
        </p>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex w-full items-center justify-center rounded-md bg-copper px-8 py-4 text-lg font-semibold text-offwhite hover:bg-copper-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Submitting…" : "Submit Pickup Request"}
        </button>
      </div>
    </form>
  );
}
