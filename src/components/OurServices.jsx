import React from 'react';

import ac from "../assets/ac.jpg"
import fridge from "../assets/frigde.jpg"
import microwave from "../assets/microwave.jpg"
import ro from "../assets/ro.jpg"
import washingMachine from "../assets/washing-machine.jpg"


const OurServices = () => {
  return (
    <div className="bg-gray-50 md:w-[80%] mx-auto py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Section Title */}
        <div className="flex justify-center flex-col text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
          <p className="text-gray-600 md:w-[50%] mx-auto">
            Our team of highly skilled technicians is adept at diagnosing and fixing issues with precision,
            ensuring that your devices are restored to optimal functionality.
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* RO Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  bg-gray-100 flex items-center justify-center mb-4">
              <img src={ro} className='w-10 h-10'></img>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">RO Repair Services</h3>
            <p className="text-gray-600 text-sm">
              Sai Service Center is your reliable partner for top-notch RO repair services, committed to
              keeping your water purification system in optimal condition.
            </p>
          </div>

          {/* AC Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  bg-gray-100 flex items-center justify-center mb-4">
            <img src={ac} className='w-10 h-10'></img>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">AC Repair Services</h3>
            <p className="text-gray-600 text-sm">
              Sai Service Center specializes in delivering top-notch air conditioner repair services, ensuring
              that your cooling systems are operating efficiently and effectively.
            </p>
          </div>

          {/* Refrigerator Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  flex items-center justify-center mb-4">
            <img src={fridge} className='w-10 h-10'></img>
            </div>
            <h3 className="text-lg font-semibold group-hover:text-orange-600  mb-2">Refrigerator Repair Services</h3>
            <p className="text-gray-600 text-sm">
              Sai Service Center is your trusted destination for comprehensive fridge repair services, ensuring
              your appliance is back to optimal performance quickly and efficiently.
            </p>
          </div>

          {/* Microwave-Oven Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  bg-gray-100 flex items-center justify-center mb-4">
            <img src={microwave} className='w-10 h-10'></img>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">Microwave-Oven Repair Services</h3>
            <p className="text-gray-600 text-sm">
              Sai Service Center is your reliable partner for expert oven repair services, ensuring that your
              appliance is back in action to serve up delicious meals.
            </p>
          </div>

          {/* Washing Machine Repair Services */}
          <div className="bg-white group rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full group-hover:bg-orange-100  bg-gray-100 flex items-center justify-center mb-4">
            <img src={washingMachine} className='w-10 h-10'></img>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">Washing Machine Repair Services</h3>
            <p className="text-gray-600 text-sm">
              Sai Service Center is here to alleviate your laundry woes with our comprehensive washing machine
              repair services; trust Sai Service Center to deliver reliable.
            </p>
          </div>

          {/* Empty Slot (for alignment if needed on larger screens) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;