'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
  const color = useMotionValue("#3b82f6");
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const navLinksRef = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);

  // Color animation
  useEffect(() => {
    const animateColor = async () => {
      await animate(color, ["#3b82f6", "#ec4899", "#f59e0b", "#22c55e"], {
        duration: 15,
        repeat: Infinity,
        repeatType: "mirror",
      });
    };
    animateColor();
  }, [color]);

  const borderGradient = useMotionTemplate`linear-gradient(90deg, ${color} 0%, transparent 100%)`;

  // GSAP Animations
  useEffect(() => {
    // Initial animations
    gsap.from(navbarRef.current, {
      y: -80,
      duration: 1,
      ease: "power3.out"
    });

    // Nav links animation
    gsap.from(navLinksRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.5,
      ease: "back.out(1.7)"
    });

    // Logo hover animation
    if (logoRef.current) {
      logoRef.current.addEventListener("mouseenter", () => {
        gsap.to(logoRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      logoRef.current.addEventListener("mouseleave", () => {
        gsap.to(logoRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

    // Scroll trigger for navbar background
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.scroll() > 50) {
          gsap.to(navbarRef.current, {
            backgroundColor: 'rgba(var(--background)/0.9)',
            padding: '0.75rem 1rem',
            duration: 0.3
          });
        } else {
          gsap.to(navbarRef.current, {
            backgroundColor: 'rgba(var(--background)/0.7)',
            padding: '1rem 1rem',
            duration: 0.3
          });
        }
      }
    });

    // Nav link hover animations
    navLinksRef.current.forEach(link => {
      if (link) {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            y: -2,
            color: 'var(--primary)',
            duration: 0.2
          });
        });
        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            y: 0,
            color: 'var(--foreground)',
            duration: 0.2
          });
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (logoRef.current) {
        logoRef.current.removeEventListener("mouseenter", () => { });
        logoRef.current.removeEventListener("mouseleave", () => { });
      }
      navLinksRef.current.forEach(link => {
        if (link) {
          link.removeEventListener('mouseenter', () => { });
          link.removeEventListener('mouseleave', () => { });
        }
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Animate mobile menu items when opening
      gsap.from(".mobile-nav-item", {
        opacity: 0,
        x: -20,
        duration: 0.3,
        stagger: 0.1
      });
    }
  };

  return (
    <motion.header
      ref={navbarRef}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-lg border-b shadow-md"
    >
      <motion.div className="h-[2px] w-full" style={{ background: borderGradient }} />

      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div id="logo" ref={logoRef}>
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-primary">PulesPay</span>
          </Link>
        </div>



        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {["Products", "Pricing", "About"].map((item, index) => (
            <motion.div
              key={item}
              ref={(el) => {
                if (el) navLinksRef.current[index] = el;
              }}
              className="nav-link"
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Button asChild>
            <Link href="/signin">Get Started</Link>
          </Button>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pb-4 space-y-2 overflow-hidden"
        >
          {["Products", "Pricing", "About", "Signin"].map((item, index) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block text-sm font-medium text-foreground hover:text-primary mobile-nav-item"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className="py-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}