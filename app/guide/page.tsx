import React from 'react'

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center text-white">

        <h2 className="
          mb-4 lg:mb-8
          font-bold 
          text-5xl md:text-5xl lg:text-6xl 
        ">
          Guide
        </h2>
        
        <h3 className="
          text-center
          text-lg md:text-lg lg:text-xl
          font-light 
        ">
          Start here if you&apos;re new to our product
        </h3>
      </div>

      <div className="mt-16 pb-6 flex flex-col items-center">
        
        <div className="w-full h-fit flex justify-center items-center text-white">

          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=YtXmP2nVdFRP9fVw&amp;start=1" 
            title="Demo" 
            allow="accelerometerpted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className='
              w-[450px] h-[300px]
              md:w-[600px] md:h-[400px]
              lg:w-[840px] lg:h-[560px]
              xl:w-[1000px] xl:h-[667px]
              2xl:w-[1200px] 2xl:h-[900px]
              border-2 
          '>
          </iframe>
        </div>

        <p className="mt-6 text-center text-white">
          Watch and follow our step-by-step video demo to get started
        </p>
      </div>
    </>
  )
}

export default Page