import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/data/constants";

export const runtime = "nodejs";

interface PickupRequestBody {
  name?: string;
  phone?: string;
  address?: string;
  brand?: string;
  preferredTime?: string; // datetime-local value, e.g. "2026-11-25T14:00"
  description?: string;
}

const GENERIC_ERROR =
  "We couldn't submit your request online right now. Please call us instead.";

function formatWindow(preferredTime: string): string {
  const start = new Date(preferredTime);
  if (Number.isNaN(start.getTime())) return preferredTime;

  const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
  const dateFmt = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const timeFmt = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${dateFmt.format(start)}, between ${timeFmt.format(start)} and ${timeFmt.format(end)}`;
}

export async function POST(request: Request) {
  let body: PickupRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, address, brand, preferredTime, description } = body;

  if (!name?.trim() || !phone?.trim() || !address?.trim() || !brand?.trim() || !preferredTime?.trim()) {
    return NextResponse.json(
      { error: "Please fill out all required fields." },
      { status: 400 }
    );
  }

  const windowText = formatWindow(preferredTime);

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.PICKUP_NOTIFICATION_EMAIL;
  const fromEmail = process.env.PICKUP_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    // Not configured yet — log so the submission isn't silently lost, and
    // tell the customer to call instead of pretending it went through.
    console.error(
      "Pickup request received but email is not configured (set RESEND_API_KEY and PICKUP_NOTIFICATION_EMAIL):",
      { name, phone, address, brand, preferredTime, description }
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
    `Preferred pickup window: ${windowText}`,
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
