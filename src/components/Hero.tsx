"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import FrameVideo from "./FrameVideo";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Fade out content when scroll progress reaches 30% of the tall section
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Optionally, you can also animate the video brightness or other properties
  const videoOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative h-[200vh] md:h-[350vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Video (from frames) */}
        <motion.div style={{ opacity: videoOpacity }} className="absolute inset-0 z-0">
          <FrameVideo 
            frameCount={274} 
            pathPrefix="/ezgif-44c22d539b7d472d-jpg" 
            progress={scrollYProgress}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Floating Pearls Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "110%", 
                opacity: 0.1 + Math.random() * 0.3 
              }}
              animate={{ 
                y: "-10%",
                x: (Math.random() * 100 - 10) + "%"
              }}
              transition={{ 
                duration: 10 + Math.random() * 20, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 20
              }}
              className="absolute w-4 h-4 bg-pearl-black rounded-full shadow-xl"
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity, scale, y }}
          className="relative z-10 container mx-auto px-6 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 mb-6 glass-dark rounded-full text-sm font-medium border border-white/20"
          >
            Premium Bubble Tea Experience
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 uppercase"
          >
            Boba <span className="text-caramel">Tea</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide italic"
          >
            the mindblowing taste
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(201, 138, 74, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-caramel text-white px-10 py-4 rounded-xl font-bold text-lg transition-shadow"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="glass px-10 py-4 rounded-xl font-bold text-lg text-white border border-white/30"
            >
              Explore Menu
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}
