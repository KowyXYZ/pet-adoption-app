import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <div className='w-full py-6'>
        <div className='flex justify-between items-center container mx-auto'>
            <Link href='/'>
                <img src="/assets/Logo.png" alt="logo" />
            </Link>

            <div className='flex gap-8 justify-center items-center text-[18px]'>
                <p>Adopt</p>
                <p>Care Guide</p>
                <p>About Us</p>
            </div>

            <div className='flex justify-center items-center'>
                <p>Sign In</p>
            </div>
        </div>
   </div>
  )
}

export default Navbar