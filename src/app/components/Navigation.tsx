import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="w-full px-6 lg:px-16">
        <div className="flex items-center justify-between py-8 max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/" className="text-xl font-bold tracking-tight hover:text-[#5505D9] transition-colors">
              RH
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-8 lg:gap-12"
          >
            <a href="#work" className="text-sm tracking-wide text-gray-400 hover:text-white transition-colors">
              WORK
            </a>
            <a href="#about" className="text-sm tracking-wide text-gray-400 hover:text-white transition-colors">
              ABOUT
            </a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-[#5505D9] hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}