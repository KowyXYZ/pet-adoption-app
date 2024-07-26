"use client"

import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    const [postData, setPostData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await fetch(`/api/post/${params.id}`);
            const data = await response.json();
            setPostData(data);
        } catch (error) {
            console.error('Failed to fetch post:', error);
        }
    };
    
      useEffect(() => {
      
        fetchPost();
    }, [params.postid]); // Add params.id to dependency array to fetch data when it changes

    console.log(postData)

  return (
    <div className='container mx-auto  py-12'>
        <h1 className='text-[32px] uppercase font-black'>Hi Human !</h1>
        <div className='flex justify-start items-start  flex-col gap-4 mt-12'>
          <h1 className='text-[24px] text-[#0A453A] uppercase font-black underline'>{postData.name}</h1>
          <p className='text-[18px]'><span className='text-[gray]'>Pet ID:</span> <span className='text-[#0A453A]'>{params.id.slice(0, 5)}... {params.id.slice(6, 10)}</span></p>
          <div>
          <div className='flex text-[18px] justify-start  items-center text-[#0A453A] font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>{postData.location}</p>
          </div>
          </div>
        </div>

        <div className='flex  justify-between items-start gap-12 mt-12'>
          <div className=' w-full  '>
            <div className='h-[450px]'>
             <img className='w-full h-full rounded-xl object-cover' src={postData.image} alt="imgage" />
            </div>
      


            <div className='flex justify-start items-start mt-12 gap-12'>
              <div className='flex justify-center items-center flex-col'>
                <img src="/assets/gernder.png"  alt="gernder" />
                <p className='text-[#606060]'>Gender</p>
                <p className='text-[#675BC8] capitalize font-black'>{postData.gender}</p>
              </div>

              <div className='flex justify-center items-center flex-col'>
                <img src="/assets/breedpaw.png"  alt="Breed" />
                <p className='text-[#606060]'>Breed</p>
                <p className='text-[#675BC8] capitalize font-black'>{postData.breed}</p>
              </div>

              <div className='flex justify-center items-center flex-col'>
                <img src="/assets/age.png"  alt="Age" />
                <p className='text-[#606060]'>Age</p>
                <p className='text-[#675BC8] capitalize font-black'>{postData.age} Month</p>
              </div>

              <div className='flex justify-center items-center flex-col'>
                <img src="/assets/palette.png"  alt="Color" />
                <p className='text-[#606060]'>Color</p>
                <div className='text-[#675BC8] capitalize font-black'><div  className='w-[30px] h-[30px] rounded-xl'  style={{ backgroundColor: postData.color }} ></div></div>
              </div>

              <div className='flex justify-center items-center flex-col'>
                <img src="/assets/rulersize.png"  alt="Size" />
                <p className='text-[#606060]'>Size</p>
                <p className='text-[#675BC8] capitalize font-black'>{postData.size}</p>
              </div>


            </div>

            

           

          </div>
          
          <div>
            <div className='w-[450px] h-[350px] mb-8 bg-gray-500 bg-opacity-10 flex flex-col gap-5 border-2 border-gray-700 rounded-xl p-5'>
              <h1 className='text-[#0A453A] text-[20px] capitalize font-semibold '>{postData.name} Story</h1>
              <p>{postData.text}</p>
            </div>

            <div className='flex justify-start items-start flex-col gap-4'>
            <div className='flex justify-center items-center gap-4 text-[18px]'>
              <img src="/assets/childcare.png" className='w-[25px] h-[25px] object-contain' alt="childcare" />
              <p>Can live with other children of any age</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-[#0A453A] size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>

            <div className='flex justify-center items-center gap-4 text-[18px]'>
              <img src="/assets/vaccines.png" className='w-[25px] h-[25px] object-contain' alt="childcare" />
              <p>Vaccinated</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-[#0A453A] size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>

            <div className='flex justify-center items-center gap-4 text-[18px]'>
              <img src="/assets/warehouse.png" className='w-[25px] h-[25px] object-contain' alt="childcare" />
              <p>House-Trained</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-[#0A453A] size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>

            <div className='flex justify-center items-center gap-4 text-[18px]'>
              <img src="/assets/Neutered.png" className='w-[25px] h-[25px] object-contain' alt="childcare" />
              <p>Neutrated</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-[#0A453A] size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>

            <div className='flex justify-center items-center gap-4 text-[18px]'>
              <img src="/assets/wb_iridescent.png" className='w-[25px] h-[25px] object-contain' alt="childcare" />
              <p>Microchipped</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-[#0A453A] size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>
          </div>
          </div>

          
        </div>
    </div>
  )
}

export default page