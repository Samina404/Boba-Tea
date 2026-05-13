"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/brown-sugar.png", size: "col-span-1 row-span-1" },
  { src: "/images/hero-fallback.jpg", size: "col-span-2 row-span-2" },
  { src: "/images/matcha-strawberry.png", size: "col-span-1 row-span-1" },
  { src: "/images/taro.png", size: "col-span-1 row-span-1" },
  { src: "/images/brown-sugar.png", size: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Gallery</h2>
          <p className="text-gray-500">Tag us #TheBobaSpot to be featured on our grid.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-[2rem] group cursor-pointer ${img.size}`}
            >
              <Image
                src={img.src}
                alt="Gallery Item"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase text-sm">View Post</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
