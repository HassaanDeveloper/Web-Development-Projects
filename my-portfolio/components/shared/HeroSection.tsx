"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import * as anime from "animejs";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AnimeUpdateInstance {
  progress: number;
}

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP title and button entrance
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, delay: 0.6, ease: "back.out(1.7)" }
    );

    // Anime.js typing effect
    if (subtitleRef.current) {
      const textToAnimate = "Crafting immersive digital experiences.";
      const targetElement = subtitleRef.current;

      targetElement.textContent = "";
      targetElement.style.opacity = "1";

      anime.animate(
        targetElement,
        {
          duration: textToAnimate.length * 70,
          easing: "linear",
          update: (anim: AnimeUpdateInstance) => {
            const progress = anim.progress / 100;
            const currentLength = Math.round(textToAnimate.length * progress);
            targetElement.textContent = textToAnimate.substring(0, currentLength);
          },
          complete: () => {
            targetElement.textContent = textToAnimate;
          },
          delay: 500,
        }
      );
    }
  }, []);

  return (
    <section className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-transparent">
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          ref={titleRef}
          className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl text-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Muhammad Hassaan
        </motion.h1>

        <p
          ref={subtitleRef}
          className="mb-8 text-lg text-white/80 sm:text-xl lg:text-2xl"
        ></p>

        <div ref={buttonRef}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "backOut" }}
          >
            <Link href="#projects">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 text-primary-foreground transition-colors duration-300 group-hover:text-background">
                  Explore My Work
                </span>
                <span className="absolute inset-0 bg-primary transition-all duration-300 group-hover:bg-foreground"></span>
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground opacity-0 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:scale-125 group-hover:opacity-100"></span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;