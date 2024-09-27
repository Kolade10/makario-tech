import Shell from '@/components/layouts/shell';
import WhiteHeader from '@/components/layouts/WhiteHeader';
import AboutHero from '@/components/layouts/aboutHero';
import React from 'react';
import Contact from '@/components/layouts/contact';
import Sponsor from '@/components/layouts/sponsor';
import AboutSection from '@/components/layouts/aboutPageSection';
import PortfolioSection from '@/components/layouts/ourPortfolio';
import GetQuote from '@/components/layouts/getQuote';
import Testimonials from '@/components/layouts/testimonials';

const About = () => {
    return (
        <Shell>
            <WhiteHeader/>
            <AboutHero>About Us</AboutHero>
            <Contact/>
            <Sponsor/>
            <AboutSection/>
            <div className="w-full py-[80px] lg:py-[120px] bg-black">
                <PortfolioSection borderColor='border-[#45484f]'/>
            </div>
            <GetQuote/>
        </Shell>
    );
};

export default About;