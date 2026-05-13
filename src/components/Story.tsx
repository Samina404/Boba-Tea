"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-fallback.jpg"
                alt="Boba Making"
                width={600}
                height={800}
                className="w-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-caramel/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-milk-tea/20 rounded-full blur-3xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-caramel font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Crafted for <br /> <span className="text-milk-tea">Bubble Tea Lovers</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Founded on the belief that bubble tea should be more than just a drink—it should be an experience. 
              Our journey started with a simple mission: to find the perfect balance between high-quality loose 
              leaf tea and the most satisfyingly chewy pearls.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Every cup at The Boba Spot is handcrafted with precision, using traditional brewing methods 
              infused with modern culinary creativity. We don't just serve tea; we serve magic.
            </p>
            
            <div className="flex gap-12">
              <div>
                <h4 className="text-3xl font-bold text-pearl-black mb-1">10k+</h4>
                <p className="text-gray-500 uppercase text-xs font-bold tracking-wider">Happy Sippers</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-pearl-black mb-1">24</h4>
                <p className="text-gray-500 uppercase text-xs font-bold tracking-wider">Unique Blends</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-pearl-black mb-1">100%</h4>
                <p className="text-gray-500 uppercase text-xs font-bold tracking-wider">Fresh Daily</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
