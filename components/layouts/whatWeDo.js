import Link from "next/link"

const WhatWeDo = () =>{
    return(
        <div className="max-w-[90%] lg:max-w-[1440px] lg:px-[120px] m-auto grid gap-[60px] py-[80px]">
            <div className="grid grid-cols-2 justify-between items-center">
                <div className="grid gap-[15px] max-w-[290px]">
                    <p className="text-[18px] text-[#1e1d1d] tracking-[2px] font-semibold ">What We Do</p>
                    <p className="text-[56px] text-[#1e1d1d] font-bold leading-[60px]">Proven to serve the best</p>
                </div>
                <p className="text-[16px] text-[#61666f] max-w-[450px]">At Makario Technology Solutions, we specialize in delivering innovative IT project management services tailored to meet the unique needs of businesses and individuals across Nigeria. Our goal is to provide practical and scalable technology solutions that enhance security, connectivity, and efficiency.<br/> <br/> With expertise across multiple domains, we ensure every project is executed with precision, using the latest technology to drive sustainable results.</p>
            </div>
            <div className="grid grid-cols-3 gap-y-[20px]">
                <div className="grid gap-[20px] content-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24"><g fill="none" stroke="#337ab7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm5 10a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/><path d="M19 7v7a7 7 0 0 1-14 0V7m7 7h.01"/></g></svg>
                    <p className="text-[#1e1d1d] text-[22px] leading-[40px] font-semibold">CCTV and Access  <br/>Control Systems</p>
                    <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center gap-[8px]">
                        <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
                    </Link>
                </div>
                <div className="grid gap-[20px] content-start border-x-[1px] pl-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 32 32"><path fill="#337ab7" d="M26 22a3.96 3.96 0 0 0-2.02.566L17.414 16l6.567-6.567A3.95 3.95 0 0 0 26 10a4 4 0 1 0-4-4a3.95 3.95 0 0 0 .567 2.019L16 14.586L9.434 8.02A3.96 3.96 0 0 0 10 6a4 4 0 1 0-4 4a3.96 3.96 0 0 0 2.02-.566L14.586 16l-6.567 6.567A3.95 3.95 0 0 0 6 22a4 4 0 1 0 4 4a3.95 3.95 0 0 0-.567-2.019L16 17.414l6.566 6.566A3.96 3.96 0 0 0 22 26a4 4 0 1 0 4-4m0-18a2 2 0 1 1-2 2a2 2 0 0 1 2-2M6 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"/></svg>
                    <p className="text-[#1e1d1d] text-[22px] leading-[40px] font-semibold">Networking <br/>Solutions</p>
                    <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center gap-[8px]">
                        <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
                    </Link>
                </div>
                <div className="grid gap-[20px] content-start pl-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="85px" height="75px" viewBox="0 0 512 512"><path fill="#337ab7" d="M219.615 401.84h16v88.06h-16zm219.94-271.6l21.83-13.18l-21.82-13.16l16-19.8l-25-4.88l8.25-24.12l-25.19 4l-.46-25.49l-22.28 12.29l-9.18-23.8l-16.7 19.24l-16.78-19.24l-9.22 23.8l-22.3-12.31l-.46 25.49l-25.19-4l8.25 24.12l-25 4.88l16 19.8l-21.83 13.18l21.83 13.14h33.41l29.29 76.34l12-13.76l16.74 19.24l9.17-23.76l22.3 12.31l.46-25.49l25.19 4l-8.28-24.18l25-4.88zm-254.55 46.31h-91l31 80.85h91zm108.25 0h-91l30.94 80.85h91zm-70.81 97.42h-91l30.94 80.85h91zm108.25 0h-91l30.94 80.85h91zm73.89 111.87h-262.22L50.615 146.2h262.1zm-19.69-15l-43.31-112.87l-37.28-97.42H70.785l80.47 210.27h233.68z"/></svg>
                    <p className="text-[#1e1d1d] text-[22px] leading-[40px] font-semibold">Solar <br/>Installations</p>
                    <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center gap-[8px]">
                        <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
                    </Link>
                </div>
                <div className="grid gap-[20px] content-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 512 512"><path fill="#337ab7" d="M256 41c-89.577 0-162 72.423-162 162s72.423 162 162 162s162-72.423 162-162S345.577 41 256 41m151.883 9.932l-12.248 13.19c42.18 39.167 52.373 78.107 55.332 118.46l17.951-1.316c-3.13-42.694-15.447-88.002-61.035-130.334m49.334.504l-13.16 12.279c16.636 17.828 28.995 43.23 32.785 64.402l17.719-3.172c-4.514-25.216-18.03-52.81-37.344-73.51zM256 158c27.401 0 50 22.599 50 50s-22.599 50-50 50s-50-22.599-50-50s22.599-50 50-50m0 36c-7.945 0-14 6.055-14 14s6.055 14 14 14s14-6.055 14-14s-6.055-14-14-14M61.19 219.252l-17.952 1.316c3.13 42.694 15.447 88.004 61.035 130.336l12.248-13.191c-42.18-39.168-52.373-78.108-55.332-118.461zm396.197 43.543c-13.7 0-25 11.3-25 25c0 12.561 9.5 23.097 21.638 24.764c7.8 43.445-6.374 94.946-45.025 131.992v23.86c52.635-41.742 72.756-105.706 62.557-160.083c6.52-4.534 10.83-12.074 10.83-20.533c0-13.7-11.3-25-25-25M35.314 273.719l-17.716 3.172c4.513 25.216 18.027 52.81 37.341 73.51l13.16-12.282c-16.636-17.828-28.995-43.228-32.785-64.4M137 337.965V407h238v-69.035C343.26 365.979 301.595 383 256 383s-87.26-17.021-119-45.035M121 425v68h270v-68z"/></svg>
                    <p className="text-[#1e1d1d] text-[22px] leading-[40px] font-semibold">Fire alarm<br/>System</p>
                    <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center gap-[8px]">
                        <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
                    </Link>
                </div>
                <div className="grid gap-[20px] content-start border-x-[1px] pl-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24"><path fill="#337ab7" d="M6.58 2c-.07 2.616-2.05 4.596-4.596 4.596V8.01C5.45 8.081 8.136 5.394 7.994 2zM1.984 3.626v1.415C3.752 4.97 5.024 3.697 5.024 2H3.612a1.95 1.95 0 0 1-1.627 1.626m20.032 2.97c-2.546 0-4.526-1.98-4.596-4.596h-1.415c-.141 3.394 2.546 6.081 6.01 6.01zm0-1.555V3.626A1.95 1.95 0 0 1 20.389 2h-1.414c0 1.697 1.273 2.97 3.04 3.04M19 20v-8h3L12 3L2 12h3v8zM12 5.7l5 4.5V18H7v-7.8z"/></svg>
                    <p className="text-[#1e1d1d] text-[22px] leading-[40px] font-semibold">Sound<br/>System</p>
                    <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center gap-[8px]">
                        <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
                    </Link>
                </div>
                <div className="grid gap-[20px] content-start pl-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24"><path fill="#337ab7" d="M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6M8 6h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zM8 9h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-2 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"/></svg>
                    <p className="text-[#1e1d1d] text-[22px] leading-[40px] font-semibold">Smart door locks and   <br/>Access Control Systems</p>
                    <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center gap-[8px]">
                        <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
                    </Link>
                </div>
                {/* <div className="grid gap-[20px] content-start border-r-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 15 15"><path fill="#337ab7" d="M11.8 12.5V10c.7-.1 1.2-.7 1.2-1.5S12.3 7 11.5 7S10 7.7 10 8.5c0 .7.5 1.4 1.2 1.5v2.5H7V1H2v11.5H1v.5h13v-.5zM6 10H3V9h3zm0-2H3V7h3zm0-2H3V5h3zm0-2H3V3h3z"/></svg>
                    <p className="text-[#1e1d1d] text-[22px] leading-[40px] font-semibold">Residential and   <br/>Commercial solutions</p>
                    <Link href='#' className="w-fit group grid grid-flow-col justify-start items-center gap-[8px]">
                        <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg>
                    </Link>
                </div> */}

            </div>
        </div>
    )
}
export default WhatWeDo