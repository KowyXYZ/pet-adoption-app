"use client"

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { DropdownMenuCheckboxes } from '../ui/dropdown-menu'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const Navbar = () => {

    const {data: session} = useSession()

    const [providers, setProviders] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const setUpProviders = async() => {
          const response = await getProviders()
    
          setProviders(response)
        }
    
        setUpProviders();
      }, [])
    
      const [imageError, setImageError] = React.useState(false);

      const handleImageError = () => {
        setImageError(true);
      };



    //   user
    
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

    // console.log(userData)

    const ifComplete = userData?.description?.email &&  userData?.description?.location && userData?.description?.phone
    

  return (
   <div className='w-full py-4'>
        <div className='hidden sm:flex justify-between items-center container mx-auto'>
            <Link href='/'>
                <img src="/assets/Logo.png" alt="logo" />
            </Link>

            <div className='flex gap-8 justify-center items-center text-[18px]'>
                <Link href='/adopt'>Adopt</Link>
                <Link href='/care-guide'>Care Guide</Link>
                <Link  href='/about-us'>About Us</Link>
            </div>
            {session?.user ? 
            
            <div className='border-2 text-[#5D4FC4] rounded-xl border-[#5D4FC4] flex justify-center items-center p-1 px-3 gap-4 text-[18px]'>
                {!imageError ? (
                    <img
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    className="w-[30px] h-[30px] rounded-full object-cover border-2 border-[#5D4FC4]"
                    onError={handleImageError}
                    />
                ) : (
                    <div className="">
                        <img className='w-[20px] h-[20px] object-contain' src="/assets/vectorlogin.png" alt="loginvector" />
                    </div>
                )}
                <div>
                    <DropdownMenu>
                    <DropdownMenuTrigger className='outline-none'>{session?.user?.name}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href='/profile'>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                              {ifComplete ?  <Link href='/create-post'>Create Post</Link> : <button onClick={() => {alert('GO SET UP YOUR PROFILE! YOU CANNOT CREATE POST OR ADOPT PETS WITHOUT SETTING UP YOUR PROFILE')}}>Create Post</button>}
                        </DropdownMenuItem>

                        <DropdownMenuItem className='flex gap-8'>
                             <Link href='/messages'>Messages</Link>
                             <p className='text-[red]'>{userData?.messages?.length}</p>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <button onClick={() => signOut()}>Sign Out</button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div>
              

                </div>
            </div>
            
            
            : 
            
            <div className='flex justify-center items-center'>
                {providers && Object.values(providers).map((provider) => (
                    <div key={provider} className='border-2 text-[#5D4FC4] rounded-xl border-[#5D4FC4] flex justify-center items-center p-1 px-3 gap-4 text-[18px]'>
                        <img src="/assets/vectorlogin.png" alt="loginvector" />
                        <button onClick={() => signIn(provider.id)}>Sign In</button>
                    </div>
                ))}
            </div>
            
            }
            
        </div>


        {/* mobile */}

        <div className=' sm:hidden flex justify-between items-center container px-8'>
            <Link href='/'>
                <img src="/assets/Logo.png" alt="logo" />
            </Link>

            <div className='relative'>
                {toggle ? 
                <button className='flex justify-center items-center' onClick={() => setToggle(!toggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button> 
                
                : 
                
                <div className='flex justify-center items-center' onClick={() => setToggle(!toggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                </div>}

                {toggle ?
                
                <div className='absolute rounded-xl text-center top-10 right-0 border-2 border-[#5D4FC4] z-10 bg-[#fff] flex flex-col justify-center items-center gap-5 p-4 w-[200px]'>
                    <Link href='/profile' className='border-2 text-[#5D4FC4] rounded-xl border-[#5D4FC4] text-center justify-center items-center flex p-1 px-3 text-[16px]'>
                        <p>{session?.user?.name}</p>
                    </Link>
                    <Link href='/'>Home</Link>
                    <Link href='/adopt'>Adopt</Link>
                    <Link href='/care-guide'>Care Guide</Link>
                    <Link href='/about-us'>About Us</Link>
                    <Link href='/how-it-works-adopters'>How It Works For Adopters</Link>
                    <Link href='/how-it-works-rehomers'>How It Works For Rehomers</Link>
                    <Link href='/contact'>Contact Us</Link>
                    <Link href='/messages'>Messages</Link>
                    {session?.user ?
                    
                    <>
                    

                    
                    <button onClick={() => signOut()}>Sign Out</button>
                    </>

                
                    
                    :
                    
                    <div className='flex justify-center items-center'>
                        {providers && Object.values(providers).map((provider) => (
                            <div key={provider} className='border-2 text-[#5D4FC4] rounded-xl border-[#5D4FC4] flex justify-center items-center p-1 px-3 gap-4 text-[18px]'>
                                <img src="/assets/vectorlogin.png" alt="loginvector" />
                                <button onClick={() => signIn(provider.id)}>Sign In</button>
                            </div>
                        ))}
                    </div>
                    
                    }
                </div>
                
                :
                
                <></>}
            </div>
        </div>
   </div>
  )
}

export default Navbar