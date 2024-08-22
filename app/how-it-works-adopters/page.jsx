import React from 'react'

const page = () => {
  return (
    <div className='py-12 w-full'>
        <div className='flex flex-col mx-auto container justify-center items-center'>
            <div>
             <img src="/assets/howitworks.png" alt="works" />
            </div>
        
            <div className='flex flex-col gap-1 my-5 justify-center items-center text-center'>
                <h1 className='text-[32px] font-semibold'>How it Work For <span className='text-[#0A453A]'>Adapters</span></h1>
                <p className='text-[#0A453A]'>To guide you through adoption, and so you know what to expect, we ve broken the process down into 5 steps.</p>
            </div>

            <div className='sm:flex-row flex-col flex justify-between items-center'>

                <div className='flex gap-2 items-start justify-center'>
                     <h1 className='text-[#41349D] text-center w-[50px] h-[50px] bg-[#b8b8bb] text-[24px] p-1 rounded-full'>1</h1>
                   <div>
                        <p className='text-[#0A453A] font-semibold mb-2'>Create your profile and search for a pet</p>
                        <p>- Set up your profile (including photos) in minutes</p>
                        <p>- Describe your home and routine so rehomers can see if it’s right for their pet</p>
                        <p>- Start your search!</p>
                   </div>
                </div>
                

                <div>
                    <img src="/assets/adopters1.png" alt="adopers" />
                </div>
            </div>


            <div className=' sm:flex-row-reverse flex-col flex justify-between gap-12 e items-center'>

                <div className='flex gap-2 items-start justify-center'>
                     <h1 className='text-[#41349D] text-center w-[50px] h-[50px] bg-[#b8b8bb] text-[24px] p-1 rounded-full'>2</h1>
                   <div>
                        <p className='text-[#0A453A] font-semibold mb-2'>Let us know when you find a pet you’re interested in</p>
                        <p>- Make your application using our online enquiry service</p>
                        <p>- If we think you’re a good match, we’ll approve your application.</p>
                        <p>- If we need to ask for more information at this stage 
                        we’ll contact you.</p>
                   </div>
                </div>
                

                <div>
                    <img src="/assets/adopters2.png" alt="adopers" />
                </div>
            </div>


            <div className=' sm:flex-row flex-col flex justify-between items-center'>

                <div className='flex gap-2 items-start justify-center'>
                     <h1 className='text-[#41349D] text-center w-[50px] h-[50px] bg-[#b8b8bb] text-[24px] p-1 rounded-full'>3</h1>
                   <div>
                        <p className='text-[#0A453A] font-semibold mb-2'>The rehomer will review your application</p>
                        <p>- Set up your profile (including photos) in minutes</p>
                        <p>- Describe your home and routine so rehomers can see if it’s right for their pet</p>
                        <p>- Start your search!</p>
                   </div>
                </div>
                

                <div>
                    <img src="/assets/adopters3.png" alt="adopers" />
                </div>
            </div>

            <div className=' sm:flex-row-reverse flex-col flex justify-between gap-12  items-center'>

                <div className='flex gap-2 items-start justify-center'>
                     <h1 className='text-[#41349D] text-center w-[50px] h-[50px] bg-[#b8b8bb] text-[24px] p-1 rounded-full'>4</h1>
                   <div>
                        <p className='text-[#0A453A] font-semibold mb-2'>Have a home check and chat to the rehomer</p>
                        <p>- Make your application using our online enquiry service</p>
                        <p>- If we think you’re a good match, we’ll approve your application.</p>
                        <p>- If we need to ask for more information at this stage 
                        we’ll contact you.</p>
                   </div>
                </div>
                

                <div>
                    <img src="/assets/adopters4.png" alt="adopers" />
                </div>
            </div>

            <div className='sm:flex-row flex-col flex justify-between items-center'>

                <div className='flex gap-2 items-start justify-center'>
                     <h1 className='text-[#41349D] text-center w-[50px] h-[50px] bg-[#b8b8bb] text-[24px] p-1 rounded-full'>5</h1>
                   <div>
                        <p className='text-[#0A453A] font-semibold mb-2'>Adopt your new pet</p>
                        <p>- Set up your profile (including photos) in minutes</p>
                        <p>- Describe your home and routine so rehomers can see if it’s right for their pet</p>
                        <p>- Start your search!</p>
                   </div>
                </div>
                

                <div>
                    <img src="/assets/adopters5.png" alt="adopers" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page