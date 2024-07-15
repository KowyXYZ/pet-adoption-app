import Link from 'next/link'
import React from 'react'

const BelowNav = () => {
  return (
    <div className='bg-[#9990DA] w-full py-2'>
        <div className='container mx-auto capitalize text-[#fff] flex justify-between items-center sm:px-0 px-4'>
            <Link className='sm:block hidden' href='/'>home</Link>

            <div className=' hidden sm:flex justify-center items-center'>

                 <p>More</p> 

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </div>

            <p>Contact Us</p>

            <div className='flex items-center justify-center gap-2 sm:gap-5'>
                <input type="text" className='sm:w-[250px] w-[200px] outline-none rounded-2xl text-[#1e1e1e] py-1 px-2 placeholder:text-[#1e1e1e] placeholder:opacity-50' placeholder='Search Here ' />
                <button>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </button>
            </div>
        </div>
    </div>
  )
}

export default BelowNav