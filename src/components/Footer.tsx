"use client";

import { motion } from "framer-motion";
import { Camera, Globe, MessageCircle, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pearl-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-8">
              <span className="w-8 h-8 bg-caramel rounded-full flex items-center justify-center text-white text-sm">B</span>
              <span>THE BOBA SPOT</span>
            </Link>
            <p className="text-white/50 leading-relaxed max-w-xs">
              Handcrafting premium bubble tea experiences since 2024. Quality you can taste, magic you can feel.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-caramel">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#hero" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#best-sellers" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="#story" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-caramel">Visit Us</h4>
            <ul className="space-y-4 text-white/60">
              <li>123 Bubble Lane</li>
              <li>New York, NY 10001</li>
              <li>Mon - Fri: 10am - 9pm</li>
              <li>Sat - Sun: 11am - 10pm</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-caramel">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-caramel transition-all">
                <Camera size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-caramel transition-all">
                <MessageCircle size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-caramel transition-all">
                <Globe size={20} />
              </Link>
            </div>
            <p className="mt-8 text-white/60">hello@thebobaspot.com</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
          <p>© 2026 The Boba Spot. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
