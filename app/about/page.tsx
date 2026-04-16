"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from '@/components/blocks/HeroMinimal'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { CTASplit } from '@/components/blocks/CTASplit'

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main>
      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <HeroMinimal
          headline="A technical atelier for modern architecture."
          subheadline="Design Plus is built on precision—clear grids, calm materials, and decisions backed by function, light, and proportion."
          primaryCta={{ label: "See Work", href: "/portfolio" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          imageUrl="/images/product-1.png"
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <div className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4">
            <StickyScrollReveal
              content={[
                {
                  title: "Philosophy",
                  description:
                    "We design spaces that feel quiet, premium, and intentional—where every line has a reason and every material has a role.",
                  content: (
                    <div className="h-full w-full rounded-xl bg-card/90 p-6 text-white">
                      <p className="text-sm uppercase tracking-widest text-white/70">Blueprint mindset</p>
                      <p className="mt-3 text-lg font-semibold">Clarity first, then character.</p>
                      <p className="mt-2 text-white/80">
                        We start with planning and structure, then layer light, texture, and detail.
                      </p>
                    </div>
                  ),
                },
                {
                  title: "Process",
                  description:
                    "A calm workflow: discovery → concept → revisions → execution drawings. You always know what’s next.",
                  content: (
                    <div className="h-full w-full rounded-xl bg-background/70 backdrop-blur-xl p-6">
                      <p className="text-sm uppercase tracking-widest text-muted-foreground">Workflow</p>
                      <p className="mt-3 text-lg font-semibold text-foreground">Fast decisions, fewer surprises.</p>
                      <p className="mt-2 text-foreground">
                        We align early on budget, timeline, and priorities to keep the project moving.
                      </p>
                    </div>
                  ),
                },
                {
                  title: "Execution support",
                  description:
                    "We coordinate with contractors and vendors so the built outcome matches the design intent.",
                  content: (
                    <div className="h-full w-full rounded-xl bg-teal-900/90 p-6 text-white">
                      <p className="text-sm uppercase tracking-widest text-white/70">On-site clarity</p>
                      <p className="mt-3 text-lg font-semibold">Details that build well.</p>
                      <p className="mt-2 text-white/80">
                        Drawings, material guidance, and key checks—so quality stays consistent.
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <StatsCounter
          bgColor="bg-card text-white"
          stats={[
            { value: "Planning", label: "Optimized layouts" },
            { value: "Light", label: "Daylight strategy" },
            { value: "Detail", label: "Buildable drawings" },
            { value: "Calm", label: "Clear workflow" },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <TeamGrid
          headline="Team"
          subheadline="A small, focused studio built around precision and accountability."
          members={[
            {
              name: "Lead Architect",
              title: "Design Direction",
              bio: "Concept, planning, and elevations with a modern architectural language.",
              imageUrl: "/images/product-3.png",
            },
            {
              name: "Interior Designer",
              title: "Interiors & Styling",
              bio: "Material palettes, lighting, and furniture layouts for premium comfort.",
              imageUrl: "/images/product-2.png",
            },
            {
              name: "Site Coordinator",
              title: "Execution Support",
              bio: "On-site coordination and detail checks to protect design intent.",
              imageUrl: "/images/product-3.png",
            },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <CTASplit
          headline="Have a site? Let’s shape it."
          description="Send your plot size, location, and requirements. We’ll suggest the right scope and timeline."
          ctaLabel="Start a Project"
          ctaHref="/contact"
          secondaryCtaLabel="View Portfolio"
          secondaryCtaHref="/portfolio"
          imageUrl="/images/hero.png"
        />
      </motion.div>
    </main>
  );
}
