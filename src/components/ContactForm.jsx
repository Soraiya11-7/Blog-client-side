import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleGetInTouchClick = () => {

    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for reaching out to us!", {
      position: "top-center",
      autoClose: 2000,
    });
    setShowContactForm(false);
  }

  return (
    <div className=" text-center py-12 my-2 px-2 md:px-4  w-[90%] mx-auto">
      {!showContactForm ? (
        <div className="w-[90%] md:w-[80%] bg-white  mx-auto py-16 border border-sky-600 dark:bg-sky-500  dark:text-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-sky-500 dark:text-white">Let's Talk!</h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-black">
            Want to collaborate? We would love to hear from you.
          </p>
          <button
            onClick={handleGetInTouchClick}
            className="border-2 border-black dark:border-white text-sky-500 dark:text-white px-4 md:px-6 py-2 rounded-full text-base md:text-xl dark:hover:bg-black hover:bg-sky-600 hover:text-white font-semibold transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      ) : (
        <div className="max-w-lg mx-auto p-6 text-right bg-white border-2 border-sky-500 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold text-sky-500 mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="text-left">
            <div className="grid gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm sm:text-base md:text-lg">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="w-full p-2 border border-black text-black rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm sm:text-base md:text-lg">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="w-full p-2 border border-black text-black rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base md:text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-black text-black rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base md:text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full p-2 border border-black text-black rounded-lg"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              className=" bg-sky-500 mt-2 p-2 text-white font-medium rounded-lg text-base  hover:bg-sky-600 transition duration-300 "
            />
          </form>

          <button
            onClick={handleCloseContactForm}
            className="mt-4 text-black  hover:bg-black hover:text-white border border-black px-2 md:px-6 py-1 rounded-full"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
