import React from 'react';
import { motion } from 'framer-motion';

const ExtraOne = () => {
    return (
        <div className="w-[90%] mx-auto">
          <section className=" py-14 rounded-t-xl">
            <div className="w-full mx-auto border border-sky-500 dark:border-yellow-600">
              {/* Title Animation */}
              <motion.h2 
                className="text-xl sm:2xl md:text-3xl font-extrabold text-center mt-5 mb-4 text-sky-500 tracking-wide" 
              >
                Tips for Successful Blogging
              </motion.h2>
    
              {/* Subtitle Animation */}
              <motion.p 
                className="text-base w-[90%] md:w-[70%] mx-auto text-center dark:text-white mb-8 text-black" 
              >
                Here are some best practices and tips to create amazing content and attract a wider audience:
              </motion.p>
    
              {/* List Items Animation */}
              <motion.ul 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" 
              >
                <motion.li 
                  className="tip-card bg-sky-500  py-8 px-4 rounded-lg shadow-xl relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xl font-semibold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    1
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 tracking-wide mt-6">
                    Consistency is Key
                  </h3>
                  <p className="text-sm font-medium leading-snug opacity-80">
                    Post regularly to keep your audience engaged and returning for more content.
                  </p>
                </motion.li>
    
                <motion.li 
                  className="tip-card bg-sky-500  py-8 px-4 rounded-lg shadow-xl relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xl font-semibold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
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
                  className="tip-card bg-sky-500 text-dark dark:text-black py-8 px-4 rounded-lg shadow-xl relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xl font-semibold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
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
        </div>
      );
};

export default ExtraOne;
