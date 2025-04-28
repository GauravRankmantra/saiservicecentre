import React from "react";

import why from "../assets/why.png"

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 md:w-[80%] w-full p-2 mx-auto py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Section Title */}
        <div className="flex justify-center flex-col text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Why Choose Us
          </h2>

          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* RO Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  bg-gray-100 flex items-center justify-center mb-4">
              <img src={why} className="w-10 h-10"></img>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">
              Fast Services
            </h3>
            <p className="text-gray-600 text-sm">
              Just call us at the provided number and tell us about the problem
              in your AC, our technicians will be there at your doorstep. We do
              not believe in any delay.
            </p>
          </div>

          {/* AC Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  bg-gray-100 flex items-center justify-center mb-4">
              <img src={why} className="w-10 h-10"></img>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">
              Skilled Technicians
            </h3>
            <p className="text-gray-600 text-sm">
              Our technicians are so skilled that they are capable of repairing
              any brand of AC. Whether you have a Haier AC or Samsung AC, our
              technician will solve the matter for you.
            </p>
          </div>

          {/* Refrigerator Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  flex items-center justify-center mb-4">
              <img src={why} className="w-10 h-10"></img>
            </div>
            <h3 className="text-lg font-semibold group-hover:text-orange-600  mb-2">
              Original Parts
            </h3>
            <p className="text-gray-600 text-sm">
              In case of spare parts failure in AC, we will always replace the
              faulty part with an original one. It will ensure the longevity of
              the AC.
            </p>
          </div>

          {/* Microwave-Oven Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  bg-gray-100 flex items-center justify-center mb-4">
              <img src={why} className="w-10 h-10"></img>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">
              Honesty and Transparency
            </h3>
            <p className="text-gray-600 text-sm">
              Honesty flows in our veins. We will show you the exact problem in
              your AC and then we will suggest any changes to your AC.
            </p>
          </div>

          {/* Washing Machine Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  bg-gray-100 flex items-center justify-center mb-4">
              <img src={why} className="w-10 h-10"></img>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">
              Affordable Rates
            </h3>
            <p className="text-gray-600 text-sm">
              If you have booked Sai Service Centre for your AC repair in
              Dehradun, then drop all worries regarding charges. When it comes
              to pricing, we charge the lowest among all technicians in
              Dehradun.
            </p>
          </div>

          {/* Empty Slot (for alignment if needed on larger screens) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
