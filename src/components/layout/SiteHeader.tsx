import { Container } from "@/components/ui/Container";
import type { EventWebsiteRenderModel } from "@/types/public-event";

type SiteHeaderProps = {
  event: EventWebsiteRenderModel;
};

export function SiteHeader({ event }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-cocoa/10 bg-ivory/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a className="font-serif text-xl text-charcoal" href="#top">{event.title}</a>
        <a className="rounded-full border border-terracotta/35 px-4 py-2 text-sm font-semibold text-cocoa hover:border-terracotta" href={event.rsvpUrl}>
          RSVP
        </a>
      </Container>
    </header>
  );
}
