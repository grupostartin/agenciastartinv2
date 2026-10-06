"use client";

import type { AnchorHTMLAttributes } from "react";
import { getWhatsappLink } from "@/lib/constants";
import { trackWhatsappClick } from "@/lib/analytics";

interface WhatsappLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Nome do serviço usado na mensagem pré-preenchida. */
  service?: string;
  /** Identificador do CTA para o rastreamento (ex.: "hero", "navbar"). */
  source: string;
}

export function WhatsappLink({ service, source, onClick, children, ...props }: WhatsappLinkProps) {
  return (
    <a
      href={getWhatsappLink(service)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackWhatsappClick(source, service);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
