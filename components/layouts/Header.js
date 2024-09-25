import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => router.pathname === path;

  return (
    <div className="relative z-50">
      <div className="max-w-[90%] lg:max-w-[1440px] m-auto lg:px-[120px] grid grid-flow-col justify-between items-center py-[20px]">
        {/* Logo */}
        <Image
          src='/images/logo.png'
          alt="logo"
          quality={100}
          width={50}
          height={50}
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:grid grid-flow-col gap-[24px] items-center">
          <li className={`text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group`}>
            <Link href='/'>Home</Link>
            <div className={`bg-[#fcfcfc] h-[2px] ${isActive('/') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
          </li>
          <li className={`text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group ${isActive('/about') ? 'active' : ''}`}>
            <Link href='/about'>About Us</Link>
            <div className={`bg-[#fcfcfc] h-[2px] ${isActive('/about') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
          </li>
          <li className={`text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group ${isActive('/service') ? 'active' : ''}`}>
            <Link href='/service'>Services</Link>
            <div className={`bg-[#fcfcfc] h-[2px] ${isActive('/service') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
          </li>
          <li className={`text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group ${isActive('/portfolio') ? 'active' : ''}`}>
            <Link href='/portfolio'>Portfolio</Link>
            <div className={`bg-[#fcfcfc] h-[2px] ${isActive('/portfolio') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
          </li>
          <li className={`text-[#fcfcfc] text-[14px] font-semibold uppercase grid gap-[3px] group ${isActive('/contact') ? 'active' : ''}`}>
            <Link href='/contact'>Contact Us</Link>
            <div className={`bg-[#fcfcfc] h-[2px] ${isActive('/contact') ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-500`}></div>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              className="w-8 h-8 transform transition-transform duration-500 hover:rotate-180"
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
              className="text-white focus:outline-none transform hover:rotate-180 transition-transform duration-500"
              onClick={toggleMenu}
            >
              <svg
                className="w-8 h-8"
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
            <li className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
              <Link href='/' onClick={toggleMenu}>Home</Link>
            </li>
            <li className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
              <Link href='/about' onClick={toggleMenu}>About Us</Link>
            </li>
            <li className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
              <Link href='/service' onClick={toggleMenu}>Services</Link>
            </li>
            <li className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
              <Link href='/portfolio' onClick={toggleMenu}>Portfolio</Link>
            </li>
            <li className="text-[#fcfcfc] text-[20px] font-semibold uppercase">
              <Link href='/contact' onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
