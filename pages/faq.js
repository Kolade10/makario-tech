import AboutHero from '@/components/layouts/aboutHero';
import ContactForm from '@/components/layouts/contactForm';
import Faqs from '@/components/layouts/faqs';
import Shell from '@/components/layouts/shell';
import WhiteHeader from '@/components/layouts/WhiteHeader';
import React from 'react';


const FAQ = () => {
    return (
        <Shell>
            <WhiteHeader/>
            <AboutHero>FAQs</AboutHero>
            <Faqs/>
            <ContactForm/>
        </Shell>
    );
};

export default FAQ;