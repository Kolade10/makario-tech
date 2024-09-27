// components/Testimonials.js

import React from "react";
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
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true, // Show dots
    infinite: true, // Infinite scrolling
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: dots => (
      <div className="mt-6">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></div>
    )
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <p className="text-sm uppercase tracking-widest mb-2">Testimonials</p>
        <h2 className="text-3xl lg:text-5xl font-bold">Satisfied clients</h2>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-800 p-8 rounded-md shadow-md">
              <p className="text-lg lg:text-xl leading-relaxed mb-6">
                {testimonial.message}
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
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
