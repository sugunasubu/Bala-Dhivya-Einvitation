import React, { useEffect } from "react";
import AmbientCanvas from "../common/AmbientCanvas";
import ScrollPlane from "../common/ScrollPlane";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function InvitationLayout({ children }) {
  useScrollReveal();

  useEffect(() => {
    // Custom fine-pointer cursor glow
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isFinePointer || reducedMotion) return;

    const cursor = document.createElement("div");
    cursor.className = "cursor-glow fixed left-0 top-0 w-[34px] h-[34px] border border-[#b99858]/50 rounded-full pointer-events-none z-[1200] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200";
    document.body.appendChild(cursor);

    const onPointerMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = "0.7";
    };

    const onPointerLeave = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      cursor.remove();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-paper text-wine font-sans antialiased selection:bg-rose selection:text-wine overflow-x-hidden">
      {/* Floating Canvas Petals & Sparkles */}
      <AmbientCanvas />

      {/* Trailing Scroll Paper Plane */}
      <ScrollPlane />

      {/* Main Content Frames */}
      <main className="app-container relative z-10 w-full" id="top">
        <div className="frame-transition-container w-full" id="frame-container">
          {children}
        </div>
      </main>
    </div>
  );
}

