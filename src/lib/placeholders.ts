import sampleEvent from "@/data/sample-event.json";
import { normalizePublicEvent } from "@/lib/normalize-public-event";
import type { EventWebsiteRenderModel, PublicEventDto } from "@/types/public-event";

export function getSampleEvent(apiBaseUrl: string, eventSlug: string): EventWebsiteRenderModel {
  return normalizePublicEvent({
    event: sampleEvent as PublicEventDto,
    source: "design",
    apiBaseUrl,
    eventSlug: eventSlug || "sample-wedding"
  });
}
