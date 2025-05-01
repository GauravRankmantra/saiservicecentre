import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your images (replace with actual paths)
import acRepair from '../assets/Home/AcRepair.jpg';
import fridgeRepair from  '../assets/Home/FridgeRepair.jpg';
import microwaveRepair from '../assets/Home/MicrowaveRepair.jpg';
import roRepair from  '../assets/Home/RoRepair.jpg';
import washingRepair from  '../assets/Home/WashingRepair.jpg';
import tvRepair from '../assets/Home/TvRepair.jpg';

const HomeHero = () => {
  const slides = [
    {
      imageUrl: acRepair,
      heading: 'Conquer the Heat: Expert AC Repair is Here!',
      subheading: 'Don\'t sweat it! Our skilled technicians deliver rapid AC repair and meticulous maintenance, restoring your cool comfort in no time.',
      alt: 'AC Repair',
    },
    {
      imageUrl: fridgeRepair,
      heading: 'Fridge on the Fritz? Get Reliable Refrigerator Service Now!',
      subheading: 'Keep your food fresh and your worries away! We offer swift and effective solutions for all your refrigerator malfunctions, big or small.',
      alt: 'Refrigerator Repair',
    },
    {
      imageUrl: microwaveRepair,
      heading: 'Is Your Microwave Down? We\'ll Get It Cooking Again!',
      subheading: 'From cold spots to complete breakdowns, our expert microwave oven repair services will have your kitchen humming again in a flash.',
      alt: 'Microwave Repair',
    },
    {
      imageUrl: roRepair,
      heading: 'Pure Water Guaranteed: Trust Our RO Water Purifier Repair!',
      subheading: 'Safeguard your family\'s health with our comprehensive RO repair services, ensuring your drinking water is always clean and safe.',
      alt: 'RO Repair',
    },
    {
      imageUrl: washingRepair,
      heading: 'Laundry Day Savior: Top-Notch Washing Machine Services!',
      subheading: 'Say goodbye to laundry woes! Our expert washing machine repair ensures smooth, hassle-free cycles, getting your clothes clean efficiently.',
      alt: 'Washing Machine Repair',
    },
    {
      imageUrl: tvRepair,
      heading: 'Screen Gone Dark? Expert Television Repair Services Await!',
      subheading: 'Don\'t miss your favorite shows! Our skilled technicians provide comprehensive TV repair solutions, bringing your entertainment back to life.',
      alt: 'TV Repair',
    },
  ];

  return (
    <div className="relative w-full h-[40rem] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Adjust as needed
          disableOnInteraction: false,
        }}

      
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={slide.imageUrl}
              alt={slide.alt}
              loading='lazy'
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-black opacity-40" /> {/* Slightly darker overlay */}
            <div className="absolute space-y-4 md:w-[70%] md:p-0 p-6 mx-auto inset-0 flex flex-col items-start justify-center text-white text-left">
              <h1 className="text-xl flex items-center space-x-2 font-bold mb-4">
                <div className="bg-orange-500 w-10 h-[0.15rem] "> </div>
                <span>Sai Service Centre</span>
              </h1>
              <p className="text-4xl md:text-5xl font-semibold w-full md:max-w-[80%] leading-tight">
                {slide.heading}
              </p>
              <p className="text-lg w-full md:max-w-[60%] mt-2 font-light">
                {slide.subheading}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHero;
