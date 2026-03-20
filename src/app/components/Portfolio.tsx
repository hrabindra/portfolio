import { motion } from 'motion/react';
import { Link } from 'react-router';
import { caseStudies } from '../data/caseStudies';

export function Portfolio() {
  return (
    <section id="work" className="py-32 bg-[#0A0A0A] px-6 lg:px-16" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <motion.div
            className="text-xs tracking-wider text-gray-500 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SELECTED WORK
          </motion.div>
          <motion.h2
            className="text-6xl md:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PROJECTS
          </motion.h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-2">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={`/case-study/${project.id}`}
                className="group block border-t border-white/10 hover:border-[#5505D9]/50 transition-colors"
              >
                <motion.div
                  className="py-12 grid grid-cols-12 gap-8 items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number */}
                  <div className="col-span-1 text-sm text-gray-600">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-[#5505D9] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Category */}
                  <div className="col-span-6 md:col-span-2">
                    <div className="text-sm tracking-wider text-gray-500">
                      {project.category}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 md:col-span-1 flex justify-end">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#5505D9] transition-all"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform transition-transform">
                        <path d="M1 15L15 1M15 1H1M15 1V15" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}