"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from '@/components/blocks/HeroMinimal'
import { PricingTable } from '@/components/blocks/PricingTable'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASplit } from '@/components/blocks/CTASplit'

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function PricingPage() {
  return (
    <main>
      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <HeroMinimal
          headline="Simple packages. Clear deliverables."
          subheadline="Pick a starting point—then we tailor scope to your site, timeline, and execution needs."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
          imageUrl="/images/product-3.png"
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <PricingTable
          headline="Pricing"
          subheadline="Indicative packages. Final pricing depends on built-up area, complexity, and site conditions."
          tiers={[
            {
              name: "Concept",
              price: "₹25k",
              period: "starting",
              description: "Best for early-stage planning and design direction.",
              features: ["Site + requirement review", "Planning options", "Mood + material direction", "1–2 revision rounds"],
              ctaLabel: "Choose Concept",
              ctaHref: "/contact",
            },
            {
              name: "Design + Drawings",
              price: "₹75k",
              period: "starting",
              description: "For clients ready to move toward execution with clarity.",
              features: ["Planning + elevations", "Interior layouts", "Lighting + ceiling plan", "Key detail drawings", "3 revision rounds"],
              ctaLabel: "Choose Design + Drawings",
              ctaHref: "/contact",
              highlighted: true
            },
            {
              name: "Execution Support",
              price: "Custom",
              period: "",
              description: "For on-site coordination and quality control.",
              features: ["Vendor/contractor coordination", "Material selection support", "Site visits (as needed)", "Detail checks + clarifications"],
              ctaLabel: "Talk to Us",
              ctaHref: "/contact",
            },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <FAQAccordion
          headline="Pricing FAQs"
          subheadline="What clients usually ask before starting."
          items={[
            {
              question: "Is this final pricing?",
              answer:
                "These are starting points. We confirm pricing after understanding area, scope, and the level of detailing required.",
            },
            {
              question: "Do you offer site visits?",
              answer:
                "Yes, execution support can include site visits depending on location and project needs.",
            },
            {
              question: "Can I start with Concept and upgrade later?",
              answer:
                "Yes. Many clients begin with concept and then move into full drawings once the direction is locked.",
            },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <CTASplit
          headline="Get an accurate quote in one call."
          description="Share your site location, plot size, and category (home/mandir/hotel/restaurant). We’ll respond with scope + timeline."
          ctaLabel="Request a Quote"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Services"
          secondaryCtaHref="/services"
          imageUrl="/images/product-1.png"
        />
      </motion.div>
    </main>
  );
}
