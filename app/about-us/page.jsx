import React from 'react'

const page = () => {
  return (
    <div className='py-12 w-full'>
        <div className='container mx-auto flex justify-center items-center gap-9 flex-col'>
            <div>
                <img src="/assets/aboutus.png" alt="tijospiseskomentare" />
            </div>

            <div className='border-2 border-gray-300 rounded-2xl p-4 text-center w-[84%]'>
                <p className='text-[#0A453A] text-[20px] font-semibold'>Our Mission</p>
                <p className='text-gray-600'>Furry-Friends is a lifesaving nonprofit bringing pets and people together.
                    We are here to create loving families.
                </p>
            </div>

            <div className='flex flex-col justify-start items-start gap-1 text-start w-[84%]'>
                <p className='text-[#0A453A] text-[18px] font-semibold'>What we Do</p>
                <p>We're a safer, more professional and ethical alternative to sites like Facebook, Preloved, Pets4Homes and Gumtree.</p>
                <p>Our platform connects potential adopters with people who need to rehome their pets, dogs and cats. This makes it easier for good people to adopt the right pet whilst maximizing the chance of pets finding their forever home.</p>
                <p>We offer a non-judgmental service to rehomers and give them full control of the process. We're also helping to reduce the number of animals going into shelters. This frees up space and resources for the pets who have been abandoned, need immediate help or specialist care.</p>
            </div>

            <div>
                <img src="/assets/aboutus2.png" alt="tijospiseskomentare" />
            </div>

            <div className='flex flex-col justify-start items-start gap-1 text-start w-[84%]'>
                <p className='text-[#0A453A] text-[18px] font-semibold'>Creating loving families through pet adoption</p>
                <p>When a family adopts a pet, everything changes for the better. There’s a connection that builds. Love fills the home. And every day after is brighter.</p>
                <p>Petco Love Adopt's purpose is to help pets in need find their forever families and spread that special breed of love to as many homes as possible.</p>
            </div>

            <div>
                <h1 className='text-[24px] font-semibold text-center justify-center items-center'>
                    <span className='text-[#0A453A]'>Furry Friends</span> <br />
                Brings happiness to your family</h1>
            </div>
            

            <div>
                <img src="/assets/aboutus3.png" alt="cet" />
            </div>
        </div>
    </div>  
  )
}

export default page