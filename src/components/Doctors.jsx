import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, GraduationCap, Calendar, Users, ShieldCheck } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Alistair Vance",
    role: "Clinical Director",
    specialty: "Doctor of Physical Therapy (DPT)",
    subSpecialty: "Orthopedic Manual Therapy",
    exp: "18+ Years",
    rating: 5.0,
    reviews: 242,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    edu: "Northwestern University",
    status: "Accepting New Patients",
    nextAppt: "Tomorrow"
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Senior Lead Specialist",
    specialty: "Board Certified Sports Specialist",
    subSpecialty: "Lower Extremity Biomechanics",
    exp: "12+ Years",
    rating: 4.9,
    reviews: 186,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
    edu: "University of Southern California",
    status: "Accepting New Patients",
    nextAppt: "Wed, Oct 25"
  },
  {
    name: "Dr. Marcus Thorne",
    role: "Post-Surgical Lead",
    specialty: "SCS, OCS Specialist",
    subSpecialty: "Complex Spinal Rehabilitation",
    exp: "15+ Years",
    rating: 4.9,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    edu: "Columbia Medical Center",
    status: "Limited Availability",
    nextAppt: "Next Week"
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-32 bg-[#fcfdfe] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
         <div className="w-[800px] h-[800px] bg-[radial-gradient(#2563eb_2px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-primary-50 text-primary-600 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.4em] mb-6 border border-primary-100"
          >
            Clinical Leadership
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6"
          >
            Elite <span className="text-primary-600">Specialists</span>
          </motion.h2>
          <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
            Our doctors aren't just practitioners; they are researchers and educators at the forefront of modern rehabilitation science.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-[3.5rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(37,99,235,0.1)] hover:-translate-y-2">
                {/* Doctor Image Container */}
                <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-6 left-6 px-4 py-2 rounded-2xl backdrop-blur-md border text-[10px] font-black uppercase tracking-widest ${
                    doctor.status === 'Accepting New Patients' 
                    ? 'bg-green-500/10 border-green-500/20 text-green-600' 
                    : 'bg-amber-500/10 border-amber-500/20 text-amber-600'
                  }`}>
                    {doctor.status}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                     <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="text-xs font-black text-slate-800">{doctor.rating} ({doctor.reviews} Reviews)</span>
                     </div>
                     <div className="bg-primary-600 text-white p-2 rounded-xl">
                        <ShieldCheck className="w-5 h-5" />
                     </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-8">
                  <div className="mb-6">
                     <p className="text-primary-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{doctor.role}</p>
                     <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-2 tracking-tight">{doctor.name}</h3>
                     <p className="text-sm font-bold text-slate-700 opacity-90">{doctor.specialty}</p>
                     <p className="text-xs font-medium text-slate-400 italic mb-4">{doctor.subSpecialty}</p>
                     
                     <div className="flex flex-wrap gap-4 border-t border-slate-50 pt-4">
                        <div className="flex items-center text-xs font-bold text-slate-500">
                           <Award className="w-3.5 h-3.5 mr-2 text-primary-400" />
                           {doctor.exp}
                        </div>
                        <div className="flex items-center text-xs font-bold text-slate-500">
                           <GraduationCap className="w-3.5 h-3.5 mr-2 text-primary-400" />
                           {doctor.edu}
                        </div>
                     </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
                       <div className="flex items-center space-x-2">
                          <Calendar className="w-3.5 h-3.5 text-primary-600" />
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next Open Slot</span>
                       </div>
                       <span className="text-xs font-black text-slate-800">{doctor.nextAppt}</span>
                    </div>
                    <a href="#booking" className="btn-primary w-full py-4 text-xs font-black uppercase tracking-[0.1em] shadow-primary-500/10">
                      Request Consultation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-20 text-center">
           <a href="#doctors" className="inline-flex items-center space-x-3 text-slate-400 font-bold hover:text-primary-600 transition-colors group">
              <Users className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>View All 14 Clinical Staff Members</span>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
