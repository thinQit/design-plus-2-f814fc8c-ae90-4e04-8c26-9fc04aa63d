"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from '@/components/blocks/HeroMinimal'
import { GalleryMasonry } from '@/components/blocks/GalleryMasonry'
import { HoverEffect } from '@/components/ui/effects/HoverEffect'
import { CTASplit } from '@/components/blocks/CTASplit'

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioPage() {
  return (
    <main>
      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <HeroMinimal
          headline="Portfolio"
          subheadline="A curated set of concepts and executed spaces—focused on proportion, light, and premium restraint."
          primaryCta={{ label: "Start a Project", href: "/contact" }}
          secondaryCta={{ label: "View Services", href: "/services" }}
          imageUrl="/images/hero.png"
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Categories</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Explore by project type
              </h2>
              <p className="mt-4 text-foreground">
                Browse the kind of work you’re planning—then contact us for a tailored proposal.
              </p>
            </div>

            <div className="mt-10">
              <HoverEffect
                items={[
                  { title: "Homes", description: "Modern residences with efficient planning and premium detailing.", link: "/contact" },
                  { title: "Mandirs", description: "Sacred spaces with symmetry, proportion, and calm materials.", link: "/contact" },
                  { title: "Hotels", description: "Hospitality design focused on flow, durability, and brand experience.", link: "/contact" },
                  { title: "Restaurants", description: "Ambience-led interiors with smart seating and lighting.", link: "/contact" },
                ]}
              />
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <GalleryMasonry
          headline="Project gallery"
          subheadline="Replace these placeholders with your real project images anytime."
          images={[
            { url: "/images/product-1.png", alt: "Home project", caption: "Home — facade + massing" },
            { url: "/images/product-2.png", alt: "Mandir project", caption: "Mandir — interior volume" },
            { url: "/images/product-3.png", alt: "Hotel project", caption: "Hotel — lobby concept" },
            { url: "/images/product-3.png", alt: "Restaurant project", caption: "Restaurant — ambience study" },
            { url: "/images/product-1.png", alt: "Home interior", caption: "Home — living + lighting" },
            { url: "/images/about.png", alt: "Architectural detail", caption: "Detail — structure + shadow" },
            { url: "/images/product-2.png", alt: "Material palette", caption: "Materials — tonal depth" },
            { url: "/images/product-1.png", alt: "Seating layout", caption: "Layout — circulation" },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <CTASplit
          headline="Want a similar outcome for your site?"
          description="Send your requirements and we’ll propose a direction with clear deliverables."
          ctaLabel="Contact Design Plus"
          ctaHref="/contact"
          secondaryCtaLabel="View Pricing"
          secondaryCtaHref="/pricing"
          imageUrl="/images/product-2.png"
        />
      </motion.div>
    </main>
  );
}
