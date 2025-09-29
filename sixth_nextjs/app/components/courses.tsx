"use client";

import React, { useState } from "react";
import Image from "next/image";

const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  // Sample courses and image data
  const courses = [
    "Design & Development",
    "Marketing & Sales",
    "Business Management",
    "Data Science & AI",
    "Programming & Development",
    "Cybersecurity",
    "Machine Learning",
    "Cloud Computing",
    "UI/UX Design",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
  ];

  const imageArray = [
    "/images/course1.svg",
    "/images/course2.svg",
    "/images/course3.svg",
    "/images/course4.svg",
    "/images/course5.svg",
    "/images/course6.svg",
    "/images/course7.svg",
    "/images/course8.svg",
    "/images/course9.svg",
    "/images/course10.svg",
    "/images/course11.svg",
    "/images/course12.svg",
  ];

  const toggleCourses = () => setShowAll(!showAll);

  return (
    <div className="container mx-auto px-4 py-12" id="courses">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Explore Courses by Category</h1>
        <p className="text-gray-600">
          Choose from a wide range of categories taught by industry experts.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.slice(0, showAll ? courses.length : 6).map((course, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow p-6 transform transition-transform hover:scale-105"
          >
            <div className="flex justify-center items-center mb-4">
              <Image
                src={imageArray[index]}
                alt={`Image for ${course}`}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{course}</h3>
            <p className="text-gray-500 text-center mt-2">
              50+ Courses Available
            </p>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-8 text-center">
        <button
          onClick={toggleCourses}
          className="px-6 py-3 bg-white text-black border-solid border-black rounded hover:bg-black hover:text-white transition"
        >
          {showAll ? "View Fewer Courses" : "View All Courses"}
        </button>
      </div>
    </div>
  );
};

export default Courses;
