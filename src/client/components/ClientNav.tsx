import { ClientRsvpAnchorLink } from "@/client/components/ClientRsvpAnchorLink";
import type { ClientConfig } from "@/client/client.config";

type ClientNavProps = {
  config: ClientConfig;
};

function isRsvpAnchor(href: string): href is "#rsvp" | "#rsvp-form" {
  return href === "#rsvp" || href === "#rsvp-form";
}

export function ClientNav({ config }: ClientNavProps) {
  const links = config.nav.links;

  if (!links.length) return null;

  return (
    <nav aria-label="Client navigation">
      <ul>
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            {isRsvpAnchor(link.href) ? (
              <ClientRsvpAnchorLink href={link.href}>{link.label}</ClientRsvpAnchorLink>
            ) : (
              <a href={link.href}>{link.label}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
