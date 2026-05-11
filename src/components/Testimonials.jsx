import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Marathon Athlete",
    content: "After my ACL tear, I thought my running days were over. Dr. Rodriguez and the team didn't just fix my knee; they rebuilt my confidence. The biomechanical analysis was a game changer for my return to sport.",
    rating: 5,
    condition: "ACL Reconstruction Rehab",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    content: "Years of poor posture at a desk led to chronic cervical pain. The neuromuscular re-education program at Lumina fixed the root cause, not just the symptoms. I'm finally pain-free without surgery.",
    rating: 5,
    condition: "Chronic Cervical Radiculopathy",
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Michael Ross",
    role: "Senior Executive",
    content: "The level of clinical expertise here is unparalleled. They coordinated directly with my surgeon after my spinal fusion. The transition from hospital to home-life was seamless thanks to their post-op protocol.",
    rating: 5,
    condition: "Post-Spinal Fusion Recovery",
    image: "https://i.pravatar.cc/150?u=michael"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4"
          >
            Patient Outcomes
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Real <span className="text-primary-400">Success</span> Stories
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[3.5rem] relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-primary-500/20 group-hover:text-primary-500/40 transition-colors" />
              
              <div className="flex items-center space-x-2 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-slate-300 text-lg font-medium leading-relaxed mb-8 italic">
                "{t.content}"
              </p>

              <div className="flex items-center space-x-4 mb-8">
                 <div className="bg-primary-500/20 px-4 py-1.5 rounded-full border border-primary-500/30 flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-400" />
                    <span className="text-[10px] font-black text-primary-300 uppercase tracking-widest">{t.condition}</span>
                 </div>
              </div>

              <div className="flex items-center space-x-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl grayscale transition-all duration-500 group-hover:grayscale-0 border-2 border-white/10" />
                <div>
                  <h4 className="text-white font-bold tracking-tight">{t.name}</h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
