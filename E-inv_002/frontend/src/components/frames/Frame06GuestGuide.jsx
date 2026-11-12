import React from "react";
import { guestGuideData } from "../../data/guestGuideData";

function GuideIcon({ id }) {
  switch (id) {
    case "madurai-junction":
    case "trichy-junction":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V7h12v4z" />
        </svg>
      );
    case "tirupparankundram-station":
    case "srirangam-station":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M18 10h-2V7h2v3zm-4 0h-4V7h4v3zM8 10H6V7h2v3zm10 5.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-9 0c0 .83-.67 1.5-1.5 1.5S6 16.33 6 15.5 6.67 14 7.5 14s1.5.67 1.5 1.5zm9.5-11.5h-13C4.67 4 4 4.67 4 5.5v10c0 1.93 1.57 3.5 3.5 3.5L6 20.5v.5h12v-.5l-1.5-1.5c1.93 0 3.5-1.57 3.5-3.5v-10c0-.83-.67-1.5-1.5-1.5z" />
        </svg>
      );
    case "madurai-airport":
    case "trichy-airport":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      );
    case "hotels-stays":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
        </svg>
      );
    case "bus-connections":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
        </svg>
      );
    case "taxi-auto":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Frame06GuestGuide() {
  return (
    <section
      className="frame-layer journey-section relative min-h-screen min-h-[100svh] w-full flex flex-col justify-center items-center text-center overflow-hidden bg-[#FCEBE1] bg-[url('/assets/images/mobile/your%20journey%20mobile.webp')] md:bg-[url('/assets/images/mobile/your%20journey%20tab.webp')] bg-no-repeat bg-[length:100%_100%] bg-center py-8 px-4 md:py-16 md:px-6 box-border"
      id="layer-frame-6"
      data-frame-index="6"
      aria-labelledby="journey-title"
    >
      <div className="section-shell relative z-20 w-full max-w-[1040px] mx-auto">
        {/* Header - Staggered Text Reveal */}
        <header className="section-heading text-center mx-auto mb-8 md:mb-12">
          <p className="section-kicker m-0 mb-2.5 text-maroon text-[0.82rem] md:text-[0.98rem] tracking-[0.19em] font-extrabold uppercase reveal-item reveal-delay-1">
            GUEST GUIDE
          </p>
          <h2
            id="journey-title"
            className="section-title m-0 text-wine font-serif font-medium text-[clamp(2.4rem,5.5vw,4.4rem)] leading-tight tracking-tight reveal-item reveal-delay-2"
          >
            Your journey to
            <br />
            <em className="font-script not-italic text-[1.15em] text-rose-deep font-normal">
              the celebration
            </em>
          </h2>
          <p className="section-lead max-w-[620px] mx-auto mt-3 md:mt-4 text-wine/90 font-serif font-bold text-base md:text-xl leading-relaxed reveal-item reveal-delay-3">
            Getting here,{" "}
            <em className="font-script text-[1.4em] text-rose-deep not-italic font-normal">
              made easier.
            </em>{" "}
            Choose a starting point to open a live map or search.
          </p>
        </header>

        {/* 6 Grid Cards - Staggered Reveal */}
        <div className="journey-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-x-6 border-t border-wine/15 text-left">
          {guestGuideData.map((item, index) => {
            const description = item.description || item.desc;
            const linkUrl = item.mapUrl || item.linkUrl;
            const linkText = item.linkText || item.linkLabel || "Open station map";

            return (
              <article
                key={item.id}
                className={`journey-card relative min-h-0 md:min-h-[210px] p-5 md:py-6 md:px-5.5 bg-transparent border-0 border-b border-wine/15 rounded-none transition-colors hover:bg-white/40 reveal-item reveal-delay-${(index % 3) + 2}`}
              >
                {/* Recognizable Category Icon */}
                <span
                  className="journey-icon absolute right-5 top-4 w-10 h-10 md:w-11 md:h-11 grid place-items-center border border-gold/60 rounded-full text-wine bg-white/80 shadow-xs"
                  aria-hidden="true"
                >
                  <GuideIcon id={item.id} />
                </span>

                {/* Bold Category Tag */}
                <span className="journey-category-tag inline-block text-[#48283d] md:text-rose-deep text-[0.72rem] md:text-[0.68rem] font-black md:font-extrabold tracking-[0.2em] md:tracking-[0.19em] uppercase mb-1.5 md:mb-3">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="m-0 mb-1.5 md:mb-2 text-wine font-serif font-bold text-xl md:text-[1.6rem] leading-tight max-w-[80%]">
                  {item.title}
                </h3>

                {/* Description line for each card */}
                {description && (
                  <p className="m-0 mb-3 md:mb-4 text-wine/85 font-sans font-medium text-[12.5px] sm:text-[13px] md:text-sm leading-relaxed max-w-[88%]">
                    {description}
                  </p>
                )}

                {/* Link */}
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journey-link inline-flex items-center gap-1.5 text-wine hover:text-rose-deep text-xs md:text-sm font-extrabold tracking-wide no-underline uppercase transition-colors"
                >
                  <span>{linkText}</span>
                  <span className="text-gold font-bold text-sm" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
