import { useState, useCallback, useEffect, useRef } from "react";

export function useExploreCarousel(totalSlides) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      setCurrentIndex((index + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const onTouchStart = useCallback((e) => {
    if (e.touches && e.touches[0]) {
      touchStartXRef.current = e.touches[0].screenX;
    }
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      if (touchStartXRef.current === null) return;
      if (e.changedTouches && e.changedTouches[0]) {
        const delta = e.changedTouches[0].screenX - touchStartXRef.current;
        if (Math.abs(delta) > 48) {
          if (delta < 0) next();
          else prev();
        }
      }
      touchStartXRef.current = null;
    },
    [next, prev]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return {
    currentIndex,
    goTo,
    next,
    prev,
    touchHandlers: {
      onTouchStart,
      onTouchEnd,
    },
  };
}
