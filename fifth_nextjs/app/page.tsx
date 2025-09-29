import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <header className="bg-[#A29875] h-auto w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-6 lg:px-14">
        <h1 className="text-[#FFFFFF] w-[439px] h-[90px] flex items-center justify-center md:justify-start font-normal text-7xl mb-4 md:mb-0">
          Hassaan
        </h1>
      </header>

      <section className='flex flex-col md:flex-col sm:flex-col lg:flex-row'>

        <div className="w-full md:w-4/5 sm-center:w-[100%]   lg:w-[89%] xl:w-[90%] flex flex-col items-center justify-center h-screen px-4 md:px-8 lg:px-8 space-y-6 md:space-y-8 lg:space-y-10">
          <h2 className="text-[#000000] w-[496px] h-[189px] text-3xl sm:text-4xl md:text-5xl sm-center:text-center lg-center:text-left  lap:text-47px font-bold text-center md:text-left leading-tight md:leading-snug">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h2>

          <p className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 text-[#787054] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left leading-relaxed lg:-ml-[100px]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>

          <button className="text-2xl bg-[#A29875] w-64 h-14 text-white rounded-lg p-2">
            Explore Now
          </button>
        </div>
        
        <div className="relative w-full flex justify-center items-center">
          <div className='relative  max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg font-medium text-xl flex justify-center'>

            <Image
              src="/Images/image.png"
              alt="Image"
              width={300}
              height={400}
              className="w-[360px] h-auto object-contain rounded-tl-[150px] rounded-br-[150px] shadow-lg hover:shadow-2xl hover:opacity-75"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
