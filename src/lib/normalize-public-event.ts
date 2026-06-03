import { buildRsvpUrl } from "@/lib/rsvp-url";
import type {
  EventWebsiteRenderModel,
  NormalizedSection,
  PublicEventDto,
  PublicEventSection
} from "@/types/public-event";

type NormalizeInput = {
  event: PublicEventDto;
  source: "design" | "live";
  apiBaseUrl: string;
  eventSlug: string;
};

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function sectionFromObject(key: string, value: unknown): NormalizedSection {
  const section = record(value);
  return {
    key,
    title: stringValue(section.title),
    enabled: section.enabled !== false && section.isEnabled !== false && section.visible !== false,
    content: record(section.content ?? section.data ?? section)
  };
}

function normalizeSections(event: PublicEventDto): NormalizedSection[] {
  const website = record(event.website ?? event.websiteContent);
  const rawSections = event.sections ?? website.sections;

  if (Array.isArray(rawSections)) {
    return rawSections
      .map((section: PublicEventSection) => {
        const key = stringValue(section.key ?? section.type);
        if (!key) return null;
        const normalized: NormalizedSection = {
          key,
          title: stringValue(section.title) || undefined,
          enabled: section.enabled !== false && section.isEnabled !== false && section.visible !== false,
          content: record(section.content ?? section.data ?? section)
        };
        return normalized;
      })
      .filter((section): section is NormalizedSection => Boolean(section));
  }

  const sectionsRecord = record(rawSections);
  const order = Array.isArray(website.sectionOrder)
    ? website.sectionOrder.map((key) => stringValue(key)).filter(Boolean)
    : Object.keys(sectionsRecord);

  return order.map((key) => sectionFromObject(key, sectionsRecord[key]));
}

export function normalizePublicEvent({
  event,
  source,
  apiBaseUrl,
  eventSlug
}: NormalizeInput): EventWebsiteRenderModel {
  const slug = stringValue(event.slug ?? event.eventSlug) || eventSlug;
  const title = stringValue(event.title ?? event.name) || "WebSerbisyo RSVP Event";

  return {
    source,
    eventSlug: slug,
    title,
    status: event.status,
    eventDate: stringValue(event.eventDate ?? event.date),
    timezone: stringValue(event.timezone),
    publicUrl: stringValue(event.publicUrl ?? event.fallbackUrl),
    rsvpUrl: buildRsvpUrl({ apiBaseUrl, eventSlug: slug, event }),
    sections: normalizeSections(event),
    raw: event
  };
}
