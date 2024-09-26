import Image from "next/image"

const AboutSection = () =>{
    return(
        <div className="max-w-[90%] lg:max-w-[1440px] m-auto lg:px-[120px] py-[100px] grid gap-[100px]">
            <div className="grid lg:grid-flow-col items-start content-start justify-between gap-[30px]">
                <Image
                src='/images/smart-lock.png'
                alt="smart-lock"
                quality={100}
                height={508}
                width={441}
                className="w-[90%] lg:w-[441px] m-auto"
                />
                <div className="grid gap-[30px] max-w-[560px]">
                    <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-medium ">ABOUT US</p>
                    <p className="lg:max-w-[320px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">Makario Technology Solutions Company</p>
                    <p className="text-[16px] text-[#61666f]">
                        Makario Technology Solutions Company is an IT project management firm specializing in executing IT projects using innovative, everyday technology solutions. Established in 2022, our vision is to become the preferred choice for deploying and managing cutting-edge technology. We have successfully served both private and government sectors across Nigeria, from Lagos to Abuja, and Warri. <br/> <br/>As a subsidiary of Makario Works Nigeria Limited, a software design and development company based in Lagos, our expertise spans across various industries and sectors. We take pride in delivering solutions that not only meet the needs of our clients but also exceed their expectations.
                    </p>
                    {/* <Image
                    src='/images/solar-energy.png'
                    alt="image"
                    quality={100}
                    width={535}
                    height={409}
                    className="h-[403px]"

                    /> */}
                </div>
            </div>
            <div className="grid lg:grid-flow-col justify-between gap-[24px] items-center">
                <div className="grid content-between gap-[15px]">
                    <div className="grid grid-flow-col items-start justify-between pb-[15px] border-b-[1px]">
                        <p className="lg:max-w-[320px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">Energy Efficiency</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="#1e1d1d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M8 7h9v9"/></svg>
                    </div>
                    <p className="text-[16px] text-[#61666f]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                </div>
                <div className="grid content-between gap-[15px]">
                    <div className="grid grid-flow-col items-start justify-between pb-[15px] border-b-[1px]">
                        <p className="lg:max-w-[320px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">Minimal Impact</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="#1e1d1d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M8 7h9v9"/></svg>
                    </div>
                    <p className="text-[16px] text-[#61666f]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                </div>
                <div className="grid content-between gap-[15px]">
                    <div className="grid grid-flow-col items-start justify-between pb-[15px] border-b-[1px]">
                        <p className="lg:max-w-[320px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">Low-Risk Investment</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="#1e1d1d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M8 7h9v9"/></svg>
                    </div>
                    <p className="text-[16px] text-[#61666f]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                </div>
            </div>
        </div>
    )
}
export default AboutSection
