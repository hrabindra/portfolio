import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { AICapabilities } from '../components/AICapabilities';
import { Portfolio } from '../components/Portfolio';
import { Experience } from '../components/Experience';
import { LeadConversion } from '../components/LeadConversion';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white cursor-none">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <AICapabilities />
      <Portfolio />
      <Experience />
      <Testimonials />
      <LeadConversion />
      <Contact />
      <Footer />
    </div>
  );
}