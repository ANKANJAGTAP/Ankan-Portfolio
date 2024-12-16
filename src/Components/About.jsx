import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function About() {
  const navigate = useNavigate();
  const images = [
    './Pictures/ankan1.png', 
    './Pictures/ankan2.png', 
    './Pictures/ankan3.png' 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="w-full h-full " id="about">
      <div className="mt-4 mx-auto mr-[45%] ml-[45%] text-center text-4xl font-bold py-4 px-4 rounded-full hover:text-purple-400 cursor-pointer duration-200 border-b-2 border-purple-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900 hover:scale-105 hover:shadow-xl transition-transform duration-300">
        About
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 mx-6 md:mx-[10%] space-y-6 md:space-y-0">
        <div className="w-full md:w-[40%] h-auto border-stone-500">
        <div className="w-auto h-auto bg-zinc-600 flex rounded-full overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
      <img 
         onClick={handleClick}
        src={images[currentIndex]}
        alt="Image Slider"
        className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out hover:scale-110"
      />
    </div>
        </div>

        <div className="w-full md:w-[40%] text-lg md:text-2xl backdrop-blur-md border border-amber-500 px-3 py-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <div className="bg-gray-900 p-4 rounded-lg">
            "I am a passionate Computer Science student with a keen interest in software development and problem-solving. With experience in C++, data structures, and web technologies, I strive to create impactful solutions. I'm constantly learning and improving my skills to build innovative and user-friendly applications."
          </div>
          <a
  href="/Ankan Jagtap_Resume (1).pdf"
  download="Ankan Jagtap_Resume.pdf"
  className="block text-center mt-4 px-4 py-2 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] mx-auto bg-pink-500 text-white rounded-lg hover:bg-orange-500 transition-colors duration-300"
>
  See More
</a>
        </div>
      </div>
    </div>
  );
}

export default About;
