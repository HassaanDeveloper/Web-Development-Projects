// src/components/shared/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// <--- CHANGED: Import SheetTitle from Shadcn's sheet components
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react"; // Install lucide-react for icons: npm install lucide-react

// <--- NEW: Import VisuallyHidden from Radix UI
// You might need to install it: npm install @radix-ui/react-visually-hidden
// If it's not directly exported from Shadcn's sheet.tsx, you might need to import from @radix-ui
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'; // Importing everything as VisuallyHidden

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 px-4 py-3 backdrop-blur-md"
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="text-2xl font-bold text-foreground text-glow hover:text-primary transition-colors duration-300">
          Hassaan.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-foreground transition-colors duration-300 hover:text-primary before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation (Hamburger) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-card border-l border-primary/20">
              {/* <--- CHANGED: Add SheetTitle for accessibility */}
              <SheetTitle>
                <VisuallyHidden.Root>Mobile Navigation</VisuallyHidden.Root>
              </SheetTitle>
              {/* <--- Optional: SheetDescription can be added for more context if needed */}
              {/* <SheetDescription><VisuallyHidden.Root>Links to different sections of the portfolio.</VisuallyHidden.Root></SheetDescription> */}

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