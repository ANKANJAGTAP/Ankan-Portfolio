import React,{useState} from "react";



function About() {
    const [val,setval]= useState(false); 
  return (
    <div className="w-full h-full ">
        <div className="mt-[2%] ml-[45%] mr-[40%] text-center text-4xl font-bold  py-4 px-4 rounded-full  hover:text-fuchsia-400 cursor-pointer duration-200 border-b-2 border-underline border-fuchsia-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900  hover:scale-105 hover:shadow-xl transition-transform duration-300 ...  ">About</div>
    <div className="flex justify-between items-center mt-[3%] ml-[10%] mr-[10%] ">
      <div className="w-[40%] h-auto border-stone-500  ">
      <div className='w-100 h-100 bg-zinc-600 flex rounded-full overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 ...'>
            <img onClick={()=>setval(()=>!val)} src="./Pictures/ankan1.png" alt=""  className={` duration-150 shrink-0 ${!val ? "-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover`}/>
            <img onClick={()=>setval(()=>!val)} src="https://plus.unsplash.com/premium_photo-1729595323667-9e9968572bed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className={` duration-150  animate-pulse shrink-0 ${val ? "-translate-x-[100%]":"-translate-x-[0%]"} w-full h-full object-fit`}/>
        </div>
      </div>
      <div className=" w-[40%] text-2xl backdrop-blur-md border border-amber-500 px-3 py-3 border-2 border-transparent bg-gradient-to-r from-pink-500 to-orange-500 p-1 rounded-lg  hover:scale-105 hover:shadow-xl transition-transform duration-300 ... ">
        <div className="bg-gray-900 p-4 rounded-lg" >
        "I am a passionate Computer Science student with a keen interest in software development and problem-solving. With experience in C++, data structures, and web technologies, I strive to create impactful solutions. I'm constantly learning and improving my skills to build innovative and user-friendly applications."           </div>
           <button className=" ml-[33%] px-6 py-2 mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors duration-300">
  Learn More
</button>
      </div>
    </div>
    </div>
  );
}

export default About;
