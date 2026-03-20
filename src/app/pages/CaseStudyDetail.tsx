import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { getCaseStudyById } from '../data/caseStudies';
import { CustomCursor } from '../components/CustomCursor';

export function CaseStudyDetail() {
  const { id } = useParams();
  const caseStudy = id ? getCaseStudyById(id) : undefined;

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center cursor-none" style={{ fontFamily: "'Inter', sans-serif" }}>
        <CustomCursor />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">CASE STUDY NOT FOUND</h1>
          <Link to="/" className="text-[#5505D9] hover:text-white font-semibold">
            RETURN TO HOME
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white cursor-none" style={{ fontFamily: "'Inter', sans-serif" }}>
      <CustomCursor />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between py-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="px-8 py-3 rounded-full border border-white/20 text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-all"
              >
                ← BACK
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/#contact" 
                className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-[#5505D9] hover:text-white transition-all"
              >
                CONTACT
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-xs tracking-wider text-gray-500 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {caseStudy.category}
            </motion.div>

            <motion.h1
              className="text-[clamp(3rem,8vw,8rem)] font-bold tracking-tight leading-[0.95] mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {caseStudy.title}
            </motion.h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
              {[
                { label: 'ROLE', value: caseStudy.role },
                { label: 'DURATION', value: caseStudy.duration },
                { label: 'YEAR', value: caseStudy.year },
                { label: 'IMPACT', value: caseStudy.impactValue, highlight: true },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`text-xs tracking-wider ${item.highlight ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                    {item.label}
                  </div>
                  <div className={`${item.highlight ? 'text-3xl font-bold text-[#5505D9]' : 'text-lg font-bold'}`}>
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-32 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            className="aspect-[16/9] border border-white/10 bg-gradient-to-br from-[#5505D9]/10 to-transparent flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-[15rem] font-bold text-white/5"
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {caseStudy.category.charAt(0)}
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs tracking-wider text-gray-500">OVERVIEW</div>
            </motion.div>
            <motion.div
              className="lg:col-span-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-3xl leading-relaxed text-gray-300">
                {caseStudy.overview}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs tracking-wider text-gray-500">CHALLENGE</div>
            </motion.div>
            <motion.div
              className="lg:col-span-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl leading-relaxed text-gray-400">
                {caseStudy.challenge}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-3">
              <div className="text-xs tracking-wider text-gray-500">APPROACH</div>
            </div>
            <div className="lg:col-span-9">
              <div className="space-y-12">
                {caseStudy.approach.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="border-l-2 border-white/10 pl-8 hover:border-[#5505D9] transition-colors"
                  >
                    <div className="text-sm text-gray-600 mb-2">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-3">
              <div className="text-xs tracking-wider text-gray-500">RESULTS</div>
            </div>
            <div className="lg:col-span-9">
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <p className="text-gray-300 text-lg">
                      • {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-32 px-6 lg:px-16 border-t border-white/5 bg-[#5505D9]">
          <div className="max-w-[1000px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-3xl md:text-4xl font-bold leading-relaxed mb-12">
                "{caseStudy.testimonial.quote}"
              </p>
              <div>
                <div className="text-lg font-bold mb-1">{caseStudy.testimonial.author}</div>
                <div className="text-white/80">{caseStudy.testimonial.role}</div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="py-32 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            INTERESTED IN SIMILAR RESULTS?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/#contact"
              className="inline-block px-12 py-5 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-[#5505D9] hover:text-white transition-all"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}