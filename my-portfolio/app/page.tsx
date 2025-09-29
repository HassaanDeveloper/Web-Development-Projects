// src/app/page.tsx
import HeroSection from "@/components/shared/HeroSection";
import AboutSection from "@/components/sections/AboutSection"; // You'll need to create this
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection"; // You'll need to create this
import CertificationSection from "@/components/sections/Certifications"; // You'll need to create this
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      {/* You will create this component in src/components/sections/AboutSection.tsx */}
      {/* Add an ID for navigation link to work */}
      <section id="about" className="w-full">
        <AboutSection />
      </section>

      {/* Projects Section */}
      {/* This component already has an ID, but wrapping in <section> for consistency */}
      <section id="projects" className="w-full">
         <ProjectsSection />
      </section>

      {/* Skills Section */}
      {/* You will create this component in src/components/sections/SkillsSection.tsx */}
      {/* Add an ID for navigation link to work */}
      <section id="skills" className="w-full">
        <SkillsSection />
      </section>
      
      <CertificationSection />

      {/* Contact Section */}
      {/* This component already has an ID, but wrapping in <section> for consistency */}
      <section id="contact" className="w-full">
        <ContactSection />
      </section>

      {/* Other sections can go here as you build them */}
    </main>
  );
}