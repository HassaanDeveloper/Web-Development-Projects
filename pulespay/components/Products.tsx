'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// 3D Card Component
function ProductCard3D({ color, position }: { color: string, position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[3.5, 2, 0.2]} />
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.2} />
    </mesh>
  );
}
interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Product {
  title: string;
  desc: string;
  color: string;
  icon: string;
  features: Feature[];
}

const products: Product[] = [
  {
    title: "Instant Checkout",
    desc: "One-click payments with Stripe's optimized checkout flow. Reduce cart abandonment by 40% with our seamless integration that works across all devices.",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    icon: "⚡",
    features: [
      {
        title: "One-Click Payment",
        description: "Complete checkout in seconds",
        icon: "🚀"
      },
      {
        title: "Mobile Optimized",
        description: "Works on all devices",
        icon: "📱"
      },
      {
        title: "Smart Retry",
        description: "Automatic payment recovery",
        icon: "🔄"
      }
    ]
  },
  {
    title: "Smart Subscriptions",
    desc: "Recurring billing with automated dunning, prorations, and free trials. Our system handles failed payments automatically with customizable retry logic.",
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
    icon: "🔄",
    features: [
      {
        title: "Flexible Billing",
        description: "Custom billing cycles",
        icon: "📅"
      },
      {
        title: "Auto Recovery",
        description: "Smart dunning management",
        icon: "🔁"
      },
      {
        title: "Trial Management",
        description: "Automated free trials",
        icon: "⏳"
      }
    ]
  },
  {
    title: "Fraud Defense",
    desc: "AI-powered protection with Stripe Radar that learns from billions of transactions. Includes 3D Secure authentication and chargeback prevention tools.",
    color: "bg-gradient-to-br from-green-500 to-teal-600",
    icon: "🛡️",
    features: [
      {
        title: "AI Protection",
        description: "Machine learning security",
        icon: "🤖"
      },
      {
        title: "3D Secure",
        description: "Enhanced authentication",
        icon: "🔒"
      },
      {
        title: "Chargeback Shield",
        description: "Dispute prevention",
        icon: "🛡️"
      }
    ]
  },
  {
    title: "Global Payments",
    desc: "Accept payments in 135+ currencies with automatic conversion. Local payment methods including Alipay, iDEAL, and SEPA Direct Debit.",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    icon: "🌎",
    features: [
      {
        title: "Multi-Currency",
        description: "135+ currencies supported",
        icon: "💱"
      },
      {
        title: "Local Methods",
        description: "Regional payment options",
        icon: "🏦"
      },
      {
        title: "Auto Convert",
        description: "Smart currency conversion",
        icon: "💵"
      }
    ]
  },
  {
    title: "Instant Payouts",
    desc: "Send funds to your users' bank accounts in minutes instead of days. Perfect for marketplaces and gig economy platforms with 24/7 availability.",
    color: "bg-gradient-to-br from-red-500 to-pink-600",
    icon: "💸",
    features: [
      {
        title: "Fast Transfer",
        description: "Minutes not days",
        icon: "⚡"
      },
      {
        title: "24/7 Available",
        description: "Round-the-clock payouts",
        icon: "🕒"
      },
      {
        title: "Auto Routing",
        description: "Optimal payout paths",
        icon: "🔀"
      }
    ]
  },
  {
    title: "Revenue Reporting",
    desc: "Real-time analytics with automatic tax calculation. Includes customizable dashboards and export options for your accounting team.",
    color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    icon: "📊",
    features: [
      {
        title: "Live Analytics",
        description: "Real-time insights",
        icon: "📈"
      },
      {
        title: "Tax Automation",
        description: "Automatic calculations",
        icon: "🧮"
      },
      {
        title: "Export Ready",
        description: "Multiple format exports",
        icon: "📤"
      }
    ]
  },
  {
    title: "PCI Compliance",
    desc: "We handle all security requirements so you don't have to. Automatically updated to meet the latest PCI DSS standards with zero effort.",
    color: "bg-gradient-to-br from-violet-500 to-purple-600",
    icon: "🔒",
    features: [
      {
        title: "Auto Compliance",
        description: "Always up to date",
        icon: "✅"
      },
      {
        title: "Data Security",
        description: "Enterprise-grade protection",
        icon: "🔐"
      },
      {
        title: "Zero Config",
        description: "No setup required",
        icon: "⚙️"
      }
    ]
  },
  {
    title: "Developer Tools",
    desc: "Webhooks, test mode, and detailed API logs. Our developer dashboard includes request tracing and payload inspection for easy debugging.",
    color: "bg-gradient-to-br from-emerald-500 to-green-600",
    icon: "👨‍💻",
    features: [
      {
        title: "Webhooks",
        description: "Real-time notifications",
        icon: "🔔"
      },
      {
        title: "Test Mode",
        description: "Safe development",
        icon: "🧪"
      },
      {
        title: "API Logs",
        description: "Detailed debugging",
        icon: "📝"
      }
    ]
  },
  {
    title: "Customer Portal",
    desc: "Let customers update payment methods, view invoices, and manage subscriptions. White-labeled solution that matches your brand perfectly.",
    color: "bg-gradient-to-br from-rose-500 to-red-600",
    icon: "👥",
    features: [
      {
        title: "Self Service",
        description: "Customer management",
        icon: "🔧"
      },
      {
        title: "White Label",
        description: "Brand customization",
        icon: "🎨"
      },
      {
        title: "Invoice Access",
        description: "Payment history",
        icon: "📄"
      }
    ]
  }
];

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Animations
  useEffect(() => {
    // Section entrance
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });

    // Heading animation
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.2)"
    });

    // Product cards animation
    productRefs.current.forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(1.4)"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4">
    {/* 3D Preview Canvas */}
    <div className="h-64 md:h-80 mb-16 relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Environment preset="city" />
        
        <Float speed={2} rotationIntensity={0.5}>
          <ProductCard3D color="#6366f1" position={[-3.5, 0, 0]} />
          <ProductCard3D color="#a855f7" position={[0, 0, 0]} />
          <ProductCard3D color="#10b981" position={[3.5, 0, 0]} />
        </Float>
      </Canvas>
    </div>

    <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-center mb-8">
      Built for <span className="text-purple-600">Developers</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {products.map((product, i) => (
        <motion.div
          key={i}
          ref={(el: HTMLDivElement | null) => {
            productRefs.current[i] = el;
          }}
          whileHover={{ y: -8 }}
          className="group relative h-64"
        >
          {/* Card with hover effect */}
          <div className={`absolute inset-0 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
            i === 0 ? 'bg-indigo-500' : 
            i === 1 ? 'bg-purple-500' : 
            i === 2 ? 'bg-emerald-500' :
            i === 3 ? 'bg-amber-500' :
            i === 4 ? 'bg-red-500' :
            i === 5 ? 'bg-cyan-500' :
            i === 6 ? 'bg-violet-500' :
            i === 7 ? 'bg-green-500' : 'bg-rose-500'
          }`}>
            {/* Front (Title) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
              <span className="text-4xl mb-3">{product.icon}</span>
              <h3 className="text-2xl font-bold text-center text-white">{product.title}</h3>
            </div>
            
            {/* Back (Description) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-sm">
              <p className="text-white text-center">{product.desc}</p>
              
              {/* Features list - only shown on hover */}
              <ul className="mt-4 space-y-1">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm">
                    <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="mr-2">{feature.icon}</span>
                    <span className="font-medium">{feature.title}</span>
                    <span className="text-white/70 ml-1">- {feature.description}</span>
                  </li>
                ))}
              </ul>
              
              {/* Stripe badge */}
              <div className="mt-4 absolute bottom-4">
                <div className="inline-flex items-center bg-black/20 px-3 py-1 rounded-full text-xs text-white">
                  <span>Powered by</span>
                  <svg className="w-12 h-4 ml-2" viewBox="0 0 72 24">
                    <path fill="currentColor" d="M36 12c0-3.48-2.88-6.36-6.36-6.36H9.36v12.72h20.28C33.12 18.36 36 15.48 36 12zm22.68 0c0-3.48-2.88-6.36-6.36-6.36H32.04v12.72h20.28c3.48 0 6.36-2.88 6.36-6.36z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* View All Button */}
    <motion.div 
      className="flex justify-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <button className="px-6 py-3 bg-white text-purple-600 font-medium rounded-full shadow-md hover:shadow-lg transition-all border border-purple-100">
        View All Features
      </button>
    </motion.div>
  </div>
</section>
  );
}