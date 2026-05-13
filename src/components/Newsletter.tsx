"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-caramel/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass border border-cream rounded-[4rem] p-12 md:p-20 text-center shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Join the Boba Spot Elite</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
            Subscribe to get exclusive updates, seasonal flavor reveals, and special rewards delivered straight to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-8 py-4 rounded-2xl border border-cream focus:outline-none focus:ring-2 focus:ring-caramel/50 text-lg transition-all"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-caramel text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-milk-tea transition-colors"
            >
              Subscribe
              <Send size={20} />
            </motion.button>
          </form>
          
          <p className="mt-6 text-sm text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
