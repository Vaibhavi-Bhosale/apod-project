import React from 'react'

function Sidebar({handelToggleSidebar, data}) {
  
  return (
    <div className='sidebar fixed right-0 top-0 w-[80%] h-screen bg-black/60 p-10 flex flex-col justify-between overflow-y-auto'>

        <div className='sidebarContent flex flex-col gap-5  '>
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl'> {data.title}</h2>
        <div>
          <p className='sm:text-large font-bold md:text-xl lg:text-2xl'>{data.date}</p>
          <p className='text-justify sm:text-large md:text-xl lg:text-2xl'>{data.explanation}</p>
          <p className='pt-1'>Copyright : {data.copyright}</p>
        </div>
        </div>

        <div className='pt-4'>
                <button
                onClick={handelToggleSidebar}
                className='cursor-pointer hover:text-gray-300 transition duration-200  '>
                     <i className="fa-solid fa-arrow-right text-3xl"></i>
               </button>
 
        </div>

    </div>
  )
}

export default Sidebar
