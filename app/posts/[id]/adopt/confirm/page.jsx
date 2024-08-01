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
                    <img src="/assets/step6.png" className='w-[850px]  object-contain' alt="step" />
                    </div>

             <div className='flex justify-center items-center flex-col gap-4 mt-12 w-1/3'>
                <h1 className='font-black text-[24px]'>Thanks For Submiting</h1>
                <p>The pet's current owner will be sent a link to your profile when your application has been approved by Furry Friends.</p>
             

                    <div>
                        <img src="/assets/confirm.png" alt="confirm" />
                    </div>

                    <Link href={`/`}  className='bg-[#675BC8] text-[#fff] mt-12 rounded-xl p-2 px-4'>Go Home</Link>
            </div>
    </div>
  )
}

export default page