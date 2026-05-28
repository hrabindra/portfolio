import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, #5505D9 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #5505D9 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, #5505D9 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, #5505D9 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, #5505D9 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="w-full pt-32 px-6 lg:px-16 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-2 h-2 bg-[#5505D9] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs tracking-wider text-gray-400">AVAILABLE FOR SELECT PROJECTS — APRIL 2026</span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h1 className="text-[clamp(3rem,8vw,9rem)] flex justify-center leading-[0.95] font-bold tracking-tight mb-8">
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Hi, I am Rabindra
              {/* </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              > */}
                
              </motion.span>
            </h1>
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-xl text-gray-400 leading-relaxed mb-8 ">
                Senior AI-Focused UI/UX Designer crafting intuitive experiences for Fintech, SaaS, 
                Healthcare, and AI products. 12+ years turning complex problems into simple, elegant solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto"
          >
            {[
              { value: '12+', label: 'YEARS' },
              { value: '50+', label: 'PROJECTS' },
              { value: '35%', label: 'IMPROVEMENT' },
              { value: '5+', label: 'INDUSTRIES' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1, type: 'spring' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm tracking-wider text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
}