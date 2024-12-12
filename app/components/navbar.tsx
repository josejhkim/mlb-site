import Link from 'next/link'
import React from 'react'
import { archivo } from '../fonts'

const Navbar = () => {
  return (
    <nav className="text-white flex justify-between pt-8 items-center mb-16">
      <Link href="/" className="font-thin text-2xl"> mirrorlessBooth</Link>
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