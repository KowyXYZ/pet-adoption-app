"use client"


import { FormContext } from '@/context/FormContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const page = ({params}) => {

    const {handleChange} = useContext(FormContext)

  return (
    <div className='flex py-24 pb-44 justify-center items-center flex-col'>
                 <div className='flex justify-center items-center py-12'>
                    <img src="/assets/step2.png" className='w-[850px]  object-contain' alt="step" />
                    </div>

             <div className='flex justify-center items-center flex-col gap-4 mt-12 w-1/3'>
                <h1 className='font-black text-[24px]'>Address</h1>
                <p className='text-[#0A453A]'>Please note, all these details must be complete in order to apply for adopt a pet.</p>

                  <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Address line 1</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => handleChange(e, "address1")}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Address line 1"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Address line 2</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => handleChange(e, "address2")}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Address line 2"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Postal Code</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => handleChange(e, "postalCode")}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Postal Code"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>City</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => handleChange(e, "city")}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="City"
                        />
                    </div>

                    <Link href={`/posts/${params.id}/adopt/home`}  className='bg-[#675BC8] text-[#fff] mt-12 rounded-xl p-2 px-4'>Next</Link>
            </div>
    </div>
  )
}

export default page