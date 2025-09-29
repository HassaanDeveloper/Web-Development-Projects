import React from 'react'
import { Navbar } from '@/components/Navbar'
import  Hero  from '@/components/Hero'
import Features from '@/components/Features'
import ProductShowcase from '@/components/Products'
import Testimonials from '@/components/Testimonial'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase/>
      <Testimonials />
    </div>
  )
}

export default page