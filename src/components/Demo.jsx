import React from "react";

const Demo = () => {

    const images = [
        {
          src: 'https://via.placeholder.com/300x200',
          title: 'Beautiful Beach',
          description: 'A serene view of the beach during sunset.',
        },
        {
          src: 'https://via.placeholder.com/300x200',
          title: 'Mountain Adventure',
          description: 'Hiking trails in the rocky mountains.',
        },
        {
          src: 'https://via.placeholder.com/300x200',
          title: 'City Lights',
          description: 'The city skyline illuminated at night.',
        },
       
      ];
      
    
      return (
        <div className="flex overflow-x-scroll space-x-4 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative min-w-[300px] h-[200px] bg-cover bg-center rounded-lg transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4 rounded-lg">
                <h2 className="text-white text-xl font-bold mb-2">{image.title}</h2>
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
 
 

export default Demo;