import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Boba Spot | Premium Bubble Tea Experience",
  description: "Freshly brewed milk tea with perfectly chewy pearls. Crafted for bubble tea lovers.",
  openGraph: {
    title: "The Boba Spot | Premium Bubble Tea Experience",
    description: "Sip the Magic with our signature handcrafted bubble tea.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full font-sans bg-cream text-pearl-black">
        {children}
      </body>
    </html>
  );
}
