"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from '@/components/blocks/HeroMinimal'
import { ContactForm } from '@/components/blocks/ContactForm'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

const section = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main>
      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <HeroMinimal
          headline="Contact"
          subheadline="Tell us what you’re building—home, mandir, hotel, or restaurant. We’ll respond with next steps and a clear quote."
          primaryCta={{ label: "Request a Quote", href: "#form" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
          imageUrl="/images/product-3.png"
        />
      </motion.div>

      <motion.div variants={section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <TracingBeam>
          <div id="form" className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="rounded-2xl overflow-hidden bg-card">
                  <div className="relative h-[360px] w-full">
                    <img
                      src="/images/hero.png"
                      alt="Map placeholder"
                      className="h-full w-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-xs font-medium uppercase tracking-widest text-white/70">Studio</p>
                      <p className="mt-2 text-2xl font-semibold text-white">Design Plus 2</p>
                      <p className="mt-1 text-white/80">
                        Share your location + plot size. We work with clients across regions.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <ContactForm
                    headline="Send an inquiry"
                    subheadline="We typically reply within 24–48 hours with a few questions and a proposed scope."
                    contactInfo={[
                      { icon: "📞", label: "Phone", value: "+91 00000 00000" },
                      { icon: "✉️", label: "Email", value: "hello@designplus.example" },
                      { icon: "📍", label: "Location", value: "India (remote + on-site as needed)" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      </motion.div>
    </main>
  );
}
