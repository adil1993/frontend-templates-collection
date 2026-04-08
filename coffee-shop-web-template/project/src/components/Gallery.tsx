import React from 'react';

const Gallery: React.FC = () => {
  const coffeeImages = [
    {
      id: 1,
      name: 'Signature Espresso',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Rich, bold, and perfectly balanced'
    },
    {
      id: 2,
      name: 'Cappuccino Art',
      image: 'https://images.pexels.com/photos/302906/pexels-photo-302906.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Creamy foam with artistic flair'
    },
    {
      id: 3,
      name: 'Cold Brew Delight',
      image: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Smooth and refreshing cold brew'
    },
    {
      id: 4,
      name: 'Latte Love',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Perfect milk-to-coffee ratio'
    },
    {
      id: 5,
      name: 'French Press',
      image: 'https://images.pexels.com/photos/1374946/pexels-photo-1374946.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Traditional brewing method'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Our Coffee Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every cup is crafted with passion and precision. Take a look at our 
            signature drinks that have made us a local favorite.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeImages.map((coffee) => (
            <div 
              key={coffee.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{coffee.name}</h3>
                  <p className="text-sm text-gray-200">{coffee.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;