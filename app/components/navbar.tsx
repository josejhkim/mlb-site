import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="mb-8 sticky right-0 top-0 bg-[#1d0033] z-50 text-white flex justify-between pt-8 pb-4 px-20 items-center">
      <Link href="/" className="font-thin text-2xl">mirrorlessBooth</Link>
      <div className="flex gap-6 items-center text-lg">
        <Link href="/" className="font-medium">Home</Link>
        <Link href="/guide" className="font-medium">Guide</Link>
        <Link href="/pricing" className="font-medium">Pricing</Link>
        <Link href="/try" className="font-extrabold bg-white text-black py-1 px-2 rounded-md">Try now</Link>
      </div>
    </nav >
  )
}

export default Navbar