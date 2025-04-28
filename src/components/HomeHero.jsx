import React from "react";
import bg from "../assets/HomeHeroBg.jpg";
const HomeHero = () => {
  return (
    <div className="relative w-full border h-[40rem]">
      <img src={bg} alt="Home Services" className="w-full h-full object-cover block" />
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Black overlay */}
      <div className="absolute space-y-2.5 md:w-[70%] md:p-0 p-5 mx-auto inset-0 flex flex-col items-start justify-center text-white text-center">
        <h1 className="text-xl flex items-center space-x-1 font-bold mb-4">
          <div className="bg-orange-500 w-10  h-[0.10rem] "> </div>
          <span>    Sai Service Centre</span>
      
        </h1>
        <p className="text-6xl md:w-[50%] text-start md:text-5xl font-semibold">
          Your Trusted Partner in Electronic Repairs
        </p>
        <p className="md:w-[50%] text-lg text-start mt-2">
          Sai Service Centre stands as a trusted name in the electronic repair
          industry, dedicated to providing high-quality, efficient, and
          customer-friendly services.
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
