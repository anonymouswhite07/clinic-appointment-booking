import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Baby, 
  Brain, 
  Dumbbell, 
  Hand, 
  UserRound, 
  ArrowRightCircle,
  Zap,
  ShieldCheck
} from 'lucide-react';

const services = [
  {
    title: "Sports Injury",
    icon: Activity,
    desc: "Specialized rehabilitation for athletes to return to peak performance.",
    color: "bg-blue-100/50 text-blue-600"
  },
  {
    title: "Pediatric Physio",
    icon: Baby,
    desc: "Gentle and effective therapy for children and adolescents.",
    color: "bg-purple-100/50 text-purple-600"
  },
  {
    title: "Neuro Rehab",
    icon: Brain,
    desc: "Focused therapy for neurological conditions and stroke recovery.",
    color: "bg-indigo-100/50 text-indigo-600"
  },
  {
    title: "Manual Therapy",
    icon: Hand,
    desc: "Hands-on techniques to relieve pain and improve joint mobility.",
    color: "bg-rose-100/50 text-rose-600"
  },
  {
    title: "Post-Surgery",
    icon: Zap,
    desc: "Accelerated recovery programs following orthopedic surgeries.",
    color: "bg-emerald-100/50 text-emerald-600"
  },
  {
    title: "Posture Correction",
    icon: UserRound,
    desc: "Ergonomic assessments and exercises for long-term spinal health.",
    color: "bg-orange-100/50 text-orange-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Specialized <span className="text-primary-600">Physiotherapy</span> Services
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="section-subtitle"
          >
            We provide a wide range of physiotherapy specialties under one roof, ensuring you receive comprehensive care using the latest rehabilitation techniques.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/20 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-3 leading-none">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
              
              <a href="#booking" className="flex items-center space-x-2 text-primary-600 font-bold group/link">
                <span>Learn More</span>
                <ArrowRightCircle className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
              </a>

              {/* Subtle background icon for premium look */}
              <service.icon className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.03] text-slate-900 group-hover:opacity-[0.05] transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
