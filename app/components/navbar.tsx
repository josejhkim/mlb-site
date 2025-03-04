import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="
      sticky right-0 top-0 z-50
      mb-6 lg:mb-10     
      px-8 lg:px-20 
      pt-4 lg:pt-8 
      pb-2 lg:pb-4
      flex 
      justify-between items-center
      bg-[#1d0033]
      text-white
    ">

      <Link href="/" className="font-thin text-lg lg:text-2xl">mirrorlessBooth</Link>
      
      <div className="flex gap-3 lg:gap-6 items-center text-lg">
        
        <Link href="/" className="text-sm lg:text-lg font-medium">Home</Link>
        
        <Link href="/guide" className="text-sm lg:text-lg font-medium">Guide</Link>
        
        <Link href="/pricing" className=" text-sm lg:text-lg font-medium">Pricing</Link>

        <Link href="/try" className="hidden xl:block py-1 px-2 rounded-md bg-white text-black font-extrabold">Try now</Link>
      </div>
    </nav >
  )
}

export default Navbar