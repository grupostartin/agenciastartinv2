"use client";

import { useEffect, useState, useCallback, type ReactNode } from "react";
import "./light-intro.css";

interface LightIntroProps {
  children: ReactNode;
}

export function LightIntro({ children }: LightIntroProps) {
  const [streakClass, setStreakClass] = useState("");
  const [brandState, setBrandState] = useState("");
  const [flareActive, setFlareActive] = useState(false);
  const [shockwaveActive, setShockwaveActive] = useState(false);
  const [overlayFading, setOverlayFading] = useState(false);
  const [siteRevealed, setSiteRevealed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const skipIntro = useCallback(() => {
    setSiteRevealed(true);
    setOverlayFading(true);
    setTimeout(() => {
      setIsCompleted(true);
      document.body.style.overflow = "";
    }, 200);
  }, []);

  useEffect(() => {
    // Respeito à preferência de movimento reduzido
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSiteRevealed(true);
      setIsCompleted(true);
      return;
    }

    // Trava scroll durante a introdução
    document.body.style.overflow = "hidden";

    // Passo 1: Dispara o feixe de luz cortando o espaço
    const t1 = setTimeout(() => {
      setStreakClass("fly-in");
    }, 60);

    // Passo 2: O feixe atinge o centro, acende a marca e o flare
    const t2 = setTimeout(() => {
      setFlareActive(true);
      setBrandState("visible");
    }, 1250);

    // Passo 3: Explosão de luz e onda de choque abrindo o centro
    const t3 = setTimeout(() => {
      setStreakClass("explode");
      setShockwaveActive(true);
      setBrandState("fade");
    }, 1650);

    // Passo 4: O site emerge do centro enquanto a luz dissipa
    const t4 = setTimeout(() => {
      setSiteRevealed(true);
      setOverlayFading(true);
    }, 2050);

    // Passo 5: Conclusão, destrava rolagem e limpa o DOM
    const t5 = setTimeout(() => {
      setIsCompleted(true);
      document.body.style.overflow = "";
    }, 3400);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") skipIntro();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [skipIntro]);

  return (
    <>
      {/* Camada de Introdução Cinematográfica */}
      {!isCompleted && (
        <div
          id="intro-overlay"
          className={`startin-intro-overlay ${overlayFading ? "fade-out" : ""}`}
          onClick={skipIntro}
          aria-hidden="true"
        >
          {/* O Feixe e a Singularidade de Luz */}
          <div className={`startin-light-streak ${streakClass}`} />

          {/* Flash Anamórfico Horizontal */}
          <div className={`startin-flare-line ${flareActive ? "active" : ""}`} />

          {/* Onda de Choque */}
          <div className={`startin-shockwave ${shockwaveActive ? "expand" : ""}`} />

          {/* Marca no Epicentro */}
          <div className={`startin-center-brand ${brandState}`}>
            STARTIN
          </div>

          {/* Atalho para pular */}
          <button
            type="button"
            className="startin-skip-button"
            onClick={(e) => {
              e.stopPropagation();
              skipIntro();
            }}
          >
            Pular intro [Esc]
          </button>
        </div>
      )}

      {/* Conteúdo Real do Site que emerge do centro da luz */}
      <div
        id="site-content"
        className={`startin-site-wrapper ${siteRevealed ? "revealed" : ""}`}
      >
        {children}
      </div>
    </>
  );
}
