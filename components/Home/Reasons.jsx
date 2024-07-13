import React from 'react'

const Reasons = () => {
  return (
    <div className='w-full py-12'>
        <div className='conatiner mx-auto flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col text-center'>
                <h1 className='text-[32px]'>Peaceful Coexistence <br /> <span className='text-[#0A453A]'>Human & Animals</span></h1>
                <img src="/assets/adoption.png" alt="adoption" />
            </div>

            <div className='flex justify-center gap-8 items-start'>

                <div className='flex flex-col gap-8 justify-center items-start'>
                    <div className='rounded-xl border-2 p-4 w-[350px] gap-4 flex flex-col justify-center items-start'>
                        <div className='flex justify-center items-center gap-4 '>
                            <img src="/assets/vector.png" alt="" />
                            <h1 className='text-[#0A453A] text-[22px]'>Emotional relationship</h1>
                        </div>
                        <p>The emotional bond between cats and humans is deeply rooted in felines' unconditional love and companionship.</p>
                        <img className='w-[60px]' src="/assets/catcard1.png" alt="catcard" />
                    </div>

                    <div className='rounded-xl border-2 p-4 w-[350px] h-[315px] gap-4 flex flex-col justify-center items-start'>
                        <div className='flex justify-center items-center gap-4 '>
                            <img src="/assets/vector.png" alt="" />
                            <h1 className='text-[#0A453A] text-[22px]'>Communication</h1>
                        </div>
                        <p>Animals can communicate better with people in such conditions, as verbal communication is replaced by non-verbal.</p>
                        <img className='w-[60px]' src="/assets/dogcard1.png" alt="catcard" />
                    </div>
                </div>

                <div className='flex flex-col gap-8 justify-center items-center'>
                    <div className='rounded-xl border-2 p-4 w-[350px] h-[300px] gap-4 flex flex-col justify-center items-start'>
                        <div className='flex justify-center items-center gap-4 '>
                            <img src="/assets/vector.png" alt="" />
                            <h1 className='text-[#0A453A] text-[22px]'>Children and pets</h1>
                        </div>
                        <p>Pets establish emotional attachments to children, and the relationship turns out positive in terms of affective aspects, in reinforcement of the child´s personality.</p>
                        <img className='w-[60px]' src="/assets/dogcard2.png" alt="catcard" />
                    </div>

                    <div className='rounded-xl border-2 p-4 w-[350px]  gap-4 flex flex-col justify-center items-start'>
                        <div className='flex justify-center items-center gap-4 '>
                            <img src="/assets/vector.png" alt="" />
                            <h1 className='text-[#0A453A] text-[22px]'>Health</h1>
                        </div>
                        <p>Some studies suggest that owning a pet can lower blood pressure and improve heart health.</p>
                        <img className='w-[50px]' src="/assets/catacrd2.png" alt="catcard" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons