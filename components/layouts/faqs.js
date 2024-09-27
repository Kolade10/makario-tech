import Image from 'next/image';
import React, { useState } from 'react';

const faqsData = [
    {
        category: "CCTV & Access Control Systems",
        questions: [
            {
                question: "What types of CCTV systems do you offer?",
                answer: "We offer a variety of CCTV systems, including IP cameras, analog systems, PTZ (pan-tilt-zoom) cameras, and remote access-enabled cameras for homes, offices, and warehouses."
            },
            {
                question: "Can I access my CCTV footage remotely?",
                answer: "Yes, our CCTV systems come with remote access options that allow you to monitor your property via mobile apps or desktop software from anywhere in the world."
            },
            {
                question: "Do you provide maintenance for installed CCTV systems?",
                answer: "Yes, we offer ongoing maintenance services, including troubleshooting, upgrades, and periodic inspections to ensure your system functions optimally."
            },
            {
                question: "What is the difference between an access control system and a regular lock?",
                answer: "An access control system offers advanced security features such as keycard entry, biometric access, and remote management, whereas a regular lock relies on traditional keys, making it less secure and convenient."
            }
        ]
    },
    {
        category: "Networking Solutions",
        questions: [
            {
                question: "Do you set up both wired and wireless networks?",
                answer: "Yes, we specialize in the design, procurement, and installation of both wired (Ethernet) and wireless (Wi-Fi) networks for businesses and homes."
            },
            {
                question: "Can you help with setting up office PCs and laptops?",
                answer: "Absolutely! We offer complete office setup services, including installation of PCs, laptops, servers, routers, and other network equipment for organization-wide use."
            },
            {
                question: "Do you offer support for network troubleshooting?",
                answer: "Yes, our team provides network troubleshooting and support to ensure your systems remain online and functional with minimal downtime."
            },
            {
                question: "Do you install network security systems like firewalls?",
                answer: "Yes, we offer network security solutions, including firewalls, intrusion detection systems (IDS), and VPN setups to protect your network from cyber threats."
            }
        ]
    },
    {
        category: "Solar Installations",
        questions: [
            {
                question: "What type of solar systems do you install?",
                answer: "We install a range of solar solutions, including grid-tied, off-grid, and hybrid solar systems for homes, offices, farms, and industrial use."
            },
            {
                question: "Can solar systems power my entire house or office?",
                answer: "Yes, depending on your energy needs, we can design a system that powers your entire home or office, including essential appliances, lighting, and electronics."
            },
            {
                question: "Do you provide solar system maintenance?",
                answer: "Yes, we offer comprehensive maintenance services, including cleaning, inspections, and repairs to ensure your solar system operates efficiently."
            },
            {
                question: "What are the benefits of installing a solar system?",
                answer: "Solar installations reduce your dependence on the grid, lower energy costs, and provide a sustainable, renewable source of energy that can last for decades with minimal maintenance."
            }
        ]
    },
    {
        category: "Fire Alarm Systems",
        questions: [
            {
                question: "What type of fire alarm systems do you install?",
                answer: "We install 2-zone and 4-zone fire alarm systems equipped with smoke detectors, sirens, and advanced fire detection features for early warning and enhanced safety."
            },
            {
                question: "How do fire alarm zones work?",
                answer: "Fire alarm zones divide a building into different sections. When an alarm is triggered, it indicates which zone has detected smoke or fire, allowing for quicker identification and response."
            },
            {
                question: "Can fire alarm systems be integrated with other security systems?",
                answer: "Yes, we can integrate your fire alarm system with other security systems like CCTV and access control for a more comprehensive safety solution."
            },
            {
                question: "Do you offer fire alarm system testing and maintenance?",
                answer: "Yes, we provide regular testing, maintenance, and inspections to ensure your fire alarm system is fully operational and compliant with safety regulations."
            }
        ]
    },
    {
        category: "Sound Systems",
        questions: [
            {
                question: "Do you install sound systems for both commercial and residential use?",
                answer: "Yes, we provide sound system installations for various applications, including commercial offices, event spaces, and residential homes."
            },
            {
                question: "What types of sound systems do you offer?",
                answer: "We offer high-quality sound systems that can be tailored for public address systems, home theaters, conference rooms, and entertainment venues."
            },
            {
                question: "Can the sound system be integrated with other audio-visual equipment?",
                answer: "Yes, our sound systems can be integrated with projectors, screens, microphones, and other AV equipment for seamless functionality."
            },
            {
                question: "Do you provide after-installation support?",
                answer: "Yes, we offer full after-installation support, including system calibration, troubleshooting, and ongoing maintenance services."
            }
        ]
    },
    {
        category: "Smart Door Locks & Access Control",
        questions: [
            {
                question: "What are smart door locks?",
                answer: "Smart door locks are advanced locking systems that use keyless methods such as keycards, biometric fingerprint scanners, PIN codes, or mobile app controls to secure doors."
            },
            {
                question: "How do access control systems benefit my business?",
                answer: "Access control systems enhance security by limiting access to specific areas, tracking entry and exit times, and providing detailed reports of personnel movements within your facility."
            },
            {
                question: "Can I control smart door locks remotely?",
                answer: "Yes, many of our smart door locks come with mobile app integration, allowing you to control, monitor, and receive notifications about your locks remotely."
            },
            {
                question: "Do you offer both installation and maintenance services for smart locks?",
                answer: "Yes, we provide installation, configuration, and ongoing maintenance services to ensure your smart locks function efficiently."
            }
        ]
    }
];

const Faqs = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <div className='max-w-[90%] lg:max-w-[1440px] px-[120px] m-auto lg:py-[100px] py-[50px] grid gap-[100px]'>
            {faqsData.map((category, categoryIndex) => (
                <div key={categoryIndex} className={`grid grid-flow-col justify-between items-center `}>
                    <Image
                        src='/images/cameras.png'
                        alt='image'
                        width={500}
                        height={687}
                        quality={100}
                        className={`h-[500px] lg:h-[687px] object-cover w-[500px] ${categoryIndex % 2 !== 0 ? 'order-last' : ''}`}
                    />
                    <div className='grid content-start  max-w-[530px]'>
                        <div className='grid gap-[20px] pb-[60px] border-b-[1px]'>
                            <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-semibold">FAQS</p>
                            <p className="lg:max-w-[580px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[24px] lg:leading-[48px]">{category.category}</p>
                        </div>
                        {category.questions.map((q, qIndex) => (
                            <div key={qIndex} className='grid gap-[24px] pt-[24px] border-b-[1px] '>
                                <div className='grid grid-flow-col items-center justify-between cursor-pointer' onClick={() => toggleQuestion(`${categoryIndex}-${qIndex}`)}>
                                    <p className='font-bold text-[24px] text-[#1e1d1d]  max-w-[400px]'>{q.question}</p>
                                    <svg className={`transition-transform ${activeQuestion === `${categoryIndex}-${qIndex}` ? 'rotate-45' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path fill="#1e1d1d" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32" /></svg>
                                </div>
                                <p className={`text-[16px] text-[#61666f] transition-max-height duration-500 ease-in-out overflow-hidden ${activeQuestion === `${categoryIndex}-${qIndex}` ? 'max-h-[1000px] mb-[24px]' : 'max-h-0'}`}>{q.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faqs;
