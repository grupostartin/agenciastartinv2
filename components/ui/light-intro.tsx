"use client";

import { useEffect, useState, useCallback, type ReactNode } from "react";
import "./light-intro.css";

interface LightIntroProps {
  children: ReactNode;
}

export function LightIntro({ children }: LightIntroProps) {
  const [streakClass, setStreakClass] = useState("");
  const [overlayFading, setOverlayFading] = useState(false);
  const [siteRevealed, setSiteRevealed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  const skipIntro = useCallback(() => {
    setSiteRevealed(true);
    setOverlayFading(true);
    setTimeout(() => {
      setIsCompleted(true);
      document.body.style.overflow = "";
    }, 200);
  }, []);

  useEffect(() => {
    // Trava scroll da página durante o efeito
    document.body.style.overflow = "hidden";

    // 1. Inicia o rastro de luz cruzando a tela
    const t1 = setTimeout(() => {
      setStreakClass("fly-in");
    }, 80);

    // 2. Quando o feixe chega no centro, ilumina a marca STARTIN
    const t2 = setTimeout(() => {
      setShowBrand(true);
    }, 1200);

    // 3. Explosão de luz cobrindo e abrindo a tela
    const t3 = setTimeout(() => {
      setStreakClass("explode");
    }, 1400);

    // 4. Durante a expansão da luz, o site emerge no meio
    const t4 = setTimeout(() => {
      setOverlayFading(true);
      setSiteRevealed(true);
    }, 1900);

    // 5. Finaliza e devolve a rolagem
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
      {/* Camada de Introdução */}
      {!isCompleted && (
        <div
          id="intro-overlay"
          className={`startin-intro-overlay ${overlayFading ? "fade-out" : ""}`}
          onClick={skipIntro}
          aria-hidden="true"
        >
          {/* O Rastro e Ponto de Luz */}
          <div className={`startin-light-streak ${streakClass}`} />

          {/* Marca STARTIN no Epicentro */}
          <div className={`startin-intro-brand ${showBrand ? "visible" : ""}`}>
            STARTIN
          </div>

          {/* Atalho discreto para pular */}
          <button
            type="button"
            className="startin-skip-intro"
            onClick={(e) => {
              e.stopPropagation();
              skipIntro();
            }}
          >
            Pular [Esc]
          </button>
        </div>
      )}

      {/* Conteúdo Real do Site que emerge no meio da luz */}
      <div
        id="site-content"
        className={`startin-site-content ${siteRevealed ? "visible" : ""}`}
      >
        {children}
      </div>
    </>
  );
}
