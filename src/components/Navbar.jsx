import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import TopNavbar from "./TopNavbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

import GetAQuote from "./GetAQuote";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setDropDownOpen(!dropdownOpen);
  const closeMobileMenu = () => setDropDownOpen(false);

  const services = [
    { id: "ro-repair", name: "RO Repair Services", path: "/services/ro-repair" },
    { id: "ac-repair", name: "AC Repair Services", path: "/services/ac-repair" },
    { id: "refrigerator-repair", name: "Refrigerator Repair", path: "/services/refrigerator-repair" },
    { id: "microwave-repair", name: "Microwave-Oven Repair", path: "/services/microwave-repair" },
    { id: "washing-machine-repair", name: "Washing Machine Service", path: "/services/washing-machine-repair" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "#services", hasDropdown: true, items: services },
    { name: "Contact us", path: "/contact" },
  ];

  const mobileMenuVariants = {
    open: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gray-900 text-gray-300 py-2">
        <TopNavbar />
      </div>
      <nav className="md:w-[80%] mx-auto">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img src={logo} alt="Sai Service Centre Logo" className="md:w-32 w-28 mr-2" />
          </Link>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {dropdownOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-gray-700 hover:text-blue-500 flex items-center focus:outline-none"
                    >
                      {link.name}
                      <svg
                        className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="absolute mt-2 bg-white rounded-md shadow-lg w-48 z-10">
                        {link.items.map((item) => (
                          <Link
                            key={item.id}
                            to={item.path}
                            className={`block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 ${location.pathname === item.path ? 'underline' : ''}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative text-gray-700 hover:text-blue-500 after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ${location.pathname === link.path ? 'after:w-full' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <button
              onClick={openModal}
              className="bg-[#0968F6] cursor-pointer text-white py-3 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              className="md:hidden bg-gray-100 py-4 overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="px-4 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative">
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="text-gray-700 hover:text-blue-500 flex items-center focus:outline-none w-full"
                        >
                          {link.name}
                          <svg
                            className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              className="mt-2 bg-white border rounded-md shadow-lg overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                              {link.items.map((item) => (
                                <Link
                                  key={item.id}
                                  to={item.path}
                                  className={`block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 ${location.pathname === item.path ? 'underline' : ''}`}
                                  onClick={closeMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block text-gray-700 hover:text-blue-500 py-2 ${location.pathname === link.path ? 'underline' : ''}`}
                        onClick={closeMobileMenu}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <button
                  onClick={openModal}
                  className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <GetAQuote isOpen={isModalOpen} closeModal={closeModal} />
    </header>
  );
};

export default Navbar;