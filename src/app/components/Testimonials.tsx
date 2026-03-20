import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      quote: 'Rabindra transformed our complex B2B platform into an intuitive experience. User activation increased by 35% within the first month.',
      author: 'Justin Hrischuk',
      role: 'Product Manager',
      company: 'Tech Startup'
    },
    {
      quote: 'Outstanding design work combined with strategic thinking. The design system he created has accelerated our development process significantly.',
      author: 'Suniti Thapa',
      role: 'CEO',
      company: 'SaaS Company'
    },
    {
      quote: 'A true professional who understands both user needs and business objectives. Delivered measurable improvements to our conversion funnel.',
      author: 'Goal Management Inc',
      role: 'Leadership Team',
      company: 'Enterprise Software'
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
          <div className="text-xs tracking-wider text-gray-500 mb-4">TESTIMONIALS</div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight">FEEDBACK</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full flex flex-col">
                <p className="text-lg text-gray-300 leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-6">
                  <div className="font-bold mb-1">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-[#5505D9] mt-1">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}