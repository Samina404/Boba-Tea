import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BestSellers from "@/components/BestSellers";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import SpecialOffer from "@/components/SpecialOffer";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <BestSellers />
      <Story />
      <Testimonials />
      <SpecialOffer />
      <Gallery />
      <FAQ />
      <Newsletter />
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <button className="w-full bg-caramel text-white py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2">
          Order Now
        </button>
      </div>
    </main>
  );
}
