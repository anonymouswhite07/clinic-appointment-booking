import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, Activity } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative z-10"
        >
          <div className="mb-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-primary-50 text-primary-700 px-6 py-2 rounded-full inline-flex items-center space-x-2 font-bold text-sm mb-6 uppercase tracking-widest border border-primary-100"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get in Touch</span>
            </motion.div>
            <h2 className="section-title text-slate-900">Always Here <span className="text-primary-600">to Help</span> You</h2>
            <p className="section-subtitle ml-0 text-slate-500">
               Have questions or need assistance? Our team is available to help clarify any doubts and guide you through your health journey.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="bg-primary-50 p-4 rounded-3xl group-hover:scale-110 group-hover:bg-primary-100 transition-all">
                <MapPin className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 leading-none mb-2">Location</h4>
                <p className="text-slate-500 font-medium">123 Healthway St, Medical District<br />Building A, Suite 400</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="bg-primary-50 p-4 rounded-3xl group-hover:scale-110 group-hover:bg-primary-100 transition-all">
                <Phone className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 leading-none mb-2">Call Us</h4>
                <p className="text-slate-500 font-medium">+1 (555) 123-4567<br />+1 (555) 765-4321</p>
              </div>
            </div>

             <div className="flex items-start space-x-6 group">
              <div className="bg-primary-50 p-4 rounded-3xl group-hover:scale-110 group-hover:bg-primary-100 transition-all">
                <Clock className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 leading-none mb-2">Working Hours</h4>
                <p className="text-slate-500 font-medium whitespace-nowrap">Mon-Fri: 8:00 AM - 8:00 PM<br />Sat-Sun: 9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form or Map Placeholder */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
           <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-100/50 rounded-full blur-[80px] opacity-40"></div>
           
           <div className="glass-card p-10 overflow-hidden relative">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-2xl font-bold text-slate-900">Send us a Message</h3>
                 <p className="text-sm font-semibold text-primary-600 flex items-center bg-primary-50 px-3 py-1 rounded-full"><Activity className="w-4 h-4 mr-1 animate-pulse" /> Live Support</p>
              </div>
              
              <form className="space-y-6">
                 <div>
                    <input type="text" placeholder="Your Name" className="glass-input w-full" />
                 </div>
                 <div>
                    <input type="email" placeholder="Email Address" className="glass-input w-full" />
                 </div>
                  <div>
                    <textarea placeholder="Message..." className="glass-input w-full h-32 pt-4 resize-none"></textarea>
                 </div>
                 <button type="button" className="btn-primary w-full py-4 text-lg">
                    Send Inquiry
                    <Send className="ml-3 w-5 h-5" />
                 </button>
              </form>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
