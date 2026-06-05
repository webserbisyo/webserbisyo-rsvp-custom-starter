"use client";

/* eslint-disable @next/next/no-img-element -- Public media hosts are controlled by the platform API; broad next/image remotePatterns are intentionally avoided in the starter. */
import { useEffect, useMemo, useState } from "react";
import {
  PlatformCalendarIcon,
  PlatformGiftIcon,
  PlatformMailIcon,
  PlatformMapPinIcon,
  PlatformMessageIcon,
  PlatformMusicIcon,
  PlatformPhoneIcon,
  PlatformPlayIcon,
  PlatformUsersIcon
} from "@/components/platform/platform-icons";
import type {
  PlatformGuestbookMessage,
  PlatformRenderModel,
  PlatformSectionKey
} from "@/lib/platform-render-model";

type EventWebsiteRendererProps = {
  draft: PlatformRenderModel;
  guestbookMessages?: PlatformGuestbookMessage[];
  hideEmptyGuestbook?: boolean;
  rsvpEmbedUrl?: string | null;
  rsvpUrl: string;
  sections: PlatformSectionKey[];
};

const supportedSectionKeySet = new Set<PlatformSectionKey>([
  "host_info",
  "countdown",
  "music_effects",
  "main_event",
  "venue",
  "secondary_event",
  "timeline_program",
  "entourage",
  "principal_sponsors",
  "attire_motif",
  "extra_info",
  "rsvp_form",
  "gift_details",
  "guestbook",
  "story_message",
  "contact_socials"
]);

export function EventWebsiteRenderer({
  draft,
  guestbookMessages = [],
  hideEmptyGuestbook = false,
  rsvpEmbedUrl = null,
  rsvpUrl,
  sections
}: EventWebsiteRendererProps) {
  const visibleSections = sections.filter(
    (sectionKey) =>
      supportedSectionKeySet.has(sectionKey) &&
      !(sectionKey === "guestbook" && hideEmptyGuestbook && guestbookMessages.length === 0)
  );

  return (
    <>
      {visibleSections.map((sectionKey, index) => (
        <SectionRouter
          key={sectionKey}
          draft={draft}
          guestbookMessages={guestbookMessages}
          rsvpEmbedUrl={rsvpEmbedUrl}
          rsvpUrl={rsvpUrl}
          sectionKey={sectionKey}
          showDivider={index > 0}
        />
      ))}
    </>
  );
}

function SectionRouter({
  draft,
  guestbookMessages,
  rsvpEmbedUrl,
  rsvpUrl,
  sectionKey,
  showDivider
}: {
  draft: PlatformRenderModel;
  guestbookMessages: PlatformGuestbookMessage[];
  rsvpEmbedUrl: string | null;
  rsvpUrl: string;
  sectionKey: PlatformSectionKey;
  showDivider: boolean;
}) {
  return (
    <>
      {showDivider ? <MajorDivider /> : null}
      <div className="event-preview-section-anchor" data-preview-section={sectionKey} id={sectionKey === "rsvp_form" ? "rsvp" : undefined}>
        {sectionKey === "host_info" ? <CoupleInfoSection draft={draft} /> : null}
        {sectionKey === "countdown" ? <CountdownSection draft={draft} /> : null}
        {sectionKey === "music_effects" ? <MusicSection draft={draft} /> : null}
        {sectionKey === "main_event" ? <CeremonySection draft={draft} /> : null}
        {sectionKey === "venue" ? <VenueSection draft={draft} /> : null}
        {sectionKey === "secondary_event" ? <ReceptionSection draft={draft} /> : null}
        {sectionKey === "timeline_program" ? <TimelineSection draft={draft} /> : null}
        {sectionKey === "entourage" ? <EntourageSection draft={draft} /> : null}
        {sectionKey === "principal_sponsors" ? <PrincipalSponsorsSection draft={draft} /> : null}
        {sectionKey === "attire_motif" ? <AttireSection draft={draft} /> : null}
        {sectionKey === "extra_info" ? <ExtraInfoSection draft={draft} /> : null}
        {sectionKey === "rsvp_form" ? <RsvpFormSection rsvpEmbedUrl={rsvpEmbedUrl} rsvpUrl={rsvpUrl} /> : null}
        {sectionKey === "gift_details" ? <GiftDetailsSection draft={draft} /> : null}
        {sectionKey === "guestbook" ? (
          <GuestbookSection draft={draft} guestbookMessages={guestbookMessages} />
        ) : null}
        {sectionKey === "story_message" ? <LoveStorySection draft={draft} /> : null}
        {sectionKey === "contact_socials" ? <ContactSocialsSection draft={draft} /> : null}
      </div>
    </>
  );
}

function CoupleInfoSection({ draft }: { draft: PlatformRenderModel }) {
  const coupleInfo = draft.coupleInfo;
  const displayAs = coupleInfo.displayAs.trim() || "WebSerbisyo RSVP Event";
  const hostLine = coupleInfo.hostLine.trim();
  const message = coupleInfo.shortHostMessage.trim();

  return (
    <section className="event-preview-section event-preview-section--hero">
      <SectionLabel>Couple Info</SectionLabel>
      {hostLine ? <p className="event-preview-host-line">{hostLine}</p> : null}
      <h2>{displayAs}</h2>
      {message ? <p className="event-preview-copy">{message}</p> : null}
      <InternalDivider />
      <div className="event-preview-couple-grid">
        <span>
          <strong>Groom</strong>
          {coupleInfo.groomName || "To be announced"}
        </span>
        <span>
          <strong>Bride</strong>
          {coupleInfo.brideName || "To be announced"}
        </span>
      </div>
    </section>
  );
}

function CountdownSection({ draft }: { draft: PlatformRenderModel }) {
  const title = draft.countdown.title.trim() || "Counting down to the celebration";
  const shortNote = draft.countdown.shortNote.trim();
  const [now, setNow] = useState(0);
  const countdownItems = useMemo(
    () =>
      now === 0
        ? createZeroCountdownItems()
        : buildCountdownItems(draft.ceremony.eventDate, draft.ceremony.eventTime, now),
    [draft.ceremony.eventDate, draft.ceremony.eventTime, now]
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="event-preview-section">
      <SectionLabel>Countdown</SectionLabel>
      <h3>{title}</h3>
      {shortNote ? <p className="event-preview-copy">{shortNote}</p> : null}
      <div className="event-preview-countdown-grid">
        {countdownItems.map((item) => (
          <div key={item.label} className="event-preview-countdown-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MusicSection({ draft }: { draft: PlatformRenderModel }) {
  const values = draft.musicEffects;
  const title = values.musicTitle.trim() || "Wedding ambience";
  const buttonLabel = values.playButtonLabel.trim() || "Play";
  const note = values.shortNote.trim();
  const musicLink = values.musicLink.trim();

  return (
    <section className="event-preview-section event-preview-section--compact">
      <SectionLabel>Music</SectionLabel>
      <div className="event-preview-music-card">
        <div className="event-preview-music-icon" aria-hidden="true">
          <PlatformMusicIcon className="size-4" />
        </div>
        <div className="event-preview-music-copy">
          <h4>{title}</h4>
          {note ? <p>{note}</p> : null}
        </div>
        {musicLink ? (
          <a className="event-preview-button event-preview-music-button" href={musicLink} target="_blank" rel="noreferrer">
            <PlatformPlayIcon className="size-3.5" />
            {buttonLabel}
          </a>
        ) : (
          <button className="event-preview-button event-preview-music-button" type="button" disabled>
            <PlatformPlayIcon className="size-3.5" />
            {buttonLabel}
          </button>
        )}
      </div>
    </section>
  );
}

function CeremonySection({ draft }: { draft: PlatformRenderModel }) {
  const ceremony = draft.ceremony;
  const date = formatDisplayDate(ceremony.eventDate);
  const startTime = formatDisplayTime(ceremony.eventTime);
  const endTime = formatDisplayTime(ceremony.endTime);
  const scheduleNote = ceremony.scheduleNote.trim();
  const rsvpDeadline = formatDisplayDateTime(ceremony.rsvpDeadline) || ceremony.rsvpDeadline.trim();

  return (
    <section className="event-preview-section">
      <SectionLabel>Ceremony</SectionLabel>
      <h3>{ceremony.eventLabel.trim() || "Wedding Ceremony"}</h3>
      <dl className="event-preview-detail-list">
        <div>
          <dt>Date</dt>
          <dd>{date || "Date to be announced"}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{[startTime, endTime].filter(Boolean).join(" - ") || "Time to be announced"}</dd>
        </div>
      </dl>
      {scheduleNote ? <p className="event-preview-copy">{scheduleNote}</p> : null}
      {rsvpDeadline ? (
        <>
          <InternalDivider />
          <p className="event-preview-deadline">Kindly RSVP by {rsvpDeadline}.</p>
        </>
      ) : null}
    </section>
  );
}

function VenueSection({ draft }: { draft: PlatformRenderModel }) {
  const venue = draft.venue;
  const mapsLink = venue.mapsLink.trim();
  const arrivalNote = venue.arrivalNote.trim();

  return (
    <section className="event-preview-section">
      <SectionLabel>Venue</SectionLabel>
      <h3>{venue.venueName.trim() || "Venue"}</h3>
      {venue.address.trim() ? (
        <p className="event-preview-address-copy">
          <PlatformMapPinIcon className="size-4" />
          <span className="event-preview-address-text">{venue.address}</span>
        </p>
      ) : null}
      {mapsLink ? (
        <a className="event-preview-button event-preview-map-button" href={mapsLink} target="_blank" rel="noreferrer">
          Open in Google Maps
        </a>
      ) : null}
      {arrivalNote ? (
        <>
          <InternalDivider />
          <p className="event-preview-copy">{arrivalNote}</p>
        </>
      ) : null}
    </section>
  );
}

function ReceptionSection({ draft }: { draft: PlatformRenderModel }) {
  const values = draft.reception;
  const startTime = formatDisplayTime(values.startTime);
  const endTime = formatDisplayTime(values.endTime);
  const note = values.note.trim();
  const venueName = values.venueName.trim();
  const address = values.address.trim();
  const mapsLink = values.mapsLink.trim();
  const hasLocation = Boolean(venueName || address);

  return (
    <section className="event-preview-section">
      <SectionLabel>Reception</SectionLabel>
      <h3>{values.title.trim() || "Reception"}</h3>
      {[startTime, endTime].some(Boolean) ? (
        <div className="event-preview-inline-card">
          <PlatformCalendarIcon className="size-4" />
          <span>{[startTime, endTime].filter(Boolean).join(" - ")}</span>
        </div>
      ) : null}
      {note ? <p className="event-preview-copy">{note}</p> : null}
      {hasLocation ? (
        <div className="event-preview-location-card">
          {venueName ? <strong>{venueName}</strong> : null}
          {address ? <span>{address}</span> : null}
          {mapsLink ? (
            <a className="event-preview-button event-preview-map-button" href={mapsLink} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

function TimelineSection({ draft }: { draft: PlatformRenderModel }) {
  const items = draft.timelineProgram.items.filter((item) => item.time || item.title || item.description);

  return (
    <section className="event-preview-section">
      <SectionLabel>Timeline / Program</SectionLabel>
      <h3>Wedding Day Timeline</h3>
      <p className="event-preview-copy">Here is the flow of the day so guests know what to expect.</p>
      <div className="event-preview-timeline-list">
        {items.map((item, index) => (
          <div key={item.id || `timeline-${index + 1}`} className="event-preview-timeline-item">
            <div className="event-preview-timeline-rail" aria-hidden="true" />
            <div className="event-preview-timeline-card">
              {item.time ? <span className="event-preview-timeline-time">{formatDisplayTime(item.time) || item.time}</span> : null}
              <strong>{item.title || "Program Item"}</strong>
              {item.description ? <p>{item.description}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EntourageSection({ draft }: { draft: PlatformRenderModel }) {
  const intro = draft.entourage.introLine.trim();
  const groups = draft.entourage.groups.filter((group) => group.groupTitle || group.names);

  return (
    <section className="event-preview-section">
      <SectionLabel>Entourage</SectionLabel>
      <h3>Wedding Entourage</h3>
      {intro ? <p className="event-preview-copy">{intro}</p> : null}
      <div className="event-preview-party-grid">
        {groups.map((group, index) => (
          <div key={group.id || `entourage-${index + 1}`} className="event-preview-party-card">
            <strong>{group.groupTitle}</strong>
            {group.names ? <p>{group.names}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function PrincipalSponsorsSection({ draft }: { draft: PlatformRenderModel }) {
  const intro = draft.principalSponsors.introLine.trim();
  const names = normalizeLineList(draft.principalSponsors.names);

  return (
    <section className="event-preview-section">
      <SectionLabel>Principal Sponsors</SectionLabel>
      <h3>Principal Sponsors</h3>
      {intro ? <p className="event-preview-copy">{intro}</p> : null}
      <div className="event-preview-sponsor-list">
        {names.map((name, index) => (
          <span key={`${name}-${index}`}>{name}</span>
        ))}
      </div>
    </section>
  );
}

function AttireSection({ draft }: { draft: PlatformRenderModel }) {
  const values = draft.attireDressCode;
  const intro = values.sectionIntro.trim();
  const cards = [
    { body: values.dressCodeNote.trim(), title: "Dress Code" },
    { body: values.colorMotifNote.trim(), title: "Color / Motif" }
  ].filter((card) => card.body);

  return (
    <section className="event-preview-section">
      <SectionLabel>Attire / Dress Code</SectionLabel>
      <h3>Attire / Dress Code</h3>
      {intro ? <p className="event-preview-copy">{intro}</p> : null}
      <div className="event-preview-guidance-grid">
        {cards.map((card) => (
          <div key={card.title} className="event-preview-guidance-card">
            <strong>{card.title}</strong>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExtraInfoSection({ draft }: { draft: PlatformRenderModel }) {
  const values = draft.extraInfo;
  const intro = values.sectionIntro.trim();
  const items = values.items.filter((item) => item.title || item.details);

  return (
    <section className="event-preview-section">
      <SectionLabel>Extra Info</SectionLabel>
      <h3>{values.sectionTitle.trim() || "Extra Info"}</h3>
      {intro ? <p className="event-preview-copy">{intro}</p> : null}
      <div className="event-preview-note-grid">
        {items.map((item, index) => (
          <div key={item.id || `extra-info-${index + 1}`} className="event-preview-note-card">
            <strong>{item.title}</strong>
            {item.details ? <p>{item.details}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function RsvpFormSection({
  rsvpEmbedUrl,
  rsvpUrl
}: {
  rsvpEmbedUrl: string | null;
  rsvpUrl: string;
}) {
  const [iframeHeight, setIframeHeight] = useState(760);
  const iframeOrigin = rsvpEmbedUrl ? getUrlOrigin(rsvpEmbedUrl) : null;

  useEffect(() => {
    if (!iframeOrigin) return;

    function handleMessage(event: MessageEvent) {
      if (event.origin !== iframeOrigin) return;
      if (!event.data || typeof event.data !== "object") return;
      if ((event.data as { type?: unknown }).type !== "webserbisyo:rsvp-embed:resize") return;

      const height = (event.data as { height?: unknown }).height;

      if (typeof height !== "number" || !Number.isFinite(height)) return;
      setIframeHeight(Math.min(2200, Math.max(560, Math.ceil(height))));
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [iframeOrigin]);

  return (
    <section className="event-preview-section">
      <SectionLabel>RSVP</SectionLabel>
      <h3>Confirm Your Attendance</h3>
      <p className="event-preview-copy">
        Please confirm your attendance through the secure WebSerbisyo RSVP form so the hosts can prepare your seat and celebration details.
      </p>
      {rsvpEmbedUrl ? (
        <div className="event-preview-rsvp-embed">
          <iframe
            className="event-preview-rsvp-embed-frame"
            title="WebSerbisyo RSVP form"
            src={rsvpEmbedUrl}
            sandbox="allow-forms allow-same-origin allow-scripts"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            style={{ height: iframeHeight }}
          />
          <div className="event-preview-rsvp-embed-fallback">
            <span>Having trouble loading the form?</span>
            <a className="event-preview-button" href={rsvpUrl}>
              Open RSVP Form
            </a>
          </div>
        </div>
      ) : (
        <RsvpCtaCard rsvpUrl={rsvpUrl} />
      )}
    </section>
  );
}

function RsvpCtaCard({ rsvpUrl }: { rsvpUrl: string }) {
  return (
    <div className="event-preview-rsvp-card event-preview-rsvp-state">
      <div className="event-preview-rsvp-state-copy">
        <h4>Ready to respond?</h4>
        <p>The RSVP form opens on the official WebSerbisyo RSVP route.</p>
      </div>
      <a className="event-preview-submit-button event-preview-button" href={rsvpUrl}>
        Continue to RSVP Form
      </a>
    </div>
  );
}

function getUrlOrigin(value: string): string | null {
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

function GiftDetailsSection({ draft }: { draft: PlatformRenderModel }) {
  const values = draft.giftDetails;
  const intro = values.sectionIntro.trim();
  const note = values.giftNote.trim();
  const options = values.options.filter((option) => option.title || option.description || option.imageUrl);

  return (
    <section className="event-preview-section">
      <SectionLabel>Gift Details</SectionLabel>
      <h3>Gift Details</h3>
      {intro ? <p className="event-preview-copy">{intro}</p> : null}
      {note ? <p className="event-preview-copy">{note}</p> : null}
      <div className="event-preview-gift-grid">
        {options.map((option, index) => (
          <div key={option.id || `gift-option-${index + 1}`} className="event-preview-gift-card">
            <GiftPreviewMedia option={option} />
            <strong>{option.title}</strong>
            {option.description ? <p>{option.description}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function GuestbookSection({
  draft,
  guestbookMessages
}: {
  draft: PlatformRenderModel;
  guestbookMessages: PlatformGuestbookMessage[];
}) {
  const title = draft.guestbook.sectionTitle.trim() || "A Note from Our Guests";
  const intro = draft.guestbook.sectionIntro.trim();
  const emptyState = draft.guestbook.emptyStateMessage.trim() || "Approved guest messages will appear here soon.";

  return (
    <section className="event-preview-section event-preview-section--guestbook">
      <SectionLabel>Guestbook</SectionLabel>
      <h3>{title}</h3>
      {intro ? <p className="event-preview-copy">{intro}</p> : null}
      {guestbookMessages.length > 0 ? (
        <div className="event-preview-guestbook-stack">
          {guestbookMessages.map((message) => (
            <GuestbookMessageCard key={message.id} message={message} />
          ))}
        </div>
      ) : (
        <div className="event-preview-message-card event-preview-message-card--empty">
          <p>{emptyState}</p>
        </div>
      )}
    </section>
  );
}

function GuestbookMessageCard({ message }: { message: PlatformGuestbookMessage }) {
  const isExpandable = message.message.length > 180 || /\n.{0,}\n/.test(message.message);
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedDate = message.submittedAt ?? message.approvedAt;

  return (
    <article className="event-preview-message-card">
      <div className="event-preview-message-card-inner">
        <span className="event-preview-message-icon" aria-hidden="true">
          <PlatformMessageIcon className="size-4" />
        </span>
        <div className="event-preview-message-body">
          <strong>{message.guestName}</strong>
          <p className={`event-preview-message-text${isExpandable ? " is-expandable" : ""}${isExpanded ? " is-expanded" : ""}`}>
            {message.message}
          </p>
          {isExpandable ? (
            <button
              type="button"
              className="event-preview-message-toggle"
              onClick={() => setIsExpanded((current) => !current)}
            >
              {isExpanded ? "Show less" : "View more"}
            </button>
          ) : null}
          {displayedDate ? <p className="event-preview-message-date">{formatGuestbookDate(displayedDate)}</p> : null}
        </div>
      </div>
    </article>
  );
}

function LoveStorySection({ draft }: { draft: PlatformRenderModel }) {
  const intro = draft.loveStory.sectionIntro.trim();
  const title = draft.loveStory.storyTitle.trim() || "Our Story";
  const body = draft.loveStory.storyBody.trim();

  return (
    <section className="event-preview-section">
      <SectionLabel>Love Story</SectionLabel>
      <h3>Love Story</h3>
      {intro ? <p className="event-preview-copy">{intro}</p> : null}
      <div className="event-preview-story-card">
        <strong>{title}</strong>
        {body ? <p>{body}</p> : null}
      </div>
    </section>
  );
}

function ContactSocialsSection({ draft }: { draft: PlatformRenderModel }) {
  const values = draft.contactSocials;
  const contactPerson = values.contactPerson.trim();
  const contactNumber = values.contactNumber.trim();
  const email = values.email.trim();
  const socialLinks = [
    { label: "Facebook", value: values.facebookUrl.trim() },
    { label: "Instagram", value: values.instagramUrl.trim() },
    { label: "TikTok", value: values.tikTokUrl.trim() }
  ].filter((item) => item.value);
  const brandLine = draft.coupleInfo.displayAs.trim() || "WebSerbisyo RSVP Event";

  return (
    <footer className="event-preview-section event-preview-section--footer">
      <SectionLabel>Contact & Socials</SectionLabel>
      <h3>Need help?</h3>
      <p className="event-preview-copy">
        Reach out if you need help with directions, RSVP details, or event updates.
      </p>
      <div className="event-preview-footer-card">
        {contactPerson ? (
          <span className="event-preview-footer-line">
            <PlatformUsersIcon className="size-4" />
            <span className="event-preview-footer-text">{contactPerson}</span>
          </span>
        ) : null}
        {contactNumber ? (
          <span className="event-preview-footer-line">
            <PlatformPhoneIcon className="size-4" />
            <span className="event-preview-footer-text">{contactNumber}</span>
          </span>
        ) : null}
        {email ? (
          <span className="event-preview-footer-line">
            <PlatformMailIcon className="size-4" />
            <span className="event-preview-footer-text">{email}</span>
          </span>
        ) : null}
      </div>
      {socialLinks.length > 0 ? (
        <div className="event-preview-social-row">
          {socialLinks.map((item) => (
            <a key={item.label} className="event-preview-button event-preview-social-button" href={item.value} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
      <p className="event-preview-footer-brand">{brandLine} - WEBserbisyo RSVP</p>
    </footer>
  );
}

function GiftPreviewMedia({ option }: { option: { imageAlt: string; imageUrl: string; title: string } }) {
  if (!option.imageUrl) {
    return (
      <div className="event-preview-gift-placeholder" aria-hidden="true">
        <PlatformGiftIcon className="size-5" />
      </div>
    );
  }

  return (
    <div className="event-preview-gift-image">
      <img
        src={option.imageUrl}
        alt={option.imageAlt || `${option.title || "Gift option"} image`}
      />
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <span className="event-preview-section-label">{children}</span>;
}

function MajorDivider() {
  return (
    <div className="event-preview-major-divider" aria-hidden="true">
      <span className="event-preview-major-divider-line" />
      <span className="event-preview-major-divider-marker" />
      <span className="event-preview-major-divider-line" />
    </div>
  );
}

function InternalDivider() {
  return <div className="event-preview-internal-divider" aria-hidden="true" />;
}

function buildCountdownItems(eventDate: string, eventTime: string, now: number) {
  const targetTime = parseCountdownTarget(eventDate, eventTime);

  if (targetTime === null) {
    return createZeroCountdownItems();
  }

  const remainingMs = Math.max(0, targetTime - now);
  const totalSeconds = Math.floor(remainingMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    { label: "Days", value: formatCountdownValue(days) },
    { label: "Hours", value: formatCountdownValue(hours) },
    { label: "Minutes", value: formatCountdownValue(minutes) },
    { label: "Seconds", value: formatCountdownValue(seconds) }
  ];
}

function createZeroCountdownItems() {
  return [
    { label: "Days", value: "00" },
    { label: "Hours", value: "00" },
    { label: "Minutes", value: "00" },
    { label: "Seconds", value: "00" }
  ];
}

function parseCountdownTarget(eventDate: string, eventTime: string) {
  const normalizedDate = eventDate.trim();
  const normalizedTime = eventTime.trim();

  if (!normalizedDate) {
    return null;
  }

  const parsedDate = normalizedDate.includes("T")
    ? new Date(normalizedDate)
    : new Date(`${normalizedDate}${normalizedTime ? `T${normalizedTime}` : ""}`);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate.getTime();
}

function formatCountdownValue(value: number) {
  return value.toString().padStart(2, "0");
}

function formatDisplayDate(value: string) {
  const date = parseDate(value);
  if (!date) return value.trim();

  return new Intl.DateTimeFormat("en-PH", {
    dateStyle: "long",
    timeZone: "Asia/Manila"
  }).format(date);
}

function formatDisplayTime(value: string) {
  const date = parseDate(value);
  if (!date) return value.trim();

  return new Intl.DateTimeFormat("en-PH", {
    timeStyle: "short",
    timeZone: "Asia/Manila"
  }).format(date);
}

function formatDisplayDateTime(value: string) {
  const date = parseDate(value);
  if (!date) return "";

  return new Intl.DateTimeFormat("en-PH", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Manila"
  }).format(date);
}

function formatGuestbookDate(value: string | null) {
  const date = parseDate(value ?? "");
  if (!date) return "";

  return new Intl.DateTimeFormat("en-PH", {
    dateStyle: "medium",
    timeZone: "Asia/Manila"
  }).format(date);
}

function parseDate(value: string) {
  const normalized = value.trim();
  if (!normalized) return null;

  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}

function normalizeLineList(value: string): string[] {
  return value
    .split("\n")
    .map((entry) => entry.trim())
    .filter(Boolean);
}
