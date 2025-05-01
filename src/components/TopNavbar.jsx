import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-2 md:py-4  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Contact Information (Subtler Icons) */}
        <div className="flex flex-col items-start md:flex-row md:flex-center space-x-4 text-sm">
          <div className="flex font-sans items-center">
            <FaPhoneAlt className="mr-2 text-gray-400 text-sm" />
            <span className="">9897222757</span>
            <span className="hidden md:inline-block ml-2">, 9627927945</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-400 text-sm" />
            <span className="font-light hidden sm:inline">31/2 Govind Garh, Dehradun</span>
            <span className="font-light sm:hidden inline">Dehradun</span>
          </div>
        </div>

        {/* Right Side: Social Media Icons (Minimalist) */}
        <div className="flex items-center space-x-3 text-lg">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-200">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-200">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-200">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-200">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;