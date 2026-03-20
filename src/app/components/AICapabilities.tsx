import { motion } from 'motion/react';

export function AICapabilities() {
  return (
    <section className="py-32 bg-[#5505D9] px-6 lg:px-16" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="text-xs tracking-wider text-white/60 mb-8">AI EXPERTISE</div>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold tracking-tight leading-[0.95] mb-12">
            DESIGNING FOR THE AI ERA
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Combining human-centered design with artificial intelligence to create 
            next-generation experiences that feel natural and intuitive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {['AI-Powered User Flows', 'Prompt Thinking & UX', 'Human-AI Interaction', 'Data-Informed UX', 'Automation-First Thinking'].map((capability, index) => (
            <div
              key={index}
              className="hover:opacity-70 transition-opacity"
            >
              <div className="text-5xl font-bold text-white/20 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="text-sm font-semibold tracking-wide">
                {capability}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}