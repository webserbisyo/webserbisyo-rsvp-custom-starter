import type { ReactNode } from "react";
import { ClientFooter } from "@/client/components/ClientFooter";
import { ClientNav } from "@/client/components/ClientNav";
import { clientConfig, type ClientConfig } from "@/client/client.config";

type ClientPageFrameProps = {
  children: ReactNode;
  config?: ClientConfig;
};

export function ClientPageFrame({ children, config }: ClientPageFrameProps) {
  const resolvedConfig = config ?? clientConfig;
  const navEnabled = Boolean(resolvedConfig.layout.navEnabled);
  const footerEnabled = Boolean(resolvedConfig.layout.footerEnabled);

  if (!navEnabled && !footerEnabled) {
    return <>{children}</>;
  }

  return (
    <>
      {navEnabled ? <ClientNav config={resolvedConfig} /> : null}
      {children}
      {footerEnabled ? <ClientFooter config={resolvedConfig} /> : null}
    </>
  );
}
