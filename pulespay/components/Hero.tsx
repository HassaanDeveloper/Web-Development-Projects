// 'use client';

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ChevronDown } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// function ProductModel() {
//   const { scene } = useGLTF("/product.glb");
//   return <primitive object={scene} scale={0.9} position={[0, -0.5, 0]} />;
// }

// function ScrollDownIndicator() {
//   return (
//     <motion.div
//       className="absolute bottom-6 left-1/2 -translate-x-1/2"
//       animate={{ y: [0, 12, 0] }}
//       transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//     >
//       <ChevronDown className="h-8 w-8 text-primary" />
//     </motion.div>
//   );
// }

// export function Hero() {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const modelRef = useRef(null);

//   useGSAP(() => {
//     // Animate text on load
//     gsap.from(".hero-title", { x: -50, opacity: 0, duration: 1, ease: "power2.out" });
//     gsap.from(".hero-desc", { x: -30, opacity: 0, duration: 0.8, delay: 0.2 });
//     gsap.from(".hero-btn", { y: 20, opacity: 0, duration: 0.6, delay: 0.4 });

//     // Floating animation
//     gsap.to(".product-container", {
//       y: "+=10",
//       duration: 3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//     });

//     // Parallax scroll effect
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "+=1000",
//       scrub: true,
//       pin: true,
//       animation: gsap.timeline()
//         .to(textRef.current, { y: -100, ease: "none" }, 0)
//         .to(modelRef.current, { y: -200, ease: "none" }, 0),
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative h-screen overflow-hidden flex items-center justify-center px-6">
//       {/* Text Section */}
//       <div
//         ref={textRef}
//         className="hero-text z-10 max-w-2xl text-left backdrop-blur-lg bg-background/50 border border-border p-6 rounded-xl shadow-xl"
//       >
//         <motion.h1 className="hero-title text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
//           Premium Digital Assets
//         </motion.h1>
//         <motion.p className="hero-desc mt-4 text-lg md:text-xl text-muted-foreground">
//           Curated collection of high-quality design resources
//         </motion.p>
//         <motion.div className="hero-btn mt-8">
//           <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
//             Explore Collection
//           </button>
//         </motion.div>
//       </div>

//       {/* 3D Model Section */}
//       <div
//         ref={modelRef}
//         className="product-container absolute inset-0 md:right-0 md:w-1/2 h-full"
//       >
//         <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
//           <ambientLight intensity={0.7} />
//           <directionalLight position={[5, 5, 5]} intensity={1.2} />
//           <spotLight position={[0, 10, 10]} angle={0.2} penumbra={1} />
//           <ProductModel />
//           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
//         </Canvas>
//       </div>

//       <ScrollDownIndicator />
//     </section>
//   );
// }

'use client';

import { useRef, useEffect, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// ========================
// Fish Component
// ========================
const Fish = memo(({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 2;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <coneGeometry args={[0.3, 1, 8]} />
      <meshStandardMaterial color="#ff6b6b" />
    </mesh>
  );
});

// ========================
// Bubble Component
// ========================
const Bubble = memo(({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  const startY = position[1];
  const speed = 0.01 + Math.random() * 0.02;

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y += speed;
      if (ref.current.position.y > startY + 15) {
        ref.current.position.y = startY - 5;
      }
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.05 + Math.random() * 0.15, 16, 16]} />
      <meshStandardMaterial color="#a0e0ff" transparent opacity={0.35} roughness={0.8} />
    </mesh>
  );
});

// ========================
// GSAP Animation Hook
// ========================
const useGsapHeroAnimations = (
  heroRef: React.RefObject<HTMLDivElement>,
  titleRef: React.RefObject<HTMLHeadingElement>,
  subtitleRef: React.RefObject<HTMLParagraphElement>,
  ctaRef: React.RefObject<HTMLButtonElement>
) => {
  useEffect(() => {
    if (!heroRef.current) return; // Add null check

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power4.out',
      delay: 0.3,
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'sine.out',
      delay: 0.8,
    });

    gsap.to(ctaRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'sine.inOut',
    });

    gsap.to(heroRef.current, {
      background: 'linear-gradient(45deg, #1a4b8c, #0055ff)',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);
};

// ========================
// Hero Component
// ========================
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  // useGsapHeroAnimations(heroRef, titleRef, subtitleRef, ctaRef);

  const bubbles = Array.from({ length: 25 }, () => ({
    position: [Math.random() * 10 - 5, Math.random() * -10, Math.random() * 2 - 1] as [number, number, number],
  }));

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a4b8c] to-[#0055ff]"
      aria-label="Hero Section"
    >
      {/* 3D Canvas */}
      <Canvas
        className="absolute inset-0 z-0 pointer-events-none"
        camera={{ position: [0, 0, 5], fov: 75 }}
        frameloop="demand"
      >
        <ambientLight intensity={0.3} color="#0055ff" />
        <directionalLight position={[1, 1, 2]} intensity={0.8} color="#a0e0ff" />

        <Fish position={[-2, 0, -1]} />
        <Fish position={[1, -1, -2]} />

        {bubbles.map((bubble, i) => (
          <Bubble key={i} position={bubble.position} />
        ))}

        <mesh position={[0, 0, -3]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial
            color="#00a2ff"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Canvas>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4 flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-white mb-6"
        >
          <span className="block">Dive Into</span>
          <motion.span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            Seamless Payments
          </motion.span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          Underwater-fast checkout powered by Stripe and Next.js
        </p>

        <button
          ref={ctaRef}
          aria-label="Get Started with Stripe Demo"
          className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
        >
          <span className="relative z-10">Get Started (Stripe Demo)</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
          />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-4 h-4 rounded-full bg-white/30 backdrop-blur-sm" />
      </motion.div>
    </section>
  );
}


