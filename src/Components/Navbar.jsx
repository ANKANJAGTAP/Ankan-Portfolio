import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="ml-12 mr-12 mt-7 ">
      <nav className="navbar flex justify-between">
        <img src="./Pictures/logo.png" alt="Website Logo"  className=" bg-transparent rounded-full border-b-2 border-purple-300 w-30 h-30 m-3 cursor-pointer hover:w-30 h-30 duration-300  hover:scale-125 hover:shadow-xl transition-transform duration-300"  />

        <div className="desktopmenu flex space-x-16 mt-5 font-bold text-xl">
          <NavLink style={(e)=>{
            return{
              borderBottom:e.isActive ? '2px solid red' : 'none'
            }
          }}
           to="/home" smooth={true} className=" h-20 w-20 px-3 py-6 text-white  hover:text-red-400 cursor-pointer hover:scale-125 hover:shadow-xl transition-transform duration-300  ">
            Home
          </NavLink>
          <NavLink style={(e)=>{
            return{
              borderBottom:e.isActive ? '2px solid red' : 'none'
            }
          }}
          to="/about" smooth={true} className=" h-20 w-20 px-3 py-6   text-white  hover:text-orange-400 cursor-pointer hover:scale-125 hover:shadow-xl transition-transform duration-300">
            About
          </NavLink>
          <NavLink style={(e)=>{
            return{
              borderBottom:e.isActive ? '2px solid red' : 'none'
            }
          }}
          to="/technology" smooth={true} className=" py-6 h-20  text-white  hover:text-amber-400 cursor-pointer hover:scale-125 hover:shadow-xl transition-transform duration-300">
          Technologies
          </NavLink>
          <NavLink style={(e)=>{
            return{
              borderBottom:e.isActive ? '2px solid red' : 'none'
            }
          }}
          to="/projects" smooth={true} className=" h-20 w-20 px-1 py-6 text-white  hover:text-lime-400 cursor-pointer hover:scale-125 hover:shadow-xl transition-transform duration-300">
            Projects
          </NavLink>
        </div>
        <div className="bg-white text-black font-bold rounded-full w-55 m-6 px-2 py-2 hover:text-fuchsia-400 cursor-pointer duration-200 hover:border-b-2 hover:border-underline hover:border-fuchsia-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900 hover:scale-125 hover:shadow-xl transition-transform duration-300 ">
          <button className="desktopmenubtn flex px-3 py-3 gap-3 ">
            <img src="./Pictures/ankan1.png" alt="Contact Icon" className="desktopmenuimg w-6 h-6 rounded-md" />
            Contact Me
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
