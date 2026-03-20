import { motion } from 'motion/react';

export function LeadConversion() {
  return (
    <section className="py-32 bg-[#0A0A0A] px-6 lg:px-16 border-t border-white/5" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight leading-tight mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            READY TO TRANSFORM YOUR PRODUCT EXPERIENCE?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I take on limited projects each year to ensure quality and measurable impact 
            for every client. Let's discuss how I can help.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="px-12 py-5 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-[#5505D9] hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              START A PROJECT
            </motion.a>

            <motion.a
              href="#work"
              className="px-12 py-5 rounded-full border border-white/20 text-sm font-bold tracking-wide hover:border-white hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW CASE STUDIES
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}