import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <div className=' hidden lg:flex justify-between bg-grey w-full h-14 border-b border-black'>
      <div className='ml-8 flex items-center space-x-4 text-sm text-grey'>
        <h1 className='text-black'>Phone Number: 956 742 455 678</h1>
        <span className='text-light text-lg'>|</span>
        <h1 className='text-black'>Email:info@ddsgnr.com</h1>
      </div>
<div className='flex space-x-4 mr-8 cursor-pointer'>
  <Image src="/images/facebook.svg" alt='Facebook logo' width={24} height={24}/>
  <Image src="/images/instagram.svg" alt='Instagram logo' width={24} height={24}/>
  <Image src="/images/twitter.svg" alt='Twitter logo' width={24} height={24}/>
  <Image src="/images/linkedin.svg" alt='Linkedin logo' width={24} height={24}/>


</div>
    </div>
  )
}

export default header