import React from 'react'

const page = () => {
  return (
    <div className='py-12 w-full'>
        <div className='container flex-col sm:flex-row mx-auto flex justify-center items-start gap-5'>
            <div className='gap-5 flex flex-col'>
                <h1 className='text-[#0A453A] font-semibold text-[22px]'>Contact Us</h1>
                <p>Get in touch with our team by choosing what kind of our services you are looking for.</p>
                <img src="/assets/contact.png" alt="dikele kontakt" />\
                <div className='border-2 border-gray-200 p-5 text-[#41349D] rounded-xl text-start'>
                    <p>123 Main Street, Anytown,USA</p>
                    <p>+1 (555) 123-4567</p>
                    <p>FurryFriendsSupport@gmail.com</p>
                </div>
            </div>

            <div className='border-2 border-gray-200 rounded-xl p-5 '>
                <h1 className='text-[#0A453A] font-semibold text-[22px]'>Ready to help you</h1>
                <p className='text-[gray] mb-6'>You dont need to have an account to send us a contact form.</p>

                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col justify-start gap-1'>
                        <label className='text-[18px] font-semibold' htmlFor="">Name</label>
                        <input className='rounded-2xl border-2 outline-none p-2' type="text" placeholder='Your Name' />
                    </div>

                    <div className='flex flex-col justify-start gap-1'>
                        <label className='text-[18px] font-semibold' htmlFor="">Email</label>
                        <input className='rounded-2xl border-2 outline-none p-2' type="email" placeholder='Your Email' />
                    </div>

                    <div className='flex flex-col justify-start gap-1'>
                        <label className='text-[18px] font-semibold' htmlFor="">Phone</label>
                        <input className='rounded-2xl border-2 outline-none p-2' type="phone" placeholder='Your Phone' />
                    </div>

                    <div className='flex flex-col justify-start gap-1'>
                        <label className='text-[18px] font-semibold' htmlFor="">Message</label>
                        <textarea rows={10} className='rounded-2xl border-2 outline-none p-2' type="text" placeholder='Your Message' />
                    </div>
                </div>

                <button className='w-full mt-8 rounded-2xl p-2 bg-[#675BC8] text-[18px] text-[#fff]'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default page