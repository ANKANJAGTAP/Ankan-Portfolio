import React from 'react';

function Home() {
  return (
    <div className="ml-[15%] mr-[20%] mt-[4%] flex gap-40  ">
      <span className="w-full text-xl mt-[15%] hover:scale-105 hover:shadow-xl transition-transform duration-300 ...  "><span className='px-2'>Hello,</span><br /> <span className="text-6xl">I'm <span className='px-3 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-green-400 hover:to-blue-500 transition-all duration-500'>Ankan</span> </span> <br /> <span className='text-6xl font-bold'>Website Designer</span> <br /> <span className='mt-4'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br></br> Modi iusto inventore numquam tempore aliquid impedit?
      </span> <br /> <br /> <br />  <span  className='  bg-white text-black font-bold rounded-full w-40 h-40 px-3 py-3 hover:text-fuchsia-400 cursor-pointer duration-200 hover:border-b-2 hover:border-underline hover:border-fuchsia-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900 '> Hire Me </span> <span  className='bg-white text-black font-bold rounded-full w-40 h-40 px-3 py-3 hover:text-fuchsia-400 cursor-pointer duration-200 hover:border-b-2 hover:border-underline hover:border-fuchsia-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900  ml-[7%]'>Download Cv</span> <br /> </span> 
      
      <div className="shadow-lg ">
        <img 
          src="./Pictures/ankan1.png" 
          alt="Ankan's Profile" 
          className=" w-[1200px] h-[700px]  object-cover rounded-md" 
        />
      </div>
     
    </div>
  );/* */
}

export default Home;
