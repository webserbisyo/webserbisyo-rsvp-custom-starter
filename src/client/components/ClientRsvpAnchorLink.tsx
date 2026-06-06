import type { ReactNode } from "react";

type ClientRsvpAnchorHref = "#rsvp" | "#rsvp-form";

type ClientRsvpAnchorLinkProps = {
  children: ReactNode;
  className?: string;
  href?: ClientRsvpAnchorHref;
};

export function ClientRsvpAnchorLink({
  children,
  className,
  href = "#rsvp"
}: ClientRsvpAnchorLinkProps) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
