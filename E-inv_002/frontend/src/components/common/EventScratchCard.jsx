import React, { useRef, useEffect, useState, useCallback } from "react";

export default function EventScratchCard({
  revealMode = "time", // "time" | "date"
  timeStart = "4:30 AM",
  timeEnd = "6:30 AM",
  timeLabel = "MUHURTHAM",
  timeSub = "BRAHMA MUHURTHAM",
  dayOfWeek = "FRI",
  dayNumber = "20",
  month = "NOV",
  theme = "gold", // "gold" | "rose" | "sandal" | "pink"
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const isSandal = theme === "sandal" || theme === "gold" || dayNumber === "20";

  // Initialize and paint scratch foil canvas
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width || 120;
    const height = rect.height || 150;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    // Metallic foil gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    if (isSandal) {
      // Golden Sandalwood metallic foil
      grad.addColorStop(0, "#C7A76D");
      grad.addColorStop(0.25, "#F7E7C4");
      grad.addColorStop(0.5, "#D8BA7E");
      grad.addColorStop(0.8, "#B38F52");
      grad.addColorStop(1, "#D2B376");
    } else {
      // Shimmering Pink metallic foil
      grad.addColorStop(0, "#E8A0AF");
      grad.addColorStop(0.3, "#FCDCE3");
      grad.addColorStop(0.6, "#E291A3");
      grad.addColorStop(1, "#C77587");
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Decorative inner border on foil
    ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(6, 6, width - 12, height - 12);

    // Foil Sparkle Stars
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.font = "bold 13px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✦", 16, 16);
    ctx.fillText("✦", width - 16, 16);
    ctx.fillText("✦", 16, height - 16);
    ctx.fillText("✦", width - 16, height - 16);

    // Central Scratch Invitation Text
    ctx.fillStyle = isSandal ? "#3D2415" : "#4A1A28";
    ctx.font = "bold 11px 'DM Sans', sans-serif";
    ctx.letterSpacing = "0.15em";
    ctx.fillText("SCRATCH", width / 2, height / 2 - 12);

    ctx.font = "bold 9px 'DM Sans', sans-serif";
    ctx.fillStyle = isSandal ? "rgba(61, 36, 21, 0.75)" : "rgba(74, 26, 40, 0.75)";
    ctx.fillText("TO REVEAL", width / 2, height / 2 + 4);

    // Little Coin / Sparkle icon
    ctx.font = "14px serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("❖", width / 2, height / 2 + 22);
  }, [isSandal]);

  useEffect(() => {
    initCanvas();

    const handleResize = () => {
      if (!isRevealed) {
        initCanvas();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas, isRevealed]);

  // Check how much percentage is scratched
  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    try {
      const ctx = canvas.getContext("2d");
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width;
      const h = canvas.height;
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      let transparentCount = 0;
      // Step by 32 bytes (8 pixels) for quick performance sampling
      const sampleStep = 32;
      const totalSamples = Math.floor(data.length / sampleStep);

      for (let i = 3; i < data.length; i += sampleStep) {
        if (data[i] < 40) {
          transparentCount++;
        }
      }

      const ratio = transparentCount / totalSamples;
      if (ratio > 0.38) {
        setIsRevealed(true);
      }
    } catch {
      // If cross-origin or security error, fallback
    }
  }, [isRevealed]);

  // Scratch handler helper
  const scratchAt = useCallback(
    (clientX, clientY) => {
      const canvas = canvasRef.current;
      if (!canvas || isRevealed) return;

      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const ctx = canvas.getContext("2d");
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2, false);
      ctx.fill();

      if (!hasStarted) setHasStarted(true);
    },
    [isRevealed, hasStarted]
  );

  // Mouse handlers
  const handleMouseDown = (e) => {
    if (isRevealed) return;
    setIsScratching(true);
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isScratching || isRevealed) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    if (!isScratching) return;
    setIsScratching(false);
    checkScratchPercentage();
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    if (isRevealed || !e.touches[0]) return;
    setIsScratching(true);
    scratchAt(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!isScratching || isRevealed || !e.touches[0]) return;
    scratchAt(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isScratching) return;
    setIsScratching(false);
    checkScratchPercentage();
  };

  // Click to reveal fallback
  const handleQuickReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div
      ref={containerRef}
      className={`scratch-card-wrapper relative flex flex-col items-center select-none ${
        !isRevealed ? "scratch-card-shake" : ""
      }`}
    >
      {/* Outer Card Box: 20 has Sandalwood background, 19 has Pink background */}
      <div
        className={`relative w-[112px] sm:w-[124px] md:w-[136px] h-[142px] sm:h-[154px] md:h-[168px] rounded-xl overflow-hidden border transition-all duration-500 ${
          isSandal
            ? "border-[#CDB07B] bg-gradient-to-b from-[#FFFDF2] via-[#FBF2DA] to-[#F5E3BD]"
            : "border-[#E8A5B5] bg-gradient-to-b from-[#FFF2F6] via-[#FDE8EF] to-[#F9D0DC]"
        } ${
          isRevealed
            ? isSandal
              ? "ring-2 ring-amber-300/80 shadow-[0_0_30px_rgba(225,180,65,0.6),0_10px_25px_rgba(140,80,20,0.2)] scale-[1.02]"
              : "ring-2 ring-pink-400/70 shadow-[0_0_30px_rgba(244,114,182,0.6),0_10px_25px_rgba(180,50,90,0.2)] scale-[1.02]"
            : "shadow-[0_6px_18px_rgba(72,40,61,0.1)]"
        }`}
      >
        {/* UNDERNEATH LAYER: The Revealed Time or Date (Glows ONLY AFTER Scratch) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center pointer-events-none">
          {revealMode === "time" ? (
            <>
              {/* Category / Muhurtham Label */}
              <span
                className={`text-[0.62rem] sm:text-[0.68rem] md:text-[0.74rem] tracking-[0.2em] font-extrabold uppercase transition-all duration-500 ${
                  isSandal ? "text-[#8C5E28]" : "text-[#A83256]"
                } ${
                  isRevealed
                    ? isSandal
                      ? "[text-shadow:0_0_10px_rgba(218,165,32,0.7),0_0_20px_rgba(235,185,60,0.4)]"
                      : "[text-shadow:0_0_10px_rgba(244,114,182,0.8),0_0_20px_rgba(244,114,182,0.4)]"
                    : ""
                }`}
              >
                {timeLabel}
              </span>

              {/* Main Timings */}
              <div className="flex flex-col items-center justify-center my-0.5 sm:my-1 leading-none">
                <strong
                  className={`font-serif font-bold text-[1.28rem] sm:text-[1.45rem] md:text-[1.62rem] leading-tight tracking-tight text-wine transition-all duration-500 ${
                    isRevealed
                      ? isSandal
                        ? "[text-shadow:0_0_12px_rgba(218,165,32,0.65),0_0_24px_rgba(235,185,60,0.45),0_0_2px_rgba(255,255,255,0.7)]"
                        : "[text-shadow:0_0_12px_rgba(236,72,153,0.6),0_0_24px_rgba(244,114,182,0.45),0_0_2px_rgba(255,255,255,0.7)]"
                      : ""
                  }`}
                >
                  {timeStart}
                </strong>
                {timeEnd && (
                  <>
                    <span
                      className={`text-[0.52rem] sm:text-[0.56rem] tracking-[0.18em] font-extrabold uppercase my-0.5 ${
                        isSandal ? "text-[#8C5E28]/80" : "text-[#A83256]/80"
                      }`}
                    >
                      {timeEnd === "ONWARDS" ? "" : "TO"}
                    </span>
                    <strong
                      className={`font-serif font-bold text-[1.28rem] sm:text-[1.45rem] md:text-[1.62rem] leading-tight tracking-tight text-wine transition-all duration-500 ${
                        isRevealed
                          ? isSandal
                            ? "[text-shadow:0_0_12px_rgba(218,165,32,0.65),0_0_24px_rgba(235,185,60,0.45),0_0_2px_rgba(255,255,255,0.7)]"
                            : "[text-shadow:0_0_12px_rgba(236,72,153,0.6),0_0_24px_rgba(244,114,182,0.45),0_0_2px_rgba(255,255,255,0.7)]"
                          : ""
                      }`}
                    >
                      {timeEnd}
                    </strong>
                  </>
                )}
              </div>

              {/* Sub-label */}
              {timeSub && (
                <span
                  className={`text-[0.52rem] sm:text-[0.56rem] md:text-[0.62rem] tracking-[0.14em] font-extrabold uppercase transition-all duration-500 mt-0.5 ${
                    isSandal ? "text-[#8C5E28]" : "text-[#A83256]"
                  }`}
                >
                  {timeSub}
                </span>
              )}
            </>
          ) : (
            <>
              <span
                className={`text-[0.62rem] md:text-[0.7rem] tracking-[0.24em] font-extrabold uppercase transition-all duration-500 ${
                  isSandal ? "text-[#8C5E28]" : "text-[#A83256]"
                } ${
                  isRevealed
                    ? isSandal
                      ? "[text-shadow:0_0_10px_rgba(218,165,32,0.7),0_0_20px_rgba(235,185,60,0.4)]"
                      : "[text-shadow:0_0_10px_rgba(244,114,182,0.8),0_0_20px_rgba(244,114,182,0.4)]"
                    : ""
                }`}
              >
                {dayOfWeek}
              </span>

              <strong
                className={`font-serif font-bold text-4xl sm:text-[2.75rem] md:text-[3.2rem] leading-none my-1 tracking-tight text-wine transition-all duration-500 ${
                  isRevealed
                    ? isSandal
                      ? "[text-shadow:0_0_12px_rgba(218,165,32,0.65),0_0_24px_rgba(235,185,60,0.45),0_0_2px_rgba(255,255,255,0.7)]"
                      : "[text-shadow:0_0_12px_rgba(236,72,153,0.6),0_0_24px_rgba(244,114,182,0.45),0_0_2px_rgba(255,255,255,0.7)]"
                    : ""
                }`}
              >
                {dayNumber}
              </strong>

              <span
                className={`text-[0.62rem] md:text-[0.7rem] tracking-[0.24em] font-extrabold uppercase transition-all duration-500 ${
                  isSandal ? "text-[#8C5E28]" : "text-[#A83256]"
                } ${
                  isRevealed
                    ? isSandal
                      ? "[text-shadow:0_0_10px_rgba(218,165,32,0.7),0_0_20px_rgba(235,185,60,0.4)]"
                      : "[text-shadow:0_0_10px_rgba(244,114,182,0.8),0_0_20px_rgba(244,114,182,0.4)]"
                    : ""
                }`}
              >
                {month}
              </span>
            </>
          )}

          {/* Badge Ornament (Glows ONLY AFTER Scratch) */}
          <div
            className={`flex items-center justify-center gap-1.5 mt-1.5 text-xs transition-all duration-500 ${
              isSandal ? "text-[#9B6A30]" : "text-[#B83E63]"
            } ${
              isRevealed
                ? isSandal
                  ? "[filter:drop-shadow(0_0_8px_rgba(218,165,32,0.85))]"
                  : "[filter:drop-shadow(0_0_6px_rgba(244,114,182,0.8))]"
                : ""
            }`}
          >
            <span className={`w-3 h-px ${isSandal ? "bg-[#C49B55]" : "bg-[#D66B85]"}`} />
            <span>❖</span>
            <span className={`w-3 h-px ${isSandal ? "bg-[#C49B55]" : "bg-[#D66B85]"}`} />
          </div>
        </div>

        {/* TOP LAYER: Canvas Scratch Foil */}
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={hasStarted ? undefined : handleQuickReveal}
          className={`absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 touch-none ${
            isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ touchAction: "none" }}
          aria-label={revealMode === "time" ? "Scratch card to reveal event timing" : "Scratch card to reveal event date"}
          title={revealMode === "time" ? "Scratch or tap to reveal timing" : "Scratch or tap to reveal date"}
        />
      </div>

      {/* Helper label below card */}
      <button
        type="button"
        onClick={handleQuickReveal}
        className={`mt-2 text-[0.6rem] md:text-[0.66rem] tracking-[0.16em] uppercase font-bold cursor-pointer bg-transparent border-0 p-0 transition-all duration-300 ${
          isSandal
            ? isRevealed
              ? "text-[#8C5E28] [text-shadow:0_0_8px_rgba(218,165,32,0.65)]"
              : "text-[#8C5E28]/75 hover:text-[#684114]"
            : isRevealed
              ? "text-[#C2416C] [text-shadow:0_0_8px_rgba(244,114,182,0.65)]"
              : "text-rose-deep/75 hover:text-wine"
        }`}
      >
        {isRevealed
          ? revealMode === "time"
            ? "✦ Time Revealed"
            : "✦ Date Revealed"
          : revealMode === "time"
            ? "✦ Scratch to reveal time"
            : "✦ Scratch to reveal"}
      </button>
    </div>
  );
}

