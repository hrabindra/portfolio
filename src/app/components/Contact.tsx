import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0A0A0A] px-6 lg:px-16 border-t border-white/5" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left */}
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
              GET IN TOUCH
            </motion.div>
            <motion.h2
              className="text-[clamp(2.5rem,6vw,6rem)] font-bold tracking-tight leading-[0.95] mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              LET'S CREATE SOMETHING AMAZING
            </motion.h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-sm tracking-wider text-gray-500 mb-2">EMAIL</div>
                <motion.a 
                  href="mailto:hrabindra.work@gmail.com"
                  className="text-2xl font-bold hover:text-[#5505D9] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  hrabindra.work@gmail.com
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-sm tracking-wider text-gray-500 mb-2">SOCIAL</div>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="text-lg hover:text-[#5505D9] transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    LinkedIn
                  </motion.a>
                  <span className="text-gray-700">/</span>
                  <motion.a
                    href="#"
                    className="text-lg hover:text-[#5505D9] transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    Dribbble
                  </motion.a>
                  <span className="text-gray-700">/</span>
                  <motion.a
                    href="#"
                    className="text-lg hover:text-[#5505D9] transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    Behance
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-3 h-3 bg-[#5505D9] rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="text-xs tracking-wider text-gray-500">AVAILABILITY</div>
              </div>
              <div className="text-3xl font-bold mb-4">
                OPEN FOR NEW PROJECTS
              </div>
              <div className="text-gray-400">
                Limited spots available for select projects starting April 2026
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}