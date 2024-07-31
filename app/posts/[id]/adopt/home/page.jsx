"use client"


import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {


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
                    <img src="/assets/step3.png" className='w-[850px]  object-contain' alt="step" />
                    </div>

             <div className='flex justify-center items-center flex-col gap-4 mt-12 w-1/3'>
                <h1 className='font-black text-[24px]'>Home</h1>
                <p className='text-[#0A453A]'>Please note, all these details must be complete in order to apply for adopt a pet.</p>

                  <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Do you have a garden?</label>
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
                        <label className='uppercase font-semibold'>Please describe your living/home situation *</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => console.log(e)}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Address line 2"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Can you describe your household setting *</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => console.log(e)}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Postal Code"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Can you describe the household's typical activity level*</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => console.log(e)}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="City"
                        />
                    </div>

                    <Link href={`/posts/${params.id}/adopt/address`}  className='bg-[#675BC8] text-[#fff] rounded-xl p-2 px-4'>Next</Link>
            </div>
    </div>
  )
}

export default page