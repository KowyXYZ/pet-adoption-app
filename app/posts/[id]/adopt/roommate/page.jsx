"use client"


import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { FormContext } from '@/context/FormContext'
  

const page = ({params}) => {

    const {handleChange, directChange} = useContext(FormContext)

    const [adults, setAdults] = React.useState("")
    const [children, setChildren] = useState('')
    const [age, setAge] = useState('')
    const [lodgers, setLodgers] = useState('')

    useEffect(() => {
        directChange(adults, 'numberOfAdults')
        directChange(children, 'numberOfChildren')
        directChange(age, 'ageOfChild')
        directChange(lodgers, 'flatmates')
      }, [adults,children,age,lodgers])
      


      const handleChangeState = (event, newAlignment) => {
        setAlignment(newAlignment);
        handleChange(event, 'garden')
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
                        <Select onValueChange={setAdults}t>
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Number of adults</SelectLabel>
                                <SelectItem value="1-3">1-3</SelectItem>
                                <SelectItem value="3-5">3-5</SelectItem>
                                <SelectItem value="5+">5+</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Number of children</label>
                        <Select onValueChange={setChildren}>
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Number of children</SelectLabel>
                                <SelectItem value="1-3">1-3</SelectItem>
                                <SelectItem value="3-5">3-5</SelectItem>
                                <SelectItem value="5+">5+</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Age of youngest children</label>
                        <Select onValueChange={setAge}>
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Number of adults</SelectLabel>
                                <SelectItem value="1-3">1-3</SelectItem>
                                <SelectItem value="3-5">3-5</SelectItem>
                                <SelectItem value="5+">5+</SelectItem>
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
                            onChange={handleChangeState}
                            >
                            <ToggleButton color='primary' className=" w-[150px] h-[40px]" value="yes">Yes</ToggleButton>
                            <ToggleButton color='primary'  className=" w-[150px] h-[40px]" value="no">No</ToggleButton>

                        </ToggleButtonGroup>
                    </div>

                    <Link href={`/posts/${params.id}/adopt/other-animals`}  className='bg-[#675BC8] text-[#fff] mt-12 rounded-xl p-2 px-4'>Next</Link>
            </div>
    </div>
  )
}

export default page