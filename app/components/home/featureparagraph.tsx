import React from 'react'

const FeatureParagraph = ({ heading, body }: { heading: string, body: string }) => {
  return (
    <div className="
      w-[70%] lg:w-[27%]
      flex flex-col items-center 
      text-white 
    ">

      <h3 className="
        mb-4 lg:mb-8
        text-xl sm:text-2xl md:text-3xl lg:text-4xl 
        font-normal 
      ">
        {heading}
      </h3>

      <p className="
        text-base sm:text-lg md:text-xl lg:text-2xl 
        leading-7 md:leading-8 lg:leading-9
        font-extralight 
      ">
        {body}
      </p>
    </div>
  )
}

export default FeatureParagraph