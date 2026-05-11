import React from 'react';
import { Stethoscope, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail, ShieldCheck, Award } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
     <footer className="bg-slate-900 pt-24 pb-12 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-12 gap-16 mb-20">
              {/* Brand Section */}
              <div className="lg:col-span-4">
                 <a href="#home" className="flex items-center space-x-2 group mb-8">
                    <div className="bg-primary-600 p-2 rounded-xl">
                       <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-heading font-bold text-white tracking-tight">
                       Lumina<span className="text-primary-400">Physio</span>
                    </span>
                 </a>
                 <p className="text-slate-400 font-medium leading-relaxed mb-10 max-w-sm">
                    Premium clinical rehabilitation and sports performance recovery. We provide evidence-based care for complex musculoskeletal conditions.
                 </p>
                 <div className="flex items-center space-x-4">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                       <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all">
                          <Icon className="w-5 h-5" />
                       </a>
                    ))}
                 </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-2">
                 <h5 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-8">Patient Care</h5>
                 <ul className="space-y-4">
                    {['Our Services', 'Clinical Staff', 'Insurance', 'Patient Portal', 'Contact'].map((link) => (
                       <li key={link}>
                          <a href="#" className="text-slate-400 font-bold hover:text-primary-400 transition-colors">{link}</a>
                       </li>
                    ))}
                 </ul>
              </div>

              {/* Resources */}
              <div className="lg:col-span-2">
                 <h5 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-8">Resources</h5>
                 <ul className="space-y-4">
                    {['Rehab Blog', 'FAQs', 'Privacy Policy', 'HIPAA Notice', 'Terms'].map((link) => (
                       <li key={link}>
                          <a href="#" className="text-slate-400 font-bold hover:text-primary-400 transition-colors">{link}</a>
                       </li>
                    ))}
                 </ul>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-4">
                 <h5 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-8">Join Our Health Newsletter</h5>
                 <p className="text-sm text-slate-400 font-medium mb-6">Receive expert recovery tips and clinic updates directly in your inbox.</p>
                 <form className="relative">
                    <input 
                       type="email" 
                       placeholder="Email Address" 
                       className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 outline-none focus:border-primary-500 transition-colors text-sm"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-primary-600 text-white px-4 rounded-xl hover:bg-primary-500 transition-colors">
                       <Mail className="w-5 h-5" />
                    </button>
                 </form>
                 
                 <div className="mt-10 flex items-center space-x-6 opacity-30">
                    <div className="flex items-center space-x-2">
                       <ShieldCheck className="w-5 h-5" />
                       <span className="text-[10px] font-black uppercase tracking-widest">HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <Award className="w-5 h-5" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Board Certified</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Legal & Bottom */}
           <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-slate-500 text-xs font-bold">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                 <p>© 2024 Lumina Physical Therapy & Rehabilitation. NPI #1234567890</p>
                 <div className="flex space-x-6">
                    <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Accessibility</a>
                 </div>
              </div>
              <div className="flex items-center space-x-6">
                 <p className="max-w-[200px] text-right opacity-40">Medical Disclaimer: Information on this site is not medical advice.</p>
                 <button onClick={scrollToTop} className="bg-white/5 p-3 rounded-full hover:bg-primary-600 transition-colors">
                    <ArrowUp className="w-5 h-5" />
                 </button>
              </div>
           </div>
        </div>
     </footer>
  );
};

export default Footer;
