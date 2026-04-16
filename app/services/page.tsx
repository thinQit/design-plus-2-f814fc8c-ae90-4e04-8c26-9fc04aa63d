"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from '@/components/blocks/HeroMinimal'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { BentoGrid } from '@/components/ui/effects/BentoGrid'
import { CTASplit } from '@/components/blocks/CTASplit'

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function BentoGridItem({
  title,
  description,
  className,
  imageUrl,
}: {
  title: string;
  description: string;
  className?: string;
  imageUrl: string;
}) {
  return (
    <div className={"group relative overflow-hidden rounded-2xl bg-background/70 backdrop-blur-xl p-6 " + (className || "")}>
      <div className="relative z-10">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Service</p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-foreground">{description}</p>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover opacity-10 transition-opacity duration-300 group-hover:opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-transparent to-teal-900/10" />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <HeroMinimal
          headline="Services built for real-world execution."
          subheadline="We deliver concept-to-construction documentation with a modern aesthetic and contractor-friendly clarity."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "See Portfolio", href: "/portfolio" }}
          imageUrl="/images/product-2.png"
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <FeaturesGrid
          badge="What we do"
          headline="Architecture + interiors, end to end."
          subheadline="Choose a full package or a focused scope depending on your stage."
          features={[
            { icon: "📐", title: "Planning & Layouts", description: "Efficient circulation, room sizing, and zoning aligned to your lifestyle or operations." },
            { icon: "🏗️", title: "Elevations & Facades", description: "Modern massing, proportions, and material strategy for a premium exterior identity." },
            { icon: "💡", title: "Lighting & Ceiling", description: "Layered lighting plans and ceiling details that elevate ambience without clutter." },
            { icon: "🧱", title: "Material & Detail Drawings", description: "Buildable details for carpentry, stone, metal, and finishes—so quality stays consistent." },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Specialities</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Four categories. One design language.
              </h2>
              <p className="mt-4 text-foreground">
                Each category has unique needs—our process adapts while keeping the same premium, modern precision.
              </p>
            </div>

            <div className="mt-12">
              <BentoGrid>
                <BentoGridItem
                  title="Homes"
                  description="Warm minimalism, daylight strategy, and storage-led planning."
                  imageUrl="/images/product-1.png"
                  className="md:col-span-2"
                />
                <BentoGridItem
                  title="Mandirs"
                  description="Symmetry, sacred proportions, and material restraint."
                  imageUrl="/images/product-3.png"
                />
                <BentoGridItem
                  title="Hotels"
                  description="Guest flow, durable detailing, and brand continuity."
                  imageUrl="/images/product-1.png"
                />
                <BentoGridItem
                  title="Restaurants"
                  description="Seating efficiency, ambience, and acoustic comfort."
                  imageUrl="/images/product-2.png"
                  className="md:col-span-2"
                />
              </BentoGrid>
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <CTASplit
          headline="Tell us what you’re building."
          description="We’ll recommend the right scope (concept only, full drawings, or execution support) and share a clear quote."
          ctaLabel="Contact Us"
          ctaHref="/contact"
          secondaryCtaLabel="View Pricing"
          secondaryCtaHref="/pricing"
          imageUrl="/images/hero.png"
        />
      </motion.div>
    </main>
  );
}
