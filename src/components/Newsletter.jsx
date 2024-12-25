import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Show toast message on successful subscription
    toast.success("Thank you for subscribing to our newsletter!");

    // Clear the input field
    setEmail('');
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Stay updated with the latest news and promotions.
        </p>

        <form onSubmit={handleSubscribe} className="flex justify-center items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-l-md text-gray-700 "
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 border border-yellow-600 bg-yellow-600 text-white font-semibold rounded-r-md hover:bg-yellow-700 "
          >
            Subscribe
          </button>
        </form>

        {/* <ToastContainer/> */}
      </div>
    </div>
  );
};

export default Newsletter;
