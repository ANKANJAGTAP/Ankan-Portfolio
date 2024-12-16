import React from "react";
import { useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";

function Home() {
  const navigate = useNavigate();
  const colorfulStrings = [
    `<span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-500 to-green-400">Website Designer</span>`,
    `<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">Frontend Developer</span>`,
    `<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-cyan-400">Creative Thinker</span>`,
    `<span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-orange-400">Tech Enthusiast</span>`,
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:ml-[15%] lg:mr-[15%] mt-[4%] gap-10 items-center lg:gap-20">
      
      <div className="text-center lg:text-left w-[50%]">
        <span className="block text-xl mb-4">
          <span className="px-2">Hello,</span>
        </span>
        <div className="relative ">
          <span className="text-4xl lg:text-6xl font-bold">
            I'm{" "}
            <span className="px-3 text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 glowing-gradient hover:underline-decoration">
              Ankan
            </span>
          </span>
        </div>
        <div className="relative inline-block mt-4">
          <span className="block">
           
            <Typewriter
              options={{
                strings: colorfulStrings,
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,  
                wrapperClassName: "typewriter-text text-4xl lg:text-6xl font-bold glow-text",
              }}
            />
          </span>
        </div>
       
        <p className="text-gray-600 text-sm lg:text-lg mt-6">
        Passionate Computer Science student, State-level badminton player, Linux enthusiast, exploring AI, DSA, and open-source with creativity and drive.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <button onClick={() => navigate('/ContactMe')} className="bg-white text-black font-bold rounded-full px-6 py-3 hover:text-purple-400 cursor-pointer duration-200 hover:border-b-2 hover:border-purple-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900">
            Hire Me
          </button>
          <a
  href="/Ankan Jagtap_Resume (1).pdf"
  download="Ankan Jagtap_Resume.pdf"
  className="bg-white text-black font-bold rounded-full px-6 py-3 hover:text-purple-400 cursor-pointer duration-200 hover:border-b-2 hover:border-purple-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900"
      >
  Download CV
</a>
        </div>
      </div>

  
      <div className="shadow-lg">
        <img
          src="./Pictures/ankan1.png"
          alt="Ankan's Profile"
          className="w-[90vw] lg:w-[600px] lg:h-[700px] object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default Home;
