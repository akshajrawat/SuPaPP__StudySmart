import axios from "axios";
import React, { useState } from "react";
import {
  ErrorMessage,
  LoadingSpinner,
  SuccessMessage,
} from "../../../Components/Ui/Messages";

const ContactMe = () => {
  // defining user
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    error: "",
    status: false,
  });
  const [success, setSuccess] = useState({
    success: "",
    status: false,
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  // funtion which handle change of input
  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handling the submition of the form

  const handleSubit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess({
      success: "",
      status: false,
    });

    // throws error if any of the field is missing
    if (!user.name || !user.email || !user.message) {
      setError({
        error: "All fields are mandatory",
        status: true,
      });
      throw new Error("All fields are mandatory");
    }

    // sending post request
    try {
      const response = await axios.post(
        "http://localhost:3000/SuPaPP/auth/contact",
        user
      );
      setLoading(false);
      if (response.status === 200) {
        setSuccess({
          success: response.data.message,
          status: true,
        });
        setUser({ name: "", email: "", message: "" });
      } else {
        setError({
          error: response.data.message || "Failed to send message",
          status: true,
        });
        throw new Error(response.data.message);
      }
    } catch (error) {
      setError({
        error: error.response?.data?.message || "Something went wrong!",
        status: true,
      });
    }
  };

  return (
    <div
      id="Contact"
      className="flex flex-col justify-start gap-2 p-5 mt-10 lg:pt-20 xl:pt-20"
    >
      {/* Head start */}
      <h1 className="text-black dark:text-white text-4xl xl:text-5xl xl:flex-row font-bold flex flex-col gap-2 ml-1">
        <span>Get in</span>
        <span className="text-[#4fd1d9]">Touch</span>
      </h1>
      <div className="text-[#727382] text-lg font-semibold leading-none w-[95%] xl:w-[40%] ml-1">
        Have questions, feedback, or just want to say hello? We'd love to hear
        from you.
      </div>
      {/* Head end */}
      {/* Contact form start */}
      <div className="bg-[#dfdfdf44] dark:bg-[#151630] w-full rounded-2xl border-2 border-[#7273825e] px-3 pt-10 pb-6 mt-5">
        <form
          onSubmit={handleSubit}
          className="w-full flex flex-col gap-4 text-[#707070] dark:text-[#b9b9ba] px-2"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-sm xl:text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={user.name}
              name="name"
              placeholder="Your name"
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-[#7273825e] outline-none text-black dark:text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-sm xl:text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              name="email"
              placeholder="Your email"
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-[#7273825e] outline-none text-black dark:text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-semibold text-sm xl:text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={user.message}
              name="message"
              placeholder="Your message"
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-[#7273825e] outline-none resize-none text-black dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="mt-2 mx-auto self-start bg-[#4fd1d9] hover:bg-[#3bbac1] transition-colors text-white font-bold py-2 px-6 rounded-xl"
          >
            Send Message
          </button>
          {success.status && <SuccessMessage message={success.success} />}
          {error.status && <ErrorMessage message={error.error} />}
          {loading && <LoadingSpinner />}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
