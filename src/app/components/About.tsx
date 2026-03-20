import { motion } from 'motion/react';

export function About() {
  const expertise = [
    'Complex B2B Platforms',
    'Design Systems & Scalable UI',
    'Conversion-Focused UX',
    'End-to-End Product Design',
    'AI-Powered User Flows',
    'Data-Informed UX Decisions'
  ];

  return (
    <section id="about" className="py-32 bg-[#0A0A0A] px-6 lg:px-16 border-t border-white/5" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-xs tracking-wider text-gray-500 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ABOUT
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold tracking-tight mb-12 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Design that delivers measurable results
            </motion.h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                With over 12 years of experience, I've designed scalable digital products across 
                fintech, insurance, SaaS, healthcare, and nonprofit sectors.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I combine research, data insights, and AI-driven thinking to craft 
                experiences that don't just look good — they perform and drive business outcomes.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Expertise List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-xs tracking-wider text-gray-500 mb-8">CORE EXPERTISE</div>
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    className="text-xl font-semibold group-hover:text-[#5505D9] transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    {item}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}