import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, GraduationCap, MapPin } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Senior Cardiologist",
    exp: "12+ Years Exp.",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    edu: "Johns Hopkins University"
  },
  {
    name: "Dr. James Wilson",
    role: "Pediatric Specialist",
    exp: "15+ Years Exp.",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    edu: "Harvard Medical School"
  },
  {
    name: "Dr. Emily Chen",
    role: "Lead Neurologist",
    exp: "10+ Years Exp.",
    rating: 5.0,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
    edu: "Stanford Medical Center"
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-24 bg-gradient-to-b from-primary-50/30 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
            className="section-title"
          >
            Meet Our <span className="text-primary-600">Expert</span> Specialists
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="section-subtitle"
          >
            Our team of world-class doctors is dedicated to providing you with the highest standard of personalized medical care.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card overflow-hidden group-hover:shadow-2xl transition-all duration-500 rounded-[2.5rem]">
                {/* Doctor Image */}
                <div className="h-64 overflow-hidden relative">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-2xl flex items-center space-x-1 shadow-sm border border-white/50">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-slate-800 font-bold text-sm tracking-tight">{doctor.rating}</span>
                    <span className="text-slate-400 text-xs">({doctor.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                     <p className="text-primary-600 text-sm font-bold uppercase tracking-widest mb-1">{doctor.role}</p>
                     <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-2">{doctor.name}</h3>
                     <div className="flex items-center text-slate-500 text-sm space-x-4">
                        <span className="flex items-center"><Award className="w-4 h-4 mr-1 text-primary-400" /> {doctor.exp}</span>
                        <span className="flex items-center"><GraduationCap className="w-4 h-4 mr-1 text-primary-400" /> {doctor.edu}</span>
                     </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <a href="#booking" className="btn-primary w-full py-3 text-sm">
                      Book Appointment
                    </a>
                    <button className="text-slate-500 font-semibold hover:text-primary-600 transition-colors text-sm py-2">
                       View Full Profile
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
