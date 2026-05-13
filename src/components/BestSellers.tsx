"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Signature Brown Sugar",
    description: "Tiger striped brown sugar syrup with organic milk and fresh pearls.",
    price: "$6.50",
    image: "/images/brown-sugar.png"
  },
  {
    id: 2,
    name: "Matcha Strawberry",
    description: "Ceremonial grade matcha with fresh strawberry puree and milk.",
    price: "$7.25",
    image: "/images/matcha-strawberry.png"
  },
  {
    id: 3,
    name: "Classic Taro Milk",
    description: "Real taro root blend with creamy milk and chewy pearls.",
    price: "$6.75",
    image: "/images/taro.png"
  }
];

export default function BestSellers() {
  return (
    <section id="best-sellers" className="py-24 bg-cream/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Our Best Sellers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-xl mx-auto"
          >
            Handpicked favorites that have captured the hearts of bubble tea lovers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[3rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-square mb-8 overflow-hidden rounded-[2.5rem] bg-cream/10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-caramel font-bold text-lg">{product.price}</span>
                </div>
                <p className="text-gray-500 mb-8 line-clamp-2">
                  {product.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-pearl-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-caramel transition-colors"
                >
                  <Plus size={20} />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
