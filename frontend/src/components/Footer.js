import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white border-t border-blue-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_9c0e6f19-f172-43d8-8f61-281ba772837e/artifacts/yjxfkypx_WhatsApp%20Image%202026-04-12%20at%207.52.00%20AM.jpeg" 
              alt="JO Services" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm mb-4">
              Your trusted partner for all home services. Professional, reliable, and affordable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Plumbing</li>
              <li className="text-gray-600 text-sm">Electrical</li>
              <li className="text-gray-600 text-sm">Painting</li>
              <li className="text-gray-600 text-sm">Appliance Repair</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                <span>123 Service Street, Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>support@joservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-100 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 JO Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
