import React, { useEffect, useRef } from "react";

export default function AmbientCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;

    // Rich cherry blossom & rose pink petals palette
    const pinkPalette = [
      "rgba(244, 162, 185, 0.72)", // Soft cherry pink
      "rgba(235, 128, 155, 0.62)", // Warm rose pink
      "rgba(252, 195, 208, 0.78)", // Light blush pink
      "rgba(213, 120, 145, 0.65)", // Deep petal rose
      "rgba(255, 218, 226, 0.80)", // Delicate pastel petal
    ];

    // 24 animated falling petals
    const petals = Array.from({ length: 24 }, (_, i) => ({
      x: Math.random(),
      y: Math.random() * 1.2 - 0.2,
      size: 4 + Math.random() * 5,
      speed: 0.15 + Math.random() * 0.25,
      drift: 0.12 + Math.random() * 0.2,
      angle: Math.random() * Math.PI * 2,
      angularSpeed: 0.015 + Math.random() * 0.03,
      wobbleSpeed: 2 + Math.random() * 3,
      color: pinkPalette[i % pinkPalette.length],
    }));

    // Ambient sparkles
    const sparkles = Array.from({ length: 12 }, () => ({
      x: Math.random(),
      y: Math.random(),
      phase: Math.random() * Math.PI * 2,
      size: 1 + Math.random() * 1.4,
    }));

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Helper to draw a natural curved petal
    function drawPetal(ctx, size, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.9, -size * 0.6, size * 0.9, size * 0.6, 0, size * 1.1);
      ctx.bezierCurveTo(-size * 0.9, size * 0.6, -size * 0.9, -size * 0.6, 0, -size);
      ctx.closePath();
      ctx.fill();
    }

    function draw(time = 0) {
      if (document.hidden) {
        running = false;
        return;
      }
      running = true;
      ctx.clearRect(0, 0, width, height);

      // Render falling pink petals
      petals.forEach((p) => {
        p.y += p.speed / Math.max(height, 1);
        p.x += (Math.sin(time / 1000 * p.wobbleSpeed + p.angle) * p.drift) / Math.max(width, 1);
        p.angle += p.angularSpeed;

        if (p.y > 1.05) {
          p.y = -0.06;
          p.x = Math.random();
        }

        ctx.save();
        ctx.translate(p.x * width, p.y * height);
        ctx.rotate(p.angle);
        // Subtle 3D tilt effect
        const scaleX = 0.5 + 0.5 * Math.sin(time / 800 + p.angle);
        ctx.scale(scaleX, 1);
        drawPetal(ctx, p.size, p.color);
        ctx.restore();
      });

      // Render subtle sparkles
      sparkles.forEach((s) => {
        const alpha = 0.08 + 0.18 * ((1 + Math.sin(time / 1000 + s.phase)) / 2);
        const x = s.x * width;
        const y = s.y * height;
        ctx.strokeStyle = `rgba(197, 163, 107, ${alpha})`;
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(x - s.size * 2.5, y);
        ctx.lineTo(x + s.size * 2.5, y);
        ctx.moveTo(x, y - s.size * 2.5);
        ctx.lineTo(x, y + s.size * 2.5);
        ctx.stroke();
      });

      raf = window.requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize, { passive: true });
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        running = false;
      } else if (!running) {
        draw();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="ambient-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none z-[4] opacity-80"
      aria-hidden="true"
    />
  );
}
