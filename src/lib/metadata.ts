import type { EventWebsiteRenderModel } from "@/types/public-event";

export function buildPageTitle(event?: EventWebsiteRenderModel): string {
  return event?.title ? `${event.title} | WebSerbisyo RSVP` : "WebSerbisyo RSVP Event";
}

export function buildPageDescription(event?: EventWebsiteRenderModel): string {
  if (!event) return "A public event website powered by WebSerbisyo RSVP.";
  return `Public event website for ${event.title}.`;
}
