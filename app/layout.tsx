import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NavbarGlass } from '@/components/blocks/NavbarGlass'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Design Plus 2 — Architecture & Interiors",
  description:
    "Design Plus creates homes, mandirs, hotels, and restaurants with architectural precision and premium detailing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-atelier">
        {/* Navbar must be full width */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarGlass
            logo="/images/logo.png"
            navItems={navItems}
            ctaLabel="Get a Quote"
            ctaHref="/contact"
          />
        </div>

        {/* Offset for fixed navbar */}
        <div className="pt-20 md:pt-24">{children}</div>

        <FooterMultiColumn
          brand="Design Plus 2"
          description="Modern architecture for homes, mandirs, hotels, and restaurants—crafted with technical precision and calm, premium detailing."
          columns={[
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Services",
              links: [
                { label: "Homes", href: "/services" },
                { label: "Mandirs", href: "/services" },
                { label: "Hotels", href: "/services" },
                { label: "Restaurants", href: "/services" },
              ],
            },
            {
              title: "Start",
              links: [
                { label: "Pricing", href: "/pricing" },
                { label: "Request a Quote", href: "/contact" },
              ],
            },
          ]}
          copyright={`© ${new Date().getFullYear()} Design Plus 2. All rights reserved.`}
          logoUrl="/images/logo.png"
        />
      </body>
    </html>
  );
}
