import React from 'react'
import Image from "next/image";

function topheader() {
    return (
        <div className='w-full h-12 bg-black text-whit flex items-center justify-between px-4'>
            {/* <div className='w-[870px] h-[24px] top-[12px] left-[450px] gap-[231px]'> */}

                <div className='flex items-center mx-auto w-[550px]'>
                    <h1 className='text-sm font-poppinFont w-[440px]'>Summer Sale for All Swim Suits And Free Express Delivery - OFF 50%!</h1>
                    <button className='font-semibold text-sm font-poppinFont border-b border-whit border-solid w-[68px]'>ShopNow</button>
                </div>
                <div className='flex items-center space-x-2 pr-7'>
                    <p className=' text-sm font-poppinFont font-normal'>English</p>
                    <Image src="./Images/homepage/vector.svg" alt='vector' width={10} height={12} className='w-[10px] h-[12px] cursor-pointer' />
            {/* </div> */}
                
            </div>
        </div>
    )
}

export default topheader;
