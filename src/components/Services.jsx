import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dna, 
  Activity, 
  ArrowRightCircle,
  Microscope,
  Zap,
  RotateCcw,
  Hand
} from 'lucide-react';

const services = [
  {
    title: "Post-Surgical Rehab",
    icon: RotateCcw,
    desc: "Targeted protocols for ACL reconstruction, joint replacement, and spinal surgery recovery.",
    details: ["Personalized timeline", "Progress reporting", "Surgeon coordination"],
    color: "bg-blue-100/50 text-blue-600"
  },
  {
    title: "Elite Sports Therapy",
    icon: Zap,
    desc: "Biomechanical analysis and high-performance conditioning for professional and amateur athletes.",
    details: ["Gait analysis", "Return-to-play testing", "Injury prevention"],
    color: "bg-orange-100/50 text-orange-600"
  },
  {
    title: "Neuromuscular Re-ed",
    icon: Activity,
    desc: "Specialized care for chronic nerve pain, vestibular issues, and balance disorders.",
    details: ["Proprioceptive training", "Balance assessment", "Coordination drills"],
    color: "bg-purple-100/50 text-purple-600"
  },
  {
    title: "Pelvic Health",
    icon: Dna,
    desc: "Confidential and specialized therapy for pelvic floor dysfunction and pre/post-natal care.",
    details: ["Specialist consultation", "Evidence-based therapy", "Long-term wellness"],
    color: "bg-rose-100/50 text-rose-600"
  },
  {
    title: "Hand & Upper Limb",
    icon: Hand,
    desc: "Advanced treatment for carpal tunnel, repetitive strain, and complex upper extremity trauma.",
    details: ["Custom splinting", "Ergonomic assessment", "Dexterity training"],
    color: "bg-indigo-100/50 text-indigo-600"
  },
  {
    title: "Clinical Diagnostics",
    icon: Microscope,
    desc: "On-site musculoskeletal ultrasound and digital gait analysis for precise injury pinpointing.",
    details: ["Immediate imaging", "Digital tracking", "Referral coordination"],
    color: "bg-emerald-100/50 text-emerald-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative bg-white overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-full h-[600px] bg-slate-50 opacity-50" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-black text-xs uppercase tracking-[0.3em] mb-4"
            >
              Our Clinical Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold text-slate-900 leading-tight"
            >
              Specialized <span className="text-primary-600">Recovery</span> <br /> Programs
            </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-slate-500 max-w-sm mt-6 md:mt-0 font-medium leading-relaxed"
          >
            We don't believe in generic exercises. Our treatments are backed by clinical data and tailored to your specific anatomy and goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-1 bg-slate-100 rounded-[3rem] hover:bg-gradient-to-br hover:from-primary-600 hover:to-primary-400 transition-all duration-500"
            >
              <div className="bg-white h-full p-10 rounded-[2.8rem] transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-none">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 font-medium text-sm">{service.desc}</p>
                
                <ul className="space-y-3 mb-8">
                   {service.details.map((detail, i) => (
                     <li key={i} className="flex items-center text-xs font-bold text-slate-700 opacity-80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-3"></div>
                        {detail}
                     </li>
                   ))}
                </ul>

                <a href="#booking" className="flex items-center space-x-2 text-primary-600 font-black text-xs uppercase tracking-widest group/link hover:text-slate-900 transition-colors">
                  <span>View Treatment Plan</span>
                  <ArrowRightCircle className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
