export function Footer() {
  return (
    <footer className="py-12 bg-[#0A0A0A] px-6 lg:px-16 border-t border-white/5" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-600">
            © 2026 RABINDRA HUMAGAIN — ALL RIGHTS RESERVED
          </div>

          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/in/hrabindra/" className="text-sm text-gray-600 hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://dribbble.com/hrabindra" className="text-sm text-gray-600 hover:text-white transition-colors">DRIBBBLE</a>
            <a href="https://www.behance.net/hrabindra" className="text-sm text-gray-600 hover:text-white transition-colors">BEHANCE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}