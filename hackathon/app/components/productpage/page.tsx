import Link from 'next/link';
import Image from 'next/image';

function ProductPage() {
  return (
    <>
    {/* Top Bar */}
    <div className="w-full h-[36px] bg-primary flex items-center px-4 justify-between">
    {/* Logo Section */}
    <Image
      src="../Images/homepage/logo1.svg"
      alt="logo1"
      width={24}
      height={24}
    />
    </div>

    <div className='w-full h-[60px] top-[36px] bg-[#FFFFFF]'>
      <div className='w-full h-[60px] flex flex-wrap items-center justify-between px-6'>
      <Image
          src="../Images/homepage/logo2.svg"
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
              src="../Images/homepage/search.svg"
              alt="search"
              width={16}
              height={16}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer"
            />
          </div>

          {/* Icon Section */}
          <div className="flex items-center space-x-4">
            <Image
              src="../Images/homepage/wish.svg"
              alt="wishlist"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="../Images/homepage/bag.svg"
              alt="bag"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="relative w-full h-[1173px] top-[96px]">
        <div className="relative w-[1200px] h-[1125px] top-[28px] left-[120px] flex justify-center text-center">
          <Image src= '../Images/productpage/product.svg' alt= 'Product Image' width={100} height={100} className="relative w-[653px] h-[653px] top-[110px] left-[-22px]"/>
          <div className  ="relative w-[376px] h-[1041px] top-[-26px] left-[146px]">
            <h1 className='relative w-[367px] h-[96px] top-[135px] font-poppinFont font-[500px] text-[48px] leading-[48px] text-[#111111]'>Nike Air Force 1 PLT.AF.ORM</h1>

            <div className = "relative w-[374.92px] h-[413px] top-[170px] pb-[1px] gap-[2px]">
              <div className='w-[374.92px] h-[342px]'>
                <p className='relative w-[374.92px] h-[252px] font-poppinFont font-normal text-[15px] leading-[28px] text-[#111111]'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                <div className = "relative w-[294.44px] h-[90px] pt-[12px] pr-[65.44px] pb-[24px] gap-[4px]">
                  <h4 className='relative w-[229px] h-[34px] font-poppinFont font-[500px] text-[36px] leading-[28px] text-[#111111]'>₹ 8 695.00</h4>
                </div>
              </div>
              <div className='relative w-[174px] h-[44px] rounded-[30px] pt-[7.5px] pr-[23.92px] pb-[7.5px] pl-[6px] space-x-2 bg-[#111111] flex'>
                <Image src="../Images/productpage/cart.svg" alt="Cart" width={50} height={50} className = "relative w-[22.36px] h-[21.8px] top-[3.93px] left-[13.32px]"/>
                <h5 className='relative w-[99px] h-[29px] font-poppinFont font-[500px] text-[15px] leading-[24px] text-center text-[#FFFFFF] left-[15px] pt-[2px]'>  Add To Cart</h5>
              </div>
            </div>
          </div>
        </div>
    </div>

    <footer className="bg-black text-gray-400">
      {/* Main Footer Container */}
      <div className="container mx-auto py-6 px-4">
        {/* Links Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          {/* Column 1: Find a Store */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-white">Find a Store</h3>
            <ul className="space-y-2">
              <li><Link href="/find-a-store">Find a Store</Link></li>
              <li><Link href="/become-a-member">Become a Member</Link></li>
              <li><Link href="/sign-up-for-email">Sign Up for Email</Link></li>
              <li><Link href="/send-us-feedback">Send Us Feedback</Link></li>
              <li><Link href="/student-discounts">Student Discounts</Link></li>
            </ul>
          </div>

          {/* Column 2: Get Help */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-white">Get Help</h3>
            <ul className="space-y-2">
              <li><Link href="/order-status">Order Status</Link></li>
              <li><Link href="/delivery">Delivery</Link></li>
              <li><Link href="/returns">Returns</Link></li>
              <li><Link href="/payment-options">Payment Options</Link></li>
              <li><Link href="/contact-us-inquiries">Contact Us On Nike.com Inquiries</Link></li>
              <li><Link href="/contact-us-other-inquiries">Contact Us On All Other Inquiries</Link></li>
            </ul>
          </div>

          {/* Column 3: About Nike */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-white">About Nike</h3>
            <ul className="space-y-2">
              <li><Link href="/news">News</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/investors">Investors</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-start space-x-6 mt-6">
          <Link href="https://twitter.com/nike" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">Twitter</a>
          </Link>
          <Link href="https://facebook.com/nike" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">Facebook</a>
          </Link>
          <Link href="https://youtube.com/nike" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">YouTube</a>
          </Link>
          <Link href="https://instagram.com/nike" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">Instagram</a>
          </Link>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="py-4 border-t border-gray-700 text-center space-y-2 lg:flex lg:justify-between lg:items-center">
        {/* Location and Copyright */}
        <p className="text-sm">Location: India</p>
        <p className="text-sm">© 2023 Nike, Inc. All Rights Reserved</p>

        {/* Legal Links */}
        <div className="flex justify-center space-x-4">
          <Link href="/terms-of-sale">Terms of Sale</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/privacy-policy">Nike Privacy Policy</Link>
        </div>
      </div>
    </footer>
</>

);
}

export default ProductPage;
