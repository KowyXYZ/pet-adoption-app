import React from 'react'

const PetNews = () => {
  return (
    <div className='w-full py-12'>
        {/* placeholder */}
        <div className='container mx-auto gap-12 flex justify-center items-center flex-col'>
            <h1 className='text-[32px]'>Pet News</h1>
            <div className='flex  flex-wrap gap-12 justify-center items-center'>
                <div className='gap-4 shadow-xl w-[300px] p-2 flex flex-col border-2 rounded-2xl pb-4'>
                    <img src="/assets/news.png" alt="card"  className='rounded-t-2xl'/>
                    <p className='text-[20px]'>Dog Breeds</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae atque accusamus eius, sed unde accusantium.</p>
                    <button className='text-[#675BC8]'>Read More</button>           
                </div>

                <div className='gap-4 shadow-xl w-[300px] p-2 flex flex-col border-2 rounded-2xl pb-4'>
                    <img src="/assets/news2.png" alt="card"  className='rounded-t-2xl'/>
                    <p className='text-[20px]'>Training Cats</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae atque accusamus eius, sed unde accusantium.</p>
                    <button className='text-[#675BC8]'>Read More</button>           
                </div>

                <div className='gap-4 shadow-xl w-[300px] p-2 flex flex-col border-2 rounded-2xl pb-4'>
                    <img src="/assets/news3.png" alt="card"  className='rounded-t-2xl'/>
                    <p className='text-[20px]'>Nutrition of Dogs </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae atque accusamus eius, sed unde accusantium.</p>
                    <button className='text-[#675BC8]'>Read More</button>           
                </div>

                <div className='gap-4 shadow-xl w-[300px] p-2 flex flex-col border-2 rounded-2xl pb-4'>
                    <img src="/assets/news4.png" alt="card"  className='rounded-t-2xl'/>
                    <p className='text-[20px]'>Cat Behavior</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae atque accusamus eius, sed unde accusantium.</p>
                    <button className='text-[#675BC8]'>Read More</button>           
                </div>

            </div>

            <h1 className='underline'>See more...</h1>
        </div>
    </div>
  )
}

export default PetNews