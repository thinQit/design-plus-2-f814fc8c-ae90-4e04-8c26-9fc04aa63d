"use client";

import { motion } from "framer-motion";

import { HeroMinimal } from '@/components/blocks/HeroMinimal'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { GalleryMasonry } from '@/components/blocks/GalleryMasonry'
import { TestimonialsGrid } from '@/components/blocks/TestimonialsGrid'
import { CTASplit } from '@/components/blocks/CTASplit'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { LogoCloud } from '@/components/blocks/LogoCloud'

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main>
      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <HeroMinimal
          headline="Architectural excellence in every detail."
          subheadline="Design Plus designs homes, mandirs, hotels, and restaurants with a calm, modern language—where planning, proportion, and materiality lead."
          primaryCta={{ label: "View Portfolio", href: "/portfolio" }}
          secondaryCta={{ label: "Talk to Us", href: "/contact" }}
          imageUrl="/images/hero.png"
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <LogoCloud
          headline="Trusted by builders, owners, and hospitality teams"
          logos={[
            { name: "Partner One", imageUrl: "/images/product-1.png" },
            { name: "Partner Two", imageUrl: "/images/product-2.png" },
            { name: "Partner Three", imageUrl: "/images/product-3.png" },
            { name: "Partner Four", imageUrl: "/images/product-3.png" },
            { name: "Partner Five", imageUrl: "/images/product-3.png" },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <FeaturesGrid
          badge="Core Specialities"
          headline="Designed for living, worship, and hospitality."
          subheadline="From concept to execution, we balance aesthetics with buildability—so your space feels refined and works flawlessly."
          features={[
            { icon: "🏠", title: "Homes", description: "Contemporary residences with efficient planning, daylight strategy, and premium finishes." },
            { icon: "🛕", title: "Mandirs", description: "Sacred spaces with proportion, symmetry, and material choices that honor tradition." },
            { icon: "🏨", title: "Hotels", description: "Guest-first layouts, durable detailing, and a cohesive brand experience across spaces." },
            { icon: "🍽️", title: "Restaurants", description: "Atmosphere-driven interiors with smart circulation, lighting, and acoustic comfort." },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <StatsCounter
          bgColor="bg-card text-white"
          stats={[
            { value: "10+", label: "Years of practice" },
            { value: "120+", label: "Concepts delivered" },
            { value: "40+", label: "Sites executed" },
            { value: "4", label: "Core categories" },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <GalleryMasonry
          headline="Selected work"
          subheadline="A snapshot of our architectural language—clean lines, tonal depth, and precise detailing."
          images={[
            { url: "/images/product-1.png", alt: "Residential exterior concept", caption: "Modern home — facade study" },
            { url: "/images/product-2.png", alt: "Mandir interior concept", caption: "Mandir — material palette" },
            { url: "/images/product-3.png", alt: "Hotel lobby concept", caption: "Hotel — lobby volume" },
            { url: "/images/product-1.png", alt: "Restaurant interior concept", caption: "Restaurant — lighting + seating" },
            { url: "/images/product-1.png", alt: "Residential interior concept", caption: "Home — living space" },
            { url: "/images/about.png", alt: "Architectural detail", caption: "Detail — structure + shadow" },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <TestimonialsGrid
          headline="Clients value clarity and execution."
          subheadline="We keep the process calm and transparent—so decisions are faster and outcomes are better."
          testimonials={[
            {
              quote: "The planning was extremely practical and the elevations looked premium. Execution support was a big plus.",
              name: "Home Owner",
              title: "Residential Project",
              rating: 5,
            },
            {
              quote: "They understood the mandir requirements and delivered a design that felt traditional yet modern.",
              name: "Trustee",
              title: "Mandir Renovation",
              rating: 5,
            },
            {
              quote: "Our restaurant layout improved flow and seating comfort. The lighting plan elevated the ambience.",
              name: "Founder",
              title: "Restaurant Fit-out",
              rating: 5,
            },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <FAQAccordion
          headline="Frequently asked questions"
          subheadline="A few quick answers before we start."
          items={[
            {
              question: "Do you handle both architecture and interiors?",
              answer:
                "Yes. We can deliver end-to-end design including planning, elevations, interior layouts, material palettes, and execution drawings.",
            },
            {
              question: "What is your typical project timeline?",
              answer:
                "Timelines vary by scope. After a short discovery call, we share a phased schedule for concept, revisions, and final drawings.",
            },
            {
              question: "Can you work with my contractor?",
              answer:
                "Absolutely. We coordinate with your contractor to ensure drawings are buildable and key details are executed correctly.",
            },
          ]}
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <CTASplit
          headline="Draft the future of your space."
          description="Share your site location and requirements. We’ll respond with the next steps and a clear quote."
          ctaLabel="Request a Quote"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Services"
          secondaryCtaHref="/services"
          imageUrl="/images/product-2.png"
        />
      </motion.div>
    </main>
  );
}
