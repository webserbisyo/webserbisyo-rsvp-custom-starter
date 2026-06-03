import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "WebSerbisyo RSVP Event",
  description: "A public event website powered by WebSerbisyo RSVP."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
