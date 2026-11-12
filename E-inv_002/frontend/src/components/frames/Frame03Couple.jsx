import React from "react";
import { weddingData } from "../../data/weddingData";

export default function Frame03Couple() {
  const { groom, bride } = weddingData.couple;

  return (
    <section
      className="frame-layer couple-section relative min-h-screen min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#FCEBE1] bg-[url('/assets/images/mobile/A%20day%20remember%202.webp')] md:bg-[url('/assets/images/mobile/A%20day%20remember.webp')] bg-no-repeat bg-[length:100%_100%] bg-center pt-4 pb-10 sm:pb-16 md:py-16 px-3 sm:px-4 md:px-10 box-border"
      id="layer-frame-3"
      data-frame-index="3"
      aria-labelledby="couple-title"
    >
      {/* Left Side Bottom Corner Flower */}
      <div
        className="couple-flower couple-flower-bl animated-flower-bl absolute pointer-events-none z-10 bottom-0 left-0 w-[clamp(175px,46vw,260px)] md:w-[clamp(280px,30vw,500px)] origin-bottom-left"
        aria-hidden="true"
      >
        <img
          src="/assets/images/mobile/flower_02.webp"
          alt=""
          loading="lazy"
          className="w-full h-auto block drop-shadow-md"
        />
      </div>

      {/* Top Right Corner Flower */}
      <div
        className="couple-flower couple-flower-tr animated-flower-tr absolute pointer-events-none z-10 top-0 right-[-15px] sm:right-[-25px] md:right-[-50px] w-[clamp(165px,45vw,250px)] md:w-[clamp(270px,28vw,460px)] origin-top-right"
        aria-hidden="true"
      >
        <img
          src="/assets/images/mobile/flower_02.webp"
          alt=""
          loading="lazy"
          className="w-full h-auto block drop-shadow-md -scale-x-100"
        />
      </div>

      <div className="section-shell relative z-20 w-full max-w-[1120px] mx-auto">
        {/* ========================================================
            MOBILE VIEW ONLY (< md): Matches Reference Image 2
            ======================================================== */}
        <div className="md:hidden flex flex-col items-center justify-center text-center w-full max-w-[380px] mx-auto py-2">
          {/* Top Crown/Tiara Ornament */}
          <div className="w-14 h-4 mx-auto mb-1.5 flex items-center justify-center text-gold/85 drop-shadow-[0_1px_2px_rgba(202,159,90,0.3)]">
            <svg viewBox="0 0 48 16" fill="currentColor" className="w-full h-full">
              <path d="M24 1L27.5 7L33.5 4L31 11H17L14.5 4L20.5 7L24 1Z" />
              <circle cx="24" cy="1.5" r="1.3" />
              <circle cx="33.5" cy="4" r="1.1" />
              <circle cx="14.5" cy="4" r="1.1" />
            </svg>
          </div>

          {/* Portrait in Arched Frame */}
          <div className="couple-art-wrap relative w-[min(280px,76vw)] mx-auto flex flex-col items-center justify-center reveal-item reveal-delay-1">
            <div className="couple-art-frame relative w-full aspect-[4/5] overflow-hidden rounded-[48%_48%_8px_8px] bg-gradient-to-br from-[#f7e5df] to-[#f2d2d2] shadow-[0_18px_40px_rgba(97,41,58,0.18)] border-2 border-gold/45">
              {/* Inner frame border */}
              <div className="absolute inset-[10px] border border-gold/80 rounded-[48%_48%_4px_4px] pointer-events-none z-10" />
              <img
                src="/assets/images/mobile/original image.webp"
                alt={`Portrait of groom ${groom.name} and bride ${bride.name}`}
                loading="lazy"
                className="w-full h-full object-cover object-[center_top] block"
              />
            </div>
            {/* Caption with accent rules */}
            <div className="art-caption flex items-center justify-center gap-2.5 mt-3 mb-2.5 text-wine-2 font-serif italic text-xs sm:text-[13px] tracking-wide">
              <span className="w-7 h-px bg-gold/70" />
              <span className="text-[9px] text-gold">◆</span>
              <span>A joyful beginning</span>
              <span className="text-[9px] text-gold">◆</span>
              <span className="w-7 h-px bg-gold/70" />
            </div>
          </div>

          {/* Kicker */}

          {/* Stacked Large Names Headline */}
          <div className="flex flex-col items-center justify-center my-1 reveal-item reveal-delay-3">
            <span className="font-name font-bold text-[2.5rem] sm:text-[3.1rem] leading-[1.02] text-wine tracking-tight whitespace-nowrap">
              {groom.name}
            </span>
            <span className="font-script text-[2.2rem] sm:text-[2.6rem] leading-none text-rose-deep font-normal my-0.5" aria-hidden="true">
              &amp;
            </span>
            <span className="font-name font-bold text-[2.5rem] sm:text-[3.1rem] leading-[1.02] text-wine tracking-tight whitespace-nowrap">
              {bride.name.replace(/^Dr\.\s*/, "")}
            </span>
          </div>

          {/* Date Line with generous spacing */}
          <div className="flex items-center justify-center gap-2 text-wine mt-3 mb-2.5 reveal-item reveal-delay-4">
            <span className="w-8 h-px bg-gold/70" />
            <span className="text-[8px] text-gold">◆</span>
            <strong className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.2em] uppercase text-wine">
              20 NOVEMBER 2026
            </strong>
            <span className="text-[8px] text-gold">◆</span>
            <span className="w-8 h-px bg-gold/70" />
          </div>

          {/* Invitation Lead Paragraph */}
          <p className="font-serif italic text-lg sm:text-xl font-bold text-wine/85 max-w-[400px] mx-auto my-2.5 leading-[1.65] reveal-item reveal-delay-5">
            You are warmly invited to join Bala Murugan and Dhivya
            <br />
            as they begin their life together in Trichy.
          </p>

          {/* Action Button */}
          <div className="reveal-item reveal-delay-6 mt-3 mb-3">
            <a
              href="#layer-frame-4"
              className="w-[min(290px,85vw)] inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-white/95 hover:bg-white text-wine text-[0.76rem] sm:text-[0.82rem] font-extrabold tracking-[0.14em] uppercase border border-gold/80 shadow-[0_2px_8px_rgba(202,159,90,0.18)] hover:shadow-md transition-all"
            >
              <span>VIEW THE CELEBRATION SCHEDULE</span>
              <span className="text-gold font-bold text-sm" aria-hidden="true">
                ›
              </span>
            </a>
          </div>
        </div>

        {/* ========================================================
            DESKTOP VIEW ONLY (md: and up): 100% Preserved & Untouched
            ======================================================== */}
        <div className="hidden md:grid couple-layout grid-cols-[minmax(280px,0.85fr)_minmax(340px,1.15fr)] items-center justify-center gap-[clamp(30px,5vw,70px)] w-full text-left">
          {/* Left Column: Portrait */}
          <div className="couple-art-wrap relative w-full max-w-[370px] mx-auto mt-[clamp(65px,12vh,120px)] flex flex-col items-center justify-center reveal-item reveal-delay-1">
            <div className="couple-art-frame relative w-full aspect-[4/5] overflow-hidden rounded-[48%_48%_8px_8px] bg-gradient-to-br from-[#f7e5df] to-[#f2d2d2] shadow-[0_18px_45px_rgba(97,41,58,0.14)]">
              {/* Inner frame border */}
              <div className="absolute inset-[18px] border border-gold/70 rounded-[48%_48%_4px_4px] pointer-events-none z-10" />
              <img
                src="/assets/images/mobile/original image.webp"
                alt={`Portrait of groom ${groom.name} and bride ${bride.name}`}
                loading="lazy"
                className="w-full h-full object-cover object-[center_top] block"
              />
            </div>
            <span className="art-caption block text-center mt-3.5 font-serif italic text-[1.08rem] text-wine-2">
              A joyful beginning
            </span>
          </div>

          {/* Right Column: Copy & Details - Staggered text reveal one by one */}
          <div className="couple-copy flex flex-col items-start justify-center text-left w-full pt-6">
            {/* 1. Kicker */}
            <p className="section-kicker m-0 mb-2.5 text-rose-deep text-[0.65rem] tracking-[0.18em] font-bold uppercase reveal-item reveal-delay-2">
              TWO FAMILIES · ONE CELEBRATION
            </p>

            {/* 2. Title */}
            <h2
              id="couple-title"
              className="section-title m-0 mb-4 text-wine font-serif font-medium text-[clamp(1.9rem,4vw,3.6rem)] leading-[1.08] reveal-item reveal-delay-3"
            >
              A day to
              <br />
              <em className="font-script not-italic text-[1.15em] text-rose-deep font-normal">
                remember
              </em>
            </h2>

            {/* 3. Lead Paragraph */}
            <p className="section-lead m-0 mb-6 text-muted font-serif font-medium text-[1.18rem] leading-[1.45] max-w-[520px] reveal-item reveal-delay-4">
              You are warmly invited to join Bala Murugan and Dhivya as they begin their life together in Trichy.
            </p>

            {/* 4. Groom and Bride Name Card */}
            <div className="name-card grid grid-cols-[1fr_auto_1fr] items-center text-center gap-3.5 p-5 mb-6 bg-white/90 backdrop-blur-xs border border-wine/15 rounded-xl shadow-xs w-full max-w-[460px] reveal-item reveal-delay-5">
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-[0.58rem] tracking-[0.17em] font-bold text-rose-deep uppercase">
                  GROOM
                </span>
                <strong className="font-name font-semibold text-2xl text-wine">
                  {groom.name}
                </strong>
                <small className="text-[0.7rem] leading-snug text-muted font-sans">
                  <span className="text-[18px] text-wine-2 font-bold">{groom.degree}</span>
                </small>
              </div>

              {/* Center Divider */}
              <b
                className="name-card-divider font-script text-2xl font-normal text-gold px-2"
                aria-hidden="true"
              >
                &amp;
              </b>

              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-[0.58rem] tracking-[0.17em] font-bold text-rose-deep uppercase">
                  BRIDE
                </span>
                <strong className="font-name font-semibold text-2xl text-wine">
                  {bride.name}
                </strong>
                <small className="text-[0.7rem] leading-snug text-muted font-sans">
                  <span className="text-[18px] text-wine-2 font-bold">{bride.degree}</span>
                </small>
              </div>
            </div>

            {/* 5. Link to celebrations */}
            <div className="reveal-item reveal-delay-6 self-start">
              <a
                href="#layer-frame-4"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-wine text-[0.84rem] font-bold border border-gold/70 shadow-sm hover:text-rose-deep transition-all mb-2"
              >
                <span>View the celebration schedule</span>
                <span className="text-gold text-base" aria-hidden="true">
                  ↘
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
