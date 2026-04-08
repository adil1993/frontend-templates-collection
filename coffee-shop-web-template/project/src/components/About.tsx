import React from 'react';
import { Heart, Award, Users, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion for Coffee',
      description: 'Every cup is crafted with love and dedication to the art of coffee making.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Premium Quality',
      description: 'We source only the finest beans from sustainable farms around the world.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community First',
      description: 'We believe in building connections and supporting our local community.'
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: 'Expert Craftsmanship',
      description: 'Our skilled baristas bring years of experience to every brew.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            About Brew Haven
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, Brew Haven has been serving the community with exceptional 
            coffee and creating a warm, welcoming space where stories are shared and 
            friendships are born over the perfect cup.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                What started as a dream between two coffee enthusiasts has grown into 
                a beloved neighborhood gathering place. Sarah and Mike opened Brew Haven 
                with a simple mission: to serve the perfect cup of coffee while creating 
                genuine connections within our community.
              </p>
              <p>
                Over the years, we've carefully curated relationships with coffee farmers 
                from around the world, ensuring that every bean tells a story of 
                sustainability, quality, and fair trade practices.
              </p>
              <p>
                Today, Brew Haven is more than just a coffee shop – it's a place where 
                remote workers find their perfect productivity spot, friends catch up 
                over lattes, and coffee lovers discover their new favorite brew.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Coffee shop interior"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-amber-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-amber-700 flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-amber-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-amber-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Sarah Johnson', role: 'Co-Founder & Head Roaster', image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'Mike Chen', role: 'Co-Founder & Operations', image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'Emma Rodriguez', role: 'Lead Barista', image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-amber-900 mb-1">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;