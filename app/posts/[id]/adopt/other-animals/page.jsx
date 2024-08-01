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
                    <img src="/assets/step5.png" className='w-[850px]  object-contain' alt="step" />
                    </div>

             <div className='flex justify-center items-center flex-col gap-4 mt-12 w-1/3'>
                <h1 className='font-black text-[24px]'>Other Animals</h1>
                <p className='text-[#0A453A]'>Please note, all these details must be complete in order to apply for adopt a pet.</p>

                  <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Are there any other animals at your home? *</label>
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

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>If yes, please state their species, age and gender</label>
                        <textarea
                            cols={30}
                            rows={5}
                            maxLength={200}
                            required
                            onChange={(e) => console.log(e)}
                            className='p-2 outline-none shadow-lg border-[1px] w-full resize-none rounded-lg'
                            type="text"
                            placeholder="If yes, text goes here!"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>If yes, are they neutered? *</label>
                        <ToggleButtonGroup
                            required            
                            exclusive
                            aria-label="Platform"
                            value={alignment}
                            onChange={handleChange}
                            >
                            <ToggleButton color='primary' className=" w-[150px] h-[40px]" value="yes">Yes</ToggleButton>
                            <ToggleButton color='primary'  className=" w-[150px] h-[40px]" value="no">No</ToggleButton>

                        </ToggleButtonGroup>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>If yes, have they been vaccinated in the last 12 months? *</label>
                        <ToggleButtonGroup
                            required            
                            exclusive
                            aria-label="Platform"
                            value={alignment}
                            onChange={handleChange}
                            >
                            <ToggleButton color='primary' className=" w-[150px] h-[40px]" value="yes">Yes</ToggleButton>
                            <ToggleButton color='primary'  className=" w-[150px] h-[40px]" value="no">No</ToggleButton>

                        </ToggleButtonGroup>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Please describe your experience of any previous pet ownership and tell us about the type of home you plan to offer your new pet</label>
                        <textarea
                            cols={30}
                            rows={5}
                            maxLength={200}
                            required
                            onChange={(e) => console.log(e)}
                            className='p-2 outline-none shadow-lg border-[1px] w-full resize-none rounded-lg'
                            type="text"
                            placeholder="Describe it here"
                        />
                    </div>

                    <Link href={`/posts/${params.id}/adopt/confirm`}  className='bg-[#675BC8] text-[#fff] mt-12 rounded-xl p-2 px-4'>Confirm</Link>
            </div>
    </div>
  )
}

export default page