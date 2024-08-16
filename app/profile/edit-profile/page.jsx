"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import OtpLogin from '@/components/OtpLogin'


import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Component from '@/components/EditPage'




const page = () => {

        
    const [userData, setUserData] = useState([]);

    const router = useRouter()

    const {data: session} = useSession()

    const countires = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]

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


    const handleSubmit = async(e) => {
      e?.preventDefault();

        try {
            const response = await fetch('/api/profile/update', {
                method: 'PATCH',
                body: JSON.stringify({
                    text: description,
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
    <div className='w-full py-24'>

        <div className="flex flex-col items-center justify-center  bg-background">
      <div className="max-w-md w-full space-y-6 p-6 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <Avatar className="w-[100px] h-[100px] border-4 border-card">
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
          <h1 className="text-2xl font-bold mt-4">Edit Profile</h1>
          <div className="text-sm text-muted-foreground">@{session?.user?.name}</div>
        </div>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className='flex gap-6'>
              <p id="phone" type="tel">{phone}</p>
              <Link href='/profile/edit-profile/change-phone-number' className='text-gray-400'>Change The Number</Link>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="country">Country</Label>
            <Select onValueChange={setLocation} value={location} id="country">
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countires.map((country, index) => {
                    return(
                      <SelectItem key={index} value={country}>{country}</SelectItem>
                    )
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows={3} placeholder="Tell us about yourself..." />
          </div>
          <Button
            onClick={() => handleSubmit()}
            className="w-full bg-[#5D4FC4] text-white hover:bg-[#4d3fb0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Save Changes
          </Button>
        </form>
      </div>
    </div>

        <h1 className='flex justify-center font-black uppercase mt-96 items-center text-[32px] text-[#0A453A]'>More features will be added soon...</h1>

       
    </div>
  )
}

export default page