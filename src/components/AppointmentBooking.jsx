import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, CheckCircle, Loader2, Sparkles, ChevronDown, Shield, FileText, ClipboardList } from 'lucide-react';
import toast from 'react-hot-toast';

const AppointmentBooking = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
    insurance: '',
    patientType: 'new',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clinical database entry
    setTimeout(() => {
      setLoading(false);
      toast.success('Consultation requested. A clinical coordinator will contact you shortly.', {
        duration: 6000,
        position: 'bottom-center',
        style: {
          background: '#0f172a',
          color: '#fff',
          padding: '20px',
          borderRadius: '32px',
          fontSize: '14px',
          fontWeight: 'bold',
        },
      });
      setFormData({ name: '', phone: '', date: '', service: '', insurance: '', patientType: 'new', reason: '' });
    }, 2000);
  };

  const services = [
    "Post-Surgical Rehab",
    "Elite Sports Therapy",
    "Neuromuscular Re-ed",
    "Pelvic Health",
    "Hand & Upper Limb",
    "Clinical Diagnostics"
  ];

  const insuranceProviders = [
    "Aetna",
    "BlueCross BlueShield",
    "UnitedHealthcare",
    "Cigna",
    "Medicare / Medicaid",
    "Self-Pay / Other"
  ];

  return (
    <section id="booking" className="py-32 relative bg-[#f8fbff] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-50/50 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-50 text-primary-600 px-5 py-2 rounded-2xl inline-flex items-center space-x-2 font-black text-[10px] uppercase tracking-[0.3em] mb-8 border border-primary-100">
                <Sparkles className="w-4 h-4" />
                <span>Patient Intake</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                Begin Your <span className="text-primary-600">Recovery</span> Journey.
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                Our clinical coordinators review every request within 2 hours during business hours. We'll match you with the specialist best suited for your condition.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: Shield, title: "HIPAA Compliant", desc: "Your medical data is encrypted and secure." },
                  { icon: FileText, title: "Insurance Verified", desc: "We coordinate directly with your provider." },
                  { icon: ClipboardList, title: "Fast Processing", desc: "Average intake time is less than 3 minutes." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-primary-600">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-none mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 p-8 rounded-[3rem] text-white">
                <p className="text-xs font-black uppercase tracking-widest text-primary-400 mb-4">Clinical Helpline</p>
                <p className="text-2xl font-bold mb-2">(555) 123-4567</p>
                <p className="text-slate-400 text-sm font-medium">Available Mon-Fri, 8AM - 8PM EST</p>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-10 md:p-14 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Patient Type Toggle */}
                <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, patientType: 'new'})}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${formData.patientType === 'new' ? 'bg-white shadow-sm text-primary-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    New Patient
                  </button>
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, patientType: 'returning'})}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${formData.patientType === 'returning' ? 'bg-white shadow-sm text-primary-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    Returning Patient
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Legal Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Jane Cooper"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-slate-800"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-slate-800"
                    />
                  </div>
                  {/* Service */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Desired Specialty</label>
                    <div className="relative">
                      <select 
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-slate-800 appearance-none cursor-pointer"
                      >
                        <option value="">Select Specialty</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Insurance */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Insurance Provider</label>
                    <div className="relative">
                      <select 
                        name="insurance"
                        required
                        value={formData.insurance}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-slate-800 appearance-none cursor-pointer"
                      >
                        <option value="">Select Provider</option>
                        {insuranceProviders.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Date */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Preferred Consultation Date</label>
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-slate-800"
                    />
                  </div>
                  {/* Reason */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Brief Reason for Visit (Optional)</label>
                    <textarea 
                      name="reason"
                      placeholder="E.g. Persistent lower back pain, Post-surgery rehab plan..."
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-4 px-6 outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-slate-800 min-h-[120px] resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full py-5 text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-primary-500/20 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center space-x-3">
                       <Loader2 className="w-5 h-5 animate-spin" />
                       <span>Verifying Data...</span>
                    </div>
                  ) : (
                    <span>Submit Request</span>
                  )}
                </button>
                <p className="text-center text-[10px] font-bold text-slate-400">By submitting, you agree to our HIPAA Privacy Policy.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
