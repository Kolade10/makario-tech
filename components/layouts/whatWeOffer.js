import React from 'react';
import ServiceGrid from './serviceGrid';

const WhatWeOffer = () => {
    return (
        <div className='max-w-[100%] lg:px-[120px] py-[80px] lg:py-[120px] grid gap-[60px] m-auto'>
            <div className='grid gap-[20px] justify-center'>
                <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-medium text-center">WHAT WE OFFER</p>
                <p className="max-w-[580px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold text-center leading-[28px] lg:leading-[48px]">Expert consulting on green energy</p>
            </div>
            <ServiceGrid/>
        </div>
    );
};

export default WhatWeOffer;