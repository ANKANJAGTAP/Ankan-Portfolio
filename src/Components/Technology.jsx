import React from 'react'

function Technology() {
    const data=[
        {title:'HTML',
         artist:'Sidhu Moose Wala',
         image:'./Pictures/h.png',
            },
         {title:'No Love',
             artist:'Shubh',
             image:'./Pictures/css.png'},
             {title:'Excuses',
                 artist:'Ap Dhillon',
                 image:'./Pictures/js.png'},
                 {title:'295',
                    artist:'Sidhu Moose Wala',
                    image:'./Pictures/boot.png',
                       },
                 {title:'Na Ja',
                     artist:'Pav Dharla',
                     image:'./Pictures/nodejs.png'},
                     {title:'295',
                        artist:'Sidhu Moose Wala',
                        image:'./Pictures/mongo.png',
                           },
                           {title:'295',
                            artist:'Sidhu Moose Wala',
                            image:'./Pictures/c.png',
                               },
                               {title:'295',
                                artist:'Sidhu Moose Wala',
                                image:'./Pictures/c++.png',
                                   },
                                   {title:'295',
                                    artist:'Sidhu Moose Wala',
                                    image:'./Pictures/go.png',
                                       },
                                       {title:'295',
                                        artist:'Sidhu Moose Wala',
                                        image:'./Pictures/python.png',
                                           },
                                           {title:'295',
                                            artist:'Sidhu Moose Wala',
                                            image:'./Pictures/docker.png',
                                               },
                                               {title:'295',
                                                artist:'Sidhu Moose Wala',
                                                image:'./Pictures/git.png',
                                                   },
                                                   {title:'295',
                                                    artist:'Sidhu Moose Wala',
                                                    image:'./Pictures/linux.png',
                                                       },
                                   
     ]
     const click=()=>{alert("Chal raha ha")}
  return (
    <div>
     <h1 className="mt-[3%] ml-[40%] mr-[40%] text-center text-4xl font-bold  py-4 px-4 rounded-full  hover:text-fuchsia-400 cursor-pointer duration-200 border-b-2 border-underline border-fuchsia-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900 hover:scale-105 hover:shadow-xl transition-transform duration-300 ...  ">Technologies</h1>
     <div className='ml-[10%] mr-[10%] mt-[4%] mb-[10%] overflow-y-scroll w-auto h-screen'>
    <div className='w-full h-full flex flex-row gap-10 justify-center flex flex-wrap'>
        {data.map((elem,index)=>(<div key="index"className='w-60 song px-3 py-2 bg-gradient-to-r from-[#1D2671] to-[#C33764] text-white p-5 rounded-lg shadow-lg hover:scale-105 transition-transform'>
            <img src={elem.image} alt="" className='object-cover' />
            <h3 className='font-bold text-xl mt-3'>{elem.title} </h3>
            <p className='mt-3 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa aperiam quibusdam incidunt iure officia?</p>
            <button onClick={click} className='mt-3 bg-blue-400 py-3 px-4 font-semibold bg-gradient-to-r from-[#3F51B5] to-[#03A9F4] text-white py-2 px-4 rounded-lg hover:shadow-md transition'>Learn More</button>
        </div>))} 
    </div>
    </div>
    </div>
  )
}

export default Technology
