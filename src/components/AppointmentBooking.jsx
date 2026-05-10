import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, CheckCircle, Loader2, Sparkles, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';

const AppointmentBooking = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Appointment Request Received! We will call you soon.', {
        duration: 5000,
        position: 'bottom-center',
        style: {
          background: '#fff',
          color: '#333',
          padding: '16px',
          borderRadius: '24px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0',
        },
        iconTheme: {
          primary: '#2563eb',
          secondary: '#fff',
        },
      });
      setFormData({ name: '', phone: '', date: '', service: '' });
    }, 2000);
  };

  const services = [
    "Sports Injury",
    "Pediatric Physio",
    "Neuro Rehab",
    "Manual Therapy",
    "Post-Surgery",
    "Posture Correction"
  ];

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Decorative Gradient elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 -z-10 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 -z-10 w-[400px] h-[400px] bg-primary-200/30 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
           <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             className="bg-primary-50 text-primary-700 px-6 py-2 rounded-full inline-flex items-center space-x-2 font-bold text-sm mb-6 uppercase tracking-widest border border-primary-100"
           >
             <Sparkles className="w-4 h-4" />
             <span>Quick Booking</span>
           </motion.div>
           <h2 className="section-title">Book an <span className="text-primary-600">Appointment</span></h2>
           <p className="section-subtitle">Reserve your consultation in under 60 seconds. Our experts are ready to provide the care you deserve.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border-white/40 p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Form background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]" />

          <form onSubmit={handleSubmit} className="relative z-10 grid md:grid-cols-2 gap-8">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="glass-input w-full pl-12"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 ml-1">Phone Number</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Phone className="w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                   onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="glass-input w-full pl-12"
                />
              </div>
            </div>

            {/* Date Input */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Calendar className="w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                </div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="glass-input w-full pl-12"
                />
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 ml-1">Select Service</label>
              <div className="relative group">
                 <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="glass-input w-full appearance-none pr-10"
                 >
                   <option value="" disabled>Choose a specialty...</option>
                   {services.map(s => <option key={s} value={s}>{s}</option>)}
                 </select>
                 <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                 </div>
              </div>
            </div>

            <div className="md:col-span-2 pt-6 flex flex-col items-center">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full max-w-md py-4 text-lg disabled:opacity-70"
              >
                {loading ? (
                   <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    Scheduling...
                   </>
                ) : (
                  <>
                    Confirm Booking
                    <CheckCircle className="ml-3 w-5 h-5" />
                  </>
                )}
              </button>
              <p className="mt-4 text-sm text-slate-400 text-center flex items-center group">
                 Your data is <span className="text-slate-900 font-bold ml-1 flex items-center">100% Secure <CheckCircle className="w-4 h-4 ml-1 text-green-500" /></span>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
