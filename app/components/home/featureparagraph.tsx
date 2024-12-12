import React from 'react'

const FeatureParagraph = ({heading, body}: {heading: string, body: string}) => {
  return (
    <div className="text-white flex flex-col items-center w-[27%]">
      <h3 className="font-bold text-4xl mb-8">
        {heading}
      </h3>
      <p className="font-light text-2xl leading-9">
        {body}
      </p>
    </div>
  )
}

export default FeatureParagraph