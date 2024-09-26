import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceProjectGrid = () => {
    return (
        <div className='max-w-[90%] lg:max-w-[1440px] justify-center lg:px-[120px] m-auto grid lg:grid-flow-col gap-[30px]'>
            <div className='grid gap-[30px]'>
                <Link href='#' className='relative lg:w-[300px] lg:h-[300px] group'>
                    <Image
                    src='/images/camera2.png'
                    alt='image'
                    quality={100}
                    width={300}
                    height={300}
                    className='lg:w-[300px] lg:h-[300px]'
                    />
                    <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                        <p className='text-[#1e1d1d] text-[24px] font-semibold'>Kharis Crest School</p>
                        <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                    </div>
                </Link> 
                <Link href='#' className='relative lg:w-[300px] lg:h-[630px] group'>
                    <Image
                    src='/images/cameras.png'
                    alt='image'
                    quality={100}
                    width={300}
                    height={300}
                    className='lg:w-[300px] lg:h-[630px]'
                    />
                    <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                        <p className='text-[#1e1d1d] text-[24px] font-semibold'>Recon Hospital</p>
                        <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                    </div>
                </Link>
            </div>
            <div className='grid gap-[30px]'>
                <div className='grid gap-[30px] content-start lg:grid-flow-col'>
                    <Link href='#' className='relative lg:w-[630px] lg:h-[630px] group'>
                        <Image
                        src='/images/cameras.png'
                        alt='image'
                        quality={100}
                        width={300}
                        height={300}
                        className='lg:w-[630px] lg:h-[630px]'
                        />
                        <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                            <p className='text-[#1e1d1d] text-[24px] font-semibold'>5ivers Solutions Company Limited</p>
                            <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                        </div>
                    </Link>
                    <div className='grid gap-[30px]'>
                        <Link href='#' className='relative lg:w-[300px] lg:h-[300px] group'>
                            <Image
                            src='/images/camera2.png'
                            alt='image'
                            quality={100}
                            width={300}
                            height={300}
                            className='lg:w-[300px] lg:h-[300px]'
                            />
                            <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                                <p className='text-[#1e1d1d] text-[24px] font-semibold'>Wylout Group Office Outfitting Partner </p>
                                <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                            </div>
                        </Link> 
                        <Link href='#' className='relative lg:w-[300px] lg:h-[300px] group'>
                            <Image
                            src='/images/camera2.png'
                            alt='image'
                            quality={100}
                            width={300}
                            height={300}
                            className='lg:w-[300px] lg:h-[300px]'
                            />
                            <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                                <p className='text-[#1e1d1d] text-[24px] font-semibold'>Vale Finance Office Project </p>
                                <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                            </div>
                        </Link> 
                    </div>
                </div>
                <Link href='#' className='relative w-full h-[300px] group'>
                    <Image
                    src='/images/camera2.png'
                    alt='image'
                    quality={100}
                    width={300}
                    height={300}
                    className='w-full h-[300px]'
                    />
                    <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                        <p className='text-[#1e1d1d] text-[24px] font-semibold'>Private Homes &#49;Warri & Lagos&#50;  </p>
                        <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                    </div>
                </Link> 
            </div>
        </div>
    );
};

export default ServiceProjectGrid;