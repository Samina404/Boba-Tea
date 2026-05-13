"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-caramel rounded-full flex items-center justify-center text-white text-sm">B</span>
          <span className={isScrolled || isMobileMenuOpen ? "text-pearl-black" : "text-white"}>THE BOBA SPOT</span>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? "text-pearl-black" : "text-white"}`}>
          <Link href="#hero" className="hover:text-caramel transition-colors">Home</Link>
          <Link href="#best-sellers" className="hover:text-caramel transition-colors">Menu</Link>
          <Link href="#story" className="hover:text-caramel transition-colors">Our Story</Link>
          <Link href="#gallery" className="hover:text-caramel transition-colors">Gallery</Link>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative p-2 rounded-full ${isScrolled ? "text-pearl-black bg-cream/50" : "text-white bg-white/10"}`}
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-caramel text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </motion.button>
          
          <button 
            className={`md:hidden p-2 ${isScrolled ? "text-pearl-black" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          <Link href="#hero" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="#best-sellers" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
          <Link href="#story" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
          <Link href="#gallery" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
          <button className="bg-caramel text-white py-3 rounded-xl font-bold">Order Now</button>
        </motion.div>
      )}
    </nav>
  );
}
