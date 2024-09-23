import Link from "next/link"
import PrimartButton from "../common/primaryButton"

const WhiteHeader = ()=>{
    return(
        <div className="bg-white w-full py-[20px]"> 
            <div className="max-w-[90%] lg:max-w-[1440px] m-auto lg:px-[120px] grid grid-flow-col justify-between items-center">
                <p className="text-[50px] font-bold color-black">LOGO</p>
                <ul className="grid grid-flow-col gap-[24px] items-center">
                    <li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                        <Link href='#'>Home</Link>
                        <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </li>
                    <li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                        <Link href='#'>About Us</Link>
                        <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </li>
                    <li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                        <Link href='#'>Services</Link>
                        <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </li><li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                        <Link href='#'>Portfolio</Link>
                        <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </li>
                    <li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                        <Link href='#'>Contact Us</Link>
                        <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </li>
                    <PrimartButton href='#'>Get a Quote</PrimartButton>
                </ul>
            </div>
        </div>
    )
}
export default WhiteHeader