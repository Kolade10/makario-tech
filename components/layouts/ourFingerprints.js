import Image from "next/image";
import React, { useState, useEffect } from 'react';
import PrimartButton from '../common/primaryButton';

const OurFingerprints = () => {
    const contentArray = [
      {
        title: "Nationwide Reach",
        description:
          "We’ve successfully delivered projects across Nigeria, including major cities like Lagos, Abuja, and Warri.",
      },
      {
        title: "Innovative Solutions",
        description:
          "We leverage cutting-edge technology to offer practical, efficient, and scalable solutions tailored to each client's specific needs.",
      },
      {
        title: "Expert Team",
        description:
          "Our experienced professionals bring in-depth knowledge across various industries and ensure quality service delivery on every project.",
      },
      {
        title: "Comprehensive Services",
        description:
          "From procurement to installation and maintenance, we offer end-to-end solutions to meet your IT infrastructure and security needs.",
      },
      {
        title: "Customer-Centric Approach",
        description:
          "We prioritize customer satisfaction by offering customized solutions and round-the-clock support.",
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // Trigger the fade-out effect before changing content
            setFade(false);

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
                setFade(true); // Trigger fade-in after the content has changed
            }, 500); // 500ms to match the fade-out duration
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
      <div className="grid lg:grid-cols-2 gap-[20px] lg:gap-0 items-center">
        <Image
        src='/images/contact.png'
        alt="contact"
        quality={100}
        width={704}
        height={700}
        className="w-full h-[300px] lg:h-[700px]"
        />
        <div className={` content-center items-center grid justify-center gap-[32px] `}>
          <div className={`grid gap-[10px] lg:gap-[20px] max-w-[90%] lg:max-w-[530px] m-auto lg:ml-[50px] transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-semibold">OUR REACH</p>
              <p className="lg:max-w-[580px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[24px] lg:leading-[48px]">
                  {contentArray[currentIndex].title}
              </p>
              <p className="text-[16px] text-[#61666f]">
                  {contentArray[currentIndex].description}
              </p>
          </div>
          <div className='w-[90%] lg:w-full m-auto'>
              <PrimartButton href='/about' style='m-0 text-white lg:ml-[50px] ml-0'>About Us</PrimartButton>
          </div>
        </div>
      </div>
    );
  };
  
  export default OurFingerprints;
  
  {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {points.map((point, index) => (
      <div
          key={index}
          className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300"
      >
          <h3 className="text-[22px] font-semibold text-blue-600 mb-4">
          {point.title}
          </h3>
          <p className="text-[#61666f] leading-relaxed">{point.description}</p>
      </div>
      ))}
  </div> */}