import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '5000+' },
    { icon: Clock, label: 'Hours Crafting', value: '10000+' },
    { icon: Star, label: 'Average Rating', value: '4.9' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Elite Studio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Established in 2009, Elite Studio has been the premier destination for discerning clients 
              seeking exceptional hair cuts, styling, and grooming services in a modern, welcoming atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Creating Style & Confidence Since 2009
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our skilled stylists combine classic techniques with contemporary trends to deliver 
                exceptional grooming experiences for all clients. Every cut, color, and style is executed with precision 
                and attention to detail.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe that great hair is more than just styling—it's about confidence, 
                self-expression, and making every client feel their absolute best. Our commitment to excellence 
                has earned us a loyal clientele and recognition as the city's premier hair studio.
              </p>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border-l-4 border-amber-500">
                <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Our Promise</h4>
                <p className="text-amber-700 dark:text-amber-200">
                  Every client leaves our chair looking and feeling exceptional. We guarantee satisfaction 
                  with every service, backed by our team's expertise and passion for the craft.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg"
                alt="Modern studio interior"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-lg" />
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transform transition-all duration-700 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <stat.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;