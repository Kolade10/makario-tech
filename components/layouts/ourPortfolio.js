import Image from 'next/image';
import { useRef } from 'react';

export default function PortfolioSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="w-full py-[120px] bg-black">
        <div className='grid grid-flow-col justify-start border-[#fcfcfc47] border-y-[1px] px-[120px] '>
            <div className="max-w-[500px] grid gap-[120px] content-between py-[50px] border-[#fcfcfc47] border-r-[1px]">
                <div className='grid gap-[20px]'>
                    <p className="text-[14px] text-[#fcfcfc] tracking-[3px] font-medium ">OUR PORTFOLIO</p>
                    <p className="max-w-[580px] text-[36px] lg:text-[56px] text-[#fcfcfc] font-bold leading-[48px]">Completed Projects</p>
                    <p className="text-[#9f9f9f] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                </div>
                <div className="grid grid-flow-col justify-start gap-[10px]">
                    <svg className='cursor-pointer text-[#fcfcfc] hover:text-[#337ab7]' onClick={scrollLeft} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 256"><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"/></svg>
                    <svg className='cursor-pointer text-[#fcfcfc] hover:text-[#337ab7]' onClick={scrollRight} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 256"><path fill="currentColor" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"/></svg>
                </div>
            </div>
            <div ref={scrollRef} className="overflow-y-scroll w-full grid grid-flow-col justify-start items-center hide-scrollbar py-[50px]">
                <div className="grid gap-[30px] w-[400px]">
                    <Image
                    src='/images/cameras.png'
                    alt='project'
                    width={390}
                    height={490}
                    quality={100}
                    className='hover:scale-105 transition-all duration-500 cursor-pointer'
                    />
                    <p className="text-[#fcfcfc] text-[22px] font-semibold">Infinium Power</p>
                </div>
                <div className="grid gap-[30px] w-[400px]">
                    <Image
                    src='/images/cameras.png'
                    alt='project'
                    width={390}
                    height={490}
                    quality={100}
                    className='hover:scale-105 transition-all duration-500 cursor-pointer'
                    />
                    <p className="text-[#fcfcfc] text-[22px] font-semibold">Infinium Power</p>
                </div>
                <div className="grid gap-[30px] w-[400px]">
                    <Image
                    src='/images/cameras.png'
                    alt='project'
                    width={390}
                    height={490}
                    quality={100}
                    className='hover:scale-105 transition-all duration-500 cursor-pointer'
                    />
                    <p className="text-[#fcfcfc] text-[22px] font-semibold">Infinium Power</p>
                </div>
                <div className="grid gap-[30px] w-[400px]">
                    <Image
                    src='/images/cameras.png'
                    alt='project'
                    width={390}
                    height={490}
                    quality={100}
                    className='hover:scale-105 transition-all duration-500 cursor-pointer'
                    />
                    <p className="text-[#fcfcfc] text-[22px] font-semibold">Infinium Power</p>
                </div>
                <div className="grid gap-[30px] w-[400px]">
                    <Image
                    src='/images/cameras.png'
                    alt='project'
                    width={390}
                    height={490}
                    quality={100}
                    className='hover:scale-105 transition-all duration-500 cursor-pointer'
                    />
                    <p className="text-[#fcfcfc] text-[22px] font-semibold">Infinium Power</p>
                </div>
                <div className="grid gap-[30px] w-[400px]">
                    <Image
                    src='/images/cameras.png'
                    alt='project'
                    width={390}
                    height={490}
                    quality={100}
                    className='hover:scale-105 transition-all duration-500 cursor-pointer'
                    />
                    <p className="text-[#fcfcfc] text-[22px] font-semibold">Infinium Power</p>
                </div>
                <div className="grid gap-[30px] w-[400px]">
                    <Image
                    src='/images/cameras.png'
                    alt='project'
                    width={390}
                    height={490}
                    quality={100}
                    className='hover:scale-105 transition-all duration-500 cursor-pointer'
                    />
                    <p className="text-[#fcfcfc] text-[22px] font-semibold">Infinium Power</p>
                </div>
                
            </div>
        </div>
    </div>
  );
}
