'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Jane Doe",
    role: "CTO, TechCorp",
    text: "This payment flow reduced our cart abandonment by 40%.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "CEO, StartupX",
    text: "The Stripe integration took just minutes to set up.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scrolling testimonials
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(slider, {
      x: "-100%",
      duration: 20,
      ease: "none",
    });

    return () => {
        tl.kill();
    };
  }, []);

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Loved by <span className="text-purple-400">Customers</span>
        </h2>

        <div className="relative h-64 overflow-hidden">
          <div
            ref={sliderRef}
            className="absolute flex gap-8 w-[200%]"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md p-8 bg-gray-900 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full overflow-hidden"
                  >
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold">{t.name}</h3>
                    <p className="text-sm opacity-70">{t.role}</p>
                  </div>
                </div>
                <p className="opacity-90">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stripe Trust Badges (Animated) */}
        <div className="flex justify-center mt-16 gap-8">
          {["stripe", "visa", "mastercard", "amex"].map((brand) => (
            <motion.div
              key={brand}
              whileHover={{ y: -5 }}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <img 
                src={`/${brand}-logo.svg`} 
                alt={brand} 
                className="h-12" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}