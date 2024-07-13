import HeroSection from '@/components/Home/HeroSection'
import HowToAdopt from '@/components/Home/HowToAdopt'
import PetNews from '@/components/Home/PetNews'
import Pets from '@/components/Home/Pets'
import Reasons from '@/components/Home/Reasons'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Pets/>
      <HowToAdopt/>
      <PetNews/>
      <Reasons/>
    </div>
  )
}

export default page