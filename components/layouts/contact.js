import Image from "next/image"

const Contact =() =>{
    return(
        <div className="grid grid-flow-col justify-between items-center gap-[50px] content-center py-[120px] lg:px-[120px] max-w-[90%] lg:max-w-[1440px] m-auto">
            <div className="grid gap-[40px] max-w-[540px]">
                <div className="grid gap-[30px]">
                    <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-medium ">CALL US</p>
                    <p className="max-w-[580px] text-[36px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">Ready to enhance your security?</p>
                    <p className="text-[21px] text-[#1e1d1d]">Let us help you build the future today!</p>
                    <p className="text-[16px] text-[#61666f]">Contact us today to learn more about how Makario Technology Solutions can transform your home or business with cutting-edge technology. Whether you need CCTV installations, network setups, or solar power systems, we&#39;re here to provide solutions that work for you.</p>
                </div>
            </div>
            <div className="relative">
                <Image
                src='/images/cameras.png'
                alt="camera"
                quality={100}
                width={515}
                height={595}
                className="h-[595px] w-full"
                />
                <Image
                src='/images/camera2.png'
                alt="camera"
                quality={100}
                width={396}
                height={405}
                className="absolute w-[396px] bottom-[-50px] left-[-60px]"
                />
            </div>
            
        </div>
    )
}
export default Contact