import React from 'react'
import Image from 'next/image';

function footer() {
  return (
    <div className='w-[1577px] h-[440px] top-[5462px] bg-black'>
        <span className='w-[1170px] h-[236px] top-[80px] left-[135px] gap-[87px]'>
            <div className='space-y-5 w-[217px] h-[188px] gap-[16px]'>
                {/* <Image src="./Images/homepage/logo.svg" alt='logo' width={118} height={24} className='w-[118px] h-[24px] text-whit'/>
             */}
             <h1 className='w-[118px] h-[24px] text-whit font-interFont font-bold text-2xl'>Exclusive</h1>
             <h2 className='font-poppinsFont text-xl font-medium w-[101px] h-[28px] text-whit'>Subscribe</h2>
             <p className='font-poppinsFont text-whit font-normal text-base w-[208px] h-[24px]'>Get 10% off your first order</p>
            </div>
        </span>
    </div>
  )
}

export default footer