export const clientConfig = {
  mode: "starter",
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
    ]
  },
  footer: {
    text: ""
  },
  sections: {},
  assets: {},
  libs: []
} as const;

export type ClientConfig = typeof clientConfig;
