import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    review: "The level of care and professionalism at Lumina Health is second to none. From the moment I walked in, I felt comfortable and cared for. Highly recommended!",
    role: "Patient",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Maria Garcia",
    review: "Dr. Mitchell is incredible! She took the time to explain everything clearly and made sure I was comfortable with the treatment plan. Great experience.",
    role: "Patient",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=maria"
  },
  {
    name: "David Smith",
    review: "Searching for a good pediatrician was tough, but Lumina Health exceeded our expectations. Our kids actually enjoy coming here!",
    role: "Parent",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=david"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative bg-slate-900 overflow-hidden text-white">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] opacity-40 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[100px] opacity-30 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-heading font-bold mb-6"
           >
             Hear From Our <span className="text-primary-400">Patients</span>
           </motion.h2>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             Don't just take our word for it. Read about the experiences of those who have trusted us with their health.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
             <motion.div
               key={test.name}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] relative group hover:bg-white/10 transition-colors"
             >
                <Quote className="absolute top-8 right-10 w-12 h-12 text-primary-500/20 group-hover:text-primary-500/40 transition-colors" />
                
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < test.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} />
                  ))}
                </div>

                <p className="text-xl leading-relaxed text-slate-300 italic mb-8 relative z-10">
                  "{test.review}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-500/30">
                    <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-none mb-1">{test.name}</h4>
                    <p className="text-sm text-primary-400 font-medium">{test.role}</p>
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
