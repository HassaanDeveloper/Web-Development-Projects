import React from 'react'

function Achivements() {
  return (
    <>
    <h2 className='font-roboto font-bold text-3xl md:text-4xl lg:text-5xl text-center xl:text-6xl' id='achievements'>Our Achivements</h2>
    <h3 className='font-roboto text-base m-5 text-center max-w-[70%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</h3>
    <div className=' grid grid-cols-2 md:flex md:flex-row items-center justify-between'>
        <div className='flex flex-col text-center '>
            <h4 className=' text-4xl font-bold md:m-4 lg:mx-8'>+200</h4>
            <p className='text-base mt-2 text-center'> Courses</p>
        </div>
        
        <div className='flex flex-col text-center '>
            <h4 className=' text-4xl font-bold md:m-4 lg:mx-8'>50K</h4>
            <p className='text-base mt-2 text-center'> Mentors</p>
        </div>
        
        <div className='flex flex-col text-center '>
            <h4 className=' text-4xl font-bold md:m-4 lg:mx-8'>370K</h4>
            <p className='text-base mt-2 text-center'> Students</p>
        </div>
        
        <div className='flex flex-col text-center '>
            <h4 className=' text-4xl font-bold md:m-4 lg:mx-8'>100+</h4>
            <p className='text-base mt-2 text-center'> Recognition</p>
        </div>
        
        </div></>
  )
}

export default Achivements