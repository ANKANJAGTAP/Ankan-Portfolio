import React from 'react';

function Technology() {
    const data = [
        { title: 'Portfolio', artist: 'https://github.com/ANKANJAGTAP/Ankan-Portfolio', image: './Pictures/Port.png',description: 'Developed a responsive personal portfolio website showcasing skills and projects using React, Tailwind CSS, and JavaScript.'},
        { title: 'DataBase Project', artist: 'https://github.com/ANKANJAGTAP/Yelpcamp-database', image: './Pictures/database.png',description: 'Built a full-stack web application for campsite reviews using Node.js, Express, MongoDB, and EJS templating.' },
        { title: 'Doctor-Patient Software', artist: 'https://github.com/ANKANJAGTAP/doctorpatient', image: './Pictures/doctor.png',description: 'Designed the doctor interface for managing patient information storage in a database using Object-Oriented Programming concepts.' },
        { title: 'TIC TAO TOE', artist: 'https://github.com/ANKANJAGTAP/Basic-tic-tao-toe', image: './Pictures/tic.png',description: 'Created an interactive Tic Tac Toe game in JavaScript, integrating player logic and efficient algorithms for gameplay.' },
        { title: 'Amazom Clone', artist: 'https://github.com/ANKANJAGTAP/AMAZON-CLONE', image: './Pictures/amazon.png',description: 'Cloned the Amazon websites UI with HTML, CSS, and JavaScript for Frontend services.' },
        { title: 'Electronic Mart', artist: 'https://github.com/ANKANJAGTAP/ELLISON-ELECTRONICS-Clone', image: './Pictures/ele.png',description: 'Replicated an e-commerce platforms interface, adding product filtering and cart systems with HCJ and Bootstrap.' },
        { title: 'Walchand Libary Clone', artist: 'https://github.com/ANKANJAGTAP/LIBARY-WEBSITE-html', image: './Pictures/lib.png',description: 'Designed a basic UI for Walchand Librarys website using HTML, CSS, and JavaScript to showcase library features.' },
    ];
    return (
        <div>
            
            <h1 className="mr-[45%] ml-[45%] text-center text-4xl font-bold mt-4 py-2 px-4 rounded-full hover:text-fuchsia-400 cursor-pointer duration-200 border-b-2 border-purple-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900 hover:scale-105 hover:shadow-xl transition-transform">
                Projects
            </h1>
            <h2 className=" mt-[2%] text-center text-2xl font-bold mt-2 mb-4">Tap on the Banner for code</h2>
            
          
            <div className="ml-[5%] mr-[5%] mt-[2%] h-[80vh] overflow-y-auto">
                <div className="flex flex-wrap gap-8 justify-center">
                    {data.map((elem, index) => (
                        <div
                            key={index}
                            className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[20%] bg-gradient-to-r from-[#1D2671] to-[#C33764] text-white rounded-md shadow-lg hover:scale-105 transition-transform p-4"
                        >
                            <img 
                                onClick={() => {
                                    if (elem.artist) {
                                      window.open(elem.artist, "_blank"); 
                                    } else {
                                      alert("Link not available"); 
                                    }
                                  }}
                                src={elem.image}
                                alt={elem.title}
                                className="w-full h-40 rounded-md object-cover cursor-pointer"
                            />
                            <h3 className="font-bold text-xl mt-3">{elem.title}</h3>
                            <p className="text-sm mt-2">
                               {elem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Technology;
