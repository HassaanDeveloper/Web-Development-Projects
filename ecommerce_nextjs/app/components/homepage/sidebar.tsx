import React from 'react'
import Image from "next/image";

function sidebar() {
  return (
    <>
    <div className='absolute top-[192px] left-[135px] w-[218px] h-[344px] gap-[16px]'>
        <ul className='top-[192px] left-[135px] w-[218px] h-[344px] space-y-5'>
            <li className='font-poppinFont text-[16px] font-normal flex gap-[51px]'>Woman’s Fashion
                <Image src= "./Images/homepage/vector2.svg" alt='vector' width={8} height={13} className='flex'/>
            </li>
            <li className='font-poppinFont text-[16px] font-normal flex gap-[75px]'>Men’s Fashion
                <Image src= "./Images/homepage/vector2.svg" alt='vector' width={8} height={13}/>
            </li>
            <li className='font-poppinFont text-[16px] font-normal'>Electronics</li>
            <li className='font-poppinFont text-[16px] font-normal'>Home & Lifestyle</li>
            <li className='font-poppinFont text-[16px] font-normal'>Medicine</li>
            <li className='font-poppinFont text-[16px] font-normal'>Sports & Outdoor</li>
            <li className='font-poppinFont text-[16px] font-normal'>Baby’s & Toys</li>
            <li className='font-poppinFont text-[16px] font-normal'>Groceries & Pets</li>
            <li className='font-poppinFont text-[16px] font-normal'>Health & Beauty</li>
        </ul>
    </div>
    <div className='top-[147px] left-[370px] absolute h-[180px]'>

        <Image src="./Images/homepage/line2.svg" alt="line" width={3} height={180} className='h-[430px]'/>
    </div>
    <div className='absolute top-[192px] h-[300px] w-[1490px]'>
        <Image src= "./Images/homepage/image.svg" alt='image' width={800} height={300} className='w-full h-[380px] top-[92px] pl-[413px] flex justify-center items-center'/>
    </div>
    </>
  )
}

export default sidebar;