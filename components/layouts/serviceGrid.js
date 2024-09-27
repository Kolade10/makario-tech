import React from 'react';
import Link from 'next/link';
import CustomCursorContainer from '../common/customCursor';
import servicesArray from '../servicesArray';

const ServiceGrid = () => {
    return (
        <CustomCursorContainer>
            <div className="grid lg:grid-flow-col max-w-full overflow-x-scroll custom-scrollbar justify-center lg:justify-start gap-y-[20px] pb-[30px] gap-[60px] m-auto">
                {servicesArray.map(service => (
                    <div key={service.id} className="grid content-between w-[300px] justify-items-center gap-[20px]">
                        <div className='h-[120px] w-[120px] grid justify-center items-center bg-[#337ab74d] hover:bg-[#337ab7] hover:text-white text-[#337ab7] rounded-[50%] duration-500 transition-all'>
                            <div dangerouslySetInnerHTML={{ __html: service.svg }} />
                        </div>
                        <p className="lg:max-w-[250px] text-[#1e1d1d] text-[18px] lg:text-[22px] leading-[40px] font-semibold text-center">{service.title}</p>
                        {/* <p className="text-[16px] text-[#61666f] text-center">{service.description}</p> */}
                        <Link href={`/service/${service.id}`} className="w-fit group grid grid-flow-col justify-start items-center hover:gap-[8px] transition-all duration-500">
                            <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                        </Link>
                    </div>
                ))}
            </div>
        </CustomCursorContainer>
    );
};

export default ServiceGrid;