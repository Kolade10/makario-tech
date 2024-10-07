import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    name: "Molly Brown",
    role: "Client",
    message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip lorem ipsum dolor sit amet ex ea commodo consequat upidatat et quasi.",
    avatar: "/images/molly-avatar.png"
  },
  {
    name: "Bobby Fischer",
    role: "Regular customer",
    message: "Ut enim ad minim veniam, quis lorem ipsum nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat upidatat non proident.",
    avatar: "/images/bobby-avatar.png"
  },
  {
    name: "Alice Johnson",
    role: "Customer",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/images/alice-avatar.png"
  },
  {
    name: "John Doe",
    role: "Client",
    message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatar: "/images/john-avatar.png"
  },
  {
    name: "Jane Smith",
    role: "Customer",
    message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar: "/images/jane-avatar.png"
  },
  {
    name: "Robert Brown",
    role: "Client",
    message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    avatar: "/images/robert-avatar.png"
  }
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true, // Show dots
    infinite: true, // Infinite scrolling
    speed: 500,
    slidesToShow: 2, // Show one slide at a time by default
    responsive: [
      {
        breakpoint: 1024, // screens larger than 1024px
        settings: {
          slidesToShow: 1, // Show two slides at a time
        }
      }
    ],
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide
    appendDots: dots => (
      <div className="mt-6">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${i === currentSlide ? 'bg-blue-500 scale-125' : 'bg-gray-300'
          }`}
      ></div>
    )
  };

  return (
    <div className="overflow-hidden bg-black py-[60px] md:py-[120px] justify-center content-center">
      <div className="mb-[25px] md:mb-[45px] m-auto text-center grid gap-[10px] md:gap-[20px]">
        <p className="text-[12px] md:text-[14px] text-[#fcfcfc] tracking-[3px] font-medium">Testimonials</p>
        <h2 className="text-[24px] md:text-[27px] lg:text-[56px] text-center font-bold leading-[28px] md:leading-[48px] text-[#fcfcfc]">Satisfied clients</h2>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-[20px] md:px-[60px]">
            <div className="group bg-[#1e1d1d] p-[20px] md:p-[45px] shadow-md grid gap-[20px] md:gap-[32px] min-h-[300px] md:min-h-[400px] content-between mb-[25px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-[#337ab7] transition-all duration-300" width="30" height="24" viewBox="0 0 34 24"><path fill="currentColor" d="M2.4 24h7.2l4.8-9.6V0H0v14.4h7.2zm19.2 0h7.2l4.8-9.6V0H19.2v14.4h7.2z" /></svg>
              <p className="text-[16px] md:text-[19px] text-[#fcfcfc] leading-[24px] md:leading-[28px]">{testimonial.message}</p>
              <div className="grid grid-flow-col items-center gap-[10px] md:gap-[20px] justify-start">
                <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-[#fcfcfc] grid items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-width="1.5"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><circle cx="12" cy="7" r="3" /></g></svg>
                </div>
                <div className="grid gap-[4px] md:gap-[6px]">
                  <p className="text-[13px] md:text-[15px] text-[#fcfcfc] font-semibold">{testimonial.name}</p>
                  <p className="text-[#9f9f9f] text-[13px] md:text-[15px] font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;