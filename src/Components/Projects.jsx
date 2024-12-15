import React from 'react'

function Technology() {
    const data=[
        {title:'295',
         artist:'Sidhu Moose Wala',
         image:'https://akm-img-a-in.tosshub.com/aajtak/images/story/202206/whatsapp_image_2022-06-01_at_8.31.45_pm-sixteen_nine.jpeg',
            },
         {title:'No Love',
             artist:'Shubh',
             image:'https://i.scdn.co/image/ab67616d0000b2732a46046339bd779f95a8cf8b'},
             {title:'Excuses',
                 artist:'Ap Dhillon',
                 image:'https://i.scdn.co/image/ab67616d0000b2735b74e703d6ffb2ea16860c86'},
                 {title:'Na Ja',
                     artist:'Pav Dharla',
                     image:'https://c.saavncdn.com/638/Na-Ja-Punjabi-2017-500x500.jpg'},
                     {title:'295',
                        artist:'Sidhu Moose Wala',
                        image:'https://akm-img-a-in.tosshub.com/aajtak/images/story/202206/whatsapp_image_2022-06-01_at_8.31.45_pm-sixteen_nine.jpeg',
                           },
                           {title:'295',
                            artist:'Sidhu Moose Wala',
                            image:'https://akm-img-a-in.tosshub.com/aajtak/images/story/202206/whatsapp_image_2022-06-01_at_8.31.45_pm-sixteen_nine.jpeg',
                               },
                               {title:'295',
                                artist:'Sidhu Moose Wala',
                                image:'https://akm-img-a-in.tosshub.com/aajtak/images/story/202206/whatsapp_image_2022-06-01_at_8.31.45_pm-sixteen_nine.jpeg',
                                   },
                                   
     ]
     const click=()=>{alert("Chal raha ha")}
  return (
    <div>
     <h1 className="mt-[3%] ml-[40%] mr-[40%] text-center text-4xl font-bold  py-4 px-4 rounded-full  hover:text-fuchsia-400 cursor-pointer duration-200 border-b-2 border-underline border-fuchsia-400 hover:bg-gradient-to-r from-gray-800 via-black to-gray-900 hover:scale-105 hover:shadow-xl transition-transform duration-300 ...  ">Projects</h1>
     <div className='ml-[10%] mr-[10%] m-[5%] '>
    <div className='w-full h-full flex flex-row gap-10 justify-center flex flex-wrap overflow-y-scroll w-auto h-screen '>
        {data.map((elem,index)=>(<div key="index"className='w-60 song px-3 py-2 bg-gradient-to-r from-[#1D2671] to-[#C33764] text-white p-5 rounded-lg shadow-lg hover:scale-105 transition-transform'>
            <img src={elem.image} alt="" />
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
