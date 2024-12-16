import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="px-6 py-4">
      <nav className="navbar flex justify-between items-center">
        <img
          src="./Pictures/logo.png"
          alt="Website Logo"
          className="bg-transparent rounded-full border-b-2 border-purple-300 w-30 h-30 m-3 cursor-pointer hover:scale-125 hover:shadow-xl transition-transform duration-300"
        />
        <div className="hidden lg:flex space-x-10 font-bold text-lg">
          {["Home", "About", "Technologies", "Projects"].map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              className="px-3 py-2 text-white hover:text-purple-400 cursor-pointer hover:scale-125 transition-transform duration-300"
              style={(e) => ({
                borderBottom: e.isActive ? "2px solid #a78bfa" : "none",
              })}
            >
              {item}
            </NavLink>
          ))}
        </div>

       
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-gray-800 text-white w-full px-6 py-4 shadow-lg">
            {["Home", "About", "Technologies", "Projects"].map((item, index) => (
              <NavLink
                key={index}
                to={`/${item.toLowerCase()}`}
                className="block py-2 text-lg hover:text-red-400 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        )}

        
        <div className="hidden lg:flex bg-white text-black font-bold rounded-full px-4 py-2 hover:text-purple-400 cursor-pointer hover:border-b-2 hover:border-purple-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900 hover:scale-125 hover:shadow-xl transition-transform duration-300">
          <button onClick={() => navigate('/ContactMe')}className="flex items-center gap-2">
          <i className="fa-solid fa-phone"></i>
            Contact Me
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
