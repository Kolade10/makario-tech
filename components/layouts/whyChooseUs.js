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
        <div className=' grid gap-[30px] lg:block items-center w-full'>
            <div className='lg:float-left lg:w-[550px] justify-items-end lg:py-[200px] lg:pl-[250px] grid grid-flow-col gap-[20px] lg:lg:gap-[30px] justify-center items-center left-[15px] top-0 bottom-0'>
                <div className='lg:w-[350px] w-[90%] m-auto'>
                    <Image
                    src='/images/cameras.png'
                    alt='image'
                    quality={100}
                    width={350}
                    height={667}
                    className=' max-h-[667px] h-full'
                    />
                </div>
                <div className='lg:w-[350px]'>
                    <Image
                    src='/images/cameras.png'
                    alt='image'
                    quality={100}
                    width={350}
                    height={667}
                    className='max-h-[667px] h-full'
                    />
                </div>
            </div>
            <div className={` bg-[#337ab740] lg:h-[900px] py-[120px] lg:py-0  content-center items-center grid justify-center gap-[32px] `}>
                <div className={`grid gap-[10px] lg:gap-[20px] max-w-[90%] lg:max-w-[530px] m-auto lg:ml-[50px] transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-semibold">WHY CHOOSE US</p>
                    <p className="lg:max-w-[580px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[24px] lg:leading-[48px]">
                        {contentArray[currentIndex].title}
                    </p>
                    <p className="text-[16px] text-[#61666f]">
                        {contentArray[currentIndex].description}
                    </p>
                </div>
                <div className='w-[90%] lg:w-full m-auto'>
                    <PrimartButton href='#' style='m-0 text-white lg:ml-[50px] ml-0'>Contact Us</PrimartButton>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
