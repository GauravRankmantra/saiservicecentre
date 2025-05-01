import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";
import heroImg from "../assets/AboutBg.jpg" // you can replace with a better suited image
import serviceImg from "../assets/AboutusBg2.jpg"; // you can replace
import {
  MdOutlineMicrowave,
  MdOutlineLocalLaundryService,
  MdOutlineKitchen,
  MdOutlineAcUnit,
  MdOutlineWaterDrop,
} from "react-icons/md";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.7)]"
            data-aos="fade-down"
          >
            About Sai Service Centre
          </h1>
          <p
            className="text-lg md:text-2xl max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Reliable. Expert. Trusted.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-black mb-6">Who We Are</h2>
          <p className="text-lg mb-4">
            Sai Service Centre is a customer-first electronic repair hub where
            quality craftsmanship meets advanced technology. We are dedicated to
            restoring your devices with precision, integrity, and genuine care.
          </p>
          <p className="text-lg mb-4">
            Founded with a mission to redefine repair standards, we combine
            years of expertise with modern tools to deliver exceptional repair
            solutions across a wide range of electronics — from smartphones and
            laptops to home appliances.
          </p>
          <p className="text-lg">
            Your devices deserve the best, and at Sai Service Centre, we ensure
            they are always in expert hands.
          </p>
        </div>
        <img
          src={serviceImg}
          alt="Service Centre"
          loading="lazy"
          className="rounded-lg shadow-2xl"
          data-aos="fade-left"
        />
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Why Choose Sai Service Centre?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                Genuine Parts
              </h3>
              <p>
                We use only original components to ensure the performance and
                longevity of your device after repair.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                Expert Technicians
              </h3>
              <p>
                Our skilled professionals are trained to handle delicate repairs
                with utmost precision and care.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                Quick Turnaround
              </h3>
              <p>
                We understand the importance of your gadgets. Fast and efficient
                service is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Highlight */}
      <section className="py-16 px-6 max-w-7xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Our Specializations
          </h2>
          <p className="text-lg">
            Expert repair services for all major home appliances. Quick
            diagnosis, professional service, and reliable solutions you can
            trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* RO Repair */}
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <MdOutlineWaterDrop size={50} className="text-orange-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">RO System Repair</h4>
            <p className="text-sm">
              Complete servicing and repairs for RO water purifiers, including
              filter replacements and leak fixes.
            </p>
          </div>

          {/* AC Repair */}
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <MdOutlineAcUnit size={50} className="text-orange-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">AC Servicing</h4>
            <p className="text-sm">
              Split AC, Window AC, central air systems – from gas refilling to
              compressor repair, we do it all.
            </p>
          </div>

          {/* Washing Machine Repair */}
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <MdOutlineLocalLaundryService
              size={50}
              className="text-orange-500 mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">
              Washing Machine Repair
            </h4>
            <p className="text-sm">
              Top-load, front-load, and semi-automatic machine repairs with
              genuine parts and expert service.
            </p>
          </div>

          {/* Refrigerator Repair */}
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <MdOutlineKitchen size={50} className="text-orange-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Refrigerator Repair</h4>
            <p className="text-sm">
              Fixing cooling issues, compressor faults, and door seal problems
              for all brands of fridges and freezers.
            </p>
          </div>

          {/* Microwave Repair */}
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <MdOutlineMicrowave size={50} className="text-orange-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">
              Microwave Oven Repair
            </h4>
            <p className="text-sm">
              Magnetron replacement, panel repair, heating issues and more —
              ensuring your microwave works like new.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-100 py-16 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Our Repair Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                Diagnosis
              </h3>
              <p>
                We perform a detailed diagnosis to understand the root cause
                before proceeding with any repair.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                Expert Repair
              </h3>
              <p>
                Our trained technicians repair the device using advanced tools
                and genuine parts ensuring optimal performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                Quality Check
              </h3>
              <p>
                Post-repair, your device undergoes rigorous quality tests to
                ensure it’s as good as new.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <blockquote className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic">
                "Exceptional service! My phone looks brand new. The team
                explained everything clearly and completed the repair quickly."
              </p>
              <cite className="block mt-4 text-sm font-medium">
                – Priya R., Dehradun
              </cite>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic">
                "Highly professional staff. Got my laptop repaired here and it’s
                running perfectly. Highly recommended!"
              </p>
              <cite className="block mt-4 text-sm font-medium">
                – Anil K., Rajpur Road
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="bg-orange-400 py-12 px-6 text-white text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-4">
          Need a Quick and Reliable Repair?
        </h2>
        <p className="text-lg mb-6">
          Contact Sai Service Centre today. We bring your devices back to life!
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default About;
