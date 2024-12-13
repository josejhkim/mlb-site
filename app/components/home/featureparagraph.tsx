import React from 'react'

const FeatureParagraph = ({heading, body}: {heading: string, body: string}) => {
  return (
    <div className="
    text-white 
    flex flex-col items-center 
    w-[80%] lg:w-[27%]
    ">
      <h3 className="font-bold 
      text-2xl lg:text-4xl 
      mb-4 lg:mb-8">
        {heading}
      </h3>
      <p className="font-light 
      text-lg lg:text-2xl 
      leading-8 lg:leading-9">
        {body}
      </p>
    </div>
  )
}

export default FeatureParagraph