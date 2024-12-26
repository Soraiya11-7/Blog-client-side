import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    toast.success("Thank you for subscribing to our newsletter!");
    setEmail('');
  };

  return (
    <div className="bg-gray-100 rounded-t-xl py-14 bg-gradient-to-r from-yellow-600 via-red-500 to-pink-500 text-white" data-aos="zoom-out">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-xl sm:text-2xl text-white md:text-3xl font-semibold  mb-2">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-base sm:text-lg text-gray-900 mb-6 w-[90%] mx-auto">
          Stay updated with the latest news and promotions.
        </p>

        <form onSubmit={handleSubscribe} className="">
        <div className="sm:flex justify-center items-center w-[80%] sm:w-[80%] mx-auto">
       <div>
       <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className=" py-2 px-2 border border-gray-300  sm:rounded-l-md text-gray-700 mb-3 sm:mb-0"
            required
          />
       </div>
       <div>
       <button
            type="submit"
            className="py-2 px-2 border border-yellow-600 bg-yellow-600 text-white font-semibold sm:rounded-r-md  hover:bg-yellow-700 "
          >
            Subscribe
          </button>
       </div>
        
        </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
