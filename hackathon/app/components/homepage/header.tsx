import React from "react";
import Image from "next/image";

function TopHeader() {
  return (
    <>
      {/* Top Bar */}
      <div className="w-full h-[36px] bg-primary flex items-center px-4 justify-between">
        {/* Logo Section */}
        <Image
          src="./Images/homepage/logo1.svg"
          alt="logo1"
          width={24}
          height={24}
        />

        {/* Navigation Links */}
        <div className="flex items-center space-x-3 text-black text-[11px] font-medium font-helvetica">
          <p className="cursor-pointer">Find a Store</p>
          <span className="cursor-pointer">|</span>
          <p className="cursor-pointer">Help</p>
          <span className="cursor-pointer">|</span>
          <p className="cursor-pointer">Join Us</p>
          <span className="cursor-pointer">|</span>
          <p className="cursor-pointer">Sign In</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full h-[60px] flex flex-wrap items-center justify-between px-6">
        {/* Main Logo */}
        <Image
          src="./Images/homepage/logo2.svg"
          alt="logo2"
          width={58}
          height={20}
          className="cursor-pointer"
        />

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-8 text-[15px] font-medium font-helvetica">
          <li className="hover:border-b border-black cursor-pointer">New & Featured</li>
          <li className="hover:border-b border-black cursor-pointer">Men</li>
          <li className="hover:border-b border-black cursor-pointer">Women</li>
          <li className="hover:border-b border-black cursor-pointer">Kids</li>
          <li className="hover:border-b border-black cursor-pointer">Sale</li>
          <li className="text-black hover:border-b border-black cursor-pointer">SNKRS</li>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[180px] h-[40px] pl-10 pr-4 bg-[#f0f0f0] text-[#CCCCCC] text-[15px] font-medium font-helvetica focus:ring-black rounded-[20px]"
            />
            <Image
              src="./Images/homepage/search.svg"
              alt="search"
              width={16}
              height={16}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer"
            />
          </div>

          {/* Icon Section */}
          <div className="flex items-center space-x-4">
            <Image
              src="./Images/homepage/wish.svg"
              alt="wishlist"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="./Images/homepage/bag.svg"
              alt="bag"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
