import React, { useState, useEffect } from "react";

export default function Frame01Opening({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Trigger smooth staggered text reveal after mount
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Immediately ensure the page underneath is at the top (Frame 2)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setTimeout(
      () => {
        setIsFading(true);
        onOpen?.();
        setTimeout(
          () => {
            setIsDismissed(true);
          },
          reduced ? 50 : 700
        );
      },
      reduced ? 50 : 1100
    );
  };

  if (isDismissed) return null;

  return (
    <section
      className={`fixed inset-0 z-[1000] grid place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_42%,#fff9f4_0%,#f0dadd_62%,#e1bdc5_100%)] transition-opacity duration-700 ${isFading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      id="layer-frame-1"
      aria-label="Open the wedding invitation"
    >
      {/* Outer border lines */}
      <div className="absolute inset-[11px] md:inset-[18px] border border-gold/70 outline outline-1 outline-gold/20 outline-offset-4 md:outline-offset-7 pointer-events-none z-30" />

      {/* Gate Radial Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),transparent_52%)] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Grand Doors Stage */}
      <div
        className="absolute inset-0 grid grid-cols-2 [perspective:1400px] z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Left Door Panel - Smooth parting slide animation */}
        <div
          className="min-w-0 h-full w-full pointer-events-none transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{
            transform: isOpening
              ? "translateX(-101%)"
              : "translateX(0)",
            willChange: "transform",
          }}
        >
          <picture className="w-full h-full block">
            <source
              media="(min-width: 768px)"
              srcSet="/assets/images/mobile/dl_des.webp"
            />
            <img
              src="/assets/images/mobile/dl_mob.webp"
              alt="Left Grand Door"
              fetchPriority="high"
              loading="eager"
              className="w-full h-full [object-fit:fill] block select-none"
            />
          </picture>
        </div>

        {/* Right Door Panel - Smooth parting slide animation */}
        <div
          className="min-w-0 h-full w-full pointer-events-none transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{
            transform: isOpening
              ? "translateX(101%)"
              : "translateX(0)",
            willChange: "transform",
          }}
        >
          <picture className="w-full h-full block">
            <source
              media="(min-width: 768px)"
              srcSet="/assets/images/mobile/dr_des.webp"
            />
            <img
              src="/assets/images/mobile/dr_mob.webp"
              alt="Right Grand Door"
              fetchPriority="high"
              loading="eager"
              className="w-full h-full [object-fit:fill] block select-none"
            />
          </picture>
        </div>
      </div>

      {/* Increased Central CTA invitation card box div with smooth staggered text reveal */}
      <div
        className={`relative z-20 text-center text-wine py-6 sm:py-8 md:py-11 px-5 sm:px-8 md:px-11 w-[min(400px,94vw)] sm:w-[min(460px,92vw)] md:w-full md:max-w-[510px] bg-[#fffaf5]/90 border-2 border-gold/65 rounded-[46%_46%_16px_16px] backdrop-blur-xs shadow-[0_22px_55px_rgba(66,31,42,0.18)] transition-all duration-700 ease-out ${isOpening ? "opacity-0 scale-90 -translate-y-4 pointer-events-none" : "opacity-100 scale-100 translate-y-0"
          }`}
      >
        {/* 1. Top Sparkle */}
        <div
          className={`text-gold text-base md:text-xl transition-all duration-700 ease-out ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={{ transitionDelay: "100ms" }}
          aria-hidden="true"
        >
          ✦
        </div>

        {/* 2. Kicker */}
        <p
          className={`my-1 sm:my-2 md:my-3 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] font-bold text-wine uppercase transition-all duration-700 ease-out ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={{ transitionDelay: "220ms" }}
        >
          WITH JOYFUL HEARTS
        </p>

        {/* 3. Gold Ornament Divider */}
        <div
          className={`flex items-center justify-center gap-2 sm:gap-3 text-gold my-1.5 sm:my-2.5 md:my-3 mx-auto transition-all duration-700 ease-out ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={{ transitionDelay: "340ms" }}
          aria-hidden="true"
        >
          <span className="w-10 sm:w-14 md:w-20 h-px bg-gradient-to-r from-transparent to-gold" />
          <b className="font-normal text-[10px] sm:text-xs md:text-sm">❖</b>
          <span className="w-10 sm:w-14 md:w-20 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* 4. You are invited */}
        <h1
          className={`font-script text-[2.8rem] sm:text-[3.5rem] md:text-[5.8rem] leading-[0.88] my-1 md:my-2 text-[#642638] transition-all duration-800 ease-out ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "480ms" }}
        >
          You are invited
        </h1>

        {/* 5. Subtitle */}
        <p
          className={`m-0 uppercase tracking-[0.16em] text-[11px] sm:text-xs md:text-[14px] p-2.5 sm:p-3 font-semibold text-muted my-1 sm:my-2 transition-all duration-700 ease-out ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={{ transitionDelay: "620ms" }}
        >
          to celebrate the wedding of
        </p>

        {/* 6. Names */}
        <p
          className={`font-name font-semibold text-2xl sm:text-3xl md:text-[2.6rem] leading-tight my-1.5 sm:my-2 md:my-3 text-wine transition-all duration-700 ease-out ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={{ transitionDelay: "760ms" }}
        >
          <span className="whitespace-nowrap">Bala Murugan</span> <i className="font-script font-normal text-[1.3em] text-gold mx-1.5 sm:mx-2">&amp;</i> <span className="whitespace-nowrap">Dhivya</span>
        </p>

        {/* 7. Date & Location */}
        <p
          className={`my-1.5 sm:my-2.5 md:my-4 text-[11px] sm:text-xs md:text-[18px] tracking-[0.12em] uppercase text-wine-2 font-medium leading-snug transition-all duration-700 ease-out ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={{ transitionDelay: "900ms" }}
        >
          20th November 2026 <span className="text-gold px-1">·</span> Trichy
        </p>

        {/* 8. Enhanced Large Gold-Bordered CTA Button */}
        <div
          className={`transition-all duration-700 ease-out ${isReady ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
            }`}
          style={{ transitionDelay: "1040ms" }}
        >
          <button
            id="btn-open-door"
            onClick={handleOpenClick}
            disabled={isOpening}
            type="button"
            className="w-full max-w-[310px] sm:max-w-[370px] md:max-w-[440px] mx-auto grid grid-cols-[auto_1fr_auto] items-center bg-[#3E1624] hover:bg-[#2D101A] text-[#FFFBF5] border-2 border-[#D2B474] rounded-full py-3 sm:py-3.5 md:py-4 px-5 sm:px-7 md:px-9 tracking-[0.2em] uppercase text-xs sm:text-[14px] md:text-[17px] font-bold cursor-pointer shadow-[0_10px_30px_rgba(50,15,25,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 mt-2 sm:mt-3"
          >
            <span className="text-[#E7CF9B] text-sm sm:text-base md:text-xl flex items-center justify-center" aria-hidden="true">
              ✦
            </span>
            <span className="text-center font-bold tracking-[0.2em] px-2">
              OPEN INVITATION
            </span>
            <span className="text-[#E7CF9B] text-base sm:text-lg md:text-2xl font-bold flex items-center justify-center" aria-hidden="true">
              ›
            </span>
          </button>
        </div>

        {/* 9. Tap hint */}
        <p
          className={`text-[10px] sm:text-xs md:text-sm tracking-[0.12em] uppercase mt-2.5 text-wine/75 transition-all duration-700 ease-out ${isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          style={{ transitionDelay: "1180ms" }}
        >
          Tap to begin
        </p>
      </div>

      {/* Gate footer credit */}

    </section>
  );
}
