import React from "react";
import { weddingData } from "../../data/weddingData";

export default function Frame08FamilyDetails() {
  const { groom, bride } = weddingData.couple;
  const hasContacts = Boolean((groom?.contacts?.length > 0) || (bride?.contacts?.length > 0));

  return (
    <section
      className="frame-layer family-section relative min-h-screen min-h-[100svh] w-full flex flex-col justify-center items-center text-center overflow-hidden bg-[#FCEBE1] bg-[url('/assets/images/mobile/last%20pages%20mobile.webp')] md:bg-[url('/assets/images/mobile/last%20pages%20tab.webp')] bg-no-repeat bg-[length:100%_100%] bg-center py-6 px-3.5 sm:py-8 sm:px-4 md:py-16 md:px-6 box-border"
      id="layer-frame-8"
      data-frame-index="8"
      aria-labelledby="family-title"
    >
      <div className="section-shell family-shell relative z-20 w-full max-w-[940px] mx-auto grid grid-cols-1 md:grid-cols-[0.55fr_1.45fr] gap-4 sm:gap-6 md:gap-14 items-center">
        {/* Monogram with Round Frame & Dual Rotating Orbital Rings */}
        <div className="family-monogram relative w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 mx-auto flex items-center justify-center my-2 sm:my-3 md:my-0 reveal-item reveal-delay-1">
          {/* Rotating Ring 1: Outer Dashed Gold Ring (Clockwise) */}
          <div
            className="absolute -inset-2.5 sm:-inset-3.5 md:-inset-5 border border-dashed border-gold/70 rounded-full animate-ring-rotate pointer-events-none"
            aria-hidden="true"
          />

          {/* Rotating Ring 2: Outer Ring Line with Two Rings on Edge (Counter-Clockwise) */}
          <div
            className="absolute -inset-4 sm:-inset-6 md:-inset-8 border border-gold/50 rounded-full animate-ring-rotate-reverse pointer-events-none"
            aria-hidden="true"
          >
            {/* Ring 1 on edge of ring line */}
            <span
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border-2 border-gold bg-[#FAF4ED] shadow-[0_0_8px_rgba(197,163,107,0.6)]"
              aria-hidden="true"
            />
            {/* Ring 2 on opposite edge of ring line */}
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border-2 border-gold bg-[#FAF4ED] shadow-[0_0_8px_rgba(197,163,107,0.6)]"
              aria-hidden="true"
            />
          </div>

          {/* Inner Static Round Gold Frame & Monogram */}
          <div className="relative w-full h-full p-1.5 sm:p-2 md:p-3 rounded-full border border-gold shadow-[0_0_0_4px_rgba(185,152,88,0.14)] md:shadow-[0_0_0_6px_rgba(185,152,88,0.14)] bg-[#FAF4ED]/80 backdrop-blur-xs flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center p-2 sm:p-3 md:p-5">
              <img
                src="/assets/images/mobile/bd_log.webp"
                alt="Balamurugan & Dhivya Monogram"
                loading="lazy"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Family Copy & Contact Details */}
        <div className="family-copy flex flex-col items-center md:items-start text-center md:text-left">
          <h2
            id="family-title"
            className="section-title m-0 text-wine font-serif font-medium text-[2.2rem] sm:text-[2.6rem] md:text-[3.2rem] leading-tight tracking-tight reveal-item reveal-delay-3"
          >
            Thank You
          </h2>
          <p className="font-serif italic text-lg sm:text-sm md:text-[25px] text-wine-2 font-bold leading-[1.85] md:leading-[1.9] tracking-wide max-w-[240px] fsm:max-w-[440px] md:max-w-[640px] mx-auto md:mx-0 my-3 sm:my-4 md:my-5 reveal-item reveal-delay-3">
            Your presence at our wedding is the greatest blessing we could ask for.
            <br className="hidden sm:inline" />{" "}
            We look forward to welcoming you.
          </p>

          {/* White Background Card for Clear Visibility */}
          <div
            className={`family-details-card ${hasContacts
              ? "w-full p-4 sm:p-5 md:p-7"
              : "w-fit max-w-[96vw] py-3 sm:py-3.5 md:py-4 px-4 sm:px-6 md:px-8"
              } mt-2 sm:mt-3 md:mt-4 bg-white/95 backdrop-blur-sm border border-wine/15 rounded-xl md:rounded-2xl shadow-[0_8px_24px_rgba(90,42,55,0.06)] flex items-center justify-center reveal-item reveal-delay-4`}
          >
            {/* Formal Names Line */}
            <div
              className={`family-names flex flex-wrap items-center justify-center text-center gap-2.5 sm:gap-4 md:gap-7 ${hasContacts ? "pb-3 mb-3 md:pb-4 md:mb-4 border-b border-wine/20 w-full" : ""
                }`}
            >
              <span className="flex flex-col items-center text-center">
                <b className="font-name font-bold text-lg sm:text-xl md:text-[24px] text-wine tracking-tight">
                  {groom.formalName}
                </b>
                <small className="text-wine-2 font-sans font-bold text-[13px] sm:text-sm md:text-[18px] tracking-wider uppercase mt-0.5 md:mt-1">
                  {groom.degree}
                </small>
              </span>

              <i className="not-italic text-gold text-base sm:text-base md:text-[20px] font-bold px-1 sm:px-1" aria-hidden="true">
                ✦
              </i>

              <span className="flex flex-col items-center text-center">
                <b className="font-name font-bold text-lg sm:text-xl md:text-[24px] text-wine tracking-tight">
                  {bride.formalName}
                </b>
                <small className="text-wine-2 font-sans font-bold text-[13px] sm:text-sm md:text-[18px] tracking-wider uppercase mt-0.5 md:mt-1">
                  {bride.degree}
                </small>
              </span>
            </div>

            {/* Contact Numbers List */}
            {hasContacts && (
              <div className="family-contact-list grid grid-cols-2 gap-3 sm:gap-4 md:gap-8 pt-1 w-full text-left">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <b className="text-xs sm:text-sm md:text-[18px] font-extrabold tracking-[0.16em] uppercase text-rose-deep">
                    Groom’s side
                  </b>
                  {groom.contacts?.map((contact, i) => (
                    <a
                      key={i}
                      href={`tel:${contact.tel}`}
                      className="text-wine font-sans font-bold text-xs sm:text-sm md:text-[18px] tracking-wide no-underline hover:underline transition-colors"
                    >
                      {contact.label}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-1 sm:gap-2">
                  <b className="text-xs sm:text-sm md:text-[18px] font-extrabold tracking-[0.16em] uppercase text-rose-deep">
                    Bride’s side
                  </b>
                  {bride.contacts?.map((contact, i) => (
                    <a
                      key={i}
                      href={`tel:${contact.tel}`}
                      className="text-wine font-sans font-bold text-xs sm:text-sm md:text-[18px] tracking-wide no-underline hover:underline transition-colors"
                    >
                      {contact.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
