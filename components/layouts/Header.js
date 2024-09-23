import Link from "next/link"
import PrimartButton from "../common/primaryButton"

const Header = ()=>{
    return(
        <div className="max-w-[90%] lg:max-w-[1440px] m-auto lg:px-[120px] grid grid-flow-col justify-between items-center py-[20px]">
            <p className="text-[50px] font-bold text-[#fcfcfc]">LOGO</p>
            <ul className="grid grid-flow-col gap-[24px] items-center">
                <li className="text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group">
                    <Link href='#'>Home</Link>
                    <div className="bg-[#fcfcfc] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group">
                    <Link href='#'>About Us</Link>
                    <div className="bg-[#fcfcfc] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group">
                    <Link href='#'>Services</Link>
                    <div className="bg-[#fcfcfc] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li><li className="text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group">
                    <Link href='#'>Portfolio</Link>
                    <div className="bg-[#fcfcfc] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group">
                    <Link href='#'>Contact Us</Link>
                    <div className="bg-[#fcfcfc] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <PrimartButton href='#'>Get a Quote</PrimartButton>
            </ul>
        </div>
    )
}
export default Header