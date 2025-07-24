import React from "react";


function Technologies() {
  const data = [
    {
      title: "HTML",
      artist: "Proficient in structuring web pages with semantic elements and creating responsive layouts; used in portfolio and web design.",
      image: "./Pictures/h.png",
      page: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      title: "CSS",
      artist: "Skilled in styling websites with Tailwind CSS and animations; experience in creating visually appealing and responsive designs.",
      image: "./Pictures/css.png",
      page: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      title: "JavaScript",
      artist: "Proficient in creating interactive web components; used in dynamic UIs, React development, and event-driven programming.",
      image: "./Pictures/js.png",
      page: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "BootStrap",
      artist: "Familiar with creating responsive and mobile-first websites using Bootstrap components, utilities, and grid systems for faster development.",
      image: "./Pictures/boot.png",
      page: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    },
    {
      title: "Node.js",
      artist: " Understanding of backend development; familiar with APIs and asynchronous programming for handling server-side logic and routing.",
      image: "./Pictures/nodejs.png",
      page: "https://nodejs.org/docs/latest/api/",
    },
    {
      title: "MongoDB",
      artist: "Basic knowledge of NoSQL databases; used for managing unstructured data in full-stack applications and exploring CRUD operations.",
      image: "./Pictures/mongo.png",
      page: "https://www.mongodb.com/docs/",
    },
    {
      title: "C",
      artist: "Proficient in programming fundamentals, problem-solving, and data structure implementations; experience in building logic-intensive applications.",
      image: "./Pictures/c.png",
      page: "https://devdocs.io/c/",
    },
    {
      title: "C++",
      artist: "Skilled in OOP concepts, data structures, and competitive programming; contributed to projects involving database management and interface development.",
      image: "./Pictures/c++.png",
      page: "https://devdocs.io/cpp/",
    },
    {
      title: "Docker",
      artist: "Exploring containerization concepts; interested in deploying and managing applications efficiently using Docker for scalability and portability.",
      image: "./Pictures/docker.png",
      page: "https://docs.docker.com/",
    },
    {
      title: "GitHub",
      artist: " Proficient in version control, collaborative development, and managing repositories; used for open-source contributions and team projects.",
      image: "./Pictures/git.png",
      page: "https://github.com/ANKANJAGTAP",
    },
    {
      title: "Linux",
      artist: " Enthusiast in Linux systems; experience with open-source software, command-line tools, and customization for development environments.",
      image: "./Pictures/linux.png",
      page: "https://docs.kernel.org/",
    },
  ];

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <h1 className="mt-2 text-center text-4xl font-bold py-4 px-4 rounded-full hover:text-purple-400 cursor-pointer duration-200 border-b-2 border-underline border-purple-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900 hover:scale-105 hover:shadow-xl transition-transform">
        Technologies
      </h1>
      <div className="w-[80%] max-h-[100vh] mt-7 mb-5 overflow-y-scroll">
        <div className="flex flex-wrap justify-center gap-10">
          {data.map((elem, index) => (
            <div
              key={index}
              className="w-60 px-3 py-2 bg-gradient-to-r from-[#1D2671] to-[#C33764] text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={elem.image}
                alt=""
                className="object-fit w-full h-40 rounded-t-lg"
              />
              <h3 className="font-bold text-xl mt-3">{elem.title}</h3>
              <p className="mt-3 text-sm">
               {elem.artist}
              </p>
              <button
                onClick={() => {
                  if (elem.page) {
                    window.open(elem.page, "_blank"); 
                  } else {
                    alert("Link not available"); 
                  }
                }}
                className="mt-3 bg-blue-400 py-2 px-4 font-semibold bg-gradient-to-r from-[#3F51B5] to-[#03A9F4] text-white rounded-lg hover:shadow-md transition"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
