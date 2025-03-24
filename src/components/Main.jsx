
import React from 'react'

function Main({ data }) {
  if (data.media_type !== "image") {
    return (
      <div className="flex flex-col items-center justify-center p-5">

        {data.media_type === "video" ? (
          <iframe
            src={data.url}
            title={data.title}
            width="500"
            height="300"
            className="mt-3"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <p className="text-center text-lg font-bold">🚀✨Oops! No image or video available for this date.</p>
            <p className="text-gray-500">Try selecting another date.</p>
          </>
        )}
      </div>
    );
  }

  return (

    <div className=' md:w-full  md:h-auto sm:h-full sm-w-auto sm:bg-amber-400 '>
      <img
        className="object-cover md:w-full md:h-auto sm:w-auto sm:h-full"
        src={data.url} alt={data.title} />

    </div>
  )
}

export default Main
