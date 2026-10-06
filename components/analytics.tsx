"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CONSENT_KEY = "startin-cookie-consent";

/**
 * RF09 + LGPD — só carrega GA4 / Meta Pixel se os IDs existirem
 * (NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_META_PIXEL_ID) e após o aceite de cookies.
 */
export function Analytics() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "granted" || saved === "denied") setConsent(saved);
    setReady(true);
  }, []);

  if (!GA_ID && !PIXEL_ID) return null;

  const decide = (value: "granted" | "denied") => {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {consent === "granted" && PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed bottom-6 left-6 right-24 md:right-auto md:max-w-sm z-[70] rounded-3xl border border-white/15 bg-ink/95 backdrop-blur p-5 text-sm text-white"
        >
          <p className="text-gray-300">
            Usamos cookies para medir o desempenho do site.
          </p>
          <div className="mt-4 flex gap-3">
            <button
              id="cookie-accept"
              onClick={() => decide("granted")}
              className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-[1.02] transition-transform"
            >
              Aceitar
            </button>
            <button
              id="cookie-deny"
              onClick={() => decide("denied")}
              className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              Recusar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
