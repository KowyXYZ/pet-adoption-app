"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Card from '@/components/Card'


const page = ({params}) => {

    const {data: session} = useSession()
    
    const [userData, setUserData] = useState([]);

    const [imageError, setImageError] = React.useState(false);


    const handleImageError = () => {
      setImageError(true);
    };
  
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const userId = session?.user?.id;
          const response = await fetch(`/api/profile/${params.userId}`);
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


    // feed

    const [feedData, setFeedData] = useState([])

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/post');
            const data = await response.json();
            setFeedData(data);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        }
    };
  
    useEffect(() => {
        fetchPosts();
    }, [])
    
  


    if (!session) {
        return (
            <div className='py-96 text-center items-center'>
                <p>Please sign in to view this page.</p>
            </div>
        );
    }

  return (
    <div className='w-full py-12'>
    <div className='container mx-auto flex justify-center gap-64 items-center '>
        <div className='flex justify-center items-center gap-4'>
        {!imageError ? (
                <img
                src={userData?.image}
                alt={userData?.name}
                className="w-[100px] h-[100px] rounded-full object-contain border-2 border-[#5D4FC4]"
                onError={handleImageError}
                />
            ) : (
                <div className="border-2 border-[#5D4FC4] rounded-full w-[50px] h-[50px] flex justify-center items-center">
                    <img className='w-[20px] h-[20px] object-contain' src="/assets/vectorlogin.png" alt="loginvector" />
                </div>
            )}

            <div className='flex justify-center items-start flex-col'>
              <h1 className='text-[24px] text-[#0A453A] font-black capitalize'>{userData?.username}</h1>
              {userData?.description?.text === '' ? <p className='text-gray-500 lowercase'>User did not set up description...</p> : <p className='text-gray-500 lowercase'>{userData?.description?.text}</p>}
            </div>

          
        </div>

        
    </div>

    <div className='container mx-auto flex gap-44  mt-12 justify-center items-center'>
      <div className='text-[#5D4FC4] flex justify-center items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        {userData?.description?.email === '' ? <p className='text-gray-500 lowercase'>User did not set up email...</p> : <p className='lowercase border-b-2 text-[#0A453A]'>{userData?.description?.email}</p>}
      </div>

      <div className='text-[#5D4FC4] flex justify-center items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>

        {userData?.description?.location === '' ? <p className='text-gray-500 lowercase'>User did not set up location...</p> : <p className='capitalize border-b-2 text-[#0A453A] '>{userData?.description?.location}</p>}
      </div>

      <div className='text-[#5D4FC4] flex justify-center items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        {userData?.description?.phone === '' ? <p className='text-gray-500 lowercase'>User did not set up phone...</p> : <p className='uppercase border-b-2 text-[#0A453A]'>{userData?.description?.phone}</p>}
      </div>
    </div>

    <div className='mt-24 flex justify-center items-center flex-col'>
      <h1 className='text-[28px] text-center capitalize mb-4'>{userData.username} posts</h1>
      
       <div className='flex  flex-wrap gap-8 justify-center items-center'>
              {feedData && feedData.filter(item => item.creatorId === params.userId).map((card, index) => {
                  return(
                      <Card data={card}/>
                  )
              })}

          </div>

      <h1 className='underline mt-12'>See more...</h1>
    </div>


</div>
  )
}

export default page