import HeroSection from '@/components/Home/HeroSection'
import HowToAdopt from '@/components/Home/HowToAdopt'
import PetNews from '@/components/Home/PetNews'
import Pets from '@/components/Home/Pets'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Pets/>
      <HowToAdopt/>
      <PetNews/>
    </div>
  )
}

export default page