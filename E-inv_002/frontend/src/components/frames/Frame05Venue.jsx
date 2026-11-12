import React, { useState } from "react";
import { weddingData } from "../../data/weddingData";

export default function Frame05Venue() {
  const { venue } = weddingData;
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(venue.fullAddress);
      } else {
        const field = document.createElement("textarea");
        field.value = venue.fullAddress;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      setCopyStatus("Address copied.");
      setTimeout(() => setCopyStatus(""), 2500);
    } catch {
      setCopyStatus("Please select and copy the venue address shown above.");
      setTimeout(() => setCopyStatus(""), 3000);
    }
  };

  return (
    <section
      className="frame-layer venue-section relative min-h-screen min-h-[100svh] w-full flex flex-col justify-center items-center text-center overflow-hidden bg-[#F8E9E9] bg-[url('/assets/images/mobile/mobile%20peacock.webp')] md:bg-[url('/assets/images/mobile/tab%20peacock.webp')] bg-no-repeat bg-[length:100%_100%] bg-center py-4 px-3 sm:py-6 sm:px-4 md:py-8 md:px-6 box-border"
      id="layer-frame-5"
      data-frame-index="5"
      aria-labelledby="venue-title"
    >
      {/* Left Dancing Peacock */}
      <div
        className="venue-peacock venue-peacock-left animated-peacock-left absolute pointer-events-none z-10
  bottom-[-10px] md:bottom-[-25px]
  left-[-15px] sm:left-0 md:left-[1%] lg:left-[3%]
  w-[105px] sm:w-[150px] md:w-[210px] lg:w-[260px] xl:w-[300px]
  max-w-[34vw] drop-shadow-md opacity-85 md:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/assets/images/mobile/Peacock.webp"
          alt=""
          loading="lazy"
          className="w-full h-auto block"
        />
      </div>

      {/* Right Dancing Peacock */}
      <div
        className="venue-peacock venue-peacock-right animated-peacock-right absolute pointer-events-none z-10
  bottom-[-10px] md:bottom-[-25px]
  right-[-15px] sm:right-0 md:right-[1%] lg:right-[3%]
  w-[105px] sm:w-[150px] md:w-[210px] lg:w-[260px] xl:w-[300px]
  max-w-[34vw] drop-shadow-md opacity-85 md:opacity-100"
        aria-hidden="true"
      >
        <img
          src="/assets/images/mobile/Peacock.webp"
          alt=""
          loading="lazy"
          className="w-full h-auto block"
        />
      </div>

      {/* Central Venue Details Card */}
      <div className="venue-card venue-content relative z-20 w-[min(370px,95vw)] md:w-[min(580px,88vw)] mx-auto p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
        {/* Top Decorative SVG */}
        <div className="venue-top-design flex justify-center items-center mb-1 sm:mb-1 text-gold reveal-item reveal-delay-1" aria-hidden="true">
          <svg
            className="w-10 sm:w-10 md:w-14 h-auto block"
            viewBox="0 0 60 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 2L32.8 9.5L40 12.5L32.8 15.5L30 23L27.2 15.5L20 12.5L27.2 9.5L30 2Z" fill="#C5A36B" />
            <circle cx="30" cy="12.5" r="2" fill="#FFF8F0" />
            <path d="M18 12.5C14 8 8 9 5 12.5C8 16 14 17 18 12.5Z" stroke="#C5A36B" strokeWidth="1.2" fill="none" />
            <circle cx="11" cy="12.5" r="1.5" fill="#C5A36B" />
            <circle cx="2" cy="12.5" r="1" fill="#C5A36B" />
            <path d="M42 12.5C46 8 52 9 55 12.5C52 16 46 17 42 12.5Z" stroke="#C5A36B" strokeWidth="1.2" fill="none" />
            <circle cx="49" cy="12.5" r="1.5" fill="#C5A36B" />
            <circle cx="58" cy="12.5" r="1" fill="#C5A36B" />
          </svg>
        </div>

        {/* Section Kicker */}
        <p className="section-kicker m-0 mb-1.5 sm:mb-1 text-wine-2 text-[12px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.18em] font-black md:font-bold uppercase reveal-item reveal-delay-2">
          THE PLACE WE’LL GATHER
        </p>

        {/* Venue Title */}
        <h2
          id="venue-title"
          className="section-title m-0 mb-1 text-wine font-serif font-bold md:font-medium text-[2.2rem] sm:text-[2.4rem] md:text-[clamp(2.4rem,4vw,3.4rem)] leading-[1.1] reveal-item reveal-delay-3"
        >
          {venue.name}
        </h2>

        {/* Venue Tamil Name */}
        <p className="venue-tamil m-0 mb-2 sm:mb-1 text-wine-2 font-tamil font-bold md:font-medium text-[16px] sm:text-sm md:text-[18px] leading-snug reveal-item reveal-delay-4" lang="ta">
          {venue.tamilName}
        </p>

        {/* Venue Rule Divider */}
        <div className="venue-rule flex justify-center items-center my-2 sm:my-1 text-gold w-20 sm:w-16 md:w-24 reveal-item reveal-delay-4" aria-hidden="true">
          <svg className="w-full h-auto block" viewBox="0 0 100 14" fill="none">
            <line x1="2" y1="7" x2="40" y2="7" stroke="#C5A36B" strokeWidth="1" strokeOpacity="0.55" />
            <circle cx="2" cy="7" r="1.3" fill="#C5A36B" />
            <path d="M50 1.5L52.5 5.2L56.5 7L52.5 8.8L50 12.5L47.5 8.8L43.5 7L47.5 5.2L50 1.5Z" fill="#C5A36B" />
            <circle cx="50" cy="7" r="1.2" fill="#FFF8F0" />
            <line x1="60" y1="7" x2="98" y2="7" stroke="#C5A36B" strokeWidth="1" strokeOpacity="0.55" />
            <circle cx="98" cy="7" r="1.3" fill="#C5A36B" />
          </svg>
        </div>

        {/* Address */}
        <address className="not-italic text-wine font-serif text-[14px] sm:text-sm md:text-[18px] leading-[1.7] sm:leading-[1.6] md:leading-[1.75] my-2 sm:mb-3 md:mb-4 reveal-item reveal-delay-5">
          <span lang="ta" className="font-tamil font-bold text-wine-2 text-base sm:text-sm md:text-[18px] block mb-1">
            {venue.tamilStreet}
          </span>
          <span className="block leading-[1.7] space-y-0.5">
            <span className="font-[500] md:font-normal block">{venue.addressLine1}</span>
            <span className="block">{venue.addressLine2}</span>
            <span className="block">{venue.addressLine3}</span>
          </span>
        </address>

        {/* Venue Timings */}
        <div className="venue-events flex items-center justify-center gap-4 sm:gap-4 md:gap-8 my-2.5 sm:my-2 md:my-3 w-full reveal-item reveal-delay-6">
          {venue.receptionTiming && (
            <>
              <div className="venue-event-col flex flex-col items-center">
                <b className="text-[12.5px] sm:text-xs md:text-[20px] tracking-[0.15em] md:tracking-[0.14em] font-black md:font-extrabold text-wine-2 uppercase mb-1 sm:mb-0.5">
                  Reception
                </b>
                <span className="text-[14px] sm:text-sm md:text-[20px] font-serif font-bold text-wine">
                  {venue.receptionTiming}
                </span>
              </div>
              <div className="venue-events-divider w-[1.5px] h-8 sm:h-7 md:h-10 bg-gold/50" aria-hidden="true" />
            </>
          )}
          <div className="venue-event-col flex flex-col items-center">
            <b className="text-[12.5px] sm:text-xs md:text-[20px] tracking-[0.15em] md:tracking-[0.14em] font-black md:font-extrabold text-wine-2 uppercase mb-1 sm:mb-0.5">
              WEDDING
            </b>
            <span className="text-[14px] sm:text-sm md:text-[20px] font-serif font-bold text-wine">
              {venue.weddingTiming}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="venue-actions flex justify-center items-center gap-2.5 sm:gap-2 md:gap-3 my-2 sm:my-1 md:my-2 flex-wrap reveal-item reveal-delay-7">
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark inline-flex items-center gap-1.5 md:gap-2 bg-wine hover:bg-wine-dark text-paper border border-wine rounded-full px-4 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-[12.5px] sm:text-xs md:text-[18px] font-bold tracking-[0.08em] uppercase no-underline shadow-[0_4px_15px_rgba(72,40,61,0.2)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Temple Map</span>
            <span aria-hidden="true">↗</span>
          </a>
          {venue.receptionMapsUrl && (
            <a
              href={venue.receptionMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark inline-flex items-center gap-1.5 md:gap-2 bg-wine hover:bg-wine-dark text-paper border border-wine rounded-full px-4 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-[12.5px] sm:text-xs md:text-[18px] font-bold tracking-[0.08em] uppercase no-underline shadow-[0_4px_15px_rgba(72,40,61,0.2)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Reception Map</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
          <button
            type="button"
            onClick={handleCopyAddress}
            className="button button-light inline-flex items-center gap-1.5 md:gap-2 bg-white/85 hover:bg-white text-wine border border-wine/35 rounded-full px-4 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-[12.5px] sm:text-xs md:text-[18px] font-bold tracking-[0.08em] uppercase cursor-pointer transition-colors"
          >
            {copyStatus ? "Address copied" : "Copy address"}
          </button>
        </div>

        {/* Feedback message */}
        <p className="copy-feedback min-h-[1.2em] text-[12px] sm:text-[13px] md:text-[16px] text-wine my-0.5" role="status" aria-live="polite">
          {copyStatus}
        </p>

        {/* Bottom Decorative SVG */}
        <div className="venue-bottom-design flex justify-center items-center my-1 sm:my-1 text-gold w-28 sm:w-28 md:w-40 reveal-item reveal-delay-8" aria-hidden="true">
          <svg className="w-full h-auto block" viewBox="0 0 170 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="6" y1="11" x2="68" y2="11" stroke="#C5A36B" strokeWidth="1" strokeOpacity="0.6" />
            <circle cx="6" cy="11" r="1.5" fill="#C5A36B" />
            <path d="M68 11C74 7 80 8 85 11C80 14 74 15 68 11Z" stroke="#C5A36B" strokeWidth="1" fill="rgba(197,163,107,0.15)" />
            <path d="M85 2L87.8 7.8L93.5 11L87.8 14.2L85 20L82.2 14.2L76.5 11L82.2 7.8L85 2Z" fill="#C5A36B" />
            <circle cx="85" cy="11" r="2" fill="#FFF8F0" />
            <path d="M102 11C96 7 90 8 85 11C90 14 96 15 102 11Z" stroke="#C5A36B" strokeWidth="1" fill="rgba(197,163,107,0.15)" />
            <line x1="102" y1="11" x2="164" y2="11" stroke="#C5A36B" strokeWidth="1" strokeOpacity="0.6" />
            <circle cx="164" cy="11" r="1.5" fill="#C5A36B" />
          </svg>
        </div>

        <div className="venue-bottom-finial text-gold text-xs sm:text-sm md:text-[18px] mt-0.5 opacity-85 reveal-item reveal-delay-8" aria-hidden="true">
          ❖
        </div>
      </div>
    </section>
  );
}
