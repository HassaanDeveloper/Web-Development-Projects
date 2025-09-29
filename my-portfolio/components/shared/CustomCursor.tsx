// src/components/shared/CustomCursor.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    gsap.set(follower, { xPercent: -50, yPercent: -50 });
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, 0.2, {
        x: e.clientX,
        y: e.clientY,
      });
      gsap.to(follower, 0.8, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    // <--- CHANGED: Explicitly type event handlers as MouseEventHandler
    const handleMouseEnter = (e: MouseEvent) => {
      // No change needed to the logic here, but the type for 'e' is MouseEvent
      const target = e.target as HTMLElement; // Still good to cast for property access
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        gsap.to(follower, 0.3, {
          scale: 1.8,
          opacity: 0.9,
          backgroundColor: "var(--glow-color-2)", // Example
        });
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // No change needed to the logic here
      const target = e.target as HTMLElement; // Still good to cast for property access
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        gsap.to(follower, 0.3, {
          scale: 1,
          opacity: 0.7,
          backgroundColor: "var(--primary)", // Example
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // <--- CHANGED: Iterate over NodeListOf<HTMLElement> and explicitly type 'el'
    const interactiveElements = document.querySelectorAll<HTMLElement>("a, button");
    interactiveElements.forEach((el) => {
      // <--- CHANGED: Event listener types are now correct for HTMLElement
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        // <--- CHANGED: Event listener types are now correct for HTMLElement
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor w-2 h-2 rounded-full bg-primary"
      ></div>
      <div
        ref={followerRef}
        className="custom-cursor w-8 h-8 rounded-full opacity-70 bg-primary"
      ></div>
    </>
  );
};

export default CustomCursor;