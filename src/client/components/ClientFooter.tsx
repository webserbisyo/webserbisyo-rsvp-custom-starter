import type { ClientConfig } from "@/client/client.config";

type ClientFooterProps = {
  config: ClientConfig;
};

export function ClientFooter({ config }: ClientFooterProps) {
  const text = config.footer.text.trim();
  if (!text) return null;

  return (
    <footer>
      <p>{text}</p>
    </footer>
  );
}
