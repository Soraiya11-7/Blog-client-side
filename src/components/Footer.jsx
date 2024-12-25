import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900  pt-10">
      <div className=" mx-auto text-center w-[80%] pb-10 text-white">
       
        <h2 className="text-2xl font-bold mb-4">InsightSphere</h2>
        <p className="mb-8 mx-auto text-sm sm:text-base w-[80%] md:w-[50%]">
        Building the next-generation blog experience with beautiful, responsive designs.
        </p>

        {/* Social Icons ..............................*/}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8">
          <button
            onClick={() => window.open('https://www.facebook.com/', '_blank')}
            className="btn btn-circle  hover:bg-sky-400 transition-all border border-sky-600"
          >
            <FaFacebook className="text-xl" />
          </button>
          <button
            onClick={() => window.open('https://github.com/', '_blank')}
            className="btn btn-circle  hover:bg-sky-400 transition-all border border-sky-600"
          >
            <FaGithub className="text-xl" />
          </button>
         
          <button
            onClick={() => window.open('https://www.linkedin.com/', '_blank')}
            className="btn btn-circle  hover:bg-sky-400 transition-all border border-sky-600"
          >
            <FaLinkedin className="text-xl" />
          </button>
        </div>
    

        <p className="text-xs sm:text-sm font-semibold">
        Copyright © {new Date().getFullYear()} Blog Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
