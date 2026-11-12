import React, { useEffect, useRef, useState, useCallback } from "react";

export default function ScrollPlane() {
  const planeRef = useRef(null);
  const pathRef = useRef(null);
  const [manualGlow, setManualGlow] = useState(false);
  const [planeAtEnd, setPlaneAtEnd] = useState(false);

  // Heart glows if touched/clicked OR when the plane touches it near the end
  const isGlowing = manualGlow || planeAtEnd;

  // Touch / Click handler for the heart
  const handleHeartTouch = useCallback(() => {
    setManualGlow(true);
    // Keep bright glow active for 3.5s then smoothly fade
    setTimeout(() => {
      setManualGlow(false);
    }, 3500);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const plane = planeRef.current;
    const path = pathRef.current;
    if (!plane || !path) return;

    const pathLength = path.getTotalLength();
    let queued = false;

    const updatePosition = () => {
      queued = false;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      const distance = pathLength * progress;

      // When plane reaches near the end of the trail (plane touches the heart)
      if (progress >= 0.88) {
        setPlaneAtEnd(true);
      } else {
        setPlaneAtEnd(false);
      }

      const point = path.getPointAtLength(distance);
      // Sample slightly ahead and behind for smooth tangent angle
      const delta = 2.5;
      const p1 = path.getPointAtLength(Math.max(0, distance - delta));
      const p2 = path.getPointAtLength(Math.min(pathLength, distance + delta));
      const angle = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;

      plane.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle})`);
    };

    const handleScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updatePosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <svg
      id="scroll-plane-svg"
      className="fixed z-20 right-0 sm:right-2 md:right-4 top-[12vh] w-24 sm:w-32 md:w-44 lg:w-56 h-[72vh] md:h-[78vh] pointer-events-none text-gold overflow-visible"
      viewBox="0 0 160 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Radiant Heart Glow Filter */}
        <filter id="heart-bright-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" result="blur1" />
          <feGaussianBlur stdDeviation="12" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Radial gradient for glowing burst */}
        <radialGradient id="heart-burst-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF0F5" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#FF69B4" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#FF1493" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FF1493" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Dotted S-Shaped Flight Trail (Sweeps Left & Right) */}
      <path
        ref={pathRef}
        id="scroll-plane-path"
        className="fill-none stroke-gold stroke-[1.8] opacity-60"
        strokeDasharray="4 7"
        strokeLinecap="round"
        d="M 130 0 C 130 80, 24 110, 24 200 S 136 290, 136 380 S 22 470, 22 560 S 138 650, 138 740 S 26 830, 26 910 S 100 970, 90 990"
      />

      {/* DESTINATION HEART AT THE VERY END ("in last add one heart") */}
      <g
        transform="translate(90, 990)"
        onClick={handleHeartTouch}
        onTouchStart={handleHeartTouch}
        onMouseEnter={() => setManualGlow(true)}
        onMouseLeave={() => setManualGlow(false)}
        className="pointer-events-auto cursor-pointer select-none transition-transform duration-500 ease-out"
        style={{
          transformOrigin: "90px 990px",
        }}
        title="Touch or tap to illuminate"
        aria-label="Wedding destination heart. Touch to glow brightly."
      >
        {/* Glow Halo Pulsing Rings when touched or plane arrives */}
        {isGlowing && (
          <>
            <circle
              r="34"
              fill="url(#heart-burst-grad)"
              className="animate-pulse"
            />
            <circle
              r="24"
              fill="none"
              stroke="#FF69B4"
              strokeWidth="2"
              opacity="0.8"
              className="animate-ping"
            />
            {/* Sparkling stars */}
            <text
              x="-18"
              y="-14"
              fill="#FFD700"
              fontSize="12"
              className="animate-bounce select-none font-serif"
            >
              ✦
            </text>
            <text
              x="14"
              y="-14"
              fill="#FFD700"
              fontSize="12"
              className="animate-bounce select-none font-serif"
              style={{ animationDelay: "150ms" }}
            >
              ✦
            </text>
            <text
              x="-2"
              y="-22"
              fill="#FFFFFF"
              fontSize="14"
              className="animate-pulse select-none font-serif"
            >
              ✧
            </text>
          </>
        )}

        {/* The Heart Shape */}
        <g
          className="transition-all duration-300 ease-out"
          style={{
            transform: isGlowing ? "scale(1.35)" : "scale(1)",
            transformOrigin: "0px 0px",
            filter: isGlowing
              ? "drop-shadow(0 0 14px #FF1493) drop-shadow(0 0 28px #FFA500) drop-shadow(0 0 45px #FF69B4)"
              : "drop-shadow(0 2px 6px rgba(180, 50, 80, 0.35))",
          }}
        >
          {/* Outer stroke / glow layer */}
          <path
            d="M 0 -3 C -4 -9, -13 -7, -13 0 C -13 7, -3 12, 0 15 C 3 12, 13 7, 13 0 C 13 -7, 4 -9, 0 -3 Z"
            fill={isGlowing ? "#FF2E7E" : "#E85A7E"}
            stroke={isGlowing ? "#FFF59D" : "#D4AF37"}
            strokeWidth={isGlowing ? "1.8" : "1.2"}
          />
          {/* Inner highlight gleam */}
          <path
            d="M -7 -1 C -7 -4, -3 -6, -1 -4"
            fill="none"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* Airplane (Pure Origami Design flying along the path) */}
      <g
        ref={planeRef}
        id="scroll-plane"
        className="filter drop-shadow-[0_2px_6px_rgba(110,65,25,0.25)]"
      >
        {/* Scaled-up Origami Paper Airplane */}
        <g transform="scale(1.35)">
          {/* Upper Wing */}
          <path d="M-15 -8 L16 0 L-3 4 L-6 0 Z" fill="#D4AF37" />
          {/* Lower Wing (Deeper shade for 3D folded illusion) */}
          <path d="M-6 0 L16 0 L-3 4 L-11 9 Z" fill="#B88E28" />
          {/* Center Keel Fold */}
          <path d="M-6 0 L16 0 L-3 3 Z" fill="#E5C76B" />
          {/* Crisp White Top Crease Line */}
          <line
            x1="-6"
            y1="0"
            x2="16"
            y2="0"
            stroke="#FFFDF6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Outer Wing Edge Highlight */}
          <path
            d="M-15 -8 L16 0 L-11 9"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}
