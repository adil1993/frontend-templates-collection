import React from 'react';

const Menu: React.FC = () => {
  const menuCategories = [
    {
      title: 'Hot Coffee',
      items: [
        { name: 'Espresso', price: '$3.50', description: 'Rich, concentrated coffee shot' },
        { name: 'Americano', price: '$4.25', description: 'Espresso with hot water' },
        { name: 'Cappuccino', price: '$5.25', description: 'Espresso with steamed milk and foam' },
        { name: 'Latte', price: '$5.75', description: 'Espresso with steamed milk' },
        { name: 'Mocha', price: '$6.25', description: 'Espresso with chocolate and steamed milk' },
        { name: 'Macchiato', price: '$5.50', description: 'Espresso "marked" with foam' }
      ]
    },
    {
      title: 'Cold Drinks',
      items: [
        { name: 'Iced Coffee', price: '$4.50', description: 'Cold brew over ice' },
        { name: 'Iced Latte', price: '$5.75', description: 'Espresso with cold milk over ice' },
        { name: 'Frappé', price: '$6.50', description: 'Blended iced coffee drink' },
        { name: 'Cold Brew', price: '$4.75', description: 'Smooth, slow-steeped coffee' },
        { name: 'Nitro Coffee', price: '$5.25', description: 'Cold brew infused with nitrogen' }
      ]
    },
    {
      title: 'Pastries & Food',
      items: [
        { name: 'Croissant', price: '$3.75', description: 'Buttery, flaky French pastry' },
        { name: 'Blueberry Muffin', price: '$3.25', description: 'Fresh baked with organic blueberries' },
        { name: 'Avocado Toast', price: '$8.50', description: 'Smashed avocado on artisan bread' },
        { name: 'Bagel & Cream Cheese', price: '$4.50', description: 'Fresh bagel with cream cheese' },
        { name: 'Breakfast Sandwich', price: '$7.75', description: 'Egg, cheese, and choice of meat' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee drinks, 
            fresh pastries, and delicious food made with the finest ingredients.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-amber-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-amber-900">{item.name}</h4>
                      <span className="text-lg font-bold text-green-700">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Note */}
        <div className="mt-16 text-center bg-amber-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Daily Specials</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ask about our daily specials featuring seasonal ingredients and limited-time 
            coffee creations. We also offer plant-based milk alternatives including oat, 
            almond, and soy milk at no extra charge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;