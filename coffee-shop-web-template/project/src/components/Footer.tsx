import React from 'react';
import { Coffee, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-300" />
              <span className="text-xl font-bold">Brew Haven</span>
            </div>
            <p className="text-amber-100 mb-6 max-w-md">
              Your neighborhood coffee sanctuary where every cup tells a story and 
              every visit creates lasting memories. Join us for the perfect brew experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-amber-100">
              <p>123 Coffee Street</p>
              <p>Seattle, WA 98101</p>
              <p>(555) 123-BREW</p>
              <p>hello@brewhaven.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-100 text-sm">
              © 2024 Brew Haven. All rights reserved.
            </p>
            <p className="text-amber-100 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for coffee lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;