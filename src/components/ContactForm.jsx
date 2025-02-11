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

  const handleSubmit = (e) =>{
    e.preventDefault();
    toast.success("Thank you for reaching out to us!", {
        position: "top-center",
        autoClose: 2000,
    });
    setShowContactForm(false);
  }

  return (
    <div className="bg-gray-100 text-center py-12 px-2 md:px-4  w-[90%] mx-auto">
      {!showContactForm ? (
        <div className="w-[90%] md:w-[80%] mx-auto py-16 bg-sky-500 text-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Let's Talk!</h2>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            Want to collaborate? We would love to hear from you.
          </p>
          <button
            onClick={handleGetInTouchClick}
            className="bg-black text-white px-4 md:px-6 py-2 rounded-full text-base md:text-xl hover:bg-sky-600 transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      ) : (
        <div className="max-w-lg mx-auto p-6 bg-white border-2 border-sky-500 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-500 mb-4">Contact Us</h2>
          <form  onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm sm:text-base md:text-lg">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm sm:text-base md:text-lg">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base md:text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base md:text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
            <input type="submit" value="Submit" className="bg-sky-500 text-white px-2 md:px-6 py-1 md:py-2 rounded-full text-xl hover:bg-sky-600 transition duration-300 border-none" />
            {/* <button
              type="submit"
              className="bg-sky-500 text-white px-6 py-2 rounded-full text-xl hover:bg-sky-600 transition duration-300"
            >
              Submit
            </button> */}
          </form>
          <button
            onClick={handleCloseContactForm}
            className="mt-4 text-gray-500 hover:text-sky-500"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
