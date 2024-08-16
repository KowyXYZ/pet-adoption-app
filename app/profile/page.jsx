"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Cards from '@/components/Card'

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const page = () => {

// session
  const {data: session} = useSession()

  const [imageError, setImageError] = React.useState(false);
  
  const [userData, setUserData] = useState([]);

  const handleImageError = () => {
    setImageError(true);
  };

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
  }, [session?.user?.id]); // Add session?.user?.id to the dependency array

  // session end

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
  

  // feed end

  if (!session) {
    return (
        <div className='py-96 text-center items-center'>
            <p>Please sign in to view this page.</p>
        </div>
    );
}

      function MailIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        )
      }


      function MapPinIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        )
      }


      function PhoneIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        )
      }


  return (
    <div className='w-full py-12'>
         <div>
            <Card className="w-full max-w-md mx-auto">
          <CardHeader className="bg-muted/20 p-6">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-24 w-24">
                {!imageError ? (
                      <img
                      src={session?.user?.image}
                      alt={session?.user?.name}
                      className="w-[100px] h-[100px] rounded-full object-contain border-2 border-[#5D4FC4]"
                      onError={handleImageError}
                      />
                  ) : (
                      <div className="border-2 border-[#5D4FC4] rounded-full w-[50px] h-[50px] flex justify-center items-center">
                          <img className='w-[20px] h-[20px] object-contain' src="/assets/vectorlogin.png" alt="loginvector" />
                      </div>
                  )}
              </Avatar>
              <div className="grid gap-1 text-center">
                <h2 className="text-2xl font-bold text-[#0A453A]">{session?.user?.name}</h2>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 grid gap-4">
            <div className="grid gap-2">
              <p className="text-muted-foreground">
              {userData?.description?.text === '' ? <span>Set a Description...</span> : <span >{userData?.description?.text}</span>}
              </p>
              <div className="grid gap-1 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4" />
                  <span>{session?.user?.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4" />
                  {userData?.description?.location === '' ? <span >Set a Location...</span> : <span>{userData?.description?.location}</span>}
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4" />
                  <span>{userData?.description?.phone}</span>
                </div>

                <div className="flex justify-center">

                <Button variant="outline" size="sm" className="bg-[#5D4FC4] text-white hover:bg-[#5D4FC4]/90">
                      <Link href='/profile/edit-profile'>Edit Profile</Link>
                </Button>
                 
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>


        <div className='mt-24 flex justify-center items-center gap-8 flex-col'>
          <h1 className='text-[28px] text-center'>Your posts</h1>
          
           <div className='flex  flex-wrap gap-8 justify-center items-center'>
                  {feedData && feedData.slice(0,4).filter(item => item.creatorId === session?.user?.id).map((card, index) => {
                      return(
                          <Cards data={card}/>
                      )
                  })}

              </div>

          <h1 className='underline mt-12'>See more...</h1>
        </div>

        <div className='mt-24 flex justify-center items-center flex-col'>
          <h1 className='text-[28px] text-center'>You liked these</h1>
          <div className='flex flex-wrap gap-8 justify-center items-center mt-4'>
              {userData?.favorites?.slice(0,4).map((card, index) => {
                return(
                  <Cards data={card}/>
                )
              })}
                 
              
          </div>

          <h1 className='underline mt-12'>See more...</h1>
        </div>

       


    </div>
  )
}

export default page