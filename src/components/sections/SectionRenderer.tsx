import { weddingSectionRegistry } from "@/config/wedding-section-registry";
import { isWeddingSectionKey, shouldRenderSection } from "@/lib/section-visibility";
import type { EventWebsiteRenderModel, NormalizedSection } from "@/types/public-event";

type SectionRendererProps = {
  event: EventWebsiteRenderModel;
};

function renderSection(event: EventWebsiteRenderModel, section: NormalizedSection) {
  if (!isWeddingSectionKey(section.key)) return null;
  const Component = weddingSectionRegistry[section.key];
  return <Component event={event} section={section} />;
}

export function SectionRenderer({ event }: SectionRendererProps) {
  const visibleSections = event.sections.filter((section) => shouldRenderSection(section, event.source));
  const footerSections = visibleSections.filter((section) => section.key === "contact_socials");
  const mainSections = visibleSections.filter((section) => section.key !== "contact_socials");

  return (
    <>
      {mainSections.map((section, index) => (
        <div key={`${section.key}-${index}`}>{renderSection(event, section)}</div>
      ))}
      {footerSections.map((section, index) => (
        <div key={`${section.key}-${index}`}>{renderSection(event, section)}</div>
      ))}
    </>
  );
}
