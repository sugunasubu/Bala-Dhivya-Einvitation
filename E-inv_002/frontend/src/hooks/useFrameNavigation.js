import { useState, useEffect } from "react";

export function useFrameNavigation() {
  const [activeFrameId, setActiveFrameId] = useState("layer-frame-2");

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const sections = document.querySelectorAll("section[id^='layer-frame-']");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveFrameId(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeFrameId;
}

