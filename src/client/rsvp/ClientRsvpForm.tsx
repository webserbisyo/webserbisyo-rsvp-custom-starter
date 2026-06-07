import type { EventWebsiteRenderModel, NormalizedSection } from "@/types/public-event";

type ClientRsvpFormProps = {
  dedicatedPageEnabled: boolean;
  dedicatedPagePath: string;
  event: EventWebsiteRenderModel;
  mode: "compact-form" | "cta-only" | "inline-form";
};

type StarterRsvpConfig = {
  companionAgeEnabled: boolean;
  companionLimit: number;
  companionNameEnabled: boolean;
  emailEnabled: boolean;
  emailRequired: boolean;
  foodAllergiesEnabled: boolean;
  messageToHostEnabled: boolean;
  phoneEnabled: boolean;
  phoneRequired: boolean;
  plusOneEnabled: boolean;
};

const defaultRsvpConfig: StarterRsvpConfig = {
  companionAgeEnabled: false,
  companionLimit: 1,
  companionNameEnabled: false,
  emailEnabled: true,
  emailRequired: false,
  foodAllergiesEnabled: false,
  messageToHostEnabled: true,
  phoneEnabled: false,
  phoneRequired: false,
  plusOneEnabled: false,
};

export function ClientRsvpForm({
  dedicatedPageEnabled,
  dedicatedPagePath,
  event,
  mode,
}: ClientRsvpFormProps) {
  const rsvpConfig = getStarterRsvpConfig(event.sections.find((section) => section.key === "rsvp_form"));
  const showFullForm = mode === "inline-form";
  const showCompactFields = mode === "compact-form";

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm leading-7 text-cocoa/80">
          RSVP submission stays disabled in the starter until the official public WebSerbisyo
          browser contract for custom frontends is explicitly approved.
        </p>
        {dedicatedPageEnabled ? (
          <p className="text-sm leading-7 text-cocoa/70">
            The dedicated RSVP page is available at{" "}
            <a className="font-semibold text-terracotta underline-offset-2 hover:underline" href={dedicatedPagePath}>
              {dedicatedPagePath}
            </a>
            .
          </p>
        ) : null}
      </div>

      <div className="rounded-2xl border border-cocoa/10 bg-ivory/60 p-5" id="rsvp-form">
        <div className="grid gap-4">
          <Field label="Guest Name" required placeholder="Your full name" />
          {(showFullForm || showCompactFields) && rsvpConfig.emailEnabled ? (
            <Field
              label="Email"
              required={rsvpConfig.emailRequired}
              placeholder="you@example.com"
              type="email"
            />
          ) : null}
          {showFullForm && rsvpConfig.phoneEnabled ? (
            <Field
              label="Phone Number"
              required={rsvpConfig.phoneRequired}
              placeholder="09XXXXXXXXX"
              type="tel"
            />
          ) : null}
          {showFullForm ? (
            <div className="grid gap-2">
              <span className="text-sm font-semibold text-charcoal">Attendance</span>
              <div className="flex flex-wrap gap-2">
                <ChoiceButton label="Yes, I will attend" />
                <ChoiceButton label="Sorry, I can't attend" />
              </div>
            </div>
          ) : null}
          {showFullForm && rsvpConfig.plusOneEnabled ? (
            <div className="grid gap-2">
              <span className="text-sm font-semibold text-charcoal">Companions</span>
              <p className="text-sm leading-6 text-cocoa/70">
                Guests may bring up to {rsvpConfig.companionLimit} companion
                {rsvpConfig.companionLimit === 1 ? "" : "s"}.
              </p>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: rsvpConfig.companionLimit + 1 }, (_, index) => (
                  <ChoiceButton
                    key={index}
                    label={index === 0 ? "Just me" : `Me + ${index}`}
                  />
                ))}
              </div>
              {rsvpConfig.companionNameEnabled ? (
                <div className="grid gap-3 rounded-2xl border border-cocoa/10 bg-white/70 p-4">
                  <Field label="Companion 1 Name" placeholder="Full name" />
                  {rsvpConfig.companionAgeEnabled ? (
                    <Field label="Companion 1 Age" placeholder="Adult, child, or age" />
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
          {showFullForm && rsvpConfig.foodAllergiesEnabled ? (
            <TextArea
              label="Food Allergies / Dietary Restrictions"
              placeholder="List any allergies or dietary restrictions for your party."
            />
          ) : null}
          {(showFullForm || showCompactFields) && rsvpConfig.messageToHostEnabled ? (
            <TextArea
              label="Message to Host"
              placeholder="Leave a short message."
            />
          ) : null}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              className="rounded-full border border-cocoa/15 px-4 py-2 text-sm font-semibold text-cocoa/60"
              disabled
              type="button"
            >
              RSVP submission is not enabled in the starter scaffold
            </button>
            {dedicatedPageEnabled && mode !== "cta-only" ? (
              <a
                className="text-sm font-semibold text-terracotta underline-offset-2 hover:underline"
                href={dedicatedPagePath}
              >
                Open the dedicated RSVP page
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  required = false,
  type = "text",
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "email" | "tel" | "text";
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-charcoal">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        className="rounded-2xl border border-cocoa/10 bg-white px-4 py-3 text-sm text-cocoa/60"
        disabled
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}

function TextArea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-charcoal">{label}</span>
      <textarea
        className="min-h-[120px] rounded-2xl border border-cocoa/10 bg-white px-4 py-3 text-sm text-cocoa/60"
        disabled
        placeholder={placeholder}
      />
    </label>
  );
}

function ChoiceButton({ label }: { label: string }) {
  return (
    <button
      className="rounded-full border border-cocoa/10 px-4 py-2 text-sm font-medium text-cocoa/60"
      disabled
      type="button"
    >
      {label}
    </button>
  );
}

function getStarterRsvpConfig(section?: NormalizedSection): StarterRsvpConfig {
  const content = section?.content ?? {};

  return {
    companionAgeEnabled: booleanValue(content.companionAgeEnabled),
    companionLimit: numberValue(content.companionLimit, defaultRsvpConfig.companionLimit),
    companionNameEnabled: booleanValue(content.companionNameEnabled),
    emailEnabled: booleanValue(content.emailEnabled, defaultRsvpConfig.emailEnabled),
    emailRequired: booleanValue(content.emailRequired),
    foodAllergiesEnabled: booleanValue(content.foodAllergiesEnabled),
    messageToHostEnabled: booleanValue(content.messageToHostEnabled, defaultRsvpConfig.messageToHostEnabled),
    phoneEnabled: booleanValue(content.phoneEnabled),
    phoneRequired: booleanValue(content.phoneRequired),
    plusOneEnabled: booleanValue(content.plusOneEnabled),
  };
}

function booleanValue(value: unknown, fallback = false) {
  return typeof value === "boolean" ? value : fallback;
}

function numberValue(value: unknown, fallback: number) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
