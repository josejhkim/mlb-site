import React from 'react'
import PlatformBottom from '../components/pricing/platformBottom'
import Pricecard from '../components/pricing/pricecard'
import PlatformTop from '../components/pricing/platformTop'

const Page = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center">
        <h2 className="font-bold text-6xl mb-6">
          Guide
        </h2>
        <h3 className="font-light text-xl">
          Start here if you're new to our product
        </h3>
      </div>
      <div className="flex flex-col items-center mt-16 pb-6">
        <div className="text-white flex items-center border-2">
          <iframe className='w-[700px] h-[380px]' src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=YtXmP2nVdFRP9fVw&amp;start=1" title="Demo" allow="accelerometerpted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p className="text-white mt-6">
          Watch and follow our step-by-step video demo to get started
        </p>
      </div>
    </>
  )
}

export default Page