import React from 'react'

const page = () => {
  return (
    <div className='w-full py-12'>
        <div className='container mx-auto flex justify-center gap-24 items-center'>
            <img src="/assets/adoptdog.png" alt="imgforadopting" className=' w-[30%]' />

            <div className='flex text-center flex-col gap-6'>
                <h1 className='text-[32px] leading-tight font-black text-[#0A453A]'>Join the <span className='text-[#675BC8] font-serif'>Furry</span> <span className='text-[#2E256F] font-serif'>Friends</span> Community <br /> and Connect with Dog Lovers!</h1>
                <div className='shadow-lg border-[1px] rounded-md p-2 w-full flex justify-start items-start gap-4 font-black text-[#3F3F3F]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                    <p className='text-[22px] text-[#3F3F3F] font-black'>Upload Pet Image</p>
                </div>

                <div className='flex jusitfy-center gap-24 items-center '>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <label className='uppercase font-semibold'>Pet Name</label>
                        <input className='p-2 outline-none shadow-lg border-[1px] rounded-md w-[300px]' type="text" placeholder="Pet's Name"/>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-1'>
                        <label className='uppercase font-semibold'>Pet Breed</label>
                        <input className='p-2 outline-none shadow-lg border-[1px] w-[300px]' type="text" placeholder="Pet's Breed"/>
                    </div>
                </div>
                

                <div className='flex jusitfy-center gap-24 items-center '>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <label className='uppercase font-semibold'>Pet Gender</label>
                        <input className='p-2 outline-none shadow-lg border-[1px] rounded-md w-[300px]' type="text" placeholder="Pet's Gender"/>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-1'>
                        <label className='uppercase font-semibold'>Pet Size</label>
                        <input className='p-2 outline-none shadow-lg border-[1px] w-[300px]' type="text" placeholder="Pet's Size"/>
                    </div>
                </div>

                <div className='flex jusitfy-center gap-24 items-center '>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <label className='uppercase font-semibold'>Pet Age</label>
                        <input className='p-2 outline-none shadow-lg border-[1px] rounded-md w-[300px]' type="text" placeholder="Pet's Age"/>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-1'>
                        <label className='uppercase font-semibold'>Pet Color</label>
                        <input className='p-2 outline-none shadow-lg border-[1px] w-[300px]' type="text" placeholder="Pet's Color"/>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                     <button className='bg-[#675BC8] py-2 px-4 w-1/2 text-[#fff] rounded-sm'>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page