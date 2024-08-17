import React from 'react'

const page = () => {
  return (
    <div className='py-12 w-full'>
        <div className='container gap-24 mx-auto flex justify-center items-center flex-col'>
            <div className='flex items-start gap-12 justify-between w-full'>
                <div className=''>
                   <img src="/assets/careguide.png" className='w-[650px]' alt="cg1" />
                </div>

                <div className='w-[750px] flex flex-col gap-2 text-[18px]'>
                    <h1 className='text-[#0A453A]  text-[20px] font-semibold'>Human-Dog Relationship</h1>
                    <p>Dogs might enjoy interaction with humans, making the human-dog relationship (HDR) important and necessary for domestic dogs. This relationship has expanded into an interaction where dogs are not solely considered companion animals but “service animals” for humans with special needs such as blindness, deafness, locomotion problems, or various conditions such as cardiovascular pathologies, epilepsy, diabetes, depression, and autism.</p>
                </div>
            </div>

            <div className='flex flex-row-reverse items-start gap-12 justify-between w-full'>
                <div className=''>
                   <img src="/assets/careguide2.png" className='w-[650px]' alt="cg1" />
                </div>

                <div className='w-[750px] text-end flex flex-col gap-2 text-[18px]'>
                    <h1 className='text-[#0A453A]  text-[20px] font-semibold'>Consequences of obesity in cats</h1>
                    <p>40 percent of all cats are overweight, that's a fact. The basic problem lies in the eye of the beholder: Many owners are rather offended when their pet's curves are pointed out to them. What a normal weight cat should look like seems to be a matter of taste. Normal weight cats should only weigh 3 – 4 kg </p>
                </div>
            </div>

            <h1 className='text-[20px] uppercase'>More soon . . . </h1>
        </div>
    </div>
  )
}

export default page