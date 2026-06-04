import type { PublicEventDto, PublicRsvpState } from "@/types/public-event";

type RsvpUrlInput = {
  apiBaseUrl: string;
  eventSlug: string;
  event: PublicEventDto;
};

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function buildRsvpUrl({ apiBaseUrl, eventSlug, event }: RsvpUrlInput): string {
  const content = event.content ?? {};
  const website = event.website ?? event.websiteContent ?? {};
  const urls = event.urls ?? {};
  const rsvp = (event.rsvp ?? website.rsvp ?? {}) as PublicRsvpState;
  const providedUrl =
    stringValue(urls.rsvpUrl) ||
    stringValue(rsvp.rsvpUrl) ||
    stringValue(rsvp.url) ||
    stringValue(event.rsvpUrl) ||
    stringValue(content.rsvpUrl) ||
    stringValue(website.rsvpUrl) ||
    stringValue(website.rsvp_url);

  if (providedUrl) {
    return providedUrl;
  }

  return `${apiBaseUrl}/r/${eventSlug}/rsvp`;
}
