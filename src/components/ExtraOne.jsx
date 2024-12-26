// ExtraOne.js

import React from 'react';
import { motion } from 'framer-motion';

const ExtraOne = () => {
    return (
        <div className="">
          {/* Tips Section with Animation */}
          <section className="tips-section bg-gray-100 py-10">
            <div className="container mx-auto px-6">
              {/* Title Animation............................. */}
              <motion.h2 
                className="text-xl sm:2xl md:text-3xl font-extrabold text-center mb-4 text-blue-600 tracking-wide" 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
              >
                Tips for Successful Blogging
              </motion.h2>
    
              {/* Subtitle Animation */}
              <motion.p 
                className="text-base w-[90%] md:w-[70%] mx-auto text-center text-gray-700 mb-8 " 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5, duration: 1 }}
              >
                Here are some best practices and tips to create amazing content and attract a wider audience:
              </motion.p>
    
              {/* List Items Animation.......................... */}
              <motion.ul 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.li 
                  className="tip-card bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-8 px-4 rounded-lg shadow-xl relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  {/* Number Badge........................... */}
                  <div className="absolute top-3 left-3 bg-blue-700 text-white text-xl font-semibold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    1
                  </div>
                  <h3 className="font-bold  text-lg md:text-xl lg:text-2xl mb-4 tracking-wide mt-6">
                    Consistency is Key
                  </h3>
                  <p className="text-sm font-medium leading-snug opacity-80">
                    Post regularly to keep your audience engaged and returning for more content.
                  </p>
                </motion.li>
    
                <motion.li 
                  className="tip-card bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-8 px-4 rounded-lg shadow-xl relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 2, duration: 0.6 }}
                >
                  {/* Number Badge................ */}
                  <div className="absolute top-3 left-3 bg-green-700 text-white text-xl font-semibold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    2
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 tracking-wide mt-6">
                    Focus on Quality
                  </h3>
                  <p className="text-sm font-medium leading-snug opacity-80">
                    Write in-depth articles that provide value to your readers and solve their problems.
                  </p>
                </motion.li>
    
                <motion.li 
                  className="tip-card bg-gradient-to-r from-yellow-500 via-red-500 to-pink-400 text-white py-8 px-4 rounded-lg shadow-xl relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 2.5, duration: 0.6 }}
                >
                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 bg-yellow-600 text-white text-xl font-semibold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    3
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 tracking-wide mt-6">
                    Promote on Social Media
                  </h3>
                  <p className="text-sm font-medium leading-snug opacity-80">
                    Share your posts on various social media platforms to increase visibility and traffic.
                  </p>
                </motion.li>
              </motion.ul>
            </div>
          </section>
    
          {/* Other sections */}
        </div>
      );
};

export default ExtraOne;
