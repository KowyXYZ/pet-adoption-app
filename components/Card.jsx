import Link from 'next/link'
import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        <div className='gap-4 w-[300px] flex flex-col border-2 shadow-xl rounded-2xl pb-4'>
                    <img src={data.image} alt="card"  className='rounded-t-2xl w-[300px] h-[200px] object-cover'/>
                    <div className='px-4 flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <p className='text-[20px] font-bold'>{data.name}</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>

                        </div>

                        <div className='flex justify-start  items-center text-[#0A453A] font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>{data.location === '' ? 'Unknown' : data.location}</p>
                         </div>

                         <div className='flex justify-between py-3 items-center'>
                            <p>Gender: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>{data.gender}</span></p>
                            <p>Breed: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>{data.breed}</span></p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p>Age: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>{data.age} Months</span></p>
                            <p>Size: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>{data.size}</span></p>
                       </div>

                        <p>{data.text}</p>

                        <div className='w-full justify-center items-center flex text-center'>
                         <Link href={`/posts/${data._id}`} className='transition-all w-full delay-100 ease-in-out border-[#675BC8] text-[18px] rounded-xl  py-2 px-4 text-[#675BC8] border-2 hover:bg-[#675BC8] hover:text-[#fff]'>More Info</Link>
                       </div>
                    </div>
                </div>
    </div>
  )
}

export default Card