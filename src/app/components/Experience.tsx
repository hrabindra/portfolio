import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      year: '2020 - Present',
      role: 'Design Team Lead',
      company: 'Digi Hub',
      description: 'Led UX strategy for scalable platforms'
    },
    {
      year: '2018 - 2020',
      role: 'Lead Product Designer',
      company: 'Fintech Startup',
      description: 'End-to-end financial product experiences'
    },
    {
      year: '2016 - 2018',
      role: 'UX Designer',
      company: 'Insurance Tech',
      description: 'Workflow efficiency & engagement systems'
    },
    {
      year: '2014 - 2016',
      role: 'UI/UX Designer',
      company: 'Healthcare Platform',
      description: 'Accessible healthcare interfaces'
    },
    {
      year: '2012 - 2014',
      role: 'Junior Designer',
      company: 'Digital Agency',
      description: 'Client websites and applications'
    }
  ];

  return (
    <section className="py-32 bg-[#0A0A0A] px-6 lg:px-16 border-t border-white/5" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-xs tracking-wider text-gray-500 mb-4">EXPERIENCE</div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight">CAREER</h2>
        </motion.div>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="border-t border-white/10 py-8 hover:border-[#5505D9]/50 transition-colors">
                <div className="grid grid-cols-12 gap-8 items-baseline">
                  <div className="col-span-12 md:col-span-2 text-sm text-gray-600">
                    {exp.year}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-[#5505D9] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm tracking-wider text-gray-500">{exp.company}</div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <p className="text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}