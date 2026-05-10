import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
     <footer className="py-16 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-primary-300 to-primary-600"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
           <div className="md:col-span-2">
              <a href="#home" className="flex items-center space-x-2 group mb-6">
                <div className="bg-primary-600 p-2 rounded-xl shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-heading font-bold text-slate-800 tracking-tight">
                  Lumina<span className="text-primary-600">Physio</span>
                </span>
              </a>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-medium">
                We are committed to providing the highest quality physiotherapy with a personal touch. Your recovery is our mission, your comfort is our priority.
              </p>
              <div className="flex items-center space-x-4">
                 {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                   <a 
                     key={i} 
                     href="#" 
                     className="bg-primary-50 p-3 rounded-2xl text-primary-600 hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm"
                   >
                     <Icon className="w-5 h-5" />
                   </a>
                 ))}
              </div>
           </div>

           <div>
              <h5 className="text-lg font-bold text-slate-900 mb-6 font-heading">Quick Links</h5>
              <ul className="space-y-4">
                 {['Home', 'About Us', 'Our Services', 'Meet Specialists', 'Appointments'].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-slate-500 font-semibold hover:text-primary-600 transition-colors flex items-center group">
                         <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-3 group-hover:bg-primary-600 group-hover:scale-125 transition-all"></span>
                         {link}
                      </a>
                   </li>
                 ))}
              </ul>
           </div>

           <div>
              <h5 className="text-lg font-bold text-slate-900 mb-6 font-heading">Legal & Privacy</h5>
              <ul className="space-y-4">
                 {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Patient Portal', 'Support Center'].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-slate-500 font-semibold hover:text-primary-600 transition-colors flex items-center group">
                         <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-3 group-hover:bg-primary-600 group-hover:scale-125 transition-all"></span>
                         {link}
                      </a>
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        <div className="container mx-auto px-6 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 font-medium space-y-4 md:space-y-0">
           <p>© 2026 Lumina Physio Group. All Rights Reserved.</p>
           <div className="flex items-center space-x-6">
              <p>Built for Physiotherapy Excellence</p>
              <button 
                onClick={scrollToTop} 
                className="bg-primary-50 p-2 rounded-full text-primary-600 hover:bg-primary-100 transition-colors shadow-sm"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
           </div>
        </div>
     </footer>
  );
};

export default Footer;
