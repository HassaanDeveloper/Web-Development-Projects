import React from "react";
import Image from "next/image";

const TrustedSection = () => {
  return (
    <div className="lg:bg-grey py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-[320px] sm:w-[327px]">
          {/* Text for Large Screens */}
          <h2 className="hidden lg:block text-lg font-robotoFont text-gray-700">
            Trusted by 2000+ companies worldwide.
          </h2>
          {/* Text for Small Screens */}
          <h2 className="block lg:hidden text-lg font-robotoFont text-gray-700">
            Trusted by the world's best companies [social proof to build credibility].
            
          </h2>
        </div>

        {/* Logos Section */}
        <div className="lg:grid lg:grid-cols-6 lg:gap-[19.12px] lg:w-[880px] flex overflow-hidden relative">
          
          <div className="flex animate-scroll gap-4">
          <Image src="/images/logo1.svg" alt="Logo 1" width={100} height={50} className="flex-shrink-0" />
            <Image src="/images/logo2.svg" alt="Logo 2" width={100} height={50} className="flex-shrink-0" />
            <Image src="/images/logo3.svg" alt="Logo 3" width={100} height={50} className="flex-shrink-0" />
            <Image src="/images/logo4.svg" alt="Logo 4" width={100} height={50} className="flex-shrink-0"/>
            <Image src="/images/logo5.svg" alt="Logo 5" width={100} height={50} className="flex-shrink-0"/>
            <Image src="/images/logo6.svg" alt="Logo 6" width={100} height={50} className="flex-shrink-0"/>
            {/* Repeat Logos for seamless animation */}
            <Image src="/images/logo1.svg" alt="Logo 1" width={100} height={50} className="flex-shrink-0" />
            <Image src="/images/logo2.svg" alt="Logo 2" width={100} height={50} className="flex-shrink-0" />
            <Image src="/images/logo3.svg" alt="Logo 3" width={100} height={50} className="flex-shrink-0" />
            <Image src="/images/logo4.svg" alt="Logo 4" width={100} height={50} className="flex-shrink-0"/>
            <Image src="/images/logo5.svg" alt="Logo 5" width={100} height={50} className="flex-shrink-0"/>
            <Image src="/images/logo6.svg" alt="Logo 6" width={100} height={50} className="flex-shrink-0"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
