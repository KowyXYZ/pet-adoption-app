"use client"
import React, { useEffect, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Select from '@mui/material/Select';
import { useSession } from 'next-auth/react'
import { Checkbox, ColorPicker } from 'antd';
import { FormControl, InputLabel, MenuItem } from '@mui/material';

import { UploadButton } from "@/utils/uploadthing";
import { Separator } from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()

     const {data: session} = useSession()

     const [size, setSize] = React.useState('');

     const [image, setImage] = useState('')

     const [postInfo, setPostInfo] = useState({
        name: '',
        breed: '',
        size: '',
        gender: '',
        age: '',
        color: '',
        text: ''
     })

     const [userData, setUserData] = useState([]);

     
      
      const [canLiveWith, setCanLiveWith] = useState(false)
      const [Vaccinated, setVaccinated] = useState(false)
      const [houseTrained, setHouseTrained] = useState(false)
      const [Neutrated, setNeutrated] = useState(false)
      const [Microchipped, setMicrochipped] = useState(false)

      const [adressOne, setAdressOne] = useState('')
      const [adressTwo, setAdressTwo] = useState('')
      const [city, setCity] = useState('')
      const [postCode, setPostCode] = useState('')


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

     const handleChangeSize = (event) => {
        setPostInfo({...postInfo, size: event.target.value});
        setSize(event.target.value)
     };

    const [alignment, setAlignment] = useState(null);
    const [breed, setBreed] = useState(null)

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        setPostInfo(prev => ({ ...prev, gender: newAlignment }));
    };

    const handleChangeBreed = (event, newAlignment) => {
        setBreed(newAlignment);
        setPostInfo(prev => ({ ...prev, breed: newAlignment }));
    };
      useEffect(() => {
        console.log(alignment); 
        console.log(breed)
        // setPostInfo({...postInfo, gender: alignment});// This will log the updated value of alignment whenever it changes
        // setPostInfo({...postInfo, breed: breed});
        console.log(postInfo)
    }, [alignment, breed]); // Dependency array ensures this effect runs whenever alignment changes


    if (!session) {
        return (
            <div className='py-96 text-center items-center'>
                <p>Please sign in to view this page.</p>
            </div>
        );
    }

    const handlePost = async() => {

        if (
            postInfo.name === '' ||
            postInfo.breed === '' ||
            postInfo.size === '' ||
            postInfo.gender === '' ||
            postInfo.age === '' ||
            postInfo.color === '' ||
            postInfo.text === '' ||
            postCode === '' ||
            adressOne === '' ||
            city === '' || 
            image === '' 
        ) {
            alert('One or more fields are empty');
            return; // Exit the function if any field is empty
        }

        try {
            const response = await fetch('/api/post/new', {
                method: "POST",
                body: JSON.stringify({
                    creator: session?.user?.name,
                    name: postInfo.name,
                    breed: postInfo.breed,
                    size: postInfo.size,
                    gender: postInfo.gender,
                    age: postInfo.age,
                    color: postInfo.color,
                    text: postInfo.text,
                    image: image,
                    location: userData?.description?.location,
                    creatorId: userData?._id,
                    canLiveWithChildren: canLiveWith,
                    vaccinated: Vaccinated,
                    houseTrained: houseTrained,
                    neutrated: Neutrated,
                    microchipped: Microchipped,
                    adressOne: adressOne,
                    adressTwo: adressTwo,
                    city: city,
                    postCode: postCode
                })
            })
            
            if(response.ok) {
                console.log('ALLGOODDD')
                router.push(`/`)
              }

        } catch (error) {
            console.log(error);
        }
        
    }

  return (
    <div className='w-full py-12'>
        <div className='container mx-auto flex justify-center gap-24 items-start'>
            <img src="/assets/adoptdog.png" alt="imgforadopting" className=' w-[30%]' />
            

            <div className='flex text-center flex-col gap-6'>
                <h1 className='text-[32px] leading-tight font-black text-[#0A453A]'>Join the <span className='text-[#675BC8] font-serif'>Furry</span> <span className='text-[#2E256F] font-serif'>Friends</span> Community <br /> and Connect with Dog Lovers!</h1>
                <div className='shadow-lg border-[1px] rounded-md p-2 w-full flex justify-center items-center gap-4 font-black text-[#3F3F3F]'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                    <p className='text-[22px] text-[#3F3F3F] font-black'>Upload Pet Image</p> */}

                        <div>
                        <main className="flex flex-col items-center justify-between ">
                        <UploadButton
                                endpoint="imageUploader"
                                onClientUploadComplete={(res) => {
                                    // Do something with the response
                                    console.log("Files: ", res);
                                    setImage(res[0].url)
                                }}
                                onUploadError={(error) => {
                                    // Do something with the error.
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />
                        <img className={image.length > 2 ? 'w-[50px] h-[50px] object-contain' : 'hidden'} src={image ? image : '/assets/error.jpg'} alt="eerrro" />
                        </main>
                    </div>


                </div>

                <div className='flex jusitfy-center gap-24 items-center '>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <label className='uppercase font-semibold'>Pet Name</label>
                        <input maxLength={12} required onChange={(e) => setPostInfo({...postInfo, name: e.target.value})} className='p-2 outline-none shadow-lg border-[1px]  w-[300px] rounded-lg'  type="text" placeholder="Pet's Name"/>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2'>
                        <label className='uppercase font-semibold'>Pet Breed</label>
                        <ToggleButtonGroup
                            required            
                            exclusive
                            aria-label="Platform"
                            value={breed}
                            onChange={handleChangeBreed}
                            >
                            <ToggleButton color='primary' className=" w-[150px] h-[40px]" value="dog">Dog</ToggleButton>
                            <ToggleButton color='primary'  className=" w-[150px] h-[40px]" value="cat">Cat</ToggleButton>

                        </ToggleButtonGroup>           
                        {/* <input maxLength={10} required onChange={(e) => setPostInfo({...postInfo, breed: e.target.value})} className='p-2 outline-none shadow-lg border-[1px] w-[300px] rounded-lg' type="text" placeholder="Pet's Breed"/> */}
                    </div>
                </div>
                

                <div className='flex jusitfy-center gap-24 items-center '>
                
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <label className='uppercase font-semibold'>Pet Size</label>
                        <FormControl className='w-[300px] text-start outline-none' size='small' >
                              <InputLabel className={size.length > 0 ? 'hidden' : 'block'}>Size</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={size}
                                label="Size"
                                onChange={handleChangeSize}
                                className='h-[40px] outline-none'               
                            >
                                <MenuItem value={'small'}>Small (puppy)</MenuItem>
                                <MenuItem value={'medium'}>Medium (grown up)</MenuItem>
                                <MenuItem value={'large'}>Large (old dog)</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-[300px]'>
                        <label className='uppercase font-semibold'>Pet Gender</label>
                        <div>
                        <ToggleButtonGroup
                            required
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton  color="primary" className=" w-[150px] h-[40px]" value="male">Male</ToggleButton>
                            <ToggleButton  color="secondary" className=" w-[150px] h-[40px]" value="female">Female</ToggleButton>

                            </ToggleButtonGroup>
                        </div>
                    </div>
                    
                </div>

                <div className='flex jusitfy-center gap-24 items-center '>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <label className='uppercase font-semibold'>Pet Age</label>
                        <input maxLength={3} required  onChange={(e) => setPostInfo({...postInfo, age: e.target.value})} className='p-2 outline-none shadow-lg border-[1px] rounded-lg w-[300px]' type="text" placeholder="Pet's Age (enter how many months)"/>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2'>
                        <label className='uppercase font-semibold'>Pet Color</label>
                        <ColorPicker required onChange={(c) => setPostInfo({...postInfo, color: c.toHexString()})} defaultValue="#1677ff" className='w-[300px]' size="large" showText />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <label className='uppercase font-semibold'>Description</label>
                    <textarea required minLength={5} maxLength={250} onChange={(e) => setPostInfo({...postInfo, text: e.target.value})} cols='4' className='p-2 resize-none outline-none shadow-lg border-[1px] rounded-lg w-full' type="text" placeholder="Description"/>
                </div>

                {/* adress */}

                <div className='flex flex-col justify-center items-center gap-5 w-full'>
                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Address line 1</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => setAdressOne(e.target.value)}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Address line 1"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Address line 2</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => setAdressTwo(e.target.value)}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Address line 2"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>City</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => setCity(e.target.value)}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="City"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 w-full'>
                        <label className='uppercase font-semibold'>Postal Code</label>
                        <input
                            maxLength={30}
                            required
                            onChange={(e) => setPostCode(e.target.value)}
                            className='p-2 outline-none shadow-lg border-[1px] w-full rounded-lg'
                            type="text"
                            placeholder="Postal Code"
                        />
                    </div>
                </div>

                <div className='gap-2 flex justify-center flex-col  items-start font-semibold text-[18px] border-2 p-4 shadow-xl rounded-xl'>
                  <Checkbox onChange={(e) => setCanLiveWith(e.target.checked)}>Can live with other children of any age</Checkbox>

                  <Checkbox onChange={(e) => setVaccinated(e.target.checked)}>Vaccinated</Checkbox>
                
                  <Checkbox onChange={(e) => setHouseTrained(e.target.checked)}>House-Trained</Checkbox>

                  <Checkbox onChange={(e) => setNeutrated(e.target.checked)}>Neutrated</Checkbox>

                  <Checkbox onChange={(e) => setMicrochipped(e.target.checked)}>Microchipped</Checkbox>

                 <p className='text-gray-500'>Check Boxes are not required but feel free to check them to help others!</p>
                </div>

                <div className='flex justify-center items-center mt-8'>
                     <button onClick={() => handlePost()} className='bg-[#675BC8] py-2 px-4 w-1/2 text-[#fff] rounded-lg'>Post</button>
                </div>

                

               
            </div>
        </div>
    </div>
  )
}

export default page