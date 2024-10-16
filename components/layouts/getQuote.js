import PrimartButton from "../common/primaryButton";

const GetQuote = () => {
  return (
    <div className="w-full py-[80px] bg-[url('/images/about-hero.png')] bg-center bg-cover bg-no-repeat relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#337ab7] opacity-80 z-0"></div>
        <div className="relative z-10 grid lg:grid-flow-col justify-between items-center max-w-[90%] lg:max-w-[1440px] m-auto lg:px-[120px] gap-[20px]">
            <p className="text-[#fcfcfc] text-[23px] lg:text-[48px] leading-[24px] lg:leading-[48px] form-bold text-center lg:text-start tracking-[-0.2px]">Energize your home with solar solutions</p>
            <PrimartButton href="/contact" style="bg-[#fcfcfc] text-[#1e1d1d] font-semibold">Request a Quote</PrimartButton>
        </div>
    </div>
  );
};

export default GetQuote;