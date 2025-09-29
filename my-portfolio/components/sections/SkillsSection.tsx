// src/components/sections/SkillsSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Lightbulb, Code, Layout, Database, Server, GitBranch } from "lucide-react"; // Example icons
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Define your skills data here or import from src/data/skills.ts
const skillsCategories = [
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "GSAP", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 70 },
      { name: "Flask/Django", level: 65 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: GitBranch,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Vercel/Netlify", level: 85 },
      { name: "Jira/Trello", level: 70 },
    ],
  },
  {
    category: "Concepts",
    icon: Lightbulb,
    skills: [
      { name: "Responsive Design", level: 98 },
      { name: "UI/UX Principles", level: 85 },
      { name: "Performance Opt.", level: 80 },
      { name: "Agile Methodologies", level: 90 },
    ],
  },
];

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="container mx-auto py-20 px-4">
      <motion.h2
        className="mb-12 text-center text-4xl font-bold text-foreground sm:text-5xl text-glow"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsCategories.map((category, index) => (
          <motion.div key={category.category} variants={itemVariants}>
            <Card className="flex h-full flex-col rounded-lg border-2 border-primary/20 bg-card p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary">
              <CardHeader className="flex flex-row items-center gap-4 p-0 pb-4">
                {category.icon && <category.icon className="h-8 w-8 text-primary" />}
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardDescription className="flex-grow space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <div className="relative h-2 w-2/3 rounded-full bg-muted">
                      <motion.div
                        className="absolute left-0 top-0 h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </CardDescription>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;