import React from 'react'

const HeroSection = () => {
  return (
    <div className='py-12 w-full'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='flex flex-col gap-8 justify-center items-start '>
                <p className='font-black text-[#0A453A] leading-tight text-[56px]'>Give a New Life to <br /> <span className='text-[#675BC8] font-serif'>Furry</span> <span className='text-[#2E256F] font-serif'>Friends</span></p>
                <p className='w-[500px] opacity-80 text-[24px]'>Pet adoption and rehoming are both vital aspects of animal welfare, offering hope and a fresh start to pets in need.
                Open your heart and your home to a shelter pet. </p>
                <div className='flex justify-center items-center gap-12'>
                    <button className='transition-all delay-100 ease-in-out bg-[#675BC8] border-2 text-[18px] rounded-xl text-[#fff] py-2 px-4 hover:bg-[#fff] hover:text-[#675BC8] border-[#675BC8]'>Adopt Now</button>
                    <button className='transition-all delay-100 ease-in-out border-[#675BC8] text-[18px] rounded-xl  py-2 px-4 text-[#675BC8] border-2 hover:bg-[#675BC8] hover:text-[#fff]'>Rehome Now</button>
                </div>
            </div>

            <div>
                <img src="/assets/dogocato.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection