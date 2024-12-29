"use client"

import { useEffect, useState } from "react";

const Carousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Pergeseran otomatis setiap 1 detik
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Membersihkan interval
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden w-full max-w-lg mx-auto rounded-lg">
      {/* Slider */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col items-center p-6 mb-10 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="object-cover w-32 h-32 mx-auto rounded-full"
            />
            <p className="mt-6 text-lg font-semibold text-black">
              {testimonial.name}
            </p>
            <blockquote className="max-w-xl mx-auto mt-7">
              <p className="text-base lg:text-xl leading-relaxed text-black">
                "{testimonial.comment}"
              </p>
            </blockquote>
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
