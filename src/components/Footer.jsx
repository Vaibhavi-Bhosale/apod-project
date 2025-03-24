import React, { useEffect } from 'react'

function Footer({ handelToggleSidebar, data , date, setDate}) {


    return (
        <div className='w-screen fixed bottom-0 left-0 flex justify-between pr-6'>
            <div>
                <div className='pb-10'>
                    <p className="text-lg font-bold ">If you want to see a specific date image just select data</p>
                    <input
                        type="date"
                        min="1995-06-16" // ✅ APOD's first available image
                        max={new Date().toISOString().split("T")[0]}
                        value = {date}
                        onChange={(e)=>{
                            setDate(e.target.value)
                        }}
                    />
                </div>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    {data.title}
                </h2>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    APOD PROJECT
                </h1>
            </div>

            <button
                onClick={handelToggleSidebar}
                className='cursor-pointer hover:text-gray-300 transition duration-200'>
                <i className="fa-solid fa-circle-info text-3xl"></i>
            </button>
        </div>
    )
}

export default Footer
