"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import OtpLogin from '@/components/OtpLogin'



const page = () => {

        
    const [userData, setUserData] = useState([]);

    const router = useRouter()

    const {data: session} = useSession()

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userId = session?.user?.id;
            const response = await fetch(`/api/profile/${userId}`);
            const data = await response.json();
            setUserData(data);


            setEmail(data.description.email)
            setDescription(data.description.text)
            setPhone(data.description.phone)
            setLocation(data.description.location)
          
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
      
        if (session?.user?.id) {
          fetchUserData();
        }
      }, [session?.user?.id]); // Add session?.user?.id to the dependency array

   


    const [imageError, setImageError] = React.useState(false);

    const handleImageError = () => {
      setImageError(true);
    };


    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')


    const handleSubmit = async() => {
        try {
            const response = await fetch('/api/profile/update', {
                method: 'PATCH',
                body: JSON.stringify({
                    text: description,
                    email: email,
                    phone: phone,
                    location: location,
                    id: session?.user?.id
                })
            })
            if(response.ok){
                console.log('Done')
                router.push(`/profile`)
            }
        } catch (error) {
            console.log(error)
        }
       
    }

    if (!session) {
        return (
            <div className='py-96 text-center items-center'>
                <p>Please sign in to view this page.</p>
            </div>
        );
    }



  
  

  return (
    <div className='w-full py-12 '>
        <div className='container mx-auto flex justify-center items-center flex-col'>
        <div className='container mx-auto flex justify-center gap-64 items-start '>
            <div className='flex justify-center items-center gap-4'>
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

                <div className='flex justify-center items-start flex-col'>
                    <h1 className='text-[24px] text-[#0A453A] font-black capitalize'>{session?.user?.name}</h1>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} maxLength='100' className='border-2 shadow-xl rounded-xl resize-none p-2 outline-none' placeholder="Write you'r description here..." cols='45' rows='3'/>
                </div>

              
            </div>


            <div className='flex justify-center items-center rounded-xl border-[#5D4FC4] border-2 p-1 px-3 gap-2 text-[#5D4FC4] '>
              <p>✔</p>

              <button onClick={() => handleSubmit()} className='text-[18px]'>
                Save
              </button>

    
            </div>
            
        </div>

        <div className='container mx-auto flex gap-24  mt-12 justify-center items-center'>

          <div className='text-[#5D4FC4] flex justify-center items-center gap-2'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

            <input value={location} onChange={(e) => setLocation(e.target.value)} type='email' className='border-2 px-4 w-[300px] shadow-xl rounded-xl resize-none p-2 outline-none' placeholder="Write you'r location here..." />
          </div>

          <div className='text-[#5D4FC4] flex justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <p className='border-2 px-4 w-[300px] shadow-xl rounded-xl resize-none p-2 outline-none'>{phone}</p>
            <Link href='/profile/edit-profile/change-phone-number'>Change The Number</Link>
          </div>
        </div>

        </div>

        <h1 className='flex justify-center font-black uppercase mt-96 items-center text-[32px] text-[#0A453A]'>More features will be added soon...</h1>

       
    </div>
  )
}

export default page