"use client"


import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const page = ({params}) => {

    const [position, setPosition] = React.useState("Select")
    const [houseHold, setHouseHold] = useState('Select')
    const [active, setActive] = useState('Select')


    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        
      };
     const [alignment, setAlignment] = useState(null);

     useEffect(() => {
        console.log(alignment); 
    }, [alignment]); 
    
  return (
    <div className='flex py-24 pb-44 justify-center items-center flex-col'>
                 <div className='flex justify-center items-center py-12'>
                    <img src="/assets/step4.png" className='w-[850px]  object-contain' alt="step" />
                    </div>

             <div className='flex justify-center items-center flex-col gap-4 mt-12 w-1/3'>
                <h1 className='font-black text-[24px]'>Roommate</h1>
                <p className='text-[#0A453A]'>Please note, all these details must be complete in order to apply for adopt a pet.</p>

                  <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Number of adults</label>
                        <Select>
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Number of adults</SelectLabel>
                                <SelectItem value="low">1-3</SelectItem>
                                <SelectItem value="mid">3-5</SelectItem>
                                <SelectItem value="high">5+</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Number of children</label>
                        <Select>
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Number of children</SelectLabel>
                                <SelectItem value="low">1-3</SelectItem>
                                <SelectItem value="mid">3-5</SelectItem>
                                <SelectItem value="high">5+</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Age of youngest children</label>
                        <Select>
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Number of adults</SelectLabel>
                                <SelectItem value="low">1-3</SelectItem>
                                <SelectItem value="mid">3-5</SelectItem>
                                <SelectItem value="high">5+</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Do you have any flatmates or lodgers?</label>
                        <ToggleButtonGroup
                            required            
                            exclusive
                            aria-label="Platform"
                            value={alignment}
                            onChange={handleChange}
                            >
                            <ToggleButton color='primary' className=" w-[150px] h-[40px]" value="male">Yes</ToggleButton>
                            <ToggleButton color='primary'  className=" w-[150px] h-[40px]" value="female">No</ToggleButton>

                        </ToggleButtonGroup>
                    </div>

                    <Link href={`/posts/${params.id}/adopt/other-animals`}  className='bg-[#675BC8] text-[#fff] mt-12 rounded-xl p-2 px-4'>Next</Link>
            </div>
    </div>
  )
}

export default page