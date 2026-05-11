import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope, ExternalLink, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Specialists', href: '#doctors' },
    { name: 'Insurance', href: '#insurance' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary-900 text-white py-2 px-6 text-center text-xs md:text-sm font-medium">
        <span className="opacity-80">Now accepting new patients & most insurance plans.</span>
        <a href="#booking" className="ml-3 underline hover:text-primary-300 transition-colors">Schedule a consultation →</a>
      </div>

      <nav className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50' : 'py-5 bg-transparent'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="bg-primary-600 p-2 rounded-xl shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-heading font-bold text-slate-800 tracking-tight">
              Lumina<span className="text-primary-600">Physio</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary-600 font-semibold text-sm transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="h-6 w-px bg-slate-200"></div>
            <a
              href="https://portal.luminaphysio.com"
              className="flex items-center space-x-1.5 text-slate-600 hover:text-primary-600 font-bold text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Patient Portal</span>
            </a>
            <a
              href="#booking"
              className="btn-primary py-2.5 px-6 text-sm"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <a href="tel:+15551234567" className="p-2 text-primary-600 bg-primary-50 rounded-full">
              <PhoneCall className="w-5 h-5" />
            </a>
            <button
              className="p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/98 backdrop-blur-2xl border-t border-slate-100 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-bold text-slate-700 hover:text-primary-600 py-3 border-b border-slate-50 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://portal.luminaphysio.com"
                  className="flex items-center space-x-2 text-lg font-bold text-slate-700 py-3 border-b border-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Patient Portal</span>
                </a>
                <div className="pt-4 flex flex-col space-y-3">
                   <a
                    href="#booking"
                    className="btn-primary w-full text-center py-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Schedule Online
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="btn-secondary w-full text-center py-4 border-2 border-primary-100 flex items-center justify-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <PhoneCall className="w-5 h-5" />
                    <span>Call (555) 123-4567</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
