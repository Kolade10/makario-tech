import PrimartButton from "../common/primaryButton"
import Header from "./Header"

const Hero = () => {
    return(
        <div className="relative w-full bg-cover bg-center bg-no-repeat bg-[url('/images/hero-back.png')] ">
            <Header/>
            <div className="grid gap-[24px] justify-center py-[100px]">
                <p className="text-[#ffffff] text-[18px] font-medium tracking-[2px] text-center">Optimize Your Savings</p>
                <p className="text-[#ffffff] text-[64px] font-semibold leading-[60px] text-center max-w-[900px] m-auto">The Future of Energy: Shaping a sustainable tomorrow</p>
                <PrimartButton href='#'>
                    Get a Quote
                </PrimartButton>
            </div>
        </div>

    )
}
export default Hero