// src/components/shared/Navbar.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { waapi, svg, animate as animeAnimate, stagger } from "animejs";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Anime.js entry animation
    animate(linkRefs.current, {
      
      translateY: [10, 0],
      opacity: [0, 1],
      delay: stagger(100, { start: 500 }),
      duration: 700,
      easing: "easeOutQuad",
    });

    // WAAPI-style animation (example only)
    waapi.animate(".nav-link", {
      rotate: "var(--rotation)",
      borderColor: ["var(--hex-orange)", "var(--hex-red)"],
    });

    // Fallback animation using classic anime with safe values
    const elements = document.querySelectorAll(".nav-link");
    elements.forEach((el) => {
      const target = el as HTMLElement;
      const scale = parseFloat(getComputedStyle(target).getPropertyValue("--scale")) || 1;
      const backgroundColor = getComputedStyle(target).getPropertyValue("--hex-orange").trim();

      animeAnimate(target, {
        // targets: target,
        scale,
        backgroundColor,
        duration: 1000,
        easing: "easeInOutQuad",
      });
      });
    

    // Animate YourName.dev logo
    animeAnimate(svg.createDrawable(".logo-line"), {
      draw: ["0 0", "0 1", "1 1"],
      ease: "inOutQuad",
      duration: 2000,
      delay: stagger(100),
      loop: true,
    });
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 px-4 py-3 backdrop-blur-md"
    >
      <nav className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-foreground text-glow hover:text-primary transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 50"
            className="w-[150px] h-auto logo-line"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <text x="0" y="35" fontSize="32" fontFamily="monospace">
              Hassuu.dev
            </text>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              ref={el => { linkRefs.current[index] = el; }}
                            className="nav-link relative text-foreground transition-colors duration-300 hover:text-primary before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px] bg-card border-l border-primary/20"
            >
              <SheetTitle>
                <VisuallyHidden.Root>Mobile Navigation</VisuallyHidden.Root>
              </SheetTitle>
              <nav className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-medium text-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;



// // src/components/shared/Navbar.tsx
// "use client";

// import React, { useEffect, useRef } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
// import { MenuIcon } from "lucide-react";
// import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

// import { animate, stagger } from 'animejs'; // <--- THIS IS THE CORRECT IMPORT

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "#about" },
//   { name: "Projects", href: "#projects" },
//   { name: "Skills", href: "#skills" },
//   { name: "Contact", href: "#contact" },
// ];

// const Navbar: React.FC = () => {
//   // Create an array of refs, one for each navigation link
//   const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

//   useEffect(() => {
//     // Only run this effect on the client side
//     if (typeof window === 'undefined') return;

//     // Iterate over each link and attach hover animations
//     linkRefs.current.forEach((linkElement) => {
//       if (!linkElement) return;

//       // Select the inner span (text) and the ::before pseudo-element
//       const linkText = linkElement.querySelector(".nav-link-text");
//       const linkUnderline = linkElement.querySelector(".nav-link-underline"); // The new element for the line

//       if (!linkText || !linkUnderline) return;

//       const handleMouseEnter = () => {
//         // Stop any currently running animations on these targets
//         (animate as any).remove([linkText, linkUnderline]);

//         // Animate the text
//         animate(linkText,{
//           scale: [1, 1.05], // Scale text slightly up
//           color: "hsl(var(--primary))", // Change text color to primary
//           easing: "easeOutSine",
//           duration: 300,
//         });

//         // Animate the underline/glow effect
//         animate(linkUnderline, {
          
//           width: ['0%', '100%'], // Expand width
//           backgroundColor: ["hsl(var(--primary))", "hsl(var(--accent))"], // Change color during expansion
//           easing: "easeOutQuad",
//           duration: 400,
//           opacity: [0, 1],
//         });
//       };

//       const handleMouseLeave = () => {
//         // Stop any currently running animations on these targets
//         (animate as any).remove([linkText, linkUnderline]);

//         // Revert text animation
//         animate(linkText, {
          
//           scale: [1.05, 1], // Scale text back down
//           color: "hsl(var(--foreground))", // Revert text color to foreground
//           easing: "easeOutSine",
//           duration: 300,
//         });

//         // Revert underline/glow animation
//         animate(linkUnderline, {
          
//           width: ['100%', '0%'], // Contract width
//           backgroundColor: "hsl(var(--primary))", // Ensure it ends on primary color
//           easing: "easeOutQuad",
//           duration: 400,
//           opacity: [1, 0],
//         });
//       };

//       linkElement.addEventListener("mouseenter", handleMouseEnter);
//       linkElement.addEventListener("mouseleave", handleMouseLeave);

//       // Cleanup function for event listeners
//       return () => {
//         linkElement.removeEventListener("mouseenter", handleMouseEnter);
//         linkElement.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     });
//   }, []); // Empty dependency array means this runs once on mount

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 px-4 py-3 backdrop-blur-md"
//     >
//       <nav className="container mx-auto flex items-center justify-between">
//         {/* Logo/Name */}
//         <Link href="/" className="text-2xl font-bold text-foreground text-glow hover:text-primary transition-colors duration-300">
//           YourName.dev
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden items-center gap-6 md:flex">
//           {navLinks.map((link, index) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               ref={el => { linkRefs.current[index] = el; }} // Assign ref to each Link
//               // Remove existing hover effects from Tailwind here
//               className="relative text-foreground transition-none group" // Removed hover:text-primary, hover:before:w-full, transition-colors duration-300
//             >
//               {/* This span will be animated for text effects */}
//               <span className="nav-link-text relative z-10 block transition-none">
//                 {link.name}
//               </span>
//               {/* This div will be animated for the underline/glow effect */}
//               <span className="nav-link-underline absolute bottom-0 left-0 h-[2px] w-0 bg-primary opacity-0 transition-none"></span>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Navigation (Hamburger) */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <MenuIcon className="h-6 w-6 text-foreground" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-card border-l border-primary/20">
//               <SheetTitle>
//                 <VisuallyHidden.Root>Mobile Navigation</VisuallyHidden.Root>
//               </SheetTitle>
//               <nav className="flex flex-col gap-4 py-6">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className="text-xl font-medium text-foreground hover:text-primary transition-colors duration-300"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>
//     </motion.header>
//   );
// };

// export default Navbar;