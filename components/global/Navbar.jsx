"use client"

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const {data: session} = useSession()

    const [providers, setProviders] = useState(null)

    useEffect(() => {
        const setUpProviders = async() => {
          const response = await getProviders()
    
          setProviders(response)
        }
    
        setUpProviders();
      }, [])
    

  return (
   <div className='w-full py-4'>
        <div className='flex justify-between items-center container mx-auto'>
            <Link href='/'>
                <img src="/assets/Logo.png" alt="logo" />
            </Link>

            <div className='flex gap-8 justify-center items-center text-[18px]'>
                <p>Adopt</p>
                <p>Care Guide</p>
                <p>About Us</p>
            </div>

            <div className='flex justify-center items-center'>
                {providers && Object.values(providers).map((provider) => (
                    <div>
                        <button onClick={() => signIn(provider.id)}>Sign In</button>
                    </div>
                ))}
            </div>
        </div>
   </div>
  )
}

export default Navbar