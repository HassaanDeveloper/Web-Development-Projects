import React from 'react'
import Image from 'next/image';

function checkout() {
    return (
        <>
            <nav className='w-[100%] h-[72.8px] left-[43px] flex justify-between items-center'>
                <div className='w-[62px] h-[21.75px]'>
                    <Image src="../Images/checkout_page/logo.svg" alt="logo" width={62} height={21.75} className='ml-10' />
                </div>
                <div className='w-[249px] h-[24.8px] top-[24px] left-[1114px] flex justify-center space-x-8'>
                    <p className='w-[123px] h-[24px] top-[0.39px] font-interFont font-normal text-[14px] text-[#111111]'>000 800 100 9538</p>
                    <Image src="../Images/checkout_page/vector1.svg" alt='vector1' width={20} height={20} className='w-[20px] h-[20px] top-[4.8px] left-[169px]' />
                    <Image src="../Images/checkout_page/vector2.svg" alt='vector2' width={20} height={20} className='w-[20px] h-[20px] top-[2.39px] left-[229px]' />
                </div>
            </nav>
            <section className='mx-auto ml-[22%] space-y-2 w-[880px] h-[2300px] left-[289px] flex justify-between'>


                <div className='w-[440px] h-[2206] top-[70px]'>
                    <div className='w-[440px] h-[386px] pt-[20px] gap-[4px]'>
                        <h2 className='w-[379px] h-[24px] font-interFont font-medium text-[21px] leading-[24px] text-[#111111]'>How would you like to get your order?</h2>
                        <div className='w-[440px] h-[338px] pb-[24px] gap-[24px]'>
                            <div className='w-[440px] h-[208px] pt-[7px] pr-[2.39px] pb-[9px]'>
                                <p className='w-[437.61px] h-[192px] font-interFont font-normal text-[15px] leading-[24px] text-[#757575]'>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.<span className='font-interFont font-normal text-[15px] leading-[24px] border-b border-[#757575] text-[#757575]'>Learn More</span></p>
                            </div>
                            <div className='w-[440px] h-[82px] pt-[29px] pr-[307px] pb-[29px] pl-[21px] gap-[24px] border-solid border-[2px] border-[#111111] rounded-[12px] flex'>
                                <Image src="../Images/checkout_page/vector3.svg" alt="vector3" width={24} height={24} />
                                <p className='w-[64px] h-[24px] font-interFont font-medium text-[15px] leading-[24px] items-center text-[#111111]'>Deliver It</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[440px] h-[1504px]'>
                        <div className='w-[440px] h-[800px] pt-[20px] pb-[8px] gap-[28px]'>
                            <p className='w-[300px] h-[24px] font-interFont font-medium text-[21px] leading-[24px] text-[#111111]'>Enter your name and address:</p>
                            <div className='w-[440px] h-[720px]'>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-[440px] h-[56px] pl-[16px] pr-[341px] pt-[16px] pb-[16px] bg-[#FFFFFF] border-[1px] border-[#CCCCCC] text-[16px] text-[#111111] font-normal font-interFont focus:ring-black rounded-[4px] leading-[24px] placeholder:text-[#111111]"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-[440px] h-[56px] top-[88px] pl-[16px] pr-[343px] pt-[16px] pb-[16px] bg-[#FFFFFF] border-[1px] border-[#CCCCCC] text-[16px] text-[#000000] font-normal font-interFont focus:ring-black rounded-[4px] leading-[24px] placeholder:text-[#000000]"
                                />
                                <div className='w-[440px] h-[80px] top-[176px]'>

                                    <input
                                        type="text"
                                        placeholder="Address Line 1"
                                        className="w-[440px] h-[56px] pl-[16px] pr-[313px] pt-[16px] pb-[16px] bg-[#FFFFFF] border-[1px] border-[#CCCCCC] text-[16px] text-[#000000] font-normal font-interFont focus:ring-black rounded-[4px] leading-[24px] placeholder:text-[#000000]"
                                    />
                                    <p className='w-[149px] h-[24px] top-[56px] left-[16px] font-interFont font-normal text-[11px] leading-[24px] text-[#757575]'>We do not ship to P.O. boxes</p>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Address Line 2"
                                    className="w-[440px] h-[56px] top-[264px] pl-[16px] pr-[311px] pt-[16px] pb-[16px] bg-[#FFFFFF] border-[1px] border-[#CCCCCC] text-[16px] text-[#000000] font-normal font-interFont focus:ring-black rounded-[4px] leading-[24px] placeholder:text-[#000000]"
                                />
                                <input
                                    type="text"
                                    placeholder="Address Line 3"
                                    className="w-[440px] h-[56px] top-[352px] pl-[16px] pr-[310px] pt-[16px] pb-[16px] bg-[#FFFFFF] border-[1px] border-[#CCCCCC] text-[16px] text-[#000000] font-normal font-interFont focus:ring-black rounded-[4px] leading-[24px] placeholder:text-[#000000]"
                                />
                                <input
                                    type="text"
                                    placeholder="Postal Code"
                                    className="w-[211.19px] h-[56px] top-[440px] pl-[16px] pr-[103.19px] pt-[16px] pb-[16px] bg-[#FFFFFF] border-[1px] border-[#CCCCCC] text-[16px] text-[#000000] font-normal font-interFont focus:ring-black rounded-[4px] leading-[24px] placeholder:text-[#000000]"
                                />
                                <input
                                    type="text"
                                    placeholder="Locality"
                                    className="w-[211.19px] h-[56px] top-[440px] left-[228.81px] pl-[16px] pr-[136.19px] pt-[16px] pb-[16px] bg-[#FFFFFF] border-[1px] border-[#CCCCCC] text-[16px] text-[#000000] font-normal font-interFont focus:ring-black rounded-[4px] leading-[24px] placeholder:text-[#000000]"
                                />
                                <div className='flex'>
                                    <div className="w-[211px] h-[56px] top-[528px] flex items-center border border-[#CCCCCC] bg-[#FFFFFF] rounded-[4px]">
                                        {/* Input Field */}
                                        <input
                                            type="text"
                                            placeholder="State/Territory"
                                            className="w-[70%] flex-grow h-full bg-transparent text-[16px] text-[#000000] font-normal placeholder:text-[#8D8D8D] pl-4 focus:outline-none"
                                        />

                                        {/* Vector Icon */}
                                        <Image
                                            src="../Images/checkout_page/vector4.svg"
                                            alt="vector4"
                                            width={14}
                                            height={8}
                                            className="mr-4 cursor-pointer"
                                        />
                                    </div>
                                    <div className='w-[211.19px] h-[56px] top-[528px] left-[228.81px] flex items-center border border-[#CCCCCC] bg-[#FFFFFF] rounded-[4px]'>
                                        <input
                                            type="text"
                                            placeholder="Pakistan"
                                            className="w-[70%] flex-grow h-full bg-transparent text-[16px] text-[#000000] font-normal placeholder:text-[#000000] pl-4 focus:outline-none    "
                                        />
                                        <Image
                                            src="../Images/checkout_page/vector5.svg"
                                            alt="vector5"
                                            width={8}
                                            height={8}
                                            className="mr-4 cursor-pointer top-[26px] left-[187.19px]"
                                        />
                                    </div>
                                </div>
                                <div className='w-[440px] h-[104px]'>
                                    <div className='w-[440px] h-[24px] top-[3px] left-[3px] pr-[189px] pl-[32px] flex gap-2'>

                                        <Image src="../Images/checkout_page/vector6.svg" alt='vector6' width={18} height={18} className='top-[0.5] left-[0.5px]' />
                                        <p className='w-[350px] h-[24px] font-interFont font-normal text-[15px] leading-[24px] text-[#111111]'>Save this address to my profile</p>
                                    </div>
                                    <div className='w-[440px] h-[24px] top-[59px] pr-[183px] pl-[32px] flex gap-2'>
                                        <Image src="../Images/checkout_page/vector6.svg" alt='vector7' width={18} height={18} />
                                        <p className='w-[225px] h-[24px] font-interFont font-normal text-[15px] leading-[24px] text-[#111111]'>Make this my preferred address</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto p-4">
                            {/* <!-- Contact Information Section --> */}
                            <h2 className="text-lg font-medium mb-4">What's your contact information?</h2>

                            {/* <!-- Email Input --> */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-[48px] border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <p className="text-xs text-gray-500 mt-1">A confirmation email will be sent after checkout.</p>
                            </div>

                            {/* <!-- Phone Number Input --> */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full h-[48px] border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <p className="text-xs text-gray-500 mt-1">A carrier might contact you to confirm delivery.</p>
                            </div>

                            {/* <!-- PAN Section --> */}
                            <h2 className="text-lg font-medium mb-4">What's your PAN?</h2>

                            {/* <!-- PAN Input --> */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">PAN</label>
                                <input
                                    type="text"
                                    placeholder="PAN"
                                    className="w-full h-[48px] border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <p className="text-xs text-gray-500 mt-1">Enter your PAN to enable payment with UPI, Net Banking, or local card methods.</p>
                            </div>

                            {/* <!-- Save PAN Checkbox --> */}
                            <div className="flex items-center mb-6">
                                <input
                                    type="checkbox"
                                    id="save-pan"
                                    className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                                />
                                <label className="text-sm text-[#8D8D8D] ml-2">Save PAN details to Nike Profile</label>
                            </div>

                            {/* <!-- Consent Checkbox --> */}
                            <div className="w-[440px] h-[24] flex items-start mb-6">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black mt-1"
                                />
                                <label className="w-[440px] text-sm text-[#8D8D8D] ml-2 font-interFont">
                                    I have read and consent to eShopWorld processing my information in accordance with the
                                    <a href="#" className="text-black underline font-interFont">Privacy Statement</a> and
                                    <a href="#" className="text-black underline font-interFont">Cookie Policy</a>. eShopWorld is a trusted Nike partner.
                                </label>
                            </div>

                            {/* <!-- Continue Button --> */}
                            <button
                                className="w-full h-[48px] bg-gray-300 text-white rounded-[24px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black hover:bg-[#000000] hover:text-white font-interFont">
                                Continue
                            </button>
                        </div>
                        {/* <!-- Delivery Section --> */}
                        <div className="mt-8 border-t border-gray-300 pt-4">
                            <h2 className="text-lg font-medium mb-2">Delivery</h2>
                            <p className="text-sm text-gray-500">Select your preferred delivery option during checkout.</p>
                        </div>

                        {/* <!-- Shipping Section --> */}
                        <div className="mt-4 border-t border-gray-300 pt-4">
                            <h2 className="text-lg font-medium mb-2 text-[#757575]">Shipping</h2>
                            <p className="text-sm text-gray-500">Provide your shipping address in the next step.</p>
                        </div>

                        {/* <!-- Billing Section --> */}
                        <div className="mt-4 border-t border-gray-300 pt-4">
                            <h2 className="text-lg font-medium mb-2 text-[#757575]">Billing</h2>
                            <p className="text-sm text-gray-500">Add your billing information for a seamless checkout experience.</p>
                        </div>

                        {/* <!-- Payment Section --> */}
                        <div className="mt-4 border-t border-gray-300 pt-4">
                            <h2 className="text-lg font-medium mb-2 text-[#757575]">Payment</h2>
                            <p className="text-sm text-gray-500">Choose your preferred payment method on the next screen.</p>
                        </div>
                    </div>
                </div>

                <div className='w-[320px] h-[721px] top-[70px] left-[560px] bg-[#FFFFFF] space-y-2'>
                    <p className='w-[160.37px] h-[26px] top-[19px] font-interFont font-medium text-[21px] text-[#111111]'>Order Summary</p>
                    <div className='w-[320px] h-[677px] top-[44px] space-y-2'>
                        <div className='w-[320px] h-[135px] top-[12px] border-b-[1px] border-[#E5E5E5] space-y-2'>
                            <div className='w-[320.06px] h-[34px] pt-[9px] pb-[9px] gap-[180.06px] space-y-2 flex'>
                                <p className='w-[60px] h-[16px] font-interFont font-normal text-[15px] text-[#8D8D8D]'>Subtotal</p>
                                <p className='w-[80px] h-[16px] font-interFont text-[14px] text-right font-normal text-[#8D8D8D]'>₹ 20 890.00</p>
                            </div>
                            <div className='w-[320px] h-[34px] top-[34px] pt-[9px] pr-[0.42px] pb-[9px] gap-[163.58px] space-y-2 flex'>
                                <p className='w-[124px] h-[16px] font-interFont font-normal text-[15px] text-[#8D8D8D]'>Delivery/Shipping</p>
                                <p className='w-[32px] h-[16px] font-interFont font-normal text-[15px] text-right text-[#8D8D8D]'>Free</p>
                            </div>
                            <div className='w-[320px] h-[54px] border-t-[1px] border-[#E5E5E5] flex justify-between pt-[15px]'>
                                <p className='w-[36px] h-[16px] top-[19.5px] font-interFont font-medium text-[15px] text-[#111111]'>Total</p>
                                <p className='w-[84.57px] h-[19px] top-[17px] left-[235.63px] font-interFont font-medium text-[14px] text-right text-[#111111]'>₹ 20 890.00</p>
                            </div>
                        </div>
                        <h2 className='w-[316px] h-[12px] top-[165px] font-interFont font-normal text-[9px] text-[#111111] pt-[10px]'>(The total reflects the price of your order, including all duties and taxes)</h2>
                        <div className='w-[320px] h-[474px] top-[203px] pt-[20px]'>
                            <p className='w-[249px] h-[24px] font-interFont font-bold text-[15px] text-[#111111]'>Arrives Mon, 27 Mar - Wed, 12 Apr</p>
                            <div className='w-[320px] h-[208px] top-[32px] gap-[12px] flex'>
                                <Image src="../Images/checkout_page/pic1.svg" alt="pic1" width={208} height={208} className='w-[208px] h-[208px]' />
                                <div className='w-[100px] h-[178.78px]'>
                                    <p className='w-[85.53px] h-[120px] font-interFont font-normal text-[13px] text-[#111111] leading-6'>Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                                    <p className='w-[32px] h-[20px] top-[119px]font-interFont font-normal text-[13px] text-[#8D8D8D] leading-[19.6px]'>Qty 1</p>
                                    <p className='w-[37px] h-[20px] top-[138.59px]font-interFont font-normal text-[13px] text-[#8D8D8D] leading-[19.6px]'>Size L</p>
                                    <p className='w-[66px] h-[20px] top-[158.19px]font-interFont font-normal text-[13px] text-[#8D8D8D] leading-[19.6px]'>₹ 3 895.00</p>
                                </div>
                            </div>
                            <div className='w-[320px] h-[208px] top-[253px] gap-[12px] flex'>
                                <Image src="../Images/checkout_page/pic2.svg" alt="pic2" width={208} height={208} className='w-[208px] h-[208px]' />
                                <div className='w-[100px] h-[130.78px]'>
                                    <p className='w-[99.26px] h-[72px] font-interFont text-[14px] font-normal text-[#111111] leading-6'>Nike Air Max 97 SE Men's Shoes</p>
                                    <p className='w-[32px] h-[20px] top-[71px] font-interFont text-[13px] font-normal text-[#8D8D8D] leading-[19.6px]'>Qty 1</p>
                                    <p className='w-[60px] h-[20px] top-[90.59px] font-interFont text-[13px] font-normal text-[#8D8D8D] leading-[19.6px]'>Size UK 8</p>
                                    <p className='w-[72px] h-[20px] top-[110.19px]  font-interFont text-[13px] font-normal text-[#8D8D8D] leading-[19.6px]'>₹ 16 995.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <footer className="w-full top-[2500px] bg-[#111111] py-2 px-4">
                <div className="flex justify-between items-center w-full max-w-[1411px] mx-auto">
                    {/* <!-- Location and Copyright --> */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Image
                                src="../Images/checkout_page/loc.svg"
                                alt="Location Icon"
                                width={7}
                                height={12}
                                className="w-4 h-auto"
                            />
                            <h4 className="text-white text-xs font-normal">Pakistan</h4>
                        </div>
                        <p className="text-[#8D8D8D] text-xs font-normal">
                            © 2023 NIKE, Inc. All Rights Reserved
                        </p>
                    </div>

                    {/* <!-- Terms Links --> */}
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

                    {/* <!-- Social Media Icons --> */}
                    <div className="flex space-x-4">
                        <Image
                            src="../Images/checkout_page/footer1.svg"
                            alt="Footer Icon 1"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer2.svg"
                            alt="Footer Icon 2"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer3.svg"
                            alt="Footer Icon 3"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer4.svg"
                            alt="Footer Icon 4"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer5.svg"
                            alt="Footer Icon 5"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer6.svg"
                            alt="Footer Icon 6"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer7.svg"
                            alt="Footer Icon 7"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer8.svg"
                            alt="Footer Icon 8"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer9.svg"
                            alt="Footer Icon 9"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer10.svg"
                            alt="Footer Icon 10"
                            width={45}
                            height={27}
                            className="w-11 h-auto"
                        />
                        <Image
                            src="../Images/checkout_page/footer11.svg"
                            alt="Footer Icon 11"
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

export default checkout;