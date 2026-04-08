import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Business Executive',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      text: 'Elite Cuts has been my go-to barbershop for over 3 years. The attention to detail and professionalism is unmatched. Every cut is perfect, and the atmosphere is incredibly welcoming.',
      rating: 5,
    },
    {
      name: 'David Rodriguez',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg',
      text: 'The team at Elite Cuts truly understands style. They transformed my look completely while maintaining my personality. The traditional shave experience is absolutely incredible.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      text: 'Outstanding service from start to finish. The barbers are skilled artists who take pride in their craft. The consultation process ensures you get exactly what you want.',
      rating: 5,
    },
    {
      name: 'Robert Chen',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      text: 'Clean, modern facility with traditional values. The staff is friendly, knowledgeable, and genuinely cares about customer satisfaction. Highly recommend to anyone looking for quality.',
      rating: 5,
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isVisible, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, #d97706 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients about their 
              exceptional experiences at Elite Cuts.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Display */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 shadow-xl relative will-change-transform">
              <Quote className="absolute top-6 left-6 h-12 w-12 text-amber-200 dark:text-amber-800" />
              
              <div className="flex flex-col lg:flex-row items-center gap-8 transition-all duration-300 ease-out">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-amber-200 dark:border-amber-800 shadow-lg will-change-transform"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonials[currentSlide].text}"
                  </blockquote>
                  
                  <div>
                    <div className="font-bold text-xl text-gray-900 dark:text-white">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-amber-600 font-medium">
                      {testimonials[currentSlide].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-full p-3 shadow-lg transition-colors duration-150"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-full p-3 shadow-lg transition-colors duration-150"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-amber-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">4.9★</div>
              <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">90%</div>
              <div className="text-gray-600 dark:text-gray-400">Return Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;