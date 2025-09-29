import React from 'react'
import Image from "next/image";

function header() {
  return (
    <>
    <header className='flex justify-between items-center w-full max-w-[1170px] h-[38px] mx-auto mt-[48px] gap-[148px]'>
        <div className='flex items-center gap-[190px]'>
            <Image src="./Images/homepage/logo.svg" alt='logo' width={118} height={24} className='text-2xl font-bold'/>
            <ul className='gap-[48px] flex'>
                <li className='font-poppinFont font-normal text-sm border-b border-black text-[16px]'>Home</li>
                <li className='font-poppinFont font-normal text-[16px] hover:border-b hover:border-black cursor-pointer'>Contact</li>
                <li className='font-poppinFont font-normal text-[16px] hover:border-b hover:border-black cursor-pointer'>About</li>
                <li className='font-poppinFont font-normal text-[16px] hover:border-b hover:border-black cursor-pointer'>Sign Up</li>
            </ul>
        </div>
        <div className='flex items-center gap-[24px]'>
            <div className='relative bg-lightw flex space-x-2' >

            <input type="text" placeholder='What are you looking for?' className='bg-lightw font-poppinFont text-sm rounded-[4px] pl-[20px] pt-[7px] pr-[12px] pb-[7px] gap-[10px] focus:outline-none focus:ring-2 focus:ring-black'/>
            <Image src="./Images/homepage/search.svg" alt='search here' width={16} height={16} className='top-[4px] left-[4px] cursor-pointer'/>
            </div>
            <div className='flex gap-[16px]'>
                <Image src="./Images/homepage/wish.svg" alt="wishlist" width={32} height={32} className='w-[20px] h-[17.83px] top-[7px] left-[6px] cursor-pointer'/>
                <Image src="./Images/homepage/cart.svg" alt='cart' width={32} height={32} className='w-[30px] h-[18.83px] top-[7px] left-[6px] cursor-pointer'/>
            </div>
        </div>
        
    </header>
        <div className='w-[1573px]'>
            <Image src= "./Images/homepage/line.svg" alt='line' width={1500} height={1} className='h-1 mx-auto w-full inline-block'/>
        </div>
    </>
  )
}

export default header;