import AboutHero from '@/components/layouts/aboutHero';
import ContactDetails from '@/components/layouts/contact-details';
import Shell from '@/components/layouts/shell';
import WhiteHeader from '@/components/layouts/WhiteHeader';
import React from 'react';

const ContactPage = () => {
    return (
        <Shell>
            <WhiteHeader/>
            <AboutHero>Contact</AboutHero>
            <ContactDetails/>
        </Shell>
    );
};

export default ContactPage;