import type { ReactNode } from "react";
import { ClientFooter } from "@/client/components/ClientFooter";
import { ClientNav } from "@/client/components/ClientNav";
import { clientConfig, type ClientConfig } from "@/client/client.config";
import { ClientEventRenderer } from "@/client/renderer";
import type { EventWebsiteRenderModel } from "@/types/public-event";

type ClientPageFrameProps = {
  children: ReactNode;
  config?: ClientConfig;
  event?: EventWebsiteRenderModel;
};

export function ClientPageFrame({ children, config, event }: ClientPageFrameProps) {
  const resolvedConfig = config ?? clientConfig;
  const { footerEnabled, navEnabled } = resolvedConfig.layout;
  const useClientRenderer = resolvedConfig.renderer.mode === "client" && resolvedConfig.renderer.allowClientRenderer && Boolean(event);
  const content = useClientRenderer && event ? <ClientEventRenderer config={resolvedConfig} event={event} /> : children;

  if (!navEnabled && !footerEnabled) {
    return <>{content}</>;
  }

  return (
    <>
      {navEnabled ? <ClientNav config={resolvedConfig} /> : null}
      {content}
      {footerEnabled ? <ClientFooter config={resolvedConfig} /> : null}
    </>
  );
}
