import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../common/socials';

const SingleService = ({ service }) => {

    return (
        <div className='lg:h-[85vh] max-w-[90%] lg:max-w-[1440px] lg:px-[120px] lg:py-[60px] m-auto grid lg:grid-flow-col items-center justify-center gap-[30px] lg:gap-[60px] pb-[40px] lg:pb-0'>
            <Image src={`/images/${service.image}`} alt='service' quality={100} width={500} height={480} />
            <div className='grid gap-[30px] content-start'>
                <p className="max-w-[580px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">{service.title}</p>
                <p className="text-[16px] text-[#61666f] max-w-[500px]">{service.description}</p>
                <Socials/>
            </div>
        </div>
    );
};

export default SingleService;