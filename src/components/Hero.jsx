import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, ShieldCheck, HeartPulse, Clock, Activity } from 'lucide-react';

const Hero = () => {
  const insuranceLogos = [
    { name: 'Aetna', color: 'text-purple-600' },
    { name: 'BlueCross', color: 'text-blue-700' },
    { name: 'UnitedHealth', color: 'text-blue-900' },
    { name: 'Cigna', color: 'text-green-600' },
    { name: 'Medicare', color: 'text-red-700' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#fbfdff]">
      {/* Background Blobs and Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 15, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-[120px]"
        />
        <motion.div
           animate={{
            scale: [1.1, 1, 1.1],
            rotate: [-15, 0, -15],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white border border-primary-100 px-4 py-2 rounded-2xl shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-primary-900 font-bold text-xs uppercase tracking-wider">Live Availability: 4 slots left today</span>
            </motion.div>
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-2xl border border-primary-100 text-primary-700 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Voted Top Physio 2024</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-slate-900 leading-[1.05] mb-8 tracking-tight">
            Advanced <span className="text-primary-600">Recovery</span> <br className="hidden md:block" /> for Peak Human Performance.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
            Clinical excellence meets personalized care. We specialize in complex musculoskeletal rehabilitation, sports performance, and post-surgical recovery.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a href="#booking" className="btn-primary w-full sm:w-auto text-lg py-4.5 px-10 group">
              Schedule Consultation
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <div className="flex items-center space-x-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Patient" />
                  ))}
               </div>
               <div>
                  <div className="flex items-center text-amber-500 mb-0.5">
                    {[1,2,3,4,5].map(i => <Activity key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-xs font-bold text-slate-800">500+ Local Success Stories</p>
               </div>
            </div>
          </div>

          {/* Insurance Partners */}
          <div className="pt-8 border-t border-slate-200/60">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Partners in Care & Insurance</p>
             <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {insuranceLogos.map(logo => (
                  <span key={logo.name} className={`text-lg md:text-xl font-heading font-black tracking-tighter ${logo.color}`}>{logo.name}</span>
                ))}
             </div>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full aspect-[4/5] max-w-[550px]">
            {/* Main Interactive Card */}
            <div className="absolute inset-4 bg-white rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border-[12px] border-white z-0 group">
               <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Clinical Setting" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Floating Live Telehealth Card */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-12 -left-8 glass-card p-5 z-20 max-w-[240px] shadow-2xl border-white/60"
            >
              <div className="flex items-center space-x-3 mb-3">
                 <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                 <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Next Available Appt</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                 <div className="bg-primary-50 p-2.5 rounded-2xl">
                    <Clock className="w-5 h-5 text-primary-600" />
                 </div>
                 <div>
                    <p className="text-sm font-black text-slate-800">Today, 2:45 PM</p>
                    <p className="text-[10px] font-bold text-primary-600 italic">Save 15% - Online Booking</p>
                 </div>
              </div>
              <button className="w-full py-2 bg-slate-900 text-white text-[10px] font-black rounded-xl hover:bg-primary-600 transition-colors">SECURE SLOT</button>
            </motion.div>

            {/* Performance Metric Card */}
            <motion.div
               animate={{ y: [0, 15, 0], rotate: [0, -1, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -right-8 glass-card p-6 z-20 shadow-2xl border-white/60 bg-white/80"
            >
              <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Patient Success Rate</p>
                    <p className="text-2xl font-black text-slate-900 leading-none">98.4%</p>
                 </div>
              </div>
              <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '98.4%' }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   className="h-full bg-green-500"
                 ></motion.div>
              </div>
            </motion.div>

            {/* Clinical Accreditation */}
            <div className="absolute top-1/2 -right-4 translate-y-[-50%] space-y-3 z-10 hidden md:block">
               {[ShieldCheck, CheckCircle].map((Icon, i) => (
                 <div key={i} className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-primary-600">
                    <Icon className="w-6 h-6" />
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
