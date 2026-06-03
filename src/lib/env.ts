export type PublicEnv = {
  apiBaseUrl: string;
  eventSlug: string;
  designMode: boolean;
  templateId: string;
  hasLiveConfig: boolean;
};

function cleanUrl(value?: string): string {
  return (value ?? "").trim().replace(/\/+$/, "");
}

function asBoolean(value?: string): boolean {
  return String(value ?? "").trim().toLowerCase() === "true";
}

export function getPublicEnv(): PublicEnv {
  const apiBaseUrl = cleanUrl(process.env.NEXT_PUBLIC_WEBSERBISYO_API_URL);
  const eventSlug = (process.env.NEXT_PUBLIC_EVENT_SLUG ?? "").trim();
  const designMode = asBoolean(process.env.NEXT_PUBLIC_DESIGN_MODE);

  return {
    apiBaseUrl,
    eventSlug,
    designMode,
    templateId: (process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "wedding-custom-starter-v1").trim(),
    hasLiveConfig: Boolean(apiBaseUrl && eventSlug)
  };
}
