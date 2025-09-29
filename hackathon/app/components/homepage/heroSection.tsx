import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-primary text-black py-2">
        <p className="text-center font-bold text-lg">Hello Nike App</p>
        <p className="text-center text-sm mt-1">
          <span className="text-black">Download the app</span> to access everything Nike.{" "}
          <span className="text-black font-bold border-b border-black cursor-pointer">
            Get Your Great
          </span>
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[600px]">
        <Image
          src="/Images/homepage/image1.svg"
          alt="Nike Air Max Pulse"
          layout="fill"
          objectFit="cover"
          priority
          className="flex justify-center items-center"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="font-bold text-xl sm:text-2xl md:text-4xl tracking-wide">
            AIR MAX PULSE
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center py-12 px-4 bg-white">
        <p className="text-black uppercase tracking-wide text-sm sm:text-base font-medium">
          First Look
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium text-black my-2">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-black max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed
          to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center flex-wrap gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="py-8">
        <div className="flex justify-between items-center px-4 sm:px-8 md:px-16">
          <h2 className="font-medium text-xl md:text-2xl">Best of Air Max</h2>
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary cursor-pointer">
              <Image src="/Images/homepage/leftarrow.svg" alt="Left Arrow" width={12} height={12} />
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer">
              <Image
                src="/Images/homepage/rightarrow.svg"
                alt="Right Arrow"
                width={12}
                height={12}
              />
            </span>
          </div>
        </div>

        {/* Product Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[1, 2, 3].map((product, index) => (
            <div
              key={index}
              className="w-40 sm:w-48 md:w-56 border p-4 flex flex-col items-center text-center"
            >
              <Image
                src={`/Images/homepage/shoe${product}.svg`}
                alt={`Product ${product}`}
                width={200}
                height={200}
                objectFit="cover"
              />
              <p className="mt-4 font-bold">Product {product}</p>
              <p className="text-gray-600">$120.00</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step Into What Feels Good Section */}
      <div className="py-12 text-center bg-gray-100">
        <h1 className="font-interFont text-lg sm:text-2xl md:text-3xl font-medium">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-2 max-w-md mx-auto">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <button className="mt-4 px-6 py-3 bg-black text-white rounded-full">
          Find Your Shoe
        </button>
      </div>

      {/* The Essentials Section */}
      <div className="py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 font-interFont">The Essentials</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Shoes", "Bags", "Accessories"].map((item, index) => (
            <div
              key={index}
              className="w-40 sm:w-48 md:w-56 border p-4 flex flex-col items-center text-center"
            >
              <img
                src={`/Images/homepage/essen${index + 1}.svg`}
                alt={item}
                className="h-24 sm:h-32 md:h-40 object-cover"
              />
              <p className="mt-4 font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
