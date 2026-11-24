import { BUSINESS } from "@/data/constants";

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a href={`tel:${BUSINESS.phoneTel}`} className={className}>
      {BUSINESS.phoneDisplay}
    </a>
  );
}
