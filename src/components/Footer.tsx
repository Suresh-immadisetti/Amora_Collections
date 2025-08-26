import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../assets/logo.png';

const Footer: React.FC = () => {
  // Error handler for logo image
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={Logo} 
                alt="Amora Collections" 
                className="h-16 w-auto" 
                onError={handleImageError}
              />
              <span className="text-xl font-bold">Amora Collections</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted destination for authentic and beautiful sarees, lehengas, and ethnic wear.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-[#009494] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/amoracollections_15?igsh=MXFzN2Qya2NqNW5hbQ==" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-[#009494] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-[#009494] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-[#009494] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#009494] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#009494] transition-colors">About Us</Link></li>
              <li><button className="text-gray-300 hover:text-[#009494] transition-colors">Categories</button></li>
              <li><button className="text-gray-300 hover:text-[#009494] transition-colors">New Arrivals</button></li>
              <li><button className="text-gray-300 hover:text-[#009494] transition-colors">Sale</button></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-300 hover:text-[#009494] transition-colors">Size Guide</button></li>
              <li><button className="text-gray-300 hover:text-[#009494] transition-colors">Shipping Info</button></li>
              <li><button className="text-gray-300 hover:text-[#009494] transition-colors">Returns</button></li>
              <li><button className="text-gray-300 hover:text-[#009494] transition-colors">Track Order</button></li>
              <li><button className="text-gray-300 hover:text-[#009494] transition-colors">FAQ</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#009494]" />
                <span className="text-gray-300 text-sm">
                 5-5-28-2471 surajnagar colony street no.7 bolligudem boduppal<br />
                  Hyderabad , Telangana 500092
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#009494]" />
                <span className="text-gray-300 text-sm">+91 98664 94466</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#009494]" />
                <span className="text-gray-300 text-sm">swapna.frontline@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Amora Collections. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-[#009494] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-[#009494] text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;