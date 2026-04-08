import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'House Blend Coffee Beans',
      price: '$24.99',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Our signature blend of premium Arabica beans with notes of chocolate and caramel.',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Single Origin Ethiopia',
      price: '$32.99',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Bright and fruity single origin with floral notes and wine-like acidity.',
      badge: 'Premium'
    },
    {
      id: 3,
      name: 'Dark Roast French',
      price: '$28.99',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Bold and smoky dark roast perfect for espresso or strong morning coffee.',
      badge: 'Staff Pick'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take our premium coffee home with you. Freshly roasted and carefully 
            selected from the world's finest coffee growing regions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="relative mb-4">
                <span className="absolute top-3 right-3 z-10 bg-amber-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {product.badge}
                </span>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-amber-900">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-amber-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-green-700">{product.price}</span>
                  <button className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-colors">
                    <ShoppingCart className="h-4 w-4" />
                    <span className="text-sm font-medium">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 border-2 border-amber-700 text-amber-700 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;