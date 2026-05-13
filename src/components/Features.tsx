"use client";

import { motion } from "framer-motion";
import { Leaf, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: <Leaf className="text-caramel" size={32} />,
    title: "Fresh Ingredients",
    description: "We source the finest organic tea leaves and fresh seasonal fruits for every cup."
  },
  {
    icon: <Sparkles className="text-caramel" size={32} />,
    title: "Signature Flavors",
    description: "Unique handcrafted recipes you won't find anywhere else. Pure bliss in every sip."
  },
  {
    icon: <Clock className="text-caramel" size={32} />,
    title: "Handcrafted Daily",
    description: "Our pearls are prepared fresh every 4 hours to ensure perfect chewiness."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-cream/30 hover:bg-cream/50 transition-colors group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
