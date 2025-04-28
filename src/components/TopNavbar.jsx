import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <div className="bg-orange-500 md:w-[80%]  mx-auto text-white py-2 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Contact Information */}
        <div className="flex flex-col items-start text-sm space-y-2">
          <div>
            <FaPhoneAlt className="inline-block mr-2" />
            <span>9897222757, 9627927945</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="inline-block mr-2" />
            <span>Address: 31/2 Govind Garh, Opposite Rainbow School, Dehradun</span>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center space-x-4 text-lg">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;