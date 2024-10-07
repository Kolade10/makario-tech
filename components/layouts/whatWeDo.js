import Link from "next/link"
import CustomCursorContainer from "../common/customCursor"
import servicesArray from "../servicesArray"
const WhatWeDo = () => {
    return (
        <div className="max-w-[90%] lg:max-w-[1440px] lg:px-[120px] m-auto grid gap-[60px] py-[40px] lg:py-[80px]">
            <div className="grid gap-[20px]">
                <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-medium ">What We Do</p>
                <div className="grid lg:grid-cols-2 justify-between gap-[20px] lg:gap-0 items-start">
                    <p className="max-w-[580px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">Proven products from the best brands</p>
                    <p className="text-[16px] text-[#61666f] max-w-[450px]">At Makario Technology Solutions, we specialize in delivering innovative IT project management services tailored to meet the unique needs of businesses and individuals across Nigeria. Our goal is to provide practical and scalable technology solutions that enhance security, connectivity, and efficiency.<br /><br /> With expertise across multiple domains, we ensure every project is executed with precision, using the latest technology to drive sustainable results.</p>
                </div>
            </div>
            <CustomCursorContainer>
                <div className="grid grid-flow-col max-w-full overflow-x-scroll custom-scrollbar justify-center lg:justify-start gap-y-[20px] pb-[30px]">
                    {servicesArray.map(service => (
                        <div key={service.id} className="grid gap-[20px] content-between w-[250px] lg:pr-[50px] lg:mr-[50px] lg:border-r-[1px]">
                            <div className="text-[#337ab7]">
                                <div dangerouslySetInnerHTML={{ __html: service.svg }} />
                            </div>
                            <p className="lg:max-w-[250px] text-[#1e1d1d] text-[18px] lg:text-[22px] leading-[40px] font-semibold">{service.title}</p>
                            <Link href={`/service/${service.id}`} className="w-fit group grid grid-flow-col justify-start items-center hover:gap-[8px] transition-all duration-500">
                                <p className="text-[14px] font-medium text-[#1e1d1d] overflow-hidden whitespace-nowrap max-w-0 transition-all duration-1000 group-hover:max-w-xs">Learn More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 9"><path fill="#1e1d1d" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="#1e1d1d" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                            </Link>
                        </div>
                    ))}

                </div>
            </CustomCursorContainer>
        </div>
    )
}
export default WhatWeDo