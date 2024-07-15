import React from 'react'

const HowToAdopt = () => {
  return (
    <div className='w-full py-12'>
        <div className='container mx-auto flex justify-center items-center flex-col'>
            <h1 className='text-[32px] uppercase text-center'>Adopt or Rehome a pet in just </h1>
            <p className='text-[#0A453A] text-[24px] uppercase font-bold'>3 Easy Steps</p>
            <img src="/assets/steps.png" draggable="false" className='sm:w-[75%] hidden sm:block object-contain h-full' alt="steps" />
        </div>
    </div>
  )
}

export default HowToAdopt