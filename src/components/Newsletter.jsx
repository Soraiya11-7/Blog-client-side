import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    toast.success("Thank you for subscribing to our newsletter!", {
      position: "top-center",
      autoClose: 2000,
    });
    setEmail('');
  };

  return (
    <div className="py-14 border-2 border-sky-500 bg-gray-100 dark:text-white container w-[90%] mx-auto rounded-lg">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-xl sm:text-2xl text-dark md:text-3xl text-sky-500 font-semibold mb-2">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-base sm:text-lg text-dark mb-6 w-[90%] mx-auto">
          Stay updated with the latest news and promotions.
        </p>

        <form onSubmit={handleSubscribe}>
          <div className="sm:flex justify-center items-center w-[80%] sm:w-[80%] mx-auto">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="py-2 px-2 border border-sky-500 outline-none sm:rounded-l-md  bg-black dark:bg-white text-white dark:text-gray-800 mb-3 sm:mb-0"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-2 px-2 border border-sky-500 text-sky-500 font-semibold sm:rounded-r-md hover:bg-sky-600 hover:text-white"
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
