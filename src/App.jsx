import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import AppointmentBooking from './components/AppointmentBooking';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div className="min-h-screen selection:bg-primary-200 selection:text-primary-900 scroll-smooth">
      <Toaster 
        toastOptions={{
          className: 'glass',
          style: {
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
          }
        }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <div className="space-y-4"> {/* Minimal spacing to keep it premium */}
          <Services />
          <Doctors />
          <Testimonials />
          <AppointmentBooking />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
