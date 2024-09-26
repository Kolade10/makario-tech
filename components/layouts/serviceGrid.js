import React from 'react';
import Link from 'next/link';

const ServiceGrid = () => {
    return (
        <div className="grid lg:grid-flow-col max-w-full overflow-x-scroll custom-scrollbar justify-center lg:justify-start gap-y-[20px] pb-[30px] gap-[60px] m-auto">
            <div className="grid content-between w-[300px] justify-items-center gap-[20px]">
                <div className='h-[120px] w-[120px] grid justify-center items-center bg-[#337ab74d] hover:bg-[#337ab7] hover:text-white text-[#337ab7] rounded-[50%] duration-500 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm5 10a4 4 0 1 0 8 0a4 4 0 1 0-8 0" /><path d="M19 7v7a7 7 0 0 1-14 0V7m7 7h.01" /></g></svg>
                </div>
                <p className="lg:max-w-[250px] text-[#1e1d1d] text-[18px] lg:text-[22px] leading-[40px] font-semibold text-center">CCTV and Access Control Systems</p>
                <p className="text-[16px] text-[#61666f] text-center">We provide comprehensive procurement and installation services for CCTV and access control systems for homes, offices, warehouses, and remote farms. Our systems offer remote access through the internet and local networks, ensuring security and monitoring capabilities at all times.</p>
                <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center hover:gap-[8px] transition-all duration-500">
                    <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                </Link>
            </div>
            <div className="grid content-between w-[300px] justify-items-center gap-[20px]">
                <div className='h-[120px] w-[120px] grid justify-center items-center bg-[#337ab74d] hover:bg-[#337ab7] hover:text-white text-[#337ab7] rounded-[50%] duration-500 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 32 32"><path fill="currentColor" d="M26 22a3.96 3.96 0 0 0-2.02.566L17.414 16l6.567-6.567A3.95 3.95 0 0 0 26 10a4 4 0 1 0-4-4a3.95 3.95 0 0 0 .567 2.019L16 14.586L9.434 8.02A3.96 3.96 0 0 0 10 6a4 4 0 1 0-4 4a3.96 3.96 0 0 0 2.02-.566L14.586 16l-6.567 6.567A3.95 3.95 0 0 0 6 22a4 4 0 1 0 4 4a3.95 3.95 0 0 0-.567-2.019L16 17.414l6.566 6.566A3.96 3.96 0 0 0 22 26a4 4 0 1 0 4-4m0-18a2 2 0 1 1-2 2a2 2 0 0 1 2-2M6 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2" /></svg>
                </div>
                <p className="lg:max-w-[250px] text-[#1e1d1d] text-[18px] lg:text-[22px] leading-[40px] font-semibold text-center">Networking Solutions</p>
                <p className="text-[16px] text-[#61666f] text-center">From wired and wireless networking setups to servers and routers, we handle complete office setups for PCs and laptops. Whether your organization needs small-scale solutions or complex networks, we ensure seamless connectivity and performance.</p>
                <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center hover:gap-[8px] transition-all duration-500">
                    <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                </Link>
            </div>
            <div className="grid content-between w-[300px] justify-items-center gap-[20px]">
                <div className='h-[120px] w-[120px] grid justify-center items-center bg-[#337ab74d] hover:bg-[#337ab7] hover:text-white text-[#337ab7] rounded-[50%] duration-500 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 256 256"><path fill="currentColor" d="M32 104a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m39.43-45.25a8 8 0 0 0 11.32-11.32L71.43 36.12a8 8 0 0 0-11.31 11.31ZM128 40a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v16a8 8 0 0 0 8 8m50.91 21.09a8 8 0 0 0 5.66-2.34l11.31-11.32a8 8 0 0 0-11.31-11.31l-11.32 11.31a8 8 0 0 0 5.66 13.66M192 104a8 8 0 0 0 8 8h16a8 8 0 0 0 0-16h-16a8 8 0 0 0-8 8m-104 8a8 8 0 0 0 8-8a32 32 0 0 1 64 0a8 8 0 0 0 16 0a48 48 0 0 0-96 0a8 8 0 0 0 8 8m150.91 108a8 8 0 0 1-6.91 4H24a8 8 0 0 1-7-11.94l40.69-72a8 8 0 0 1 7-4.06H191.3a8 8 0 0 1 7 4.06l40.69 72a8 8 0 0 1-.08 7.94m-52.27-68h-24.37l3.48 16h29.93Zm-37.26 16l-3.48-16h-35.8l-3.48 16Zm-46.24 16l-5.21 24h60.14l-5.21-24Zm-42.82-16h29.93l3.48-16H69.36Zm-22.61 40h43.84l5.22-24H51.28Zm180.58 0l-13.57-24h-35.49l5.22 24Z" /></svg>
                </div>
                <p className="lg:max-w-[250px] text-[#1e1d1d] text-[18px] lg:text-[22px] leading-[40px] font-semibold text-center">Solar Installations</p>
                <p className="text-[16px] text-[#61666f] text-center">Our team is skilled in the procurement, installation, and maintenance of solar power solutions for homes, offices, farms, and industries. We aim to provide reliable, cost-effective, and sustainable energy options.</p>
                <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center hover:gap-[8px] transition-all duration-500">
                    <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                </Link>
            </div>
            <div className="grid content-between w-[300px] justify-items-center gap-[20px]">
                <div className='h-[120px] w-[120px] grid justify-center items-center bg-[#337ab74d] hover:bg-[#337ab7] hover:text-white text-[#337ab7] rounded-[50%] duration-500 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 512 512"><path fill="currentColor" d="M256 41c-89.577 0-162 72.423-162 162s72.423 162 162 162s162-72.423 162-162S345.577 41 256 41m151.883 9.932l-12.248 13.19c42.18 39.167 52.373 78.107 55.332 118.46l17.951-1.316c-3.13-42.694-15.447-88.002-61.035-130.334m49.334.504l-13.16 12.279c16.636 17.828 28.995 43.23 32.785 64.402l17.719-3.172c-4.514-25.216-18.03-52.81-37.344-73.51zM256 158c27.401 0 50 22.599 50 50s-22.599 50-50 50s-50-22.599-50-50s22.599-50 50-50m0 36c-7.945 0-14 6.055-14 14s6.055 14 14 14s14-6.055 14-14s-6.055-14-14-14M61.19 219.252l-17.952 1.316c3.13 42.694 15.447 88.004 61.035 130.336l12.248-13.191c-42.18-39.168-52.373-78.108-55.332-118.461zm396.197 43.543c-13.7 0-25 11.3-25 25c0 12.561 9.5 23.097 21.638 24.764c7.8 43.445-6.374 94.946-45.025 131.992v23.86c52.635-41.742 72.756-105.706 62.557-160.083c6.52-4.534 10.83-12.074 10.83-20.533c0-13.7-11.3-25-25-25M35.314 273.719l-17.716 3.172c4.513 25.216 18.027 52.81 37.341 73.51l13.16-12.282c-16.636-17.828-28.995-43.228-32.785-64.4M137 337.965V407h238v-69.035C343.26 365.979 301.595 383 256 383s-87.26-17.021-119-45.035M121 425v68h270v-68z" /></svg>
                </div>
                <p className="lg:max-w-[250px] text-[#1e1d1d] text-[18px] lg:text-[22px] leading-[40px] font-semibold text-center">Fire alarm<br />System</p>
                <p className="text-[16px] text-[#61666f] text-center"> Safety is paramount, and we offer installation services for 2-zone and 4-zone fire alarm systems, complete with smoke detectors and sirens for homes, offices, and other facilities.</p>
                <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center hover:gap-[8px] transition-all duration-500">
                    <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                </Link>
            </div>
            <div className="grid content-between w-[300px] justify-items-center gap-[20px]">
                <div className='h-[120px] w-[120px] grid justify-center items-center bg-[#337ab74d] hover:bg-[#337ab7] hover:text-white text-[#337ab7] rounded-[50%] duration-500 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24"><path fill="currentColor" d="M6.58 2c-.07 2.616-2.05 4.596-4.596 4.596V8.01C5.45 8.081 8.136 5.394 7.994 2zM1.984 3.626v1.415C3.752 4.97 5.024 3.697 5.024 2H3.612a1.95 1.95 0 0 1-1.627 1.626m20.032 2.97c-2.546 0-4.526-1.98-4.596-4.596h-1.415c-.141 3.394 2.546 6.081 6.01 6.01zm0-1.555V3.626A1.95 1.95 0 0 1 20.389 2h-1.414c0 1.697 1.273 2.97 3.04 3.04M19 20v-8h3L12 3L2 12h3v8zM12 5.7l5 4.5V18H7v-7.8z" /></svg>
                </div>
                <p className="lg:max-w-[250px] text-[#1e1d1d] text-[18px] lg:text-[22px] leading-[40px] font-semibold text-center">Sound System</p>
                <p className="text-[16px] text-[#61666f] text-center"> Enhance your environment with high-quality sound systems tailored to your needs, whether for office spaces, entertainment areas, or event venues.</p>
                <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center hover:gap-[8px] transition-all duration-500">
                    <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                </Link>
            </div>
            <div className="grid content-between w-[300px] justify-items-center gap-[20px]">
                <div className='h-[120px] w-[120px] grid justify-center items-center bg-[#337ab74d] hover:bg-[#337ab7] hover:text-white text-[#337ab7] rounded-[50%] duration-500 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6M8 6h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zM8 9h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-2 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2" /></svg>
                </div>
                <p className="lg:max-w-[250px] text-[#1e1d1d] text-[18px] lg:text-[22px] leading-[40px] font-semibold text-center">Smart door locks and  Access Control Systems</p>
                <p className="text-[16px] text-[#61666f] text-center">We offer a range of smart door locks and time attendance systems to enhance security and convenience for residential and commercial properties.</p>
                <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center hover:gap-[8px] transition-all duration-500">
                    <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                </Link>
            </div>
            <div className="grid content-between w-[300px] justify-items-center gap-[20px]">
                <div className='h-[120px] w-[120px] grid justify-center items-center bg-[#337ab74d] hover:bg-[#337ab7] hover:text-white text-[#337ab7] rounded-[50%] duration-500 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v15h8V14h4v8h8V7L12 2zM4 20v-9.5l8-4.5 8 4.5V20h-6v-6H10v6H4z" /><path d="M10 10h4v2h-4z" /><path d="M6 12h2v2H6z" /><path d="M16 12h2v2h-2z" /><path d="M6 16h2v2H6z" /><path d="M16 16h2v2h-2z" /></svg>
                </div>
                <p className="lg:max-w-[250px] text-[#1e1d1d] text-[18px] lg:text-[22px] leading-[40px] font-semibold text-center">Residential and Commercial Solutions</p>
                <p className="text-[16px] text-[#61666f] text-center">Whether you&#39;re a homeowner looking for a basic intercom system or a business in need of a sophisticated multi-zone solution, we design, procure, and install systems that meet your needs.</p>
                <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center hover:gap-[8px] transition-all duration-500">
                    <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                </Link>
            </div>
        </div>
    );
};

export default ServiceGrid;