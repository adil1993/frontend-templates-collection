import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-green-50">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm">
            <Star className="h-4 w-4 text-amber-500 fill-current" />
            <span className="text-sm font-medium text-amber-900">Artisan Coffee Since 2010</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Where Every Cup
            <span className="block text-green-700">Tells a Story</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of premium coffee beans, cozy atmosphere, 
            and passionate craftsmanship in every sip.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Order Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-amber-700 text-amber-700 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-all duration-300">
              Visit Our Store
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">15+</div>
              <div className="text-sm text-gray-600 mt-1">Coffee Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">1K+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">5★</div>
              <div className="text-sm text-gray-600 mt-1">Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;