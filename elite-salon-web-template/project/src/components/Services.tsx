import React, { useEffect, useRef, useState } from 'react';
import { Scissors, Rat as Razor, Sparkles, Crown, Clock, DollarSign } from 'lucide-react';
import BookingModal from './BookingModal';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const openBookingModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  const services = [
    {
      icon: Scissors,
      title: 'Precision Hair Cuts',
      description: 'Expert cuts and styling tailored to enhance your natural beauty and lifestyle.',
      price: '$45',
      duration: '45 min',
      features: ['Style Consultation', 'Wash & Cut', 'Blow Dry & Style'],
    },
    {
      icon: Sparkles,
      title: 'Hair Color & Highlights',
      description: 'Professional coloring services to transform and enhance your look.',
      price: '$85',
      duration: '90 min',
      features: ['Color Consultation', 'Premium Products', 'Toner & Style'],
    },
    {
      icon: Crown,
      title: 'Full Glam Package',
      description: 'Complete beauty experience including cut, color, and premium styling.',
      price: '$125',
      duration: '2.5 hours',
      features: ['Cut & Color', 'Deep Treatment', 'Styling', 'Scalp Massage'],
    },
    {
      icon: Razor,
      title: 'Hair Treatments',
      description: 'Nourishing treatments to restore health and shine to your hair.',
      price: '$65',
      duration: '60 min',
      features: ['Deep Conditioning', 'Keratin Treatment', 'Scalp Care'],
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" itemProp="serviceType">
              Our Beauty Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our range of premium beauty services, each delivered with 
              the highest standards of craftsmanship and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 dark:group-hover:bg-amber-800/50 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4 text-center">
                    <div className="flex items-center text-amber-600 font-bold">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="text-2xl">{service.price.slice(1)}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Features (shown on hover) */}
                  <div className={`transition-all duration-300 ${
                    activeService === index ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Includes:
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button 
                    className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                    onClick={() => openBookingModal(service.title)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready for Your Best Look?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Book your appointment today and experience the Elite Studio difference. 
                  Walk-ins welcome, but appointments are recommended.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                    onClick={() => openBookingModal('')}
                  >
                    Book Online
                  </button>
                  <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                    Call (555) 123-4567
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={selectedService}
      />
    </section>
  );
};

export default Services;