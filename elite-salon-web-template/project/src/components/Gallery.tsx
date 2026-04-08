import React, { useEffect, useRef, useState } from 'react';
import { Filter } from 'lucide-react';

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
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

  const galleryImages = [
    { src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg', category: 'cuts', title: 'Classic Fade' },
    { src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg', category: 'beards', title: 'Beard Styling' },
    { src: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg', category: 'cuts', title: 'Modern Cut' },
    { src: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg', category: 'shaves', title: 'Hot Towel Shave' },
    { src: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg', category: 'cuts', title: 'Textured Style' },
    { src: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg', category: 'beards', title: 'Beard Trim' },
    { src: 'https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg', category: 'cuts', title: 'Side Part' },
    { src: 'https://images.pexels.com/photos/1805393/pexels-photo-1805393.jpeg', category: 'shaves', title: 'Clean Shave' },
    { src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg', category: 'cuts', title: 'Pompadour' },
    { src: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg', category: 'cuts', title: 'Professional Style' },
    { src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', category: 'beards', title: 'Beard Maintenance' },
    { src: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg', category: 'cuts', title: 'Contemporary Cut' },
  ];

  const categories = ['all', 'cuts', 'beards', 'shaves'];
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio showcasing the artistry and precision that defines Elite Studio. 
              Every style tells a story of craftsmanship and attention to detail.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-2.5" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  filter === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group relative overflow-hidden rounded-xl hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-200 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200 capitalize">{image.category}</p>
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
                  Ready to Transform Your Look?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Book your appointment today and experience the Elite Studio difference. 
                  Professional styling that brings out your best.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Appointment
                  </button>
                  <button 
                    className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;