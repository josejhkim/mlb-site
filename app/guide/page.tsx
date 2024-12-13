import React from 'react'

const Page = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center">
        <h2 className="font-bold 
        text-5xl md:text-5xl lg:text-6xl 
        mb-4 lg:mb-8">
          Guide
        </h2>
        <h3 className="font-light text-center
        text-lg md:text-lg lg:text-xl">
          Start here if you&apos;re new to our product
        </h3>
      </div>
      <div className="flex flex-col items-center mt-16 pb-6">
        <div className="text-white flex justify-center w-full items-center h-fit">
          <iframe className='border-2 
          w-[450px] h-[300px]
          md:w-[600px] md:h-[400px]
          lg:w-[840px] lg:h-[560px]
          xl:w-[1000px] xl:h-[667px]
          2xl:w-[1200px] 2xl:h-[900px]
          '
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=YtXmP2nVdFRP9fVw&amp;start=1" title="Demo" allow="accelerometerpted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p className="text-white mt-6">
          Watch and follow our step-by-step video demo to get started
        </p>
      </div>
    </>
  )
}

export default Page