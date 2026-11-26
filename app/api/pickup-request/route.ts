import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/data/constants";

export const runtime = "nodejs";

interface PickupRequestBody {
  name?: string;
  phone?: string;
  address?: string;
  brand?: string;
  preferredDate?: string; // date value, e.g. "2026-11-27"
  description?: string;
}

const GENERIC_ERROR =
  "We couldn't submit your request online right now. Please call us instead.";

function formatDate(preferredDate: string): string {
  // Parse as a local calendar date (not UTC midnight) so the displayed
  // weekday/day never shifts by a day depending on server timezone.
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

export async function POST(request: Request) {
  let body: PickupRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, address, brand, preferredDate, description } = body;

  if (!name?.trim() || !phone?.trim() || !address?.trim() || !brand?.trim()) {
    return NextResponse.json(
      { error: "Please fill out all required fields." },
      { status: 400 }
    );
  }

  const dateText = preferredDate?.trim()
    ? formatDate(preferredDate.trim())
    : "Not specified — call to schedule";

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.PICKUP_NOTIFICATION_EMAIL;
  const fromEmail = process.env.PICKUP_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    // Not configured yet — log so the submission isn't silently lost, and
    // tell the customer to call instead of pretending it went through.
    console.error(
      "Pickup request received but email is not configured (set RESEND_API_KEY and PICKUP_NOTIFICATION_EMAIL):",
      { name, phone, address, brand, preferredDate, description }
    );
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  const textBody = [
    `New pickup request from the ${BUSINESS.name} website`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Address: ${address}`,
    `Coffee machine brand: ${brand}`,
    `Preferred pickup date: ${dateText}`,
    `Notes: ${description?.trim() ? description.trim() : "(none provided)"}`,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: `${BUSINESS.name} Website <${fromEmail}>`,
      to: [toEmail],
      subject: `Pickup request — ${name}`,
      text: textBody,
    });

    if (error) {
      console.error("Resend error sending pickup request:", error);
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }
  } catch (err) {
    console.error("Unexpected error sending pickup request:", err);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
