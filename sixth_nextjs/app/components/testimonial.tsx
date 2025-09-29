"use client";
import React, { useState } from "react";

const TestimonialCard: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      designation: "Software Engineer",
      review: "This service exceeded my expectations. I would recommend it to everyone!",
      rating: 5,
      image: "/images/p1.svg", // Add the image path
    },
    {
      name: "Jane Smith",
      designation: "Product Manager",
      review: "Fantastic experience! The team was professional and delivered on time.",
      rating: 4,
      image: "/images/p2.svg", // Add the image path
    },
    {
      name: "James Brown",
      designation: "Designer",
      review: "The design was top-notch. They really understood what I was looking for.",
      rating: 5,
      image: "/images/p3.svg", // Add the image path
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  const startIndex = currentPage * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = startIndex + testimonialsPerPage >= testimonials.length;

  return (
    <div className="relative bg-[#F7F7F7] p-8" id="testimonial">
      <h2 className="text-left text-4xl ml-4 m-2 font-medium text-black">Customer Testimonials</h2>
      <p className="text-left text-xl m-4 text-black">
        See what our customers have to say about us.
      </p>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-black w-72 md:w-80 lg:w-80 rounded-sm shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s picture`}
                className="w-16 h-16 rounded-full border-2 border-gray-300"
              />
            </div>
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={i < testimonial.rating ? "black" : "gray"}
                  className="w-6 h-6"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-left text-gray-800 text-lg italic mb-6">{`"${testimonial.review}"`}</p>
            <div>
              <h3 className="text-lg font-semibold text-black">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentPage ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={isPrevDisabled}
          className={`px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={isNextDisabled}
          className={`px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
