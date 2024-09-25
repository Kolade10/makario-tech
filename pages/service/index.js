import ContactForm from '@/components/layouts/contactForm';
import Purchasing from '@/components/layouts/Purchasing';
import ServiceHero from '@/components/layouts/serviceHero';
import ServiceProjectGrid from '@/components/layouts/serviceProjectGrid';
import Shell from '@/components/layouts/shell';
import Sponsor from '@/components/layouts/sponsor';
import WhatWeOffer from '@/components/layouts/whatWeOffer';
import WhiteHeader from '@/components/layouts/WhiteHeader';
import WhyChooseUs from '@/components/layouts/whyChooseUs';
import React from 'react';

const ServicePage = () => {
    return (
        <Shell>
            <WhiteHeader/>
            <ServiceHero/>
            <WhatWeOffer/>
            <WhyChooseUs/>
            <Purchasing/>
            <ServiceProjectGrid/>
            <div className='py-[120px]'>
                <Sponsor/>
            </div>
            <ContactForm/>
        </Shell>    
    );
};

export default ServicePage;