import Image from "next/image"
import PrimartButton from "../common/primaryButton"

const Contact =() =>{
    return(
        <div className="grid grid-flow-col justify-between items-center gap-[50px] content-center py-[120px] lg:px-[120px] max-w-[90%] lg:max-w-[1440px] m-auto">
            <div className="grid gap-[40px] max-w-[540px]">
                <div className="grid gap-[30px]">
                    <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-medium ">CALL US</p>
                    <p className="max-w-[580px] text-[36px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">Ready to enhance your security?</p>
                    <p className="text-[21px] text-[#1e1d1d]">Let us help you build the future today!</p>
                    <p className="text-[16px] text-[#61666f]">Contact us today to learn more about how Makario Technology Solutions can transform your home or business with cutting-edge technology. Whether you need CCTV installations, network setups, or solar power systems, we&#39;re here to provide solutions that work for you.</p>
                    <div className="grid grid-flow-col justify-start gap-[35px] items-center">
                        <PrimartButton style='text-white '>Learn More</PrimartButton>
                        <div className="grid grid-flow-col gap-[8px] items-center">
                            <div className="p-4 rounded-[50%] bg-[#f6f9f2]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256"><path fill="currentColor" d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"/></svg>
                            </div>
                            <p className="text-[18px] text-[#1e1d1d] font-medium">0 800 555 44 33</p>
                        </div>
                    </div>
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