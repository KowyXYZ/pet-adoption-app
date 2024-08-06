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
import { useRouter } from 'next/navigation'
  

const page = ({params}) => {

   const router = useRouter()

    const {handleChange, formState} = useContext(FormContext)

    const validState = formState.animalsAtHome !== '' && formState.neurateHome !== '' && formState.vaccinatedHome !== '' && formState.city !== '' 
    

    const [position, setPosition] = React.useState("Select")
    const [houseHold, setHouseHold] = useState('Select')
    const [active, setActive] = useState('Select')


    
     const [alignment, setAlignment] = useState(null);
     const [animalsAtHome, setAnimalsAtHome] = useState('')
     const [neurateHome, setNeurateHome] = useState('')
     const [vaccinatedHome, setVaccinatedHome] = useState('')

     const handleChangeAnimalsHome = (event, newAlignment) => {
        setAnimalsAtHome(newAlignment)
        handleChange(event, 'animalsAtHome')
      };


      const handleChangeNeutered = (event, newAlignment) => {
        setNeurateHome(newAlignment)
        handleChange(event, 'ifAnimalNeutered')
      };

      const handleChangeVaccinated  = (event, newAlignment) => {
        setVaccinatedHome(newAlignment)
        handleChange(event, 'ifAnimalVaccinated')
      };

      const sendForm = async () => {
        try {
            const response = await fetch('/api/submitForm', {
              method: "POST",
              body: JSON.stringify({
                postid: params.id,
                formState: formState
              })
            });
            if(response.ok) {
              console.log('ALLGOODDD FORM')
              router.push(`/posts/${params.id}/adopt/confirm`)
            }
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        }
    };

      const finishTheForm = () => {
        console.log(formState)
        

        sendForm()

      }

     useEffect(() => {
        console.log(animalsAtHome)
        console.log(neurateHome)
        console.log(vaccinatedHome)
    }, [animalsAtHome, neurateHome, vaccinatedHome]); 
    
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
                            value={formState.animalsAtHome}
                            onChange={handleChangeAnimalsHome}
                            >
                            <ToggleButton color='primary' className=" w-[150px] h-[40px]" value="yes">Yes</ToggleButton>
                            <ToggleButton color='primary'  className=" w-[150px] h-[40px]" value="no">No</ToggleButton>

                        </ToggleButtonGroup>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>If yes, please state their species, age and gender</label>
                        <textarea
                            cols={30}
                            rows={5}
                            maxLength={200}
                            required
                            value={formState.ifAnimalYesDesc}
                            onChange={(e) => handleChange(e, "ifAnimalYesDesc")}
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
                            value={formState.ifAnimalNeutered}
                            onChange={handleChangeNeutered}
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
                            value={formState.ifAnimalVaccinated}
                            onChange={handleChangeVaccinated}
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
                            value={formState.describeExp}
                            onChange={(e) => handleChange(e, "describeExp")}
                            className='p-2 outline-none shadow-lg border-[1px] w-full resize-none rounded-lg'
                            type="text"
                            placeholder="Describe it here"
                        />
                    </div>

                    <button onClick={() =>  finishTheForm()} className='bg-[#675BC8] text-[#fff] mt-12 rounded-xl p-2 px-4'>Confirm</button>
            </div>
    </div>
  )
}

export default page