import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import TopNavbar from "./TopNavbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import acRepair from "../assets/repair/ac2.jpg";
import fridgeRepair from "../assets/repair/fridge2.jpg";
import microwaveRepair from "../assets/repair/microwave2.jpg";
import roRepair from "../assets/repair/ro2.jpg";
import washingRepair from "../assets/repair/washing2.jpg";
import GetAQuote from "./GetAQuote";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const services = [
    {
      id: "ro-repair",
      name: "RO Repair Services",
      title: "Expert RO Repair Services | Sai Service Centre",
      description:
        "Get professional RO repair services from Sai Service Centre. Our experienced technicians handle all types of RO system issues efficiently and effectively. We use genuine parts to ensure the longevity of your water purifier.",
      keywords: [
        "RO repair",
        "water purifier repair",
        "reverse osmosis service",
        "RO maintenance",
      ],
      content: (
        <>
          <h2 className="text-xl font-semibold mb-4">RO Repair Services</h2>
          <p className="mb-2">
            At Sai Service Centre, we understand the importance of clean and
            safe drinking water. Our specialized RO repair services cater to all
            major brands and models.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Diagnosis of all RO system problems</li>
            <li>Repair and replacement of filters, pumps, and membranes</li>
            <li>Leak detection and fixing</li>
            <li>Water quality testing</li>
            <li>Preventive maintenance services</li>
          </ul>
          <p className="mb-2">
            Our technicians are highly trained and equipped with the latest
            tools to ensure your RO system is functioning optimally. We
            prioritize using genuine spare parts to guarantee the performance
            and safety of your water purifier.
          </p>
          <p>
            Contact us today for reliable and affordable RO repair services!
          </p>
        </>
      ),
      image: roRepair, // Placeholder image path
    },
    {
      id: "ac-repair",
      name: "AC Repair Services",
      title: "Reliable AC Repair Services | Sai Service Centre",
      description:
        "Sai Service Centre offers dependable AC repair services to keep your cooling system running smoothly. Our skilled technicians can diagnose and fix any AC issue, ensuring your comfort during hot weather.",
      keywords: [
        "AC repair",
        "air conditioner service",
        "AC maintenance",
        "cooling system repair",
      ],
      content: (
        <>
          <h2 className="text-xl font-semibold mb-4">AC Repair Services</h2>
          <p className="mb-2">
            Is your AC not cooling effectively, making strange noises, or
            leaking water? Our expert AC repair services at Sai Service Centre
            are here to help.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Diagnosis of AC problems</li>
            <li>Refrigerant leak detection and repair</li>
            <li>Compressor repair and replacement</li>
            <li>Fan motor repair and replacement</li>
            <li>Filter cleaning and replacement</li>
            <li>Thermostat repair and replacement</li>
          </ul>
          <p className="mb-2">
            We are committed to providing prompt and efficient AC repair
            services. Our technicians are experienced in handling all types of
            air conditioning systems, including split, window, and central AC
            units.
          </p>
          <p>
            Ensure a cool and comfortable environment with our professional AC
            repair services. Get in touch with us now!
          </p>
        </>
      ),
      image: acRepair, // Placeholder image path
    },
    {
      id: "refrigerator-repair",
      name: "Refrigerator Repair",
      title: "Fast & Efficient Refrigerator Repair | Sai Service Centre",
      description:
        "Sai Service Centre provides fast and efficient refrigerator repair services to resolve any issues with your fridge. Our experienced technicians can fix cooling problems, leaks, and other malfunctions quickly.",
      keywords: [
        "refrigerator repair",
        "fridge service",
        "freezer repair",
        "appliance repair",
      ],
      content: (
        <>
          <h2 className="text-xl font-semibold mb-4">Refrigerator Repair</h2>
          <p className="mb-2">
            A malfunctioning refrigerator can disrupt your daily life. At Sai
            Service Centre, we offer quick and reliable repair services for all
            types of refrigerators.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Diagnosis of refrigerator issues</li>
            <li>Repair of cooling problems</li>
            <li>Replacement of faulty compressors, motors, and thermostats</li>
            <li>Leak repair</li>
            <li>Door seal replacement</li>
          </ul>
          <p className="mb-2">
            Our goal is to restore your refrigerator's functionality as soon as
            possible. Our skilled technicians come equipped with the necessary
            tools and knowledge to handle various refrigerator problems.
          </p>
          <p>
            Don't let a faulty fridge spoil your food. Contact Sai Service
            Centre for dependable refrigerator repair services!
          </p>
        </>
      ),
      image: fridgeRepair, // Placeholder image path
    },
    {
      id: "microwave-repair",
      name: "Microwave-Oven Repair",
      title: "Professional Microwave Oven Repair | Sai Service Centre",
      description:
        "Get your microwave oven repaired quickly and professionally at Sai Service Centre. Our technicians are skilled in fixing all common microwave issues, ensuring your appliance is back in working order.",
      keywords: [
        "microwave repair",
        "oven repair",
        "appliance service",
        "microwave not working",
      ],
      content: (
        <>
          <h2 className="text-xl font-semibold mb-4">Microwave-Oven Repair</h2>
          <p className="mb-2">
            If your microwave oven is not heating, sparking, or has any other
            issues, Sai Service Centre offers expert repair services to get it
            working again.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Diagnosis of microwave problems</li>
            <li>
              Repair and replacement of magnetrons, transformers, and capacitors
            </li>
            <li>Fixing door latch issues</li>
            <li>Control panel repair</li>
          </ul>
          <p className="mb-2">
            Our experienced technicians can handle repairs for all types of
            microwave ovens, including solo, grill, and convection models. We
            prioritize safety and efficiency in our repair process.
          </p>
          <p>
            For reliable microwave oven repair services, trust Sai Service
            Centre. Contact us today!
          </p>
        </>
      ),
      image: microwaveRepair, // Placeholder image path
    },
    {
      id: "washing-machine-repair",
      name: "Washing Machine Service",
      title: "Reliable Washing Machine Service | Sai Service Centre",
      description:
        "Sai Service Centre provides reliable washing machine service and repair to fix any problems with your washing machine. Our skilled technicians can handle all types of washing machine issues efficiently.",
      keywords: [
        "washing machine repair",
        "washer service",
        "appliance repair",
        "washing machine not spinning",
      ],
      content: (
        <>
          <h2 className="text-xl font-semibold mb-4">
            Washing Machine Service
          </h2>
          <p className="mb-2">
            A malfunctioning washing machine can cause significant
            inconvenience. At Sai Service Centre, we offer prompt and dependable
            repair services for all types of washing machines.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Diagnosis of washing machine problems</li>
            <li>Repair and replacement of motors, pumps, and belts</li>
            <li>Fixing drainage issues</li>
            <li>Drum repair</li>
            <li>Control panel repair</li>
          </ul>
          <p className="mb-2">
            Our technicians are trained to handle both top-loading and
            front-loading washing machines. We aim to provide efficient and
            lasting repair solutions to ensure your laundry routine is
            uninterrupted.
          </p>
          <p>
            Get your washing machine back in perfect working order with Sai
            Service Centre's expert repair services. Contact us now!
          </p>
        </>
      ),
      image: washingRepair, // Placeholder image path
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleMenu = () => {
    setDropDownOpen(!dropdownOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <>
      <div className="bg-orange-500 ">
        <TopNavbar />
      </div>

      <nav className="bg-white md:w-[80%] pb-2 mx-auto shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Sai Service Centre Logo"
              className="w-[8rem] mr-2"
            />{" "}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              HOME
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              ABOUT
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-500 flex items-center focus:outline-none"
              >
                SERVICES
                <svg
                  className="h-4 w-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute mt-2 bg-white rounded-md shadow-lg w-48 z-10">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              CONTACT
            </Link>
          </div>

          {/* Desktop "Get a Quote" Button */}
          <div className="hidden md:block">
            <button
              onClick={openModal}
              className="bg-orange-500 cursor-pointer text-white py-4 px-6 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              GET A QUOTE
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {dropdownOpen && (
          <div className="md:hidden bg-gray-100 py-4">
            <div className="px-4 flex flex-col space-y-3">
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-500 py-2"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-blue-500 py-2"
              >
                ABOUT
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-blue-500 flex items-center focus:outline-none"
                >
                  SERVICES
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute mt-2 bg-white border rounded-md shadow-lg w-48 z-10">
                    <Link
                      to="/services/ro-repair"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      RO Repair Services
                    </Link>
                    <Link
                      to="/services/ac-repair"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      AC Repair Services
                    </Link>
                    <Link
                      to="/services/refrigerator-repair"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Refrigerator Repair
                    </Link>
                    <Link
                      to="/services/microwave-repair"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Microwave-Oven Repair
                    </Link>
                    <Link
                      to="/services/washing-machine-repair"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Washing Machine Service
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="contact"
                className="block text-gray-700 hover:text-blue-500 py-2"
              >
                CONTACT
              </Link>
            </div>
            {/* Mobile "Get a Quote" Button (Visible on mobile) */}
            {/* <div className="mt-4 px-4">
              <button className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
                GET A QUOTE
              </button>
            </div> */}
          </div>
        )}
        <div onClick={openModal} className="flex justify-center">
          <button className="md:hidden flex cursor-pointer justify-center bg-orange-500 text-white py-4 px-6 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
            GET A QUOTE
          </button>
        </div>
      </nav>
      <GetAQuote isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Navbar;
