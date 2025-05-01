import React from "react";
import HomeHero from "../components/HomeHero";
import bg from "../assets/HomeHeroBg.jpg";
import quote from "../assets/quote.svg";
import care from "../assets/Home/care.svg";
import { motion } from "framer-motion";
import OurServices from "../components/OurServices";
import fixedbg from "../assets/fixedImg.jpg";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";
import { Activity, Cog, Clock } from "lucide-react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { x: '10%', opacity: 0, scale: 0.95 },
    visible: { x: '0%', opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: 180, opacity: 0 },
    visible: { scale: 1, rotate: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 10 } },
  };

  const quoteVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.6 } },
  };

  return (
    <div className={`bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 space-y-5`}>
      <HomeHero />

      <motion.div
      className="  md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-16 rounded-xl shadow overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} // Animation triggers every time it enters the viewport
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Column: Engaging Text Content */}
        <motion.div className="space-y-6" variants={textVariants}>
          <motion.span className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-full uppercase tracking-wider" variants={textVariants}>
            Our Story
          </motion.span>
          <motion.h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight" variants={textVariants}>
            Beyond Repairs: We're Your Trusted Tech Allies.
          </motion.h2>
          <motion.p className="text-lg text-gray-700 leading-relaxed" variants={textVariants}>
            Tired of tech troubles disrupting your day? At Sai Service Centre, we're more than just a repair shop. We're a team of passionate experts dedicated to getting your essential electronics back in prime condition – swiftly and reliably.
          </motion.p>
          <div className="space-y-4">
            <motion.div className="flex items-center border rounded-md px-3 py-2 border-[#0968F6]/20" variants={textVariants}>
              <motion.div className="flex-shrink-0" variants={iconVariants}>
                <Cog className="w-8 h-8 text-orange-500" />
              </motion.div>
              <p className="text-gray-700 ml-3 leading-relaxed">
                <strong>Genuine Parts, Real Results: </strong>We use only authentic components, guaranteeing lasting performance for your beloved devices.
              </p>
            </motion.div>
            <motion.div className="flex items-center border rounded-md px-3 py-2 border-[#0968F6]/20" variants={textVariants}>
              <motion.div className="flex-shrink-0" variants={iconVariants}>
                <Activity className="w-8 h-8 text-orange-500" />
              </motion.div>
              <p className="text-gray-700 ml-3 leading-relaxed">
                <strong>Cutting-Edge Care:</strong> Our advanced facilities are equipped with the latest tools and technology, ensuring precise and efficient repairs you can count on.
              </p>
            </motion.div>
            <motion.div className="flex items-center border rounded-md px-3 py-2 border-[#0968F6]/20" variants={textVariants}>
              <motion.div className="flex-shrink-0" variants={iconVariants}>
                <Clock className="w-8 h-8 text-orange-500" />
              </motion.div>
              <p className="text-gray-700 ml-3 leading-relaxed">
                <strong>Your Time Matters:</strong> We understand the importance of your devices in your daily life. Our goal is to provide quick turnaround times without compromising on quality.
              </p>
            </motion.div>
          </div>
          <motion.div className="relative border-l-2 border-orange-300 ml-4 pl-2 mt-8 italic text-gray-600" variants={quoteVariants}>
            <motion.img
              src={quote}
              className="w-8 h-8 absolute -left-4 top-0 transform rotate-180"
              alt="Quote Icon"
              variants={iconVariants}
            />
            <blockquote className="text-lg">
              <span className="font-semibold text-orange-500">"</span>When your tech lets you down, let our expertise lift it back up. Experience the Sai Service Centre difference.<span className="font-semibold text-orange-500">"</span>
            </blockquote>
          </motion.div>
        </motion.div>

        {/* Right Column: Modern Image */}
        <motion.div
          className="relative rounded-lg shadow-xl overflow-hidden aspect-w-16 aspect-h-9"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <img
            src={bg}
            alt="Modern Electronic Devices at Sai Service Center"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {/* Optional: Add a subtle overlay or branding here */}
        </motion.div>
      </div>
    </motion.div>

    {/* <hr className="md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-blue-700/50">
    </hr> */}

      <OurServices />

      <div
      className="relative bg-fixed bg-cover bg-no-repeat bg-center bg-black/80 bg-blend-overlay py-20 md:py-32 lg:py-48"
      style={{ backgroundImage: `url(${fixedbg})` }}
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl text-orange-500 lg:text-6xl font-extrabold mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Trusted Tech Repair Partner in Dehradun
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Expert electronic appliance repairs with a commitment to swift service and budget-friendly solutions.
        </motion.p>

        <div className="max-w-[50rem] mx-auto space-y-6">
          {[...Array(3)].map((_, i) => (
            <motion.p
              key={i}
              className="text-md md:text-lg leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {[
                "At Sai Service Centre, we're more than just a repair shop. We're your dedicated neighbors in Dehradun, passionate about bringing your essential electronics back to life with expertise and care. Our reputation for excellence is built on trust, promptness, and solutions that don't break the bank.",
                "Our journey began with a simple yet powerful vision: to make electronic appliance repairs in Dehradun seamless and stress-free. Over the years, our skilled technicians have honed their craft, delivering efficient and reliable service you can depend on. We pride ourselves on being your go-to partner for all your gadget revival needs.",
                "What truly sets Sai Service Centre apart is our unwavering dedication to your satisfaction. We understand the frustration of a malfunctioning device, and our friendly team is always ready to listen and assist. We believe in fostering lasting relationships with our customers, ensuring a smooth and positive experience every time you choose us. Join the Sai Service Centre family – where your electronics are in expert hands."
              ][i]}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>

      <WhyChooseUs />
      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
