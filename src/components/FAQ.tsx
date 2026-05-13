"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer dairy-free options?",
    answer: "Yes! We offer organic soy milk, oat milk, and almond milk alternatives for all our milk tea varieties."
  },
  {
    question: "Can I customize the sweetness level?",
    answer: "Absolutely. You can choose from 0%, 25%, 50%, 75%, or 100% sweetness to suit your taste."
  },
  {
    question: "Are your pearls gluten-free?",
    answer: "Our tapioca pearls are made from cassava root and are naturally gluten-free."
  },
  {
    question: "How long can I store my boba?",
    answer: "For the best experience, we recommend drinking your boba within 2-4 hours while the pearls are fresh and chewy."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-cream/10">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know about our premium blends.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-cream">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-cream/20 transition-colors"
              >
                <span className="text-lg font-bold text-pearl-black">{faq.question}</span>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
