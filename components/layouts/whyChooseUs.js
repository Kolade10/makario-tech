import React, { useState, useEffect } from 'react';
import PrimartButton from '../common/primaryButton';
import Image from 'next/image';

const contentArray = [
    {
        title: "Expertise",
        description: "Our team brings years of experience in IT project management and technology deployment."
    },
    {
        title: "Quality Service",
        description: "We are committed to delivering top-notch service and ensuring customer satisfaction."
    },
    {
        title: "Nationwide Reach",
        description: "From Lagos to Abuja and beyond, our services are available across Nigeria."
    },
    {
        title: "Innovation",
        description: "We specialize in using the latest technologies to provide practical and effective solutions."
    }
];

const WhyChooseUs = () => {
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
        <div className='grid justify-items-end items-center w-full relative'>
            <div className={`w-[68%] bg-[#337ab740] h-[900px]  content-center items-center grid justify-center gap-[32px] `}>
                <div className={`grid gap-[20px] max-w-[530px] ml-[50px] transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-semibold">WHY CHOOSE US</p>
                    <p className="max-w-[580px] text-[36px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">
                        {contentArray[currentIndex].title}
                    </p>
                    <p className="text-[16px] text-[#61666f]">
                        {contentArray[currentIndex].description}
                    </p>
                </div>
                <PrimartButton href='#' style='m-0 text-white ml-[50px]'>Contact Us</PrimartButton>
            </div>
            <div className=' px-[50px] grid lg:grid-flow-col gap-[30px] justify-center items-center absolute left-[15px] top-0 bottom-0'>
                <Image
                src='/images/cameras.png'
                alt='image'
                quality={100}
                width={350}
                height={667}
                className='max-w-[350px] w-full max-h-[667px] h-full'
                />
                <Image
                src='/images/cameras.png'
                alt='image'
                quality={100}
                width={350}
                height={667}
                className='max-w-[350px] w-full max-h-[667px] h-full'
                />
            </div>
        </div>
    );
};

export default WhyChooseUs;
