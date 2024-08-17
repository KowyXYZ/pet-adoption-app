"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const BelowNav = () => {

  const [searchText, setSearchText] = useState('')
  console.log(searchText)

  return (
    <div className='bg-[#9990DA] w-full py-2'>
        <div className='container mx-auto capitalize text-[#fff] flex justify-between items-center sm:px-0 px-4'>
            <Link className='sm:block hidden' href='/'>home</Link>

            <div className=' hidden sm:flex justify-center items-center'>

                <DropdownMenu>
                    <DropdownMenuTrigger className='outline-none'>Menu</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>More</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href='/how-it-works-adopters'>How It Works For Adopters</Link>
                        </DropdownMenuItem>


                        <DropdownMenuItem className='flex gap-8'>
                             <Link href='/how-it-works-rehomers'>How It Works For Rehomers</Link>
                        </DropdownMenuItem>


                    </DropdownMenuContent>
                    </DropdownMenu> 

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </div>

            <Link className='sm:block hidden' href='/contact'>Contact Us</Link>

            <div className='hidden sm:flex items-center justify-center gap-2 sm:gap-5'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" className='sm:w-[250px] w-[200px] outline-none rounded-2xl text-[#1e1e1e] py-1 px-2 placeholder:text-[#1e1e1e] placeholder:opacity-50' placeholder='Search Here ' />
                <Link href={`/adopt/search/${searchText}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </Link>
            </div>
        </div>
    </div>
  )
}

export default BelowNav