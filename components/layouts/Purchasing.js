import React, { useState } from 'react';
import Link from 'next/link';

const steps = [
    {
        number: '01',
        title: 'Fill out our questionnaire',
        description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.'
    },
    {
        number: '02',
        title: 'Receive a personalized offer',
        description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.'
    },
    {
        number: '03',
        title: 'Select your financing option',
        description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.'
    }
];

const Purchasing = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='py-[80px] lg:py-[120px] max-w-[90%] lg:max-w-[1440px] lg:px-[120px] m-auto grid gap-[50px]'>
            <div className='grid gap-[20px] pb-[50px] border-b-[2px] border-black'>
                <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-medium">PURCHASING PROCESS</p>
                <p className="max-w-[580px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">Order solar panels in three steps</p>
            </div>
            <div className='grid gap-[40px]'>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className='grid lg:grid-flow-col justify-between items-center pb-[50px] border-b-[1px]'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className='grid lg:grid-flow-col gap-[60px] items-start'>
                            <p className={`text-[56px] font-bold leading-[40px] ${hoveredIndex === index ? 'text-[#3373ab]' : 'text-[#635d5d]'}`}>{step.number}</p>
                            <p className="max-w-[580px] text-[36px] lg:text-[40px] text-[#1e1d1d] font-bold leading-[48px] max-w-[350px]">{step.title}</p>
                        </div>
                        <div className='grid lg:grid-flow-col gap-[60px] items-start'>
                            <p className="text-[16px] text-[#61666f] max-w-[450px]">{step.description}</p>
                            <Link href='#' className={`w-fit p-5 bg-[#337ab740] rounded-full transform transition-transform duration-300 ${hoveredIndex === index ? '-rotate-45' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path fill="#1e1d1d" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"/></svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Purchasing;