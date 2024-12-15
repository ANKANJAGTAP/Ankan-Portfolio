import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  const colorfulStrings = [
    `<span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-500 to-green-400">Website Designer</span>`,
    `<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">Frontend Developer</span>`,
    `<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-cyan-400">Creative Thinker</span>`,
    `<span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-orange-400">Tech Enthusiast</span>`,
  ];

  return (
    <div className="ml-[15%] mr-[10%] mt-[4%] flex gap-5">
      <span className="w-full text-xl mt-[15%] hover:scale-105 hover:shadow-xl transition-transform duration-300">
        <span className="px-2 text-2xl glow-container ">Hello,</span>
        <br />
        <span className="text-6xl glow-container">
          I'm{" "}
          <span className="px-3 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-green-400 hover:to-blue-500 transition-all duration-500 glowing-gradient">
            Ankan
          </span>
        </span>
        <br />
        <span className="text-6xl font-bold w-[100%]">
          <Typewriter
            options={{
              strings: colorfulStrings,
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              wrapperClassName: "typewriter-text glow-text",
            }}
          />
        </span>
        <span className="mt-1 text-lg text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />
          Modi iusto inventore numquam tempore aliquid impedit?
        </span>
        <br />
        <br />
        <span className="bg-white text-black font-bold rounded-full w-40 h-40 px-3 py-3 hover:text-fuchsia-400 cursor-pointer duration-200 hover:border-b-2 hover:border-underline hover:border-fuchsia-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900">
          Hire Me
        </span>
        <span className="bg-white text-black font-bold rounded-full w-40 h-40 px-3 py-3 hover:text-fuchsia-400 cursor-pointer duration-200 hover:border-b-2 hover:border-underline hover:border-fuchsia-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900 ml-[7%]">
          Download Cv
        </span>
        <br />
      </span>

      <div className="shadow-lg">
        <img
          src="./Pictures/ankan1.png"
          alt="Ankan's Profile"
          className="w-[1200px] h-[700px] object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default Home;
