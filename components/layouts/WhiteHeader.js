import { useState } from 'react';
import Link from 'next/link';
import PrimartButton from '../common/primaryButton';
import Image from 'next/image';
import { useRouter } from 'next/router';


const WhiteHeader = ()=>{
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const isActive = (path) => router.pathname === path;
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return(
        <div className="bg-white w-full py-[20px]"> 
            <div className="max-w-[90%] lg:max-w-[1440px] m-auto lg:px-[120px] grid grid-flow-col justify-between items-center">
                <Image
                src='/images/logo.png'
                alt="logo"
                quality={100}
                width={50}
                height={50}
                />

                {/* Desktop Menu */}
                <ul className="hidden lg:grid grid-flow-col gap-[24px] items-center">
                    <li className={`text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group`}>
                        <Link href='/'>Home</Link>
                        <div className={`bg-[#1e1d1d] h-[2px] ${isActive('/') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
                    </li>
                    <li className={`text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group ${isActive('/about') ? 'active' : ''}`}>
                        <Link href='/about'>About Us</Link>
                        <div className={`bg-[#1e1d1d] h-[2px] ${isActive('/about') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
                    </li>
                    <li className={`text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group ${isActive('/service') ? 'active' : ''}`}>
                        <Link href='/service'>Services</Link>
                        <div className={`bg-[#1e1d1d] h-[2px] ${isActive('/service') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
                    </li>
                    <li className={`text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group ${isActive('/portfolio') ? 'active' : ''}`}>
                        <Link href='/portfolio'>Portfolio</Link>
                        <div className={`bg-[#1e1d1d] h-[2px] ${isActive('/portfolio') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
                    </li>
                    <li className={`text-[#1e1d1d] text-[14px] font-semibold uppercase grid gap-[3px] group ${isActive('/contact') ? 'active' : ''}`}>
                        <Link href='/contact'>Contact Us</Link>
                        <div className={`bg-[#1e1d1d] h-[2px] ${isActive('/contact') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
                    </li>
                </ul>
                <PrimartButton href='/contact' style='hidden lg:block text-white'>Get a Quote</PrimartButton>

                {/* Mobile Menu Icon */}
                <button
                className="lg:hidden text-black focus:outline-none"
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
                    <li onClick={toggleMenu} className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
                    <Link href='/'>Home</Link>
                    </li>
                    <li onClick={toggleMenu} className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
                    <Link href='/about'>About Us</Link>
                    </li>
                    <li onClick={toggleMenu} className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
                    <Link href='/service'>Services</Link>
                    </li>
                    <li onClick={toggleMenu} className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
                    <Link href='#'>Portfolio</Link>
                    </li>
                    <li onClick={toggleMenu} className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
                    <Link href='#'>Contact Us</Link>
                    </li>
                    <PrimartButton href='#' style='text-white '>Get a Quote</PrimartButton>
                </ul>
                </div>
            </div>
        </div>
    )
}
export default WhiteHeader