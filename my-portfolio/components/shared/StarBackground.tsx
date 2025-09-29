"use client";

import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // Create stars
      interface Star {
        x: number;
        y: number;
        radius: number;
        opacity: number;
        twinkleSpeed: number;
        velocityX: number;
        velocityY: number;
      }

      const stars: Star[] = [];
      const numStars = 100;

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.005 + 0.002, // Slower twinkling
          velocityX: (Math.random() - 0.5) * 0.2, // Subtle horizontal drift
          velocityY: (Math.random() - 0.5) * 0.2, // Subtle vertical drift
        });
      }

      // Animation loop
      const animateStars = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
          // Update position with wraparound
          star.x += star.velocityX;
          star.y += star.velocityY;

          // Wraparound at canvas edges
          if (star.x < 0) star.x += canvas.width;
          if (star.x > canvas.width) star.x -= canvas.width;
          if (star.y < 0) star.y += canvas.height;
          if (star.y > canvas.height) star.y -= canvas.height;

          // Draw star
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();

          // Slower twinkle effect
          star.opacity = 0.3 + Math.sin(Date.now() * star.twinkleSpeed) * 0.2;
        });

        requestAnimationFrame(animateStars);
      };

      animateStars();

      // Cleanup
      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full"
      style={{ pointerEvents: "none" }}
    />
  );
}