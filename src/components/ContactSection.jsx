import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react"; // Optional: Using lucide-react icons
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the email data
    const { fullName, email, phone, message } = formData;

    // Use EmailJS to send the email
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        {
          from_name: fullName,
          from_email: email,
          from_phone: phone,
          message: message,
        },
        "YOUR_USER_ID" // Replace with your user ID
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          // Clear the form after successful submission
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-12 px-4 md:px-16 md:w-[80%] border-t border-gray-400 mx-auto bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left side - Text and Contact Info */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            GET IN TOUCH WITH US
          </h2>
          <p className="text-gray-600 mb-4">
            We welcome your inquiries, feedback, and service requests. Our team
            at Sai Service Center is dedicated to providing prompt and efficient
            solutions to meet your needs. Feel free to reach out to us through
            the following channels.
          </p>
          <p className="text-gray-600 mb-8">
            Our customer support team is available to assist you with any
            queries or concerns. Whether you have questions about our services,
            need assistance with a recent repair, or want to learn more about
            our offerings, our friendly and knowledgeable staff is ready to
            help.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-orange-500">
              <Phone className="w-5 h-5" />
              <span className="text-gray-700">9897272757, 9627927945</span>
            </div>
            <div className="flex items-center gap-3 text-orange-500">
              <Mail className="w-5 h-5" />
              <span className="text-gray-700">tarun.saiservices@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-orange-500">
              <MapPin className="w-5 h-5" />
              <span className="text-gray-700">
                31/2 Govind Garh, Opposite Rainbow School
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 bg-white shadow-2xl rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Send Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 disabled:bg-gray-400"
            >
              {isSubmitting ? "Submitting..." : "Get Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
