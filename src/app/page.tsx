import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { getPublicEnv } from "@/lib/env";
import { fetchPublicEvent } from "@/lib/public-event-api";
import { getSampleEvent } from "@/lib/placeholders";
import { buildPageDescription, buildPageTitle } from "@/lib/metadata";

async function loadEvent() {
  const env = getPublicEnv();
  const apiBaseUrl = env.apiBaseUrl || "https://webserbisyo.com";

  if (env.designMode) {
    return { status: "available" as const, event: getSampleEvent(apiBaseUrl, env.eventSlug) };
  }

  return fetchPublicEvent({ apiBaseUrl: env.apiBaseUrl, eventSlug: env.eventSlug });
}

export async function generateMetadata(): Promise<Metadata> {
  const result = await loadEvent();

  if (result.status !== "available") {
    return {
      title: "Event Unavailable | WebSerbisyo RSVP",
      description: "This event website is not currently available."
    };
  }

  return {
    title: buildPageTitle(result.event),
    description: buildPageDescription(result.event),
    alternates: result.event.publicUrl ? { canonical: result.event.publicUrl } : undefined
  };
}

export default async function HomePage() {
  const result = await loadEvent();

  if (result.status === "setup_error") {
    return <EmptyState title="Website setup required" message={result.message} />;
  }

  if (result.status !== "available") {
    return <EmptyState title="Event unavailable" message={result.message} />;
  }

  return (
    <SiteShell event={result.event}>
      <SectionRenderer event={result.event} />
    </SiteShell>
  );
}
