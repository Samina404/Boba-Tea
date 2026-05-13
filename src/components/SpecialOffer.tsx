"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SpecialOffer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-caramel rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
              Limited Time Offer
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Get 20% Off Your <br /> First Purchase
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-md">
              Join the Boba Spot family today and enjoy a premium discount on any of our signature handcrafted blends.
            </p>
            <button className="bg-pearl-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-caramel transition-all">
              Claim Discount
            </button>
          </div>

          <div className="relative z-10 flex gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-extrabold glass-dark p-6 rounded-3xl mb-2 w-24 md:w-32">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="uppercase text-xs font-bold tracking-widest text-white/60">Hours</span>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-extrabold glass-dark p-6 rounded-3xl mb-2 w-24 md:w-32">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="uppercase text-xs font-bold tracking-widest text-white/60">Minutes</span>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-extrabold glass-dark p-6 rounded-3xl mb-2 w-24 md:w-32">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="uppercase text-xs font-bold tracking-widest text-white/60">Seconds</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
