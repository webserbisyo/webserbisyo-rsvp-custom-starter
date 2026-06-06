import type { ClientAnchorHref } from "@/client/components/client-nav-utils";

export type ClientNavLinkConfig = {
  label: string;
  href: ClientAnchorHref;
};

export type ClientRendererConfig = {
  mode: "platform" | "client";
  allowClientRenderer: boolean;
};

export type ClientConfig = {
  mode: "starter";
  renderer: ClientRendererConfig;
  identity: {
    displayName: string;
    subtitle: string;
  };
  theme: {
    preset: string;
    fonts: {
      heading: string;
      body: string;
    };
    tokens: Record<string, string>;
  };
  layout: {
    navEnabled: boolean;
    footerEnabled: boolean;
  };
  nav: {
    links: readonly ClientNavLinkConfig[];
  };
  footer: {
    text: string;
  };
  sections: Record<string, unknown>;
  assets: Record<string, unknown>;
  libs: readonly string[];
};

export const clientConfig = {
  mode: "starter",
  renderer: {
    mode: "platform",
    allowClientRenderer: false
  } satisfies ClientRendererConfig,
  identity: {
    displayName: "",
    subtitle: ""
  },
  theme: {
    preset: "starter-neutral",
    fonts: {
      heading: "",
      body: ""
    },
    tokens: {}
  },
  layout: {
    navEnabled: false,
    footerEnabled: false
  },
  nav: {
    links: [
      { label: "Home", href: "#top" },
      { label: "RSVP", href: "#rsvp" }
    ] satisfies readonly ClientNavLinkConfig[]
  },
  footer: {
    text: ""
  },
  sections: {},
  assets: {},
  libs: []
} satisfies ClientConfig;
