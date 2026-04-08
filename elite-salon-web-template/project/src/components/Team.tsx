import React, { useEffect, useRef, useState } from 'react';
import { Scissors, Award, Clock, Users } from 'lucide-react';
import BookingModal from './BookingModal';

const Team: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBarberName, setSelectedBarberName] = useState('');
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

  const openBookingModal = (barberName: string) => {
    setSelectedBarberName(barberName);
    setIsBookingModalOpen(true);
  };

  const team = [
    {
      name: 'Marcus Thompson',
      role: 'Master Barber & Owner',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      experience: '15 Years',
      specialties: ['Classic Cuts', 'Traditional Shaves', 'Beard Styling'],
      bio: 'Marcus founded Elite Studio with a vision to blend traditional barbering with modern styling. His expertise in both classic and contemporary techniques serves all clients.',
      achievements: ['Licensed Master Barber', 'Traditional Shaving Expert', 'Industry Recognition'],
    },
    {
      name: 'Sofia Rivera',
      role: 'Senior Stylist',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg',
      experience: '8 Years',
      specialties: ['Color Specialist', 'Modern Cuts', 'Balayage'],
      bio: 'Sofia brings artistry and precision to every service. Known for her innovative coloring techniques and ability to create stunning looks for all hair types and styles.',
      achievements: ['Color Certification', 'Competition Winner', 'Advanced Training'],
    },
    {
      name: 'Alex Chen',
      role: 'Hair Stylist',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      experience: '5 Years',
      specialties: ['Fade Cuts', 'Texture Work', 'Hair Treatments'],
      bio: 'Alex combines technical skill with creative flair. Specializing in modern cuts and treatments, Alex ensures every client leaves feeling confident and looking sharp.',
      achievements: ['Precision Cutting', 'Customer Service Excellence', 'Treatment Specialist'],
    },
  ];

  return (
    <section id="team" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our team of skilled professionals brings decades of combined experience and 
              a passion for making every client look and feel their absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((barber, index) => (
              <div
                key={barber.name}
                className={`group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setSelectedBarber(selectedBarber === index ? null : index)}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold">
                      View Profile
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {barber.name}
                    </h3>
                    <p className="text-amber-600 font-semibold text-lg">
                      {barber.role}
                    </p>
                    <div className="flex items-center justify-center mt-2 text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{barber.experience}</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {barber.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`transition-all duration-300 ${
                    selectedBarber === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {barber.bio}
                      </p>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Achievements
                        </h5>
                        <ul className="space-y-2">
                          {barber.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                              <Award className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    className="w-full mt-6 bg-gray-100 dark:bg-gray-700 hover:bg-amber-600 hover:text-white text-gray-700 dark:text-gray-300 font-semibold py-3 rounded-lg transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      openBookingModal(barber.name);
                    }}
                  >
                    Book with {barber.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-20 bg-white dark:bg-gray-900 rounded-2xl p-12 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">28+</div>
                <div className="text-gray-600 dark:text-gray-400">Combined Years</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Scissors className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">15K+</div>
                <div className="text-gray-600 dark:text-gray-400">Cuts Completed</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">12</div>
                <div className="text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-400">On-Time Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default Team;