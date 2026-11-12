import React from "react";
import { weddingData } from "../../data/weddingData";
import EventScratchCard from "../common/EventScratchCard";

export default function Frame04Events() {
  const { events } = weddingData;
  const wedding = events.find((e) => e.id === "wedding");
  const reception = events.find((e) => e.id === "reception");

  return (
    <section
      className="frame-layer events-section relative min-h-screen min-h-[100svh] w-full flex flex-col justify-center items-center text-center overflow-hidden bg-[#FCEBE1] bg-[url('/assets/images/mobile/the%20celebration%20mobile.webp')] md:bg-[url('/assets/images/mobile/the%20celebration%20tab.webp')] bg-no-repeat bg-[length:100%_100%] bg-center py-5 px-3 sm:py-8 sm:px-4 md:py-16 md:px-6 box-border"
      id="layer-frame-4"
      data-frame-index="4"
      aria-labelledby="events-title"
    >
      {/* Left Hanging Chain */}
      <div
        className="absolute top-[-18px] left-1 sm:left-3 md:left-6 lg:left-12 xl:left-16 z-10 pointer-events-none animate-chain-left"
        aria-hidden="true"
      >
        <img
          src="/assets/images/mobile/chain.webp"
          alt=""
          className="w-[clamp(28px,6vw,85px)] h-[clamp(140px,28vh,390px)] object-contain object-top drop-shadow-lg"
        />
      </div>

      {/* Right Hanging Chain */}
      <div
        className="absolute top-[-25px] right-1 sm:right-3 md:right-6 lg:right-12 xl:right-16 z-10 pointer-events-none animate-chain-right"
        aria-hidden="true"
      >
        <img
          src="/assets/images/mobile/chain.webp"
          alt=""
          className="w-[clamp(40px,9vw,130px)] h-[clamp(200px,44vh,640px)] object-contain object-top drop-shadow-xl"
        />
      </div>

      <div className="section-shell relative z-20 w-full max-w-[1080px] mx-auto">
        {/* Header - Staggered Text Reveal */}
        <header className="section-heading text-center mx-auto mb-3.5 sm:mb-6 md:mb-12">
          <p className="section-kicker m-0 mb-1.5 sm:mb-2 text-[#48283d] md:text-rose-deep text-[0.72rem] sm:text-xs md:text-sm tracking-[0.2em] font-extrabold md:font-bold uppercase reveal-item reveal-delay-1">
            SAVE THE DATE
          </p>
          <h2
            id="events-title"
            className="section-title m-0 text-wine font-serif font-bold md:font-medium text-[2.35rem] sm:text-[2.65rem] md:text-[clamp(2.4rem,5.5vw,4.4rem)] leading-tight tracking-tight reveal-item reveal-delay-2"
          >
            The celebrations
          </h2>
          <p className="section-lead max-w-[620px] mx-auto mt-1.5 sm:mt-2 md:mt-4 text-wine/85 md:text-muted font-serif font-medium text-[0.95rem] sm:text-base md:text-xl leading-relaxed reveal-item reveal-delay-3">
            A sacred gathering, a cherished beginning. Held at Aathi Maariamman Temple, Samayapuram.
          </p>
        </header>

        {/* Event Timeline */}
        <div className="event-timeline w-full max-w-[1080px] mx-auto flex flex-col text-center">
          {/* 1. Wedding Card */}
          {wedding && (
            <article className="event-card event-card-wedding relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2.5 sm:gap-4 md:gap-8 items-center p-4 sm:p-6 md:py-9 md:px-12 bg-gradient-to-r from-[#E8B8C0]/90 to-[#F8E9E9]/95 border-2 border-[#D5A0AC] rounded-2xl shadow-[0_10px_30px_rgba(90,42,55,0.09)] md:shadow-[0_14px_40px_rgba(90,42,55,0.12)] reveal-item reveal-delay-4 text-wine overflow-hidden w-full">
              {/* Subtle ornamental corners */}
              <div className="absolute inset-2 border border-wine/30 rounded-xl pointer-events-none" />
              <div className="absolute top-1.5 left-2.5 text-[12px] text-wine/60 font-serif leading-none select-none">❧</div>
              <div className="absolute top-1.5 right-2.5 text-[12px] text-wine/60 font-serif leading-none select-none -scale-x-100">❧</div>
              <div className="absolute bottom-1.5 left-2.5 text-[12px] text-wine/60 font-serif leading-none select-none -scale-y-100">❧</div>
              <div className="absolute bottom-1.5 right-2.5 text-[12px] text-wine/60 font-serif leading-none select-none -scale-100">❧</div>

              {/* Event Content - Centered */}
              <div className="event-card-content flex flex-col items-center text-center justify-center w-full relative z-10">
                <div className="flex flex-row md:flex-col items-center justify-center gap-2.5 sm:gap-4 md:gap-1 mt-1 mb-2 sm:mb-2 md:my-1 flex-wrap">
                  <h3 className="m-0 text-wine font-serif font-bold text-2xl sm:text-3xl md:text-[2.6rem] leading-tight text-center">
                    {wedding.title}
                  </h3>
                  <span className="md:hidden text-wine/40 font-serif font-bold text-sm" aria-hidden="true">·</span>
                  <p
                    className="event-tamil m-0 text-wine font-tamil font-bold text-base sm:text-lg md:text-2xl text-center tracking-wide"
                    lang="ta"
                  >
                    {wedding.tamilTitle}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 my-2 sm:my-2.5 text-wine/60 select-none" aria-hidden="true">
                  <span className="w-8 sm:w-12 h-px bg-wine/30" />
                  <span className="text-[18px] sm:text-[22px]">✤</span>
                  <span className="w-8 sm:w-12 h-px bg-wine/30" />
                </div>
                <div className="event-facts flex flex-wrap justify-center items-center text-center gap-3 sm:gap-5 md:gap-8 mt-1 sm:mt-2 mb-1 w-full">
                  <span className="flex flex-col items-center text-center">
                    <b className="text-[10px] sm:text-xs md:text-[18px] tracking-[0.18em] font-extrabold text-wine uppercase mb-1">
                      TIME
                    </b>
                    <span className="text-[13px] sm:text-sm md:text-[18px] font-bold text-wine leading-relaxed">
                      {wedding.timeStr}
                    </span>
                  </span>
                  <span className="flex flex-col items-center text-center">
                    <b className="text-[10px] sm:text-xs md:text-[18px] tracking-[0.18em] font-extrabold text-wine uppercase mb-1">
                      VENUE
                    </b>
                    <span className="text-[13px] sm:text-sm md:text-[18px] font-bold text-wine leading-relaxed">
                      {wedding.venueStr}
                    </span>
                  </span>
                </div>
              </div>

              {/* Right Column: Scratch Card */}
              <div className="event-scratch-col flex flex-col items-center justify-center shrink-0 mx-auto md:mx-0 relative z-10">
                <EventScratchCard
                  dayOfWeek={wedding.dayOfWeek}
                  dayNumber={wedding.dayNumber}
                  month={wedding.month}
                  theme="sandal"
                />
              </div>

              <span
                className="event-card-ornament absolute right-3 md:right-6 top-2.5 md:top-4 text-wine text-sm sm:text-base md:text-xl font-bold opacity-60 z-10"
                aria-hidden="true"
              >
                ❖
              </span>
            </article>
          )}

          {/* Timeline Connector */}
          {wedding && reception && (
            <div
              className="timeline-connector h-5 sm:h-7 md:h-11 mx-auto border-l border-gold relative my-0.5 sm:my-1 reveal-item reveal-delay-5"
              aria-hidden="true"
            >
              <span className="block absolute -left-[3px] md:-left-[4px] top-1.5 sm:top-2 md:top-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-gold rounded-full" />
            </div>
          )}

          {/* 2. Reception Card */}
          {reception && (
            <article className="event-card relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2.5 sm:gap-4 md:gap-8 items-center p-4 sm:p-6 md:py-9 md:px-12 bg-[#fffaf5]/95 border-2 border-gold/70 rounded-2xl shadow-[0_10px_30px_rgba(90,42,55,0.08)] md:shadow-[0_14px_40px_rgba(90,42,55,0.1)] reveal-item reveal-delay-6 overflow-hidden w-full">
              {/* Subtle ornamental corners */}
              <div className="absolute inset-2 border border-gold/45 rounded-xl pointer-events-none" />
              <div className="absolute top-1.5 left-2.5 text-[12px] text-gold/70 font-serif leading-none select-none">❧</div>
              <div className="absolute top-1.5 right-2.5 text-[12px] text-gold/70 font-serif leading-none select-none -scale-x-100">❧</div>
              <div className="absolute bottom-1.5 left-2.5 text-[12px] text-gold/70 font-serif leading-none select-none -scale-y-100">❧</div>
              <div className="absolute bottom-1.5 right-2.5 text-[12px] text-gold/70 font-serif leading-none select-none -scale-100">❧</div>

              {/* Event Content - Centered */}
              <div className="event-card-content flex flex-col items-center text-center justify-center w-full relative z-10">
                <div className="flex flex-row md:flex-col items-center justify-center gap-2.5 sm:gap-4 md:gap-1 mt-1 mb-2 sm:mb-2 md:my-1 flex-wrap">
                  <h3 className="m-0 text-wine font-serif font-bold text-2xl sm:text-3xl md:text-[2.6rem] leading-tight text-center">
                    {reception.title}
                  </h3>
                  <span className="md:hidden text-gold/60 font-serif font-bold text-sm" aria-hidden="true">·</span>
                  <p
                    className="event-tamil m-0 text-rose-deep font-tamil font-bold text-base sm:text-lg md:text-2xl text-center tracking-wide"
                    lang="ta"
                  >
                    {reception.tamilTitle}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 my-2 sm:my-2.5 text-gold/75 select-none" aria-hidden="true">
                  <span className="w-8 sm:w-12 h-px bg-gold/50" />
                  <span className="text-[18px] sm:text-[22px]">✤</span>
                  <span className="w-8 sm:w-12 h-px bg-gold/50" />
                </div>

                <div className="event-facts flex flex-wrap justify-center items-center text-center gap-3 sm:gap-5 md:gap-8 mt-1 sm:mt-2 mb-1 w-full">
                  <span className="flex flex-col items-center text-center">
                    <b className="text-[10px] sm:text-xs md:text-[18px] tracking-[0.18em] font-extrabold text-wine-2 uppercase mb-1">
                      DATE
                    </b>
                    <span className="text-[13px] sm:text-sm md:text-[18px] font-bold text-wine leading-relaxed">
                      {reception.timeStr}
                    </span>
                  </span>
                  <span className="flex flex-col items-center text-center">
                    <b className="text-[10px] sm:text-xs md:text-[18px] tracking-[0.18em] font-extrabold text-wine-2 uppercase mb-1">
                      VENUE
                    </b>
                    <span className="text-[13px] sm:text-sm md:text-[18px] font-bold text-wine leading-relaxed max-w-[500px]">
                      {reception.venueStr}
                    </span>
                  </span>
                </div>
              </div>

              {/* Right Column: Scratch Card */}
              <div className="event-scratch-col flex flex-col items-center justify-center shrink-0 mx-auto md:mx-0 relative z-10">
                <EventScratchCard
                  dayOfWeek={reception.dayOfWeek}
                  dayNumber={reception.dayNumber}
                  month={reception.month}
                  theme="pink"
                />
              </div>

              <span
                className="event-card-ornament absolute right-3 md:right-6 top-2.5 md:top-4 text-gold text-sm sm:text-base md:text-xl font-bold opacity-60 z-10"
                aria-hidden="true"
              >
                ❖
              </span>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
