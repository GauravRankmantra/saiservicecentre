import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="Sai Service Centre Logo" className="w-32 mb-4 rounded-md shadow-sm" />
          <p className="text-sm">
            At Sai Service Centre, we blend expertise and trust to provide high-quality repairs and unmatched customer service across Dehradun.
          </p>
          <div className="flex gap-3 mt-5">
            <Link to="#" className="hover:text-orange-500 transition"><Facebook size={20} /></Link>
            <Link to="#" className="hover:text-orange-500 transition"><Twitter size={20} /></Link>
            <Link to="#" className="hover:text-orange-500 transition"><Instagram size={20} /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link to="/services/ro-repair" className="hover:text-orange-500">Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Popular Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/ro-repair" className="hover:text-orange-500">RO Repair</Link></li>
            <li><Link to="/services/ac-repair" className="hover:text-orange-500">AC Repair</Link></li>
            <li><Link to="/services/refrigerator-repair" className="hover:text-orange-500">Refrigerator Repair</Link></li>
            <li><Link to="/services/microwave-repair" className="hover:text-orange-500">Microwave Repair</Link></li>
            <li><Link to="/services/washing-machine-repair" className="hover:text-orange-500">Washing Machine</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2 font-sans">
              <Phone className="text-orange-500 mt-1 " size={18} />
              <span>9627927945</span>
            </div>
            <div className="flex items-start gap-2 font-sans">
              <Phone className="text-orange-500 mt-1" size={18} />
              <span>9897272757</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="text-orange-500 mt-1" size={18} />
              <span>31/2 Govind Garh, Opp. Rainbow School, Dehradun</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="text-orange-500 mt-1" size={18} />
              <span>tarun.saiservices@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Sai Service Centre. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
