import React from 'react';
import Image from 'next/image';


function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-16 border-b-2 border-black px-6 lg:px-12 lg:bg-grey lg:my-5">
      <div className='w-80'>
        <Image src="/images/all.png" alt='logo' width={120} height={50} />
      </div>
    

      <div className="relative w-20 h-16 lg:hidden">
        <Image src="/images/btn.svg" alt="Menu Icon" layout="fill" />
      </div>

      <div className='hidden lg:flex space-x-8 bg-background px-1 py-1 cursor-pointer rounded-lg'>
        <ul className='hidden lg:flex space-x-8 cursor-pointer px-6 py-2'>
          <li className='lg:border-b lg:border-black'>Home</li>
          <li className='hover:border-b hover:border-black'>Courses</li>
          <li className='hover:border-b hover:border-black'>Services</li>
          <li className='hover:border-b hover:border-black'>Achievement</li>
          <li className='hover:border-b hover:border-black'>About Us</li>
          <li className='hover:border-b hover:border-black'>Testimonial</li>
        </ul>
        <button className='border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white'>Login</button>
        <button className='bg-black border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:text-black'>Sign Up</button>
      </div>
    </nav>
  );
}


export default Navbar;
