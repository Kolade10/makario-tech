import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#1e1d1d] w-full py-[40px]">
      <div className="max-w-[90%] text-[#fcfcfc] lg:max-w-[1440px] m-auto lg:px-[120px] grid lg:grid-flow-col items-start gap-[30px]">
        <div className="grid gap-[20px] content-start max-w-[400px]">
            <Image
            src='/images/logo.png'
            alt="logo"
            quality={100}
            width={50}
            height={50}
            />
            <p className="text-[#fcfcfc] text-[17px] font-medium">Makario Technology Solutions Company is an IT project management firm specializing in executing IT projects using innovative, everyday technology solutions. </p>
        </div>

        <div className="grid gap-[24px]">
          <p className="text-[24px] font-semibold ">Socials</p>
          <ul className="grid gap-[16px]">
            <li className="text-[17px] font-medium flex items-center gap-2">
              <Link href="#">
                <Link href='#' className="flex items-center gap-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.1 8.04 8.92v-6.3h-2.42v-2.46h2.42v-1.87c0-2.39 1.46-3.7 3.6-3.7 1.03 0 1.91.07 2.16.1v2.5h-1.48c-1.16 0-1.38.56-1.38 1.36v1.77h2.76l-.36 2.46h-2.4v6.3C18.42 20.14 22 16.46 22 12.04c0-5.52-4.48-10-10-10z"/></svg>
                  Facebook
                </Link>
              </Link>
            </li>
            <li className="text-[17px] font-medium flex items-center gap-2">
              <Link href="#">
                <Link href='#' className="flex items-center gap-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><g fill="currentColor"><path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"/></path><path d="M3 2h5v0h-5zM16 22h5v0h-5z"><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"/></path><path d="M18.5 2h3.5L22 2h-3.5z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"/></path></g></svg>
                  Twitter
                </Link>
              </Link>
            </li>
            <li className="text-[17px] font-medium flex items-center gap-2">
              <Link href="#">
                <Link href='#' className="flex items-center gap-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                  Instagram
                </Link>
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-[24px]">
          <p className="text-[24px] font-semibold ">Menu</p>
          <ul className="grid gap-[16px]">
            <li className="text-[17px] font-medium">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[17px] font-medium">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-[17px] font-medium">
              <Link href="/service">Services</Link>
            </li>
            <li className="text-[17px] font-medium">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="text-[17px] font-medium">
              <Link href="/contat">Contact Us</Link>
            </li>
            <li className="text-[17px] font-medium">
              <Link href="/faq">FAQs</Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-[24px]">
          <p className="text-[24px] font-semibold ">Contact us</p>
          <ul className="grid gap-[16px]">
            <li className="text-[17px] font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-2.4 4.25a.5.5 0 0 1 0 .7l-5.15 5.15c-.2.2-.5.2-.7 0l-5.15-5.15a.5.5 0 0 1 .7-.7L12 12.29l4.9-4.9a.5.5 0 0 1 .7 0z"/></svg>
              <Link href="#">info@example.com</Link>
            </li>
            <li className="text-[17px] font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79a15.72 15.72 0 0 0 6.57 6.57l2.2-2.2a1 1 0 0 1 1.05-.24 11.05 11.05 0 0 0 3.46.55a1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A16 16 0 0 1 2 4a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.05 11.05 0 0 0 .55 3.46 1 1 0 0 1-.25 1.05l-2.2 2.2z"/></svg>
              <Link href="#">+123 456 789</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
