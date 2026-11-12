import React, { useState } from "react";
import { explorePlacesData } from "../../data/explorePlacesData";
import { useExploreCarousel } from "../../hooks/useExploreCarousel";
import ImageLightbox from "../common/ImageLightbox";

export default function Frame07ExploreMadurai() {
  const { currentIndex, goTo, next, prev, touchHandlers } = useExploreCarousel(explorePlacesData.length);
  const [lightboxData, setLightboxData] = useState(null);
  const [shareFeedback, setShareFeedback] = useState("");

  const currentPlace = explorePlacesData[currentIndex];
  const mobileOffsetX = currentPlace.mobileImageOffsetX || 0;
  const mobileLeft = mobileOffsetX < 0 ? `${mobileOffsetX}px` : "0px";
  const mobileWidth = mobileOffsetX !== 0 ? `calc(100% + ${Math.abs(mobileOffsetX)}px)` : "100%";

  const handleOpenLightbox = (place) => {
    let caption = place.title;
    if (place.attribution) {
      caption += ` — Photo: ${place.attribution.author} (${place.attribution.licenseText})`;
    }
    setLightboxData({
      src: place.image,
      alt: place.alt,
      caption,
    });
  };

  const handleShareInvite = async () => {
    const inviteText =
      "You are invited to celebrate the Wedding & Reception of Bala Murugan & Dhivya at Aathi Maariamman Temple and Hotel S President, Samayapuram on Friday, 20 November 2026.";
    const shareUrl = window.location.href.split("#")[0];

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Bala Murugan & Dhivya — Wedding Invitation",
          text: inviteText,
          url: shareUrl,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          fallbackCopy(`${inviteText} ${shareUrl}`);
        }
      }
    } else {
      fallbackCopy(`${inviteText} ${shareUrl}`);
    }
  };

  const fallbackCopy = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const field = document.createElement("textarea");
        field.value = text;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      setShareFeedback("Invitation copied");
      setTimeout(() => setShareFeedback(""), 2200);
    } catch {
      // Ignored
    }
  };

  const handleWhatsAppShare = () => {
    const inviteText =
      "You are invited to celebrate the Wedding & Reception of Bala Murugan & Dhivya at Aathi Maariamman Temple and Hotel S President, Samayapuram on Friday, 20 November 2026.";
    const shareUrl = window.location.href.split("#")[0];
    const text = `${inviteText} ${shareUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="frame-layer explore-section relative py-16 md:py-24 px-4 md:px-8 bg-[#f4e6e3] overflow-hidden"
      id="layer-frame-7"
      data-frame-index="7"
      aria-labelledby="explore-title"
    >
      {/* Dynamic atmospheric backgrounds corresponding to each slide's landmark image */}
      {explorePlacesData.map((place, idx) => (
        <div
          key={place.id}
          className={`absolute inset-0 bg-cover
      scale-105
      transition-opacity duration-1000 ease-in-out
      pointer-events-none
      [background-position:var(--bg-pos)] md:[background-position:center]
      ${idx === currentIndex ? "opacity-[0.10] md:opacity-[0.5]" : "opacity-0"}
    `}
          style={{
            backgroundImage: `url('${place.image}')`,
            "--bg-pos": place.mobilePosition || "center",
          }}
          aria-hidden="true"
        />
      ))}

      {/* Gentle gradient wash overlay to preserve high readability and contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0]/75 via-[#FFF8F0]/55 to-[#FFF8F0]/80 pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-shell explore-shell relative z-10 w-full max-w-[1160px] mx-auto">
        {/* Header - Staggered Text Reveal */}
        <header className="section-heading text-center mx-auto mb-8 md:mb-12">
          <p className="section-kicker m-0 mb-2.5 text-[0.62rem] md:text-[0.68rem] tracking-[0.19em] font-bold text-gray-900 uppercase reveal-item reveal-delay-1">
            YOUR GUEST GUIDE · WHILE YOU ARE HERE
          </p>
          <h2
            id="explore-title"
            className="section-title m-0 text-wine font-serif font-medium text-[clamp(2.4rem,5.5vw,4.4rem)] leading-tight tracking-tight reveal-item reveal-delay-2"
          >
            Explore Trichy
          </h2>
          <p className="section-lead max-w-[620px] mx-auto mt-3 md:mt-4 text-muted font-serif font-medium text-base md:text-xl text-gray-800 leading-relaxed reveal-item reveal-delay-3">
            Discover the region's celebrated temples, architecture and heritage.
          </p>
        </header>

        {/* Showcase Carousel Wrapper */}
        <div className="explore-showcase-wrapper relative grid grid-cols-[34px_minmax(0,1fr)_34px] md:grid-cols-[52px_minmax(0,1fr)_52px] items-center gap-2 md:gap-4 reveal-item reveal-delay-4">
          {/* Previous Button */}
          <button
            onClick={prev}
            type="button"
            className="explore-nav-btn prev w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border border-wine/25 rounded-full bg-[#fffaf5]/90 text-wine text-base md:text-xl cursor-pointer hover:bg-white hover:scale-105 transition-all shadow-xs"
            aria-label="Previous place"
          >
            ←
          </button>

          {/* Carousel Deck */}
          <div
            className="explore-deck min-w-0 overflow-hidden rounded-xl bg-[#fffaf5] border border-wine/15 shadow-[0_18px_50px_rgba(66,31,42,0.12)]"
            id="explore-deck"
            aria-live="polite"
            {...touchHandlers}
          >
            <article className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] min-h-0 md:min-h-[365px] animate-fadeIn">
              {/* Photo Column */}
              <figure className="explore-photo-col relative m-0 min-h-[220px] md:min-h-[365px] aspect-[16/10] md:aspect-auto overflow-hidden bg-[#ead9d3]">
                <img
                  src={currentPlace.image}
                  alt={currentPlace.alt}
                  onClick={() => handleOpenLightbox(currentPlace)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Enlarge ${currentPlace.title} photograph`}
                  loading="lazy"
                  className="explore-photo absolute top-0 bottom-0 h-full object-cover left-[var(--mobile-left)] md:left-0 w-[var(--mobile-width)] md:w-full [object-position:var(--img-pos)] md:[object-position:var(--desktop-img-pos)] md:object-center cursor-zoom-in hover:scale-105 transition-transform duration-500"
                  style={{
                    "--mobile-left": mobileLeft,
                    "--mobile-width": mobileWidth,
                    "--img-pos": currentPlace.mobileImagePosition || currentPlace.mobilePosition || "center",
                    "--desktop-img-pos": currentPlace.desktopImagePosition || "center",
                    "--img-offset-x": `${mobileOffsetX}px`,
                  }}
                />

                {currentPlace.attribution && (
                  <figcaption className="absolute left-0 right-0 bottom-0 p-2 md:py-2 md:px-3 bg-black/75 text-white text-[0.57rem] leading-snug">
                    Photo: {currentPlace.attribution.author} ·{" "}
                    <a
                      href={currentPlace.attribution.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f4dca5] hover:underline"
                    >
                      {currentPlace.attribution.licenseText}
                    </a>{" "}
                    ·{" "}
                    <a
                      href={currentPlace.attribution.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f4dca5] hover:underline"
                    >
                      Source
                    </a>
                  </figcaption>
                )}
              </figure>

              {/* Info Column */}
              <div className="explore-info-col flex flex-col justify-center items-center md:items-start p-6 md:p-10 text-center md:text-left">
                <span className="explore-number text-rose-deep text-[0.61rem] font-bold tracking-[0.2em] uppercase">
                  {currentPlace.number}
                </span>

                <h3 className="my-2.5 md:my-3 text-wine font-serif font-semibold text-2xl md:text-[clamp(1.9rem,3.5vw,2.8rem)] leading-tight">
                  {currentPlace.title}
                </h3>

                <p className="m-0 mb-5 md:mb-6 text-muted font-serif font-medium text-sm md:text-[1.05rem] leading-relaxed">
                  {currentPlace.description}
                </p>

                <a
                  href={currentPlace.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-explore-maps inline-flex items-center gap-2 text-wine no-underline uppercase text-[0.65rem] font-bold tracking-[0.1em] border-b border-gold pb-1 hover:text-wine-dark transition-colors"
                >
                  <span>Explore on maps</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            type="button"
            className="explore-nav-btn next w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border border-wine/25 rounded-full bg-[#fffaf5]/90 text-wine text-base md:text-xl cursor-pointer hover:bg-white hover:scale-105 transition-all shadow-xs"
            aria-label="Next place"
          >
            →
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="explore-pagination flex justify-center gap-2 mt-5 md:mt-6" aria-label="Choose a place">
          {explorePlacesData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer p-0 border-0 ${idx === currentIndex ? "w-6 bg-wine" : "w-2 bg-wine/25 hover:bg-wine/40"
                }`}
              aria-label={`Show place ${idx + 1} of ${explorePlacesData.length}`}
              aria-current={idx === currentIndex ? "true" : "false"}
            />
          ))}
        </div>

        {/* Share Action Buttons */}
        <div className="explore-share-actions flex justify-center items-center gap-3 mt-6 flex-wrap">
          <button
            type="button"
            onClick={handleShareInvite}
            className="button button-dark inline-flex items-center gap-2 bg-wine hover:bg-wine-dark text-paper border border-wine rounded-full px-5 py-3 text-xs font-bold tracking-wider uppercase cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{shareFeedback ? shareFeedback : "Share invitation"}</span>
            <span aria-hidden="true">↗</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="button button-light inline-flex items-center gap-2 bg-transparent hover:bg-white/60 text-wine border border-wine/35 rounded-full px-5 py-3 text-xs font-bold tracking-wider uppercase cursor-pointer transition-colors"
          >
            Share on WhatsApp
          </button>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={Boolean(lightboxData)}
        onClose={() => setLightboxData(null)}
        imageSrc={lightboxData?.src || ""}
        imageAlt={lightboxData?.alt || ""}
        caption={lightboxData?.caption || ""}
      />
    </section>
  );
}
