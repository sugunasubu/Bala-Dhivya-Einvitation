import React, { useEffect } from "react";

export default function ImageLightbox({ isOpen, onClose, imageSrc, imageAlt, caption }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-wine/75 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Landmark photograph"
    >
      <div
        className="relative max-w-[min(92vw,1080px)] max-h-[90vh] bg-paper border border-gold rounded-xl p-5 md:p-6 shadow-2xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-3 w-9 h-9 md:w-10 md:h-10 rounded-full border border-wine/25 bg-paper text-wine text-2xl flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
          onClick={onClose}
          type="button"
          aria-label="Close photograph"
        >
          ×
        </button>

        <img
          src={imageSrc}
          alt={imageAlt || ""}
          className="max-w-[min(84vw,1040px)] max-h-[74vh] object-contain rounded-md"
        />

        {caption && (
          <p className="mt-3 text-xs md:text-sm text-wine-2 text-center self-stretch">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}

