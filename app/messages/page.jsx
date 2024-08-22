"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const page = () => {

  const {data: session} = useSession()

  const [userData, setUserData] = useState([]);
  
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = session?.user?.id;
        const response = await fetch(`/api/profile/${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    if (session?.user?.id) {
      fetchUserData();
    }
  }, [session?.user?.id]);


  return (
    <div className='w-full py-12'>
      <div className='container mx-auto flex gap-8 flex-col justify-center items-center'>
        <h1 className='font-black text-[22px] sm:text-[26px]'>{session?.user?.name} - Messages - <span className='text-[red]'>{userData?.messages?.length}</span></h1>
        <div className={userData?.messages?.length > 4 ? '' : 'h-screen'}>
          {userData?.messages?.map((message, index) => {
          return(
            <Link href={`/messages/${message.id}`} className='mb-5 border-2 p-2 rounded-xl text-center flex justify-between items-center border-gray-400 w-[300px]'>
                <h1 className='uppercase font-semibold'>Message No {index + 1}</h1>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
               </svg>

            </Link>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default page