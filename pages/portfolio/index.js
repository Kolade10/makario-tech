import AboutHero from '@/components/layouts/aboutHero';
import Shell from '@/components/layouts/shell';
import WhiteHeader from '@/components/layouts/WhiteHeader';
import PortfolioSection from '@/components/layouts/ourPortfolio';
import React from 'react';

const Portfolio = () => {
    return (
        <Shell>
            <WhiteHeader/>
            <AboutHero>Our Portfolio</AboutHero>
            <div className="w-full py-[80px] lg:py-[120px]">
                <PortfolioSection textStyle='!text-[#1e1d1d] !border-grey-500' bodyText='!text-[#61666f] border-red-500' borderColor='!border-grey-500'/>
            </div>
        </Shell>
    );
};

export default Portfolio;