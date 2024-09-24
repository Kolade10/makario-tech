import { useState } from 'react';
import Link from 'next/link';
import PrimartButton from '../common/primaryButton';
import Image from 'next/image';


const WhiteHeader = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return(
        <div className="bg-white w-full py-[20px]"> 
            <div className="max-w-[90%] lg:max-w-[1440px] m-auto lg:px-[120px] grid grid-flow-col justify-between items-center py-[20px]">
            <Image
            src='/images/logo.png'
            alt="logo"
            quality={100}
            width={50}
            height={50}
            />

            {/* Desktop Menu */}
            <ul className="hidden lg:grid grid-flow-col gap-[24px] items-center">
            <li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                <Link href='/'>Home</Link>
                <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                <Link href='/about'>About Us</Link>
                <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                <Link href='#'>Services</Link>
                <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                <Link href='#'>Portfolio</Link>
                <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group">
                <Link href='#'>Contact Us</Link>
                <div className="bg-[#1e1d1d] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <PrimartButton href='#'>Get a Quote</PrimartButton>
            </ul>

            {/* Mobile Menu Icon */}
            <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            >
            {menuOpen ? (
                <svg
                className="w-8 h-8 transform transition-transform duration-500 hover:rotate-360"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
            </button>

            {/* Mobile Drawer Menu */}
            <div
            className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform ${
                menuOpen ? 'translate-y-0' : '-translate-y-full'
            } transition-transform duration-500`}
            >
            <div className="flex justify-between items-center p-6">
                <Image src='/images/logo.png' alt="logo" quality={100} width={50} height={50} />
                <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
                onMouseEnter={(e) => e.target.classList.add('rotate-360')}
                onMouseLeave={(e) => e.target.classList.remove('rotate-360')}
                >
                <svg
                    className="w-8 h-8 transform transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            <ul className="grid gap-6 text-center mt-10">
                <li className="text-[#1e1d1d] text-[20px] font-semibold uppercase">
                <Link href='/' onClick={toggleMenu}>Home</Link>
                </li>
                <li className="text-[#1e1d1d] text-[20px] font-semibold uppercase">
                <Link href='/about' onClick={toggleMenu}>About Us</Link>
                </li>
                <li className="text-[#1e1d1d] text-[20px] font-semibold uppercase">
                <Link href='#' onClick={toggleMenu}>Services</Link>
                </li>
                <li className="text-[#1e1d1d] text-[20px] font-semibold uppercase">
                <Link href='#' onClick={toggleMenu}>Portfolio</Link>
                </li>
                <li className="text-[#1e1d1d] text-[20px] font-semibold uppercase">
                <Link href='#' onClick={toggleMenu}>Contact Us</Link>
                </li>
                <PrimartButton href='#'>Get a Quote</PrimartButton>
            </ul>
            </div>
        </div>
        </div>
    )
}
export default WhiteHeader