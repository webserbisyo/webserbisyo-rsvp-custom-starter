import { normalizePublicEvent } from "@/lib/normalize-public-event";
import { joinPublicApiUrl } from "@/lib/urls";
import type { PublicEventApiError, PublicEventApiResponse, PublicEventResult } from "@/types/public-event";

type FetchInput = {
  apiBaseUrl: string;
  eventSlug: string;
};

function isApiResponse(value: unknown): value is PublicEventApiResponse {
  return Boolean(value && typeof value === "object" && "data" in value);
}

function isApiError(value: unknown): value is PublicEventApiError {
  return Boolean(value && typeof value === "object" && "error" in value);
}

export async function fetchPublicEvent({ apiBaseUrl, eventSlug }: FetchInput): Promise<PublicEventResult> {
  if (!apiBaseUrl || !eventSlug) {
    return {
      status: "setup_error",
      message: "Missing NEXT_PUBLIC_WEBSERBISYO_API_URL or NEXT_PUBLIC_EVENT_SLUG."
    };
  }

  try {
    const response = await fetch(joinPublicApiUrl(apiBaseUrl, eventSlug), {
      cache: "no-store",
      headers: {
        Accept: "application/json"
      }
    });

    const payload: unknown = await response.json().catch(() => null);

    if (!response.ok) {
      const error = isApiError(payload) ? payload.error : undefined;
      return {
        status: "unavailable",
        code: error?.code,
        message: error?.message ?? "This event website is unavailable."
      };
    }

    if (!isApiResponse(payload)) {
      return {
        status: "unavailable",
        message: "The public event API returned an unexpected response."
      };
    }

    return {
      status: "available",
      event: normalizePublicEvent({
        event: payload.data,
        source: "live",
        apiBaseUrl,
        eventSlug
      })
    };
  } catch {
    return {
      status: "network_error",
      message: "Could not reach the WebSerbisyo public API."
    };
  }
}
