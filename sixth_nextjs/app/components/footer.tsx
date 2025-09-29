import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <>
      <div className="w-full border-b-2 border-black bg-white py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mx-8">
          {/* Left side content */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <p className="font-semibold text-[18px] text-black">
              Subscribe to our newsletter
            </p>
            <p className="text-[14px] text-gray-600">
              Stay updated with our latest news and offers.
            </p>
          </div>

          {/* Form Section */}
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="py-2 px-4 border-2 border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-64 md:w-96"
            />
            <button className="mt-4 md:mt-0 md:ml-4 bg-black text-white px-6 py-2 rounded-sm hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
          <div className="flex justify-center">
            <img src="/images/all.png" alt="Logo" className="w-24" />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h4 className="font-semibold mb-4">Courses</h4>
            <Link href="/">Business</Link>
            <Link href="/">Development</Link>
            <Link href="/">Technology</Link>
            <Link href="/">Design</Link>
            <Link href="/">Programming</Link>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h4 className="font-semibold mb-4">Resources</h4>
            <Link href="/">Career</Link>
            <Link href="/">Resume</Link>
            <Link href="/">Learning</Link>
            <Link href="/">Interview Preparation</Link>
            <Link href="/">Jobs</Link>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h4 className="font-semibold mb-4">About Us</h4>
            <Link href="/">Contact</Link>
            <Link href="/">Help / Support</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Terms and Conditions</Link>
            <Link href="/">Partners</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-4">
        <p className="text-center mb-4 md:mb-0">
          © 2023 Ddsgnr. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Cookie Settings</Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Image width={24} height={24} alt="Facebook" src="/images/Facebook.svg" />
          <Image width={24} height={24} alt="Instagram" src="/images/Instagram.svg" />
          <Image width={24} height={24} alt="Twitter" src="/images/Twitter.svg" />
          <Image width={24} height={24} alt="LinkedIn" src="/images/LinkedIn.svg" />
        </div>
      </div>
    </>
  );
}

export default Footer;