// 'use client';

// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { motion } from 'framer-motion';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Float } from '@react-three/drei';
// import * as THREE from 'three';

// // Fish Component
// const Fish = ({ position }: { position: [number, number, number] }) => {
//   const fishRef = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (fishRef.current) {
//       fishRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 2;
//       fishRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
//     }
//   });

//   return (
//     <mesh ref={fishRef} position={position}>
//       <coneGeometry args={[0.3, 1, 8]} />
//       <meshStandardMaterial color="#ff6b6b" />
//     </mesh>
//   );
// };

// // Bubble Component
// const Bubble = ({ position }: { position: [number, number, number] }) => {
//   const bubbleRef = useRef<THREE.Mesh>(null);
//   const startY = position[1];
//   const speed = 0.02 + Math.random() * 0.03;

//   useFrame(() => {
//     if (bubbleRef.current) {
//       bubbleRef.current.position.y += speed;
//       if (bubbleRef.current.position.y > startY + 15) {
//         bubbleRef.current.position.y = startY - 5;
//       }
//     }
//   });

//   return (
//     <mesh ref={bubbleRef} position={position}>
//       <sphereGeometry args={[0.1 + Math.random() * 0.1, 16, 16]} />
//       <meshStandardMaterial 
//         color="#a0e0ff" 
//         transparent 
//         opacity={0.4}  // Reduced opacity
//         roughness={0.8}
//       />
//     </mesh>
//   );
// };

// export default function Hero() {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);
//   const ctaRef = useRef<HTMLButtonElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   // GSAP Animations on Load
//   useEffect(() => {
//     // Content entrance animation
//     gsap.from(contentRef.current, {
//       x: '-10%',
//       opacity: 0,
//       duration: 1.5,
//       ease: "expo.out",
//     });

//     // Text stagger animation
//     gsap.from([titleRef.current, subtitleRef.current, ctaRef.current], {
//       opacity: 0,
//       y: 20,
//       duration: 1,
//       stagger: 0.2,
//       delay: 0.5
//     });

//     // CTA Button Pulse Effect
//     gsap.to(ctaRef.current, {
//       scale: 1.05,
//       repeat: -1,
//       yoyo: true,
//       duration: 2,
//       ease: "sine.inOut",
//     });
//   }, []);

//   // Generate random bubble positions
//   const bubbles = Array.from({ length: 30 }).map((_, i) => ({
//     position: [
//       Math.random() * 20 - 10,  // Wider X distribution
//       Math.random() * -15,
//       Math.random() * 5 - 2.5,  // Deeper Z distribution
//     ] as [number, number, number]
//   }));

//   return (
//     <section
//       ref={heroRef}
//       className="relative h-screen overflow-hidden bg-gradient-to-b from-[#1a4b8c] to-[#0055ff]"
//     >
//       {/* Underwater Canvas (Full Screen Behind Content) */}
//       <Canvas 
//         className="absolute inset-0 z-0" 
//         camera={{ position: [0, 0, 5], fov: 75 }}
//         style={{ opacity: 0.7 }}  // Reduced opacity for better content visibility
//       >
//         <ambientLight intensity={0.3} color="#0055ff" />
//         <directionalLight position={[1, 1, 2]} intensity={0.8} color="#a0e0ff" />
        
//         <Fish position={[-5, 0, -1]} />
//         <Fish position={[3, -2, -3]} />
        
//         {bubbles.map((bubble, i) => (
//           <Bubble key={i} position={bubble.position} />
//         ))}
        
//         <mesh position={[0, 0, -5]}>
//           <planeGeometry args={[40, 20]} />
//           <meshStandardMaterial
//             color="#00a2ff"
//             transparent
//             opacity={0.1}  // More transparent water surface
//             side={THREE.DoubleSide}
//           />
//         </mesh>
//       </Canvas>

//       {/* Content Container with Glass Morphism Effect */}
//       <div 
//         ref={contentRef}
//         className="relative z-10 h-full flex flex-col justify-center pl-8 md:pl-16 lg:pl-24 xl:pl-32 w-full max-w-3xl"
//       >
//         <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/10 shadow-xl">
//           <h1
//             ref={titleRef}
//             className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
//           >
//             <span className="block">Dive Into</span>
//             <motion.span 
//               className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
//               animate={{ y: [0, -5, 0] }}
//               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//             >
//               Seamless Payments
//             </motion.span>
//           </h1>

//           <p
//             ref={subtitleRef}
//             className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10"
//           >
//             Underwater-fast checkout powered by Stripe and Next.js
//           </p>

//           <button
//             ref={ctaRef}
//             className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
//           >
//             <span className="relative z-10">Get Started (Stripe Demo)</span>
//             <motion.span 
//               className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               initial={{ opacity: 0 }}
//             />
//           </button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
//       >
//         <div className="w-4 h-4 rounded-full bg-white/50 backdrop-blur-sm"></div>
//       </motion.div>
//     </section>
//   );
// }

// 'use client';

// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { motion } from 'framer-motion';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Float } from '@react-three/drei';
// import * as THREE from 'three';

// // Fish Component
// const Fish = ({ position }: { position: [number, number, number] }) => {
//   const fishRef = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (fishRef.current) {
//       fishRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 2;
//       fishRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
//     }
//   });

//   return (
//     <mesh ref={fishRef} position={position}>
//       <coneGeometry args={[0.3, 1, 8]} />
//       <meshStandardMaterial color="#ff6b6b" />
//     </mesh>
//   );
// };

// // Bubble Component
// const Bubble = ({ position }: { position: [number, number, number] }) => {
//   const bubbleRef = useRef<THREE.Mesh>(null);
//   const startY = position[1];
//   const speed = 0.02 + Math.random() * 0.03;

//   useFrame(() => {
//     if (bubbleRef.current) {
//       bubbleRef.current.position.y += speed;
//       if (bubbleRef.current.position.y > startY + 15) {
//         bubbleRef.current.position.y = startY - 5;
//       }
//     }
//   });

//   return (
//     <mesh ref={bubbleRef} position={position}>
//       <sphereGeometry args={[0.1 + Math.random() * 0.1, 16, 16]} />
//       <meshStandardMaterial 
//         color="#a0e0ff" 
//         transparent 
//         opacity={0.4}
//         roughness={0.8}
//       />
//     </mesh>
//   );
// };

// export default function Hero() {
//   // Only animate individual text elements
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);
//   const ctaRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     // Simple fade-in for text elements
//     gsap.from([titleRef.current, subtitleRef.current, ctaRef.current], {
//       opacity: 0,
//       y: 20,
//       duration: 1,
//       stagger: 0.2,
//       delay: 0.5,
//       ease: "power2.out"
//     });

//     // Button pulse effect
//     gsap.to(ctaRef.current, {
//       scale: 1.05,
//       repeat: -1,
//       yoyo: true,
//       duration: 2,
//       ease: "sine.inOut",
//     });
//   }, []);

//   // Bubble positions
//   const bubbles = Array.from({ length: 25 }).map((_, i) => ({
//     position: [
//       Math.random() * 20 - 10,
//       Math.random() * -15,
//       Math.random() * 5 - 2.5,
//     ] as [number, number, number]
//   }));

//   return (
//     <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#1a4b8c] to-[#0055ff]">
//       {/* Underwater Background - Reduced opacity */}
//       <Canvas 
//         className="absolute inset-0 z-0" 
//         camera={{ position: [0, 0, 5], fov: 75 }}
//         style={{ opacity: 0.7, pointerEvents: 'none' }} // Make sure content shows through
//       >
//         <ambientLight intensity={0.3} color="#0055ff" />
//         <directionalLight position={[1, 1, 2]} intensity={0.8} color="#a0e0ff" />
        
//         <Fish position={[-3, 0, -1]} />
//         <Fish position={[2, -1, -2]} />
        
//         {bubbles.map((bubble, i) => (
//           <Bubble key={i} position={bubble.position} />
//         ))}
        
//         <mesh position={[0, 0, -20]}>
//           <planeGeometry args={[30, 15]} />
//           <meshStandardMaterial
//             color="#00a2ff"
//             transparent
//             opacity={0.1}
//             side={THREE.DoubleSide}
//           />
//         </mesh>
//       </Canvas>

//       {/* Content Container - No animation on container itself */}
//       <div className="relative z-10 h-full flex items-center pl-8 md:pl-16 lg:pl-24 xl:pl-32">
//         <div className="max-w-2xl">
//           <h1
//             ref={titleRef}
//             className="text-5xl md:text-7xl font-bold text-white mb-6"
//           >
//             <span className="block">Dive Into</span>
//             <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
//               Seamless Payments
//             </span>
//           </h1>

//           <p
//             ref={subtitleRef}
//             className="text-xl md:text-2xl text-white/90 mb-10"
//           >
//             Underwater-fast checkout powered by Stripe and Next.js
//           </p>

//           <button
//             ref={ctaRef}
//             className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
//           >
//             Get Started (Stripe Demo)
//           </button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
//       >
//         <div className="w-4 h-4 rounded-full bg-white/50"></div>
//       </motion.div>
//     </section>
//   );
// }