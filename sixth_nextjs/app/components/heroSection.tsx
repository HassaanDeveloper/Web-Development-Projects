import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center px-6 py-12">
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
          Learn new skills online with ease
        </h1>
        <p className="text-lg sm:text-xl lg:text-lg xl:text-xl text-gray-600 mb-6 max-w-lg">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="flex space-x-4">
          <button className="bg-black text-white border border-black hover:bg-white hover:text-black cursor-pointer rounded-md px-6 py-3 transition-all duration-300 ease-in-out w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-black">
            Start learning now
          </button>
          <button className="bg-white text-black border border-black hover:bg-black hover:text-white cursor-pointer rounded-md px-6 py-3 transition-all duration-300 ease-in-out w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-black">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src="/images/heroimage.svg" // Replace with your actual image path
          alt="Hero image"
          width={640}
          height={850}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
