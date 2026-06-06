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
  navigation: {
    links: [
      { label: "Home", href: "#top" },
      { label: "RSVP", href: "#rsvp" }
    ]
  },
  sections: {},
  assets: {},
  libs: []
} as const;

export type ClientConfig = typeof clientConfig;
