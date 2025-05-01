import React from 'react';
import { motion } from 'framer-motion';
import ac from "../assets/Home/AcRepair.jpg";
import fridge from "../assets/Home/FridgeRepair.jpg";
import microwave from "../assets/Home/MicrowaveRepair.jpg";
import ro from "../assets/Home/RoRepair.jpg";
import washingMachine from "../assets/Home/WashingRepair.jpg";

const serviceData = [
  {
    imageUrl: ro,
    heading: 'RO Repair Services',
    description: 'Ensure pure water with our expert RO repair. We keep your purification system in top condition for healthy hydration.',
  },
  {
    imageUrl: ac,
    heading: 'AC Repair Services',
    description: 'Stay cool and comfortable! Our top-notch AC repair services guarantee efficient and effective cooling for your space.',
  },
  {
    imageUrl: fridge,
    heading: 'Refrigerator Repair Services',
    description: 'Keep your food fresh and your kitchen running smoothly with our comprehensive and quick fridge repair solutions.',
  },
  {
    imageUrl: microwave,
    heading: 'Microwave Oven Repair Services',
    description: 'Get your microwave back to cooking perfect meals! Our expert oven repair services ensure your appliance is ready when you are.',
  },
  {
    imageUrl: washingMachine,
    heading: 'Washing Machine Repair Services',
    description: 'Say goodbye to laundry day stress! Our reliable washing machine repair services will have your clothes clean with no hassle.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const serviceCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const OurServices = () => {
  return (
    <motion.div
      className="md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-20 rounded-xl shadow overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Section Title */}
        <div className="flex justify-center flex-col text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Our Expertise, Your Peace of Mind
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed md:w-[60%] mx-auto">
            Our skilled technicians are masters at diagnosing and resolving appliance issues with precision and care, ensuring your devices are back to their best.
          </p>
          <div className="w-16 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={serviceCardVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div
                className="relative h-48 md:h-56 overflow-hidden"
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <img
                  src={service.imageUrl}
                  alt={service.heading}
                  loading='lazy'
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.heading}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OurServices;
