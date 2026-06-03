import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { EventWebsiteRenderModel } from "@/types/public-event";

type SiteShellProps = {
  event: EventWebsiteRenderModel;
  children: ReactNode;
};

export function SiteShell({ event, children }: SiteShellProps) {
  return (
    <div id="top" className="min-h-screen bg-ivory text-cocoa">
      <SiteHeader event={event} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
