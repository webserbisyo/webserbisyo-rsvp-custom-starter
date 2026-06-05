import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const runtimeDirs = ["src"];
const forbidden = [
  "Tagaytay Garden Classic",
  "Tagaytay",
  "Alex Lisa",
  "Alex & Lisa",
  "alex-lisa",
  "The Garden Hall",
  "Formal garden attire",
  "client-specific default theme"
];
const forbiddenEnvNames = [
  "SUPABASE_SERVICE_ROLE_KEY",
  "DATABASE_URL",
  "RESEND_API_KEY",
  "PAYMENT_PROVIDER_SECRET",
  "ADMIN_SECRET"
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(path));
      continue;
    }
    if (/\.(css|json|mjs|js|jsx|ts|tsx)$/.test(entry.name)) files.push(path);
  }

  return files;
}

const failures = [];

for (const dir of runtimeDirs) {
  for (const file of await walk(join(root, dir))) {
    const content = await readFile(file, "utf8");
    for (const term of forbidden) {
      if (content.includes(term)) failures.push(`${file.replace(`${root}/`, "")}: contains "${term}"`);
    }
    for (const term of forbiddenEnvNames) {
      if (content.includes(term)) failures.push(`${file.replace(`${root}/`, "")}: contains forbidden env name "${term}"`);
    }
  }
}

const appPagePath = join(root, "src", "app", "page.tsx");
const appPage = await readFile(appPagePath, "utf8");

for (const term of ["SiteShell", "SiteHeader", "SiteFooter", "SectionRenderer"]) {
  if (appPage.includes(term)) failures.push(`src/app/page.tsx: default runtime imports or uses ${term}`);
}

for (const pattern of ["sticky top-0", "min-h-[54vh]", "min-h-[60vh]", "bg-terracotta text-white"]) {
  if (appPage.includes(pattern)) failures.push(`src/app/page.tsx: contains landing-page runtime pattern "${pattern}"`);
}

const platformRendererPath = join(root, "src", "components", "platform", "EventWebsiteRenderer.tsx");
const platformRenderer = await readFile(platformRendererPath, "utf8");
const platformIconsPath = join(root, "src", "components", "platform", "platform-icons.tsx");
const platformIcons = await readFile(platformIconsPath, "utf8");

for (const term of ["event-preview-section", "event-preview-section-anchor", "data-preview-section"]) {
  if (!platformRenderer.includes(term)) failures.push(`src/components/platform/EventWebsiteRenderer.tsx: missing ${term}`);
}

if (!platformIcons.includes("lucide-react")) {
  failures.push("src/components/platform/platform-icons.tsx: must own the lucide-react import");
}

if (platformRenderer.includes("lucide-react")) {
  failures.push("src/components/platform/EventWebsiteRenderer.tsx: import icons from platform-icons.tsx, not lucide-react");
}

for (const term of ["PublicRsvpResponseForm", "submitRsvpResponseAction", "onSubmit", "type=\"submit\""]) {
  if (platformRenderer.includes(term)) failures.push(`src/components/platform/EventWebsiteRenderer.tsx: contains direct RSVP submission pattern "${term}"`);
}

for (const term of ["@/server/", "@/server", "server/actions", "server/queries"]) {
  if (platformRenderer.includes(term)) failures.push(`src/components/platform/EventWebsiteRenderer.tsx: contains platform-owned server import pattern "${term}"`);
}

if (failures.length) {
  console.error("Neutral starter guard failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Neutral starter guard passed.");
