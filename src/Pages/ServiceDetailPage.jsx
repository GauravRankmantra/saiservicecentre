import React from "react";
import { useParams } from "react-router-dom";
import acRepair from "../assets/repair/ac2.jpg";
import fridgeRepair from "../assets/repair/fridge2.jpg";
import microwaveRepair from "../assets/repair/microwave2.jpg";
import roRepair from "../assets/repair/ro2.jpg";
import washingRepair from "../assets/repair/washing2.jpg";
import { FaTools, FaWater, FaDrum } from "react-icons/fa";
import {
  FaCheckCircle,
  FaWrench,
  FaTint,
  FaRegCircle,
  FaArrowRight,
  FaCog,
} from "react-icons/fa";
import {
  FaDiagnoses,
  FaIceCream,
  FaCompress,
  FaFan,
  FaFilter,
  FaThermometerHalf,
} from "react-icons/fa";
import { FaBolt, FaLock, FaRegKeyboard } from "react-icons/fa";
import { FaSnowflake, FaDoorOpen } from "react-icons/fa";
const ServiceDetailPage = () => {
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
          <h2 className="text-2xl text-orange-500 font-semibold mb-4">
            RO Repair Services
          </h2>
          <p className="mb-2">
            At Sai Service Centre, we understand the importance of clean and
            safe drinking water. Our specialized RO repair services cater to all
            major brands and models.
          </p>
          <ul className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaCheckCircle className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold">
                Diagnosis of all RO system problems
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaWrench className="h-6 w-6 text-green-500" />
              <span className="text-lg font-semibold">
                Repair and replacement of filters, pumps, and membranes
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaTint className="h-6 w-6 text-red-500" />
              <span className="text-lg font-semibold">
                Leak detection and fixing
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaRegCircle className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold">
                Water quality testing
              </span>
            </li>
            <li className="px-6 py-4 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaCog className="h-6 w-6 text-indigo-500" />
              <span className="text-lg font-semibold">
                Preventive maintenance services
              </span>
            </li>
          </ul>

          <p className="mt-4">
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
          <h2 className="text-2xl text-orange-500 font-semibold mb-4">
            AC Repair Services
          </h2>
          <p className="mb-2">
            Is your AC not cooling effectively, making strange noises, or
            leaking water? Our expert AC repair services at Sai Service Centre
            are here to help.
          </p>
          <ul className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaDiagnoses className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold">
                Diagnosis of AC problems
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaIceCream className="h-6 w-6 text-green-500" />
              <span className="text-lg font-semibold">
                Refrigerant leak detection and repair
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaCompress className="h-6 w-6 text-red-500" />
              <span className="text-lg font-semibold">
                Compressor repair and replacement
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaFan className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold">
                Fan motor repair and replacement
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaFilter className="h-6 w-6 text-indigo-500" />
              <span className="text-lg font-semibold">
                Filter cleaning and replacement
              </span>
            </li>
            <li className="px-6 py-4 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaThermometerHalf className="h-6 w-6 text-pink-500" />
              <span className="text-lg font-semibold">
                Thermostat repair and replacement
              </span>
            </li>
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
          <h2 className="text-2xl text-orange-500 font-semibold mb-4">
            Refrigerator Repair
          </h2>
          <p className="mb-2">
            A malfunctioning refrigerator can disrupt your daily life. At Sai
            Service Centre, we offer quick and reliable repair services for all
            types of refrigerators.
          </p>
          <ul className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaDiagnoses className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold">
                Diagnosis of refrigerator issues
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaSnowflake className="h-6 w-6 text-green-500" />
              <span className="text-lg font-semibold">
                Repair of cooling problems
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaCompress className="h-6 w-6 text-red-500" />
              <span className="text-lg font-semibold">
                Replacement of faulty compressors, motors, and thermostats
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaTint className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold">Leak repair</span>
            </li>
            <li className="px-6 py-4 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaDoorOpen className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold">
                Door seal replacement
              </span>
            </li>
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
          <h2 className="text-2xl text-orange-500 font-semibold mb-4">
            Microwave-Oven Repair
          </h2>
          <p className="mb-2">
            If your microwave oven is not heating, sparking, or has any other
            issues, Sai Service Centre offers expert repair services to get it
            working again.
          </p>
          <ul className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaWrench className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold">
                Diagnosis of microwave problems
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaBolt className="h-6 w-6 text-green-500" />
              <span className="text-lg font-semibold">
                Repair and replacement of magnetrons, transformers, and
                capacitors
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaLock className="h-6 w-6 text-red-500" />
              <span className="text-lg font-semibold">
                Fixing door latch issues
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaRegKeyboard className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold">
                Control panel repair
              </span>
            </li>
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
          <h2 className="text-2xl text-orange-500 font-semibold mb-4">
            Washing Machine Service
          </h2>
          <p className="mb-2">
            A malfunctioning washing machine can cause significant
            inconvenience. At Sai Service Centre, we offer prompt and dependable
            repair services for all types of washing machines.
          </p>
          <ul className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaTools className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold">
                Diagnosis of washing machine problems
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaCog className="h-6 w-6 text-green-500" />
              <span className="text-lg font-semibold">
                Repair and replacement of motors, pumps, and belts
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaWater className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold">
                Fixing drainage issues
              </span>
            </li>
            <li className="px-6 py-4 border-b border-gray-200 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaDrum className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold">Drum repair</span>
            </li>
            <li className="px-6 py-4 flex items-center space-x-3 hover:bg-gray-50 transition-all">
              <FaRegKeyboard className="h-6 w-6 text-red-500" />
              <span className="text-lg font-semibold">
                Control panel repair
              </span>
            </li>
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

  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
            Service Not Found
          </h2>
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
            Sorry, the service you are looking for does not exist. Please check
            the URL or go back to the services page.
          </p>
          <Link
            to="/services" // Assuming you have a services overview page
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-800 dark:text-blue-50 dark:hover:bg-blue-900"
          >
            Go to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-start">
          {/* Image Section */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-3xl font-extrabold text-gray-900  tracking-tight mb-4">
              {service.title}
            </h1>
            {service.image && (
              <img
                src={service.image}
                alt={service.name}
                className="w-full rounded-lg shadow-lg object-cover aspect-video" // aspect-video for maintaining aspect ratio
              />
            )}
            {service.keywords && (
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Keywords: {service.keywords.join(", ")}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div>
            <div className="prose prose-lg dark:prose-invert space-y-5 mb-8">
              {service.content}{" "}
              {/* Using Tailwind's Prose for better typography */}
              <p className="text-gray-600  mt-6">{service.description}</p>
            </div>

            {/* Booking Button */}
            <div className="flex justify-start">
              <button
                onClick={() => alert("Booking request sent!")}
                className="inline-flex cursor-pointer items-center space-x-1 px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
              >
                <FaArrowRight />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
