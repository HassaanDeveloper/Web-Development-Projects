// components/Features.tsx
'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
  {
    title: "Seamless Integration",
    description: "Connect with your favorite tools in minutes",
    icon: "🔌",
    color: "text-blue-500"
  },
  {
    title: "Stunning Visuals",
    description: "60FPS animations and interactive elements",
    icon: "🎨",
    color: "text-purple-500"
  },
  {
    title: "User-Friendly",
    description: "Intuitive interface with guided onboarding",
    icon: "🤝",
    color: "text-green-500"
  },
  {
    title: "Lightning Fast",
    description: "Optimized for instant load times",
    icon: "⚡",
    color: "text-yellow-500"
  },
  {
    title: "Secure Payments",
    description: "End-to-end encrypted transactions",
    icon: "🔒",
    color: "text-red-500"
  },
  {
    title: "24/7 Support",
    description: "Real human assistance anytime",
    icon: "🛟",
    color: "text-cyan-500"
  }
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Section title animation (text reveal)
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%"
      },
      duration: 1.5,
      clipPath: 'inset(0 100% 0 0)',
      ease: "power4.out"
    });

    // Feature cards animation
    featureRefs.current.forEach((el, i) => {
      if (!el) return;

      // Initial animation
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        ease: "back.out(1.2)"
      });

      // 3D tilt effect
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        gsap.to(el, {
          rotationY: (x - 0.5) * 8,
          rotationX: (0.5 - y) * 8,
          transformPerspective: 1000,
          transformOrigin: "center center",
          ease: "power1.out",
          duration: 0.5
        });

        // Shadow effect
        gsap.to(el.querySelector('.feature-shadow'), {
          x: (x - 0.5) * 20,
          y: (y - 0.5) * 20,
          opacity: 0.2,
          duration: 0.5
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)"
        });

        gsap.to(el.querySelector('.feature-shadow'), {
          x: 0,
          y: 0,
          opacity: 0,
          duration: 0.5
        });
      });
    });

    // Continuous floating animation for icons
    gsap.to(".feature-icon", {
      y: "+=10",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.2
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20 overflow-hidden">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground"
          >
            Why Choose Lumin?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium digital assets with cutting-edge delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el: HTMLDivElement | null): void => {
                featureRefs.current[index] = el;
              }}
              className="feature-card relative bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 transform-style-preserve-3d"
            >
              {/* 3D Shadow Effect */}
              <div className="feature-shadow absolute inset-0 bg-primary rounded-xl opacity-0 -z-10" />
              
              <div className={`feature-icon text-5xl mb-6 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/0 transition-all duration-500 feature-indicator" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}