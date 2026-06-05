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

export function buildRsvpEmbedUrl({ event }: RsvpUrlInput): string | null {
  const urls = event.urls ?? {};
  const providedUrl = stringValue(urls.rsvpEmbedUrl);

  if (!providedUrl || isVercelUrl(providedUrl)) {
    return null;
  }

  try {
    const url = new URL(providedUrl);

    if (url.protocol !== "https:" && !isLocalUrl(url)) {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

function isVercelUrl(value: string): boolean {
  try {
    const hostname = new URL(value).hostname.toLowerCase();
    return hostname === "vercel.app" || hostname.endsWith(".vercel.app");
  } catch {
    return false;
  }
}

function isLocalUrl(url: URL): boolean {
  return (
    url.protocol === "http:" &&
    (url.hostname === "localhost" || url.hostname === "127.0.0.1")
  );
}
