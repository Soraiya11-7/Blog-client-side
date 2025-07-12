import React from 'react';
import { FaCalendarAlt, FaPenFancy, FaShareAlt } from 'react-icons/fa';

const ExtraOne = () => {
    const tips = [
        {
            icon: <FaCalendarAlt className="text-4xl" />,
            title: 'Consistency is Key',
            description: 'Post regularly to keep your audience engaged and returning for more content.'
        },
        {
            icon: <FaPenFancy className="text-4xl" />,
            title: 'Focus on Quality',
            description: 'Write in-depth articles that provide value to your readers and solve their problems.'
        },
        {
            icon: <FaShareAlt className="text-4xl" />,
            title: 'Promote on Social Media',
            description: 'Share your posts on various platforms to increase visibility and traffic.'
        }
    ];

    return (
        <section className="py-16  mt-16
            bg-gradient-to-r from-sky-300 to-gray-50 dark:from-sky-500 dark:to-gray-800">
            <div className="w-[85%] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 animate-fadeIn">
                        Tips for Successful Blogging
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 sm:w-[65%] xl:w-[50%] mx-auto animate-fadeIn">
                        Here are some best practices and tips to create amazing content and attract a wider audience.
                    </p>
                </div>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tips.map((tip, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center rounded-lg bg-white dark:bg-black p-6 lg:px-8 py-12 relative 
                                      transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                                      border border-gray-200 dark:border-gray-700"
                        >
                            {/* Number Badge */}
                            <div className="absolute top-3 left-3 bg-sky-500 dark:bg-sky-600 text-white text-xl font-semibold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center mx-auto mb-4 text-sky-500 dark:text-sky-400">
                                {tip.icon}
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 className="font-bold text-xl md:text-2xl mb-4 text-gray-800 dark:text-white">
                                    {tip.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-300 text-base">
                                    {tip.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add these to your global CSS file */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default ExtraOne;