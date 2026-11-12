import React from "react";
import { useCountdown } from "../../hooks/useCountdown";

export default function Countdown({ targetDate = "2026-11-20T04:30:00+05:30" }) {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(targetDate);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="w-full max-w-[350px] sm:max-w-[420px] md:max-w-[500px] mx-auto" aria-live="polite">
      {/* Label with generous line spacing on mobile */}
      <p className="text-[14px] sm:text-[15px] md:text-[21px] font-['Times_New_Roman',Times,serif] font-bold tracking-[0.18em] [word-spacing:0.22em] text-wine/80 uppercase mb-3 sm:mb-2.5 md:mb-3 leading-[1.8] sm:leading-[1.9]">
        UNTIL THE WEDDING MUHURTHAM
      </p>

      {isComplete ? (
        <p className="text-wine font-serif italic text-lg sm:text-xl md:text-2xl py-1 sm:py-2">Just Married</p>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-2 md:gap-3 my-1 sm:my-0" id="countdown-grid">
          <div className="py-3 sm:py-2 md:py-3.5 px-1 sm:px-1 bg-white/70 backdrop-blur-xs border border-wine/20 rounded-xl md:rounded-lg text-center shadow-xs flex flex-col justify-center">
            <strong className="block font-serif font-bold text-2xl sm:text-xl md:text-3xl leading-tight text-wine">
              {days}
            </strong>
            <span className="block mt-1.5 sm:mt-1 text-[10px] sm:text-[11px] md:text-[18px] tracking-[0.12em] sm:tracking-[0.08em] font-extrabold text-wine-2 uppercase leading-normal">
              DAYS
            </span>
          </div>

          <div className="py-3 sm:py-2 md:py-3.5 px-1 sm:px-1 bg-white/70 backdrop-blur-xs border border-wine/20 rounded-xl md:rounded-lg text-center shadow-xs flex flex-col justify-center">
            <strong className="block font-serif font-bold text-2xl sm:text-xl md:text-3xl leading-tight text-wine">
              {pad(hours)}
            </strong>
            <span className="block mt-1.5 sm:mt-1 text-[10px] sm:text-[11px] md:text-[18px] tracking-[0.12em] sm:tracking-[0.08em] font-extrabold text-wine-2 uppercase leading-normal">
              HOURS
            </span>
          </div>

          <div className="py-3 sm:py-2 md:py-3.5 px-1 sm:px-1 bg-white/70 backdrop-blur-xs border border-wine/20 rounded-xl md:rounded-lg text-center shadow-xs flex flex-col justify-center">
            <strong className="block font-serif font-bold text-2xl sm:text-xl md:text-3xl leading-tight text-wine">
              {pad(minutes)}
            </strong>
            <span className="block mt-1.5 sm:mt-1 text-[10px] sm:text-[11px] md:text-[18px] tracking-[0.12em] sm:tracking-[0.08em] font-extrabold text-wine-2 uppercase leading-normal">
              MINUTES
            </span>
          </div>

          <div className="py-3 sm:py-2 md:py-3.5 px-1 sm:px-1 bg-white/70 backdrop-blur-xs border border-wine/20 rounded-xl md:rounded-lg text-center shadow-xs flex flex-col justify-center">
            <strong className="block font-serif font-bold text-2xl sm:text-xl md:text-3xl leading-tight text-wine">
              {pad(seconds)}
            </strong>
            <span className="block mt-1.5 sm:mt-1 text-[10px] sm:text-[11px] md:text-[18px] tracking-[0.12em] sm:tracking-[0.08em] font-extrabold text-wine-2 uppercase leading-normal">
              SECONDS
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
