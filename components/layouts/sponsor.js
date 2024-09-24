import Image from "next/image";
const Sponsor = () =>{
    return(
        // <div className="grid lg:grid-flow-col justify-between items-center mt-[40px]">
            <div className="justify-center grid grid-flow-col gap-[30px] items-center">
                <Image
                src='/images/logo-dummy.svg'
                width={150}
                height={60}
                alt="makario-works"
                quality={100}
                /> 
                <Image
                src='/images/logo-dummy.svg'
                width={150}
                height={60}
                alt="makario-works"
                quality={100}
                /> 
                <Image
                src='/images/logo-dummy.svg'
                width={150}
                height={60}
                alt="makario-works"
                quality={100}
                /> 
                <Image
                src='/images/logo-dummy.svg'
                width={150}
                height={60}
                alt="makario-works"
                quality={100}
                />
            </div>
            // {/* <div className="grid lg:grid-flow-col gap-0 lg:gap-[16px] items-center">
            //     <div className="w-[100px] h-[3px] bg-[#1e1d1d] rounded-[50px]"></div>
            //     <p className="text-[36px] lg:text-[48px] text-[#1e1d1d] font-bold">Our Partners</p>

            // </div> */}
        // </div>
    )
}
export default Sponsor;