import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    // TODO: Integrate with backend or EmailJS
  };

  return (
    <div className="min-h-screen bg-[#0C363C] flex flex-col items-center py-16 px-6">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h3 className="text-5xl font-bold text-white">Get in Touch</h3>
        <p className="text-xl text-[#ffffffa1] mt-3">
          We’d love to hear from you. Fill out the form below to contact us!
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-[#0C363C]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-[#0C363C]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:outline-[#0C363C]"
          />

          <button
            type="submit"
            className="bg-[#0C363C] text-white text-lg font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            <div className="flex justify-center items-center gap-2">
              <FaEnvelope />
              Send Message
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
