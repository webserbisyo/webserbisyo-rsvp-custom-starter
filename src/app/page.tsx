import type { Metadata } from "next";
import { ClientPageFrame } from "@/client/components";
import { clientConfig } from "@/client/client.config";
import { PublicEventPageContent } from "@/components/platform/PublicEventPageContent";
import { EmptyState } from "@/components/ui/EmptyState";
import { getPublicEnv } from "@/lib/env";
import { fetchPublicEvent } from "@/lib/public-event-api";
import { getDesignEvent } from "@/lib/placeholders";
import { buildPageDescription, buildPageTitle, safePublicCanonicalUrl } from "@/lib/metadata";
import { getPreviewContext, type PreviewQuery } from "@/lib/preview-context";

type PageProps = {
  searchParams?: Promise<PreviewQuery>;
};

async function loadEvent(searchParams?: PreviewQuery) {
  const env = getPublicEnv();
  const apiBaseUrl = env.apiBaseUrl || "https://webserbisyo.com";
  const preview = getPreviewContext(env, searchParams);

  if (env.designMode) {
    return { status: "available" as const, event: await getDesignEvent(apiBaseUrl, preview.eventSlug, preview.previewMode) };
  }

  return fetchPublicEvent({ apiBaseUrl: env.apiBaseUrl, eventSlug: preview.eventSlug, previewMode: preview.previewMode });
}

export async function generateMetadata({ searchParams }: PageProps = {}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const result = await loadEvent(resolvedSearchParams);

  if (result.status !== "available") {
    return {
      title: "Event Unavailable | WebSerbisyo RSVP",
      description: "This event website is not currently available."
    };
  }

  const canonical = result.event.previewMode === "dashboard" ? undefined : safePublicCanonicalUrl(result.event.publicUrl);

  return {
    title: buildPageTitle(result.event),
    description: buildPageDescription(result.event),
    alternates: canonical ? { canonical } : undefined,
    robots: result.event.previewMode === "dashboard" ? { index: false, follow: false } : undefined
  };
}

export default async function HomePage({ searchParams }: PageProps) {
  const result = await loadEvent(await searchParams);

  if (result.status === "setup_error") {
    return <EmptyState title="Website setup required" message={result.message} />;
  }

  if (result.status !== "available") {
    return <EmptyState title="Event unavailable" message={result.message} />;
  }

  return (
    <ClientPageFrame config={clientConfig} event={result.event}>
      <PublicEventPageContent event={result.event} />
    </ClientPageFrame>
  );
}
