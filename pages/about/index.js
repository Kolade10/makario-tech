import Shell from '@/components/layouts/shell';
import WhiteHeader from '@/components/layouts/WhiteHeader';
import AboutHero from '@/components/layouts/aboutHero';
import React from 'react';
import Contact from '@/components/layouts/contact';
import Sponsor from '@/components/layouts/sponsor';
import AboutSection from '@/components/layouts/aboutPageSection';
import PortfolioSection from '@/components/layouts/ourPortfolio';
import GetQuote from '@/components/getQuote';

const About = () => {
    return (
        <Shell>
            <WhiteHeader/>
            <AboutHero/>
            <Contact/>
            <Sponsor/>
            <AboutSection/>
            <PortfolioSection/>
            <GetQuote/>
        </Shell>
    );
};

export default About;