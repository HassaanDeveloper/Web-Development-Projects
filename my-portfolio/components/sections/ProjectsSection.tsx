// src/components/sections/ProjectsSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // <--- CHANGED: Import Variants
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Dummy project data (you'd move this to data/projects.ts)
const projects = [
  {
    id: 1,
    title: "Quantum Connect",
    description: "A secure, decentralized communication platform built with WebSockets and Next.js.",
    image: "/images/project-quantum.jpg", // Add actual image paths
    tech: ["Next.js", "Tailwind CSS", "GSAP", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Aether Analytics",
    description: "Real-time data visualization dashboard for financial insights.",
    image: "/images/project-aether.jpg",
    tech: ["React", "D3.js", "Framer Motion", "Shadcn/ui"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Chrono Forge",
    description: "An AI-powered task management system with predictive scheduling.",
    image: "/images/project-chrono.jpg",
    tech: ["Next.js", "Python (Flask)", "Anime.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
];

// <--- CHANGED: Add Variants type definition
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger project card animations
    },
  },
};

// <--- CHANGED: Add Variants type definition
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="container mx-auto py-20 px-4">
      <motion.h2
        className="mb-12 text-center text-4xl font-bold text-foreground sm:text-5xl text-glow"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My Work
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}> {/* This line causing error before */}
            <Card className="flex h-full flex-col justify-between overflow-hidden rounded-lg border-2 border-primary/20 bg-card shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary">
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader className="flex-grow p-6">
                <CardTitle className="mb-2 text-2xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <div className="flex justify-end gap-4 p-6 pt-0">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="text-primary hover:bg-primary hover:text-primary-foreground">GitHub</Button>
                </Link>
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <Button>Live Demo</Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;