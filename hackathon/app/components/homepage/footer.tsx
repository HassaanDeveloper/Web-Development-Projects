import Link from 'next/link';

const Footer = () => {
  return (
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
  );
};

export default Footer;
