import { getPublicEnv } from "@/lib/env";
import { fetchPublicEvent } from "@/lib/public-event-api";
import { getDesignEvent } from "@/lib/placeholders";
import { getPreviewContext, type PreviewQuery } from "@/lib/preview-context";

export async function loadPublicEvent(searchParams?: PreviewQuery) {
  const env = getPublicEnv();
  const apiBaseUrl = env.apiBaseUrl || "https://webserbisyo.com";
  const preview = getPreviewContext(env, searchParams);

  if (env.designMode) {
    return {
      status: "available" as const,
      event: await getDesignEvent(apiBaseUrl, preview.eventSlug, preview.previewMode),
    };
  }

  return fetchPublicEvent({
    apiBaseUrl: env.apiBaseUrl,
    eventSlug: preview.eventSlug,
    previewMode: preview.previewMode,
  });
}
