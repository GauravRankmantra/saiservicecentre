import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react'; // Optional: Using lucide-react
import logo from "../assets/logo.jpg";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img
            src={logo} 
            alt="Sai Service Centre Logo"
            className="w-32 mb-4"
          />
          <p className="text-gray-600 mb-4">
            Sai Service Centre stands as a trusted name in the electronic repair industry, dedicated to providing high-quality, efficient, and customer-friendly services.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Link to="#" className="bg-white p-2 rounded-full shadow hover:text-orange-500 transition">
              <Facebook size={20} />
            </Link>
            <Link to="#" className="bg-white p-2 rounded-full shadow hover:text-orange-500 transition">
              <Twitter size={20} />
            </Link>
            <Link to="#" className="bg-white p-2 rounded-full shadow hover:text-orange-500 transition">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Useful Links</h3>
          <ul className="space-y-3 text-gray-600">
            <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500 transition">About</Link></li>
            <li><Link to="/services/ro-repair" className="hover:text-orange-500 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Services</h3>
          <ul className="space-y-3 text-gray-600">
            <li><Link to="/services/ro-repair" className="hover:text-orange-500 transition">RO Repair Services</Link></li>
            <li><Link to="/services/ac-repair" className="hover:text-orange-500 transition">AC Repair Services</Link></li>
            <li><Link to="/services/refrigerator-repair" className="hover:text-orange-500 transition">Refrigerator Repair</Link></li>
            <li><Link to="/services/microwave-repair" className="hover:text-orange-500 transition">Microwave-Oven Repair Services</Link></li>
            <li><Link to="/services/washing-machine-repair" className="hover:text-orange-500 transition">Washing Machine Service</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-start gap-3">
              <Phone className="text-orange-500 mt-1" size={20} />
              <span>9627927945</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-orange-500 mt-1" size={20} />
              <span>9897272757</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-orange-500 mt-1" size={20} />
              <span>31/2 Govind Garh, Opposite Rainbow School</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-orange-500 mt-1" size={20} />
              <span>tarun.saiservices@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-orange-500 text-white text-center py-4 mt-10">
        ©2023 Sai Service Centre. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
