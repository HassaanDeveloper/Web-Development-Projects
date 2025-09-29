// src/components/sections/AboutSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card"; // Using Shadcn Card for a clean look

const AboutSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="container mx-auto py-20 px-4">
      <motion.h2
        className="mb-12 text-center text-4xl font-bold text-foreground sm:text-5xl text-glow"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center gap-12 md:flex-row md:items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="flex-shrink-0">
          <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/your-profile-pic.jpg" // <--- IMPORTANT: Replace with your actual profile picture path
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        <Card className="flex-grow rounded-lg border-2 border-primary/20 bg-card p-8 shadow-xl">
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-3xl font-semibold text-foreground">
              Hello, I&apos;m [Your Name]
            </h3>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="mb-4 text-lg text-muted-foreground">
              I am a passionate Full-Stack Developer with a knack for building
              captivating web experiences. My journey in tech started with a fascination
              for how digital ideas come to life, leading me to master a diverse stack of
              technologies.
            </p>
            <p className="mb-4 text-lg text-muted-foreground">
              With a strong foundation in [mention key tech like React, Next.js, Node.js, databases],
              I thrive on solving complex problems and creating intuitive,
              high-performance applications. I love bringing designs to life
              with smooth animations and ensuring a delightful user experience.
            </p>
            <p className="text-lg text-muted-foreground">
              Outside of coding, you can find me [mention a hobby, e.g., exploring
              new AI trends, hiking, reading sci-fi, gaming]. I am always eager
              to learn and contribute to innovative projects. Let&apos;s build something
              amazing together!
            </p>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
};

export default AboutSection;