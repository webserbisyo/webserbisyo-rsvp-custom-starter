import { field } from "@/components/sections/field-utils";
import type { WeddingSectionProps } from "@/components/sections/section-props";

export function CoupleInfoSection({ section, event }: WeddingSectionProps) {
  const kicker = field(section.content, ["kicker", "subtitle"]);
  const coupleNames = field(section.content, ["coupleNames", "names", "title"]) || event.title;
  const hostCopy = field(section.content, ["hostCopy", "description", "body"]);
  const dateText = field(section.content, ["dateText", "date"]);

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-1 bg-terracotta" />
      <div className="mx-auto flex min-h-[62vh] w-full max-w-5xl flex-col justify-center px-5 text-center sm:px-8">
        {kicker ? <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">{kicker}</p> : null}
        <h1 className="mt-5 font-serif text-5xl leading-tight text-charcoal sm:text-7xl">{coupleNames}</h1>
        {hostCopy ? <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cocoa">{hostCopy}</p> : null}
        {dateText ? <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-cocoa/80">{dateText}</p> : null}
      </div>
    </section>
  );
}
