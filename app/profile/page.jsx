"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

const page = () => {


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


  return (
    <div className='w-full py-12'>
        <div className='container mx-auto flex justify-center gap-44 items-center '>
            <div className='flex justify-center items-center gap-4'>
            {!imageError ? (
                    <img
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    className="w-[100px] h-[100px] rounded-full object-contain border-2 border-[#5D4FC4]"
                    onError={handleImageError}
                    />
                ) : (
                    <div className="">
                        <img className='w-[20px] h-[20px] object-contain' src="/assets/vectorlogin.png" alt="loginvector" />
                    </div>
                )}

                <div className='flex justify-center items-start flex-col'>
                  <h1 className='text-[24px] text-[#0A453A] font-black capitalize'>{session?.user?.name}</h1>
                  {userData?.description?.text === '' ? <p className='text-gray-500 lowercase'>Set a Description...</p> : <p className='text-gray-500 lowercase'>{userData?.description?.text}</p>}
                </div>

              
            </div>


            <div className='flex justify-center items-center rounded-xl border-[#5D4FC4] border-2 p-1 px-3 gap-2 text-[#5D4FC4] '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>

              <h1 className='text-[18px]'>
                Edit Profile
              </h1>

    
            </div>
            
        </div>

        <div className='container mx-auto flex gap-44  mt-12 justify-center items-center'>
          <div className='text-[#5D4FC4] flex justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {userData?.description?.email === '' ? <p className='text-gray-500 lowercase'>Set an Email...</p> : <p className='lowercase text-[#0A453A]'>{userData?.description?.email}</p>}
          </div>

          <div className='text-[#5D4FC4] flex justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            {userData?.description?.phone === '' ? <p className='text-gray-500 lowercase'>Set a Phone Num...</p> : <p className='lowercase text-[#0A453A]'>{userData?.description?.phone}</p>}
          </div>
        </div>

        <div className='mt-24 flex justify-center items-center flex-col'>
          <h1 className='text-[28px] text-center'>You liked these</h1>
          <div className='flex flex-wrap gap-8 justify-center items-center mt-4'>
               <div className='gap-4 shadow-xl w-[300px] flex flex-col border-2 rounded-2xl pb-4'>
                    <img src="/assets/card2.png" alt="card"  className='rounded-t-2xl'/>
                    <div className='px-4 flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <p className='text-[20px] font-semibold'>Hero</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>

                        </div>

                        <div className='flex justify-start  items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>Belgrade, SRB</p>
                         </div>

                         <div className='flex justify-between py-3 items-center'>
                            <p>Gender: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>Male</span></p>
                            <p>Breed: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>DLH</span></p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p>Age: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>2 years</span></p>
                            <p>Size: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>Small</span></p>
                       </div>

                    

                        <div className=''>
                         <button className='transition-all w-full delay-100 ease-in-out border-[#675BC8] text-[18px] rounded-xl  py-2 px-4 text-[#675BC8] border-2 hover:bg-[#675BC8] hover:text-[#fff]'>More Info</button>
                       </div>
                    </div>
                   


                    
                </div>

                <div className='gap-4 shadow-xl w-[300px] flex flex-col border-2 rounded-2xl pb-4'>
                    <img src="/assets/card2.png" alt="card"  className='rounded-t-2xl'/>
                    <div className='px-4 flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <p className='text-[20px] font-semibold'>Hero</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>

                        </div>

                        <div className='flex justify-start  items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>Belgrade, SRB</p>
                         </div>

                         <div className='flex justify-between py-3 items-center'>
                            <p>Gender: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>Male</span></p>
                            <p>Breed: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>DLH</span></p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p>Age: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>2 years</span></p>
                            <p>Size: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>Small</span></p>
                       </div>

                 

                        <div className=''>
                         <button className='transition-all w-full delay-100 ease-in-out border-[#675BC8] text-[18px] rounded-xl  py-2 px-4 text-[#675BC8] border-2 hover:bg-[#675BC8] hover:text-[#fff]'>More Info</button>
                       </div>
                    </div>
                   


                    
                </div>

                <div className='gap-4 shadow-xl w-[300px] flex flex-col border-2 rounded-2xl pb-4'>
                    <img src="/assets/card2.png" alt="card"  className='rounded-t-2xl'/>
                    <div className='px-4 flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <p className='text-[20px] font-semibold'>Hero</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>

                        </div>

                        <div className='flex justify-start  items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>Belgrade, SRB</p>
                         </div>

                         <div className='flex justify-between py-3 items-center'>
                            <p>Gender: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>Male</span></p>
                            <p>Breed: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>DLH</span></p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p>Age: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>2 years</span></p>
                            <p>Size: <span className='text-[#2E256F] py-[2px] px-[5px] rounded-3xl bg-[#b5aaff]'>Small</span></p>
                       </div>

                

                        <div className=''>
                         <button className='transition-all w-full delay-100 ease-in-out border-[#675BC8] text-[18px] rounded-xl  py-2 px-4 text-[#675BC8] border-2 hover:bg-[#675BC8] hover:text-[#fff]'>More Info</button>
                       </div>
                    </div>
                   


                    
                </div>
          </div>

          <h1 className='underline'>See more...</h1>
        </div>

    </div>
  )
}

export default page