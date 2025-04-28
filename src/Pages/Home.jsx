import React from "react";
import HomeHero from "../components/HomeHero";
import bg from "../assets/HomeHeroBg.jpg";
import quote from "../assets/quote.svg";
import OurServices from "../components/OurServices";
import fixedbg from "../assets/fixedImg.jpg";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection"

const Home = () => {
  return (
    <div className={`bg-white`}>
      <HomeHero />

      <div className="bg-gray-50 md:w-[80%] mx-auto py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text Content */}
            <div>
              <h2 className="text-sm font-semibold text-orange-500 uppercase mb-2">
                Know Who We Are
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                About Sai Service Center
              </h3>
              <p className="text-gray-700 mb-4 leading-7">
                Sai Service Centre stands as a reliable and customer-focused
                electronic repair service center, committed to delivering
                high-quality solutions for a seamless and efficient electronic
                repair experience. Trust us with your devices, and we'll ensure
                they are in capable hands.
              </p>
              <p className="text-gray-700 mb-6 leading-7">
                At Sai Service Centre, we understand the value of your
                electronic devices. That's why we prioritize the use of genuine
                parts for replacements, ensuring the longevity and optimal
                performance of your repaired devices. Our advanced facilities
                are equipped with state-of-the-art tools and technology,
                guaranteeing precise and efficient repairs.
              </p>
              <div className="relative border-l border-gray-600/50 ml-5 pl-2 mt-6">
                <img src={quote} className="w-10 h-10 rotate-180"></img>
                <p className="text-gray-700 italic">
                  <span className="text-4xl">W</span>hen your electronic devices
                  encounter issues, entrust them to the experts at Sai Service
                  Centre for a seamless and reliable repair experience.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full h-full ">
              <img
                src={bg}
                alt="Appliances at Sai Service Center"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <OurServices />

      <div
        className="relative bg-fixed bg-cover bg-no-repeat bg-black/70 md:bg-black/50 bg-blend-overlay"
        style={{ backgroundImage: `url(${fixedbg})` }}
      >
        <div className="md:w-[95%] space-y-3.5 mx-auto text-white p-5 md:p-16 flex flex-col justify-center items-center">
          <h1 className=" text-5xl text-center font-semibold">Sai Service Centre</h1>
          <p className="leading-7">
            At Sai Service Centre, we’re the trusted experts in Dehradun for
            electronic appliance repairs. With a commitment to prompt service
            and budget-friendly solutions, we’ve earned a reputation for
            excellence. Count on us to bring your gadgets back to life – that’s
            what we do best!
          </p>
          <p className="leading-7">
            Our journey at Sai Service Centre began with a simple goal: to
            provide hassle-free repairs for electronic appliances in Dehradun.
            Over the years, our skilled technicians have honed their craft,
            delivering quick and efficient solutions. We take pride in being a
            reliable partner for all your gadget revival needs. What sets us
            apart is our dedication to customer satisfaction. We understand the
            inconvenience of a malfunctioning device, and our friendly team is
            always ready to assist you. At Sai Service Centre, it’s not just
            about fixing appliances; it’s about fostering trust and ensuring a
            seamless experience for every customer who walks through our doors.
            Join the Sai Service Centre family, where your electronics are
            treated with care and expertise.
          </p>
        </div>
      </div>

      <WhyChooseUs />
      <div>
    <ContactSection/>
      </div>
    </div>
  );
};

export default Home;
