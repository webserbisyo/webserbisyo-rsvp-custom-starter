import { Section } from "@/components/ui/Section";
import { field } from "@/components/sections/field-utils";
import type { WeddingSectionProps } from "@/components/sections/section-props";

function daysUntil(dateValue?: string | null): number | null {
  if (!dateValue) return null;
  const target = new Date(dateValue);
  if (Number.isNaN(target.getTime())) return null;
  const days = Math.ceil((target.getTime() - Date.now()) / 86_400_000);
  return Math.max(days, 0);
}

export function CountdownSection({ section, event }: WeddingSectionProps) {
  const days = daysUntil(field(section.content, ["dateTime", "date"]) || event.eventDate);
  if (event.source === "live" && days == null) return null;

  return (
    <Section title={field(section.content, ["label", "title"]) || "Counting down"}>
      <div className="rounded-lg border border-cocoa/10 bg-white/60 p-8 text-center shadow-soft">
        <p className="font-serif text-6xl text-terracotta">{days ?? 0}</p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-cocoa/70">days to go</p>
      </div>
    </Section>
  );
}
