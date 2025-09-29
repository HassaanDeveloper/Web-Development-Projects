import React from 'react';
import Image from 'next/image';

function AllProducts() {
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

 {/* Hero Section */}
 <section className="w-full h-[550px] bg-[#F7F7F7] flex justify-center items-center">
        <h1 className="text-[40px] font-interFont font-bold text-[#111111]">
          Explore Our Collection
        </h1>
      </section>

      {/* Products Grid */}
      <section className="w-full h-[1500px] bg-[#FFFFFF] flex justify-center items-center">
        <div className="w-[1200px] h-[1300px] grid grid-cols-4 gap-4">
          {/* Product Card 1 */}
          <div className="w-[280px] h-[420px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px]">
            <Image
              src="../Images/all-products/product1.jpg"
              alt="product1"
              width={280}
              height={280}
              className="w-full h-full object-cover rounded-t-[12px]"
            />
            <div className="p-4">
            <h2 className="text-lg font-interFont font-bold text-[#111111]">
                Nike Air Max 270
              </h2>
              <p className="text-sm font-interFont font-normal text-[#8D8D8D]">
                ₹ 12,995.00
              </p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="w-[280px] h-[420px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px]">
            <Image
              src="../Images/all-products/product2.jpg"
              alt="product2"
              width={280}
              height={280}
              className="w-full h-full object-cover rounded-t-[12px]"
            />
            <div className="p-4">
              <h2 className="text-lg font-interFont font-bold text-[#111111]">
                Nike Air Force 1
              </h2>
              <p className="text-sm font-interFont font-normal text-[#8D8D8D]">
                ₹ 9,995.00
              </p>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="w-[280px] h-[420px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px]">
            <Image
              src="../Images/all-products/product3.jpg"
              alt="product3"
              width={280}
              height={280}
              className="w-full h-full object-cover rounded-t-[12px]"
            />
            <div className="p-4">
              <h2 className="text-lg font-interFont font-bold text-[#111111]">
                Nike Jordan 1
              </h2>
              <p className="text-sm font-interFont font-normal text-[#8D8D8D]">
                ₹ 14,995
            </p>
            </div>
    </div>
    </div>
  </section>

  {/* Filter and Sorting Section */}
  <section className="w-full h-[100px] bg-[#FFFFFF] flex justify-center items-center">
    <div className="w-[1200px] h-[50px] flex justify-between items-center">
      <div className="w-[400px] h-[30px] flex items-center">
        <p className="text-sm font-interFont font-normal text-[#8D8D8D]">
          Filter by:
        </p>
        <select className="w-[100px] h-[30px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-[4px]">
          <option value="price">Price</option>
          <option value="brand">Brand</option>
          <option value="category">Category</option>
        </select>
      </div>
      <div className="w-[400px] h-[30px] flex items-center">
        <p className="text-sm font-interFont font-normal text-[#8D8D8D]">
        Sort by:
        </p>
        <select className="w-[100px] h-[30px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-[4px]">
          <option value="price">Price</option>
          <option value="brand">Brand</option>
          <option value="category">Category</option>
        </select>
      </div>
    </div>
  </section>

  {/* Footer Section */}
  <footer className="w-full h-[200px] bg-[#111111] py-2 px-4">
    <div className="flex justify-between items-center w-full max-w-[1411px] mx-auto">
      {/* Location and Copyright */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Image
            src="../Images/all-products/loc.svg"
            alt="Location Icon"
            width={7}
            height={12}
            className="w-4 h-auto"
          />
          <h4 className="text-white text-xs font-normal">Pakistan</h4>
        </div>
        <p className="text-[#8D8D8D] text-xs font-normal">
          2023 NIKE, Inc. All Rights Reserved
        </p>
      </div>

      {/* Terms Links */}
      <div className="flex space-x-4">
        <h4 className="text-[#8D8D8D] text-xs font-normal cursor-pointer hover:text-white">
          Terms of Use
        </h4>
        <h4 className="text-[#8D8D8D] text-xs font-normal cursor-pointer hover:text-white">
          Terms of Sale
        </h4>
        <h4 className="text-[#8D8D8D] text-xs font-normal cursor-pointer hover:text-white">
          Privacy Policy
        </h4>
      </div>
 {/* Social Media Icons */}
 <div className="flex space-x-4">
        <Image
          src="../Images/all-products/footer1.svg"
          alt="Footer Icon 1"
          width={45}
          height={27}
          className="w-11 h-auto"
        />
        <Image
          src="../Images/all-products/footer2.svg"
          alt="Footer Icon 2"
          width={45}
          height={27}
          className="w-11 h-auto"
        />
        <Image
          src="../Images/all-products/footer3.svg"
          alt="Footer Icon 3"
          width={45}
          height={27}
          className="w-11 h-auto"
        />
        <Image
          src="../Images/all-products/footer4.svg"
          alt="Footer Icon 4"
          width={45}
          height={27}
          className="w-11 h-auto"
        />
        <Image
          src="../Images/all-products/footer5.svg"
          alt="Footer Icon 5"
          width={45}
          height={27}
          className="w-11 h-auto"
        />
        <Image
          src="../Images/all-products/footer6.svg"
          alt="Footer Icon 6"
          width={45}
          height={27}
          className="w-11 h-auto"
        />
        <Image
          src="../Images/all-products/footer7.svg"
          alt="Footer Icon 7"
          width={45}
          height={27}
          className="w-11 h-auto"
          />
          <Image
            src="../Images/all-products/footer8.svg"
            alt="Footer Icon 8"
            width={45}
            height={27}
            className="w-11 h-auto"
          />
          <Image
            src="../Images/all-products/footer9.svg"
      alt="Footer Icon 9"
      width={45}
      height={27}
      className="w-11 h-auto"
    />
  </div>
</div>

</footer>
</>
);
}

export default AllProducts;
  