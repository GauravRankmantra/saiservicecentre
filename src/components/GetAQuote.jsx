import React, { useState } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const GetAQuote = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const services = [
    "RO Repair Services",
    "AC Repair Services",
    "Refrigerator Repair",
    "Microwave Oven Repair",
    "Washing Machine Repair",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS service parameters
    const serviceID = "YOUR_SERVICE_ID"; // Replace with your service ID
    const templateID = "YOUR_TEMPLATE_ID"; // Replace with your template ID
    const userID = "YOUR_USER_ID"; // Replace with your user ID from EmailJS

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (result) => {
          setSuccessMessage("Your request has been submitted successfully!");
          toast.success("Quote request sent successfully!");
          setFormData({ name: "", email: "", number: "", service: "" }); // Reset form
        },
        (error) => {
          toast.error("Something went wrong. Please try again!");
          console.error("EmailJS error:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900/40 bg-opacity-50">
        <Dialog.Panel className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-red-500 hover:text-gray-700"
          >
            <FaTimes className="text-2xl" />
          </button>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">
            Get A Quote
          </h2>
          {successMessage && (
            <div className="mb-4 flex items-center text-green-600">
              <FaCheckCircle className="mr-2" />
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="service"
                className="block text-sm font-semibold text-gray-700"
              >
                Select Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 disabled:bg-gray-400"
            >
              {isSubmitting ? "Submitting..." : "Get Quote"}
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default GetAQuote;
