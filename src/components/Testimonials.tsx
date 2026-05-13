"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Milk Tea Enthusiast",
    content: "The best boba I've ever had in my life. The brown sugar pearls are perfectly chewy and the tea flavor is so rich!",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Food Blogger",
    content: "A premium experience from start to finish. The Matcha Strawberry is a masterpiece of flavors and aesthetics.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Customer",
    content: "Finally a place that uses real taro! You can taste the quality in every sip. My new daily spot.",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-pearl-black text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Quote className="absolute top-20 left-20" size={120} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">What Our Fans Say</h2>
          <div className="w-20 h-1 bg-caramel mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={24} fill="#C98A4A" color="#C98A4A" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-medium italic mb-10 leading-relaxed text-cream/90">
                "{testimonials[index].content}"
              </p>
              <div>
                <h4 className="text-xl font-bold text-caramel">{testimonials[index].name}</h4>
                <p className="text-white/50 uppercase tracking-widest text-sm mt-1">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-caramel w-8" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
