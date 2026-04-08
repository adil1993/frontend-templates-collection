import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import BookingModal from './BookingModal';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg")'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-amber-300 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" itemProp="name">
            Elite Studio
            <span className="block text-3xl md:text-4xl text-amber-400 font-light mt-2">
              Hair & Grooming
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto" itemProp="description">
            Where style meets sophistication. Experience premium cuts, styling, and grooming services for everyone in our modern, welcoming studio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={openBookingModal}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Appointment
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Clock className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Salon Hours</h3>
              <p className="text-gray-200">Mon-Sat: 9AM-8PM<br />Sunday: 10AM-6PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-200">123 Main Street<br />Downtown District</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Calendar className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Booking</h3>
              <p className="text-gray-200">Appointments Preferred<br />Online Booking Available</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Hero;