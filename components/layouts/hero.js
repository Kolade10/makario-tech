import PrimartButton from "../common/primaryButton";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat bg-[url('/images/hero-back.png')] ">
      <Header />
      <div className="grid gap-[24px] justify-center items-center content-center h-[600px] lg:h-[820px] pb-[40px] lg:pb-[130px]">
        <p className="text-[#ffffff] text-[18px] font-medium tracking-[2px] text-center">
          Optimize Your Savings
        </p>
        <p className="text-[#ffffff] text-[48px] lg:text-[64px] font-semibold leading-[48px] lg:leading-[60px] text-center max-w-[900px] m-auto">
          The Future of Energy: Shaping a sustainable tomorrow
        </p>
        <PrimartButton href="#" style='text-white '>Get a Quote</PrimartButton>
      </div>
    </div>
  );
};

export default Hero;
