const AboutHero = ({children}) =>{
    return(
        <div className="w-full h-[400px] grid items-center justify-center bg-[url('/images/about-hero.png')] bg-center bg-cover bg-no-repeat">
            <p className="text-[#ffffff] text-[48px] lg:text-[64px] font-semibold leading-[48px] lg:leading-[60px] text-center max-w-[900px] m-auto">{children}</p>
        </div>
    )
}
export default AboutHero