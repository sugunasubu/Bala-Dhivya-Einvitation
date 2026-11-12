import React from "react";

export default function OrnamentDivider({ className = "" }) {
  return (
    <div
      className={`flex items-center justify-center gap-3.5 text-gold my-3.5 mx-auto ${className}`}
      aria-hidden="true"
    >
      <span className="w-16 md:w-20 h-px bg-gradient-to-r from-transparent to-gold" />
      <b className="font-normal text-sm md:text-base">❖</b>
      <span className="w-16 md:w-20 h-px bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}

