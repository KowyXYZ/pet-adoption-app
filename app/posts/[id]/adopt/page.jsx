"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Card from '@/components/Card'



const page = ({params}) => {

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

    
    if (!session) {
        return (
            <div className='py-96 text-center items-center'>
                <p>Please sign in to view this page.</p>
            </div>
        );
    }

    const fullInfo = userData?.description?.email && userData?.description?.location && userData?.description?.phone


  return (
    <div className='w-full py-24 pb-56 '>
        <div className='container mx-auto flex-col flex justify-center items-center gap-5'>
            <div className='flex justify-center items-center py-12'>
              <img src="/assets/step1.png" className='w-[850px]  object-contain' alt="step" />
            </div>
            <div className='flex justify-center items-center gap-24 border-2 p-6 shadow-xl rounded-2xl'>
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

               <div className='flex flex-col justify-center items-start text-start gap-2 '>
                 <h1>Email/Username: <span className='font-semibold'>{userData?.description?.email}</span></h1>
                 <h1>Location: <span className='font-semibold'>{userData?.description?.location}</span></h1>
                  <h1>Phone Number: <span className='font-semibold'>{userData?.description?.phone}</span></h1>
               </div>
            </div>

                <p className='text-gray-500'>{fullInfo ? <p>You have all information needed to continue </p> : <p className='text-red-600'>You dont have all information to continue</p>}</p>

            <div>
                {fullInfo ? 
                <Link href={`/posts/${params.id}/adopt/address`} disabled={fullInfo} className='bg-[#675BC8] text-[#fff] rounded-xl p-2 px-4'>Start</Link>
                     :
                <button disabled className='bg-[#675BC8] text-[#fff] rounded-xl p-2 px-4'>Fill the rest of the information to continue</button>}
            </div>

       

            {/* <div className='flex justify-center items-center flex-col gap-4 mt-12 w-1/3'>
                <h1 className='font-black text-[18px] opacity-90'>Home</h1>

                  <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Do you have a garden</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => e}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Address line 1"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Please Describe your living situation</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => e}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Address line 2"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Can you describe your household setting</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => e}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Postal Code"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Can you describe the household's typical activity level</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => e}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Postal Code"
                        />
                    </div>

                   
            </div> */}

        </div>
    </div>
  )
}

export default page