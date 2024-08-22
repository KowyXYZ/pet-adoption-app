"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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



  return (
    <div className='container mx-auto flex justify-center items-center flex-col py-12'>
      <div>
        {userData?.messages?.filter((item) => item.id === params.msgId).map((msg, index) => {
          return(
            <div key={index} className='border-2 sm:w-[500px] w-[300px] flex text-[18px] gap-4 flex-col justify-center items-start rounded-xl p-8'>

              <h1 className='text-[20px] font-black uppercase text-[#675BC8]'>Request for Adoption</h1>

              <div className=' pb-2 w-full border-b-4 border-[#675BC8]'>
                <div className=' w-full p-2 '>
                  <h1 className='text-sm font-bold uppercase'>Username</h1>
                  <p>{msg.name}</p>
                </div>

                <div className=' w-full p-2 rounded-xl'>
                  <h1 className='text-sm font-bold uppercase'>Email</h1>
                  <p>{msg.email}</p>
                </div>

                <div className=' w-full p-2 rounded-xl'>
                  <h1 className='text-sm font-bold uppercase'>Phone</h1>
                  <p>{msg.phone}</p>
                </div>
              </div>

              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Address 1</h1>
                <p>{msg.address1}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Address 2</h1>
                <p>{msg.address2}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Postal Code</h1>
                <p>{msg.postalCode}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>City</h1>
                <p>{msg.city}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Garden</h1>
                <p>{msg.garden}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Home Situation</h1>
                <p>{msg.homeSituation}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Household Setting</h1>
                <p>{msg.householdSetting}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Activity Level</h1>
                <p>{msg.activityLevel}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Number of Adults</h1>
                <p>{msg.numberOfAdults}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Number of Children</h1>
                <p>{msg.numberOfChildren}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Age of Child</h1>
                <p>{msg.ageOfChild}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Flatmates</h1>
                <p>{msg.flatmates}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Animals at Home</h1>
                <p>{msg.animalsAtHome}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>If Animal (Yes) Description</h1>
                <p>{msg.ifAnimalYesDesc}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>If Animal Neutered</h1>
                <p>{msg.ifAnimalNeutered}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>If Animal Vaccinated</h1>
                <p>{msg.ifAnimalVaccinated}</p>
              </div>
              <div className=' w-full p-2 rounded-xl'>
                <h1 className='text-sm font-bold uppercase'>Description of Experience</h1>
                <p>{msg.describeExp}</p>
              </div>

              <div className='flex w-full justify-center text-center items-center gap-2 flex-col'>
                <button className='w-full border-2'>Call</button>
                <button className='w-full border-2'>Delete</button>
              </div>
              <p className='text-[#0A453A] text-[16px]'>Reminder to delete the post after you adopted the pet!</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page