import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">DOT<span className="text-gold-500">DESIGNS</span></h3>
            <p className="text-gray-500 mb-6">
              Crafting memories into tangible art. The world's leading custom 3D figurine studio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold-500 shrink-0" />
                <span>123 Design Avenue, Creative District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold-500 shrink-0" />
                <span>hello@dotdesigns.studio</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} DotDesigns Studio. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};