import React, { useState, useEffect } from "react";
import Countdown from "../common/Countdown";

export default function Frame02Hero({ isGateOpen = false }) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If gate is opened or body has invitation-open, trigger slow staggered text reveal
    if (isGateOpen || (typeof document !== "undefined" && document.body.classList.contains("invitation-open"))) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, 240);
      return () => clearTimeout(timer);
    }
  }, [isGateOpen]);

  return (
    <section
      className="frame-layer hero-section relative min-h-screen min-h-[100svh] w-full flex flex-col justify-center items-center text-center overflow-hidden bg-[#FCEBE1] bg-[url('/assets/images/mobile/outline%20mobile.webp')] md:bg-[url('/assets/images/mobile/outline%20tab.webp')] bg-no-repeat bg-[length:100%_100%] bg-center py-8 px-4 sm:py-8 sm:px-4 md:py-14 md:px-6 box-border"
      id="layer-frame-2"
      data-frame-index="2"
      aria-labelledby="hero-title"
    >
      {/* Top Left Flower: Generous scale on mobile, desktop strictly preserved */}
      <div
        className="hero-flower hero-flower-tl animated-flower-tl absolute pointer-events-none z-10 top-0 left-0 w-[clamp(130px,36vw,175px)] md:w-[clamp(200px,24vw,420px)]"
        aria-hidden="true"
      >
        <img
          src="/assets/images/mobile/flower 1.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          className="w-full h-auto block drop-shadow-sm"
        />
      </div>

      {/* Bottom Right Flower: Generous scale on mobile, desktop strictly preserved */}
      <div
        className="hero-flower hero-flower-br animated-flower-br absolute pointer-events-none z-10 bottom-0 right-0 w-[clamp(130px,36vw,175px)] md:w-[clamp(200px,24vw,420px)]"
        aria-hidden="true"
      >
        <img
          src="/assets/images/mobile/flower 1.webp"
          alt=""
          loading="eager"
          className="w-full h-auto block drop-shadow-sm"
        />
      </div>

      {/* Decorative Background Orbits */}
      <div
        className="absolute top-[6%] md:top-[9%] -right-[36%] md:right-[10%] w-[260px] md:w-[360px] h-[260px] md:h-[360px] border border-wine/10 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[3%] md:bottom-[5%] -left-[30%] md:left-[9%] w-[180px] md:w-[220px] h-[180px] md:h-[220px] border border-wine/10 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content - Expanded with Generous Line Spacing on Mobile */}
      <div className="hero-content relative z-20 w-full max-w-[420px] md:max-w-[900px] lg:max-w-[1050px] mx-auto flex flex-col items-center">
        {/* 1. Topline Kicker - Enhanced line space below */}
        <div
          className={`flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 text-wine-2 mb-2.5 sm:mb-2 md:mb-1 transition-all duration-800 ease-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: "100ms" }}
        >

        </div>

        {/* 2. V & S Logo - Enhanced vertical margins on mobile */}
        <div
          className={`relative my-4 sm:my-4 md:my-8 flex items-center justify-center transition-all duration-900 ease-out ${isRevealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90"
            }`}
          style={{ transitionDelay: "280ms" }}
        >
          {/* Rotating Ring 1: Dashed Gold Ring (Clockwise) */}
          <div
            className="absolute -inset-3 sm:-inset-3.5 md:-inset-3.5 border border-dashed border-gold/75 rounded-full animate-ring-rotate pointer-events-none"
            aria-hidden="true"
          />

          {/* Rotating Ring 2: Thin Outer Ring with Two Rings on Edge (Counter-Clockwise) */}
          <div
            className="absolute -inset-5 sm:-inset-6 md:-inset-6 border border-gold/50 rounded-full animate-ring-rotate-reverse pointer-events-none"
            aria-hidden="true"
          >
            {/* Ring 1 on edge of ring line */}
            <span
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-2 md:h-2 rounded-full border border-gold bg-[#FAF4ED] shadow-[0_0_6px_#C5A36B]"
              aria-hidden="true"
            />
            {/* Ring 2 on opposite edge of ring line */}
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-2 md:h-2 rounded-full border border-gold bg-[#FAF4ED] shadow-[0_0_6px_#C5A36B]"
              aria-hidden="true"
            />
          </div>

          {/* Inner Static Gold Ring & Emblem */}
          <div className="relative p-1 sm:p-1.5 md:p-1 rounded-full border-[1.5px] border-gold shadow-[0_0_0_4px_rgba(185,152,88,0.18)] md:shadow-[0_0_0_4px_rgba(185,152,88,0.14)] bg-white/60 backdrop-blur-2xs flex items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-[70px] md:h-[70px] rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/assets/images/mobile/bd_log.webp"
                alt="Bala Murugan & Dhivya Monogram"
                loading="eager"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* 3. Intro - Generous line-height and bottom space on mobile */}
        <p
          className={`m-0 mb-2 sm:mb-1.5 md:mb-1 text-wine/80 font-serif italic text-base sm:text-base md:text-xl leading-relaxed transition-all duration-800 ease-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: "460ms" }}
        >
          A celebration with family and friends
        </p>

        {/* 4. Names - Spacious vertical margin and comfortable line-height on mobile */}
        <h1
          id="hero-title"
          tabIndex="-1"
          className={`flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-1 m-0 my-2.5 sm:my-2 md:my-0 text-wine font-name font-semibold text-[2.4rem] sm:text-[3rem] md:text-[clamp(2.5rem,4.4vw,4.5rem)] lg:text-[clamp(2.8rem,5vw,5.2rem)] leading-[1.08] md:leading-[1.0] tracking-normal focus:outline-none transition-all duration-900 ease-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{ transitionDelay: "640ms" }}
        >
          <span className="whitespace-nowrap">Bala Murugan</span>
          <em className="font-script font-normal text-[0.85em] md:text-[0.72em] text-rose-deep tracking-normal pt-0.5 sm:pt-1 md:pt-2">
            &amp;
          </em>
          <span className="whitespace-nowrap">Dhivya</span>
        </h1>

        {/* 5. Date Block - Generous line space above and below on mobile */}
        <div
          className={`flex items-center justify-center gap-2.5 sm:gap-3 md:gap-5 text-wine my-3.5 sm:my-3 md:my-3 transition-all duration-800 ease-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: "820ms" }}
        >
          <span className="w-12 sm:w-16 md:w-[min(14vw,130px)] h-px bg-gradient-to-r from-transparent to-gold" />
          <div className="flex items-baseline gap-2 sm:gap-2 md:gap-3 leading-relaxed">
            <strong className="font-serif font-bold text-2xl sm:text-2xl md:text-4xl">
              20
            </strong>
            <span className="text-[13px] sm:text-sm md:text-[18px] tracking-[0.2em] font-extrabold text-wine-2">
              NOVEMBER
            </span>
            <strong className="font-serif font-bold text-2xl sm:text-2xl md:text-4xl">
              2026
            </strong>
          </div>
          <span className="w-12 sm:w-16 md:w-[min(14vw,130px)] h-px bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* 6. Day & Venue Info - Enhanced line height & space below on mobile */}
        <p
          className={`my-2 sm:my-2 md:my-2 mb-3.5 sm:mb-3 md:mb-2 text-[15px] sm:text-[17px] md:text-[22px] font-['Times_New_Roman',Times,serif] font-bold tracking-[0.18em] [word-spacing:0.22em] text-wine-2 uppercase leading-[1.8] sm:leading-[1.9] transition-all duration-800 ease-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "1000ms" }}
        >
          FRIDAY <span className="text-gold px-1">·</span> AATHI MAARIAMMAN TEMPLE, SAMAYAPURAM
        </p>

        {/* 7. Countdown Timer - Comfortable margin above and below on mobile */}
        <div
          className={`my-2.5 sm:my-2 md:mt-1.5 md:mb-4 w-full transition-all duration-800 ease-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: "1180ms" }}
        >
          <Countdown targetDate="2026-11-20T04:30:00+05:30" />
        </div>

        {/* 8. Scroll Cue - Ample top clearance on mobile */}
        <div
          className={`transition-all duration-800 ease-out pt-2 sm:pt-1 md:pt-0 ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          style={{ transitionDelay: "1360ms" }}
        >
          <a
            href="#layer-frame-3"
            className="inline-flex items-center gap-2 md:gap-3 mt-3 sm:mt-2.5 md:mt-3 text-wine no-underline text-xs sm:text-sm md:text-[18px] font-extrabold tracking-[0.16em] hover:text-wine-dark transition-all duration-800 ease-out group"
          >
            <span>SCROLL TO EXPLORE</span>
            <i
              className="not-italic text-sm sm:text-base md:text-xl text-gold group-hover:translate-y-1 transition-transform animate-bounce"
              aria-hidden="true"
            >
              ↓
            </i>
          </a>
        </div>
      </div>
    </section>
  );
}
