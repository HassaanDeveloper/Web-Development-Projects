// src/components/shared/Footer.tsx
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react"; // Ensure lucide-react is installed

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background/80 py-8 text-center text-muted-foreground backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-primary">Your Name</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/your-github" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/your-linkedin" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://twitter.com/your-twitter" // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm">
            Built with <span className="font-semibold text-primary">Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;