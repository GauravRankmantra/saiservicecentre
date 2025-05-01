import React from "react";
import { FaBolt, FaTools, FaCogs, FaShieldAlt, FaTags } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-blue-600 text-3xl" />,
    title: "Rapid Response Team",
    description:
      "Our technicians are on standby and ready to reach your doorstep swiftly to address your AC issues without delay.",
  },
  {
    icon: <FaTools className="text-blue-600 text-3xl" />,
    title: "Certified Repair Experts",
    description:
      "No matter the brand — LG, Samsung, Voltas — our certified experts have the skills to handle all AC repairs flawlessly.",
  },
  {
    icon: <FaCogs className="text-blue-600 text-3xl" />,
    title: "Genuine Spare Parts",
    description:
      "We only install original manufacturer-approved parts to ensure durability and high performance of your appliance.",
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: "Transparent Service Process",
    description:
      "We keep things honest — we’ll explain the problem in detail and recommend only what’s necessary. No hidden charges!",
  },
  {
    icon: <FaTags className="text-blue-600 text-3xl" />,
    title: "Budget-Friendly Pricing",
    description:
      "Top-tier service doesn't have to cost a fortune. We offer competitive and affordable pricing for all repairs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 w-full py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-orange-500">Sai Service Centre</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Experience unmatched reliability, speed, and value with our trusted AC service solutions in Dehradun.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 bg-blue-100 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
