type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;
type Fbq = (command: "track" | "trackCustom", name: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    fbq?: Fbq;
  }
}

/** RF09 — dispara eventos no GA4 / Meta Pixel quando estiverem carregados. */
export function trackWhatsappClick(source: string, service?: string) {
  if (typeof window === "undefined") return;
  const params = { source, service: service ?? "geral" };
  window.gtag?.("event", "whatsapp_click", params);
  window.fbq?.("track", "Contact", params);
}
