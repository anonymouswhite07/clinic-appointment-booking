import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, ShieldCheck, HeartPulse } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs and Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 30, 0],
            translateY: [0, -40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-100/50 rounded-full blur-3xl opacity-60"
        />
        <motion.div
           animate={{
            scale: [1.2, 1, 1.2],
            rotate: [30, 0, 30],
            translateX: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary-200/40 rounded-full blur-3xl opacity-40"
        />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-100 text-primary-700 font-medium text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Award-winning healthcare excellence</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-slate-900 leading-[1.1] mb-6">
            Compassionate <span className="text-primary-600">Care</span> for Your Family.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            Experience world-class healthcare with a personal touch. Lumina Health brings together top specialists and cutting-edge technology to keep you at your best.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#booking" className="btn-primary w-full sm:w-auto text-lg py-4 group">
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="text-slate-600 font-semibold hover:text-primary-600 transition-colors flex items-center space-x-2">
              Explore Our Services
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-8 opacity-70">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-primary-500" />
              <span className="text-sm font-medium text-slate-600">Certified Clinic</span>
            </div>
            <div className="flex items-center space-x-2">
              <HeartPulse className="w-5 h-5 text-primary-500" />
              <span className="text-sm font-medium text-slate-600">Expert Doctors</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Glass Card Representing an Interface */}
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent rounded-[3rem] -rotate-6 blur-2xl"></div>
            
            {/* The "Doctor Image" placeholder - I'll ask for an image if needed, or use a placeholder */}
             <div className="absolute inset-10 bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl overflow-hidden border-8 border-white/40 backdrop-blur-sm -rotate-3 z-0 group hover:rotate-0 transition-transform duration-700">
               <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" alt="Doctor" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
             </div>

            {/* Floating Glass Stats */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass-card p-6 flex items-center space-x-4 z-10"
            >
              <div className="bg-green-100 p-3 rounded-2xl">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium leading-none mb-1">Satisfied Patients</p>
                <p className="text-2xl font-bold text-slate-800 leading-none">12.5k+</p>
              </div>
            </motion.div>

            <motion.div
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-8 -left-4 glass-card p-6 flex items-center space-x-4 z-10"
            >
              <div className="bg-primary-100 p-3 rounded-2xl">
                <div className="flex -space-x-4">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden shadow-sm">
                       <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Patient" />
                     </div>
                   ))}
                </div>
              </div>
              <div>
                 <p className="text-sm text-slate-500 font-medium leading-none mb-1">Top Rated</p>
                 <p className="text-xl font-bold text-slate-800 leading-none">4.9/5</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
