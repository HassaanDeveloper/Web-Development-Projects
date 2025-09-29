"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Course {
  title: string;
  price: string;
  type: string;
  imageSrc: string; // New field for image source
}

const coursesData: Course[] = [
  {
    title: "Design & Development",
    price: "$99",
    type: "Programming",
    imageSrc: "/images/c1.svg",
  },
  {
    title: "Marketing & Sales",
    price: "$120",
    type: "Marketing",
    imageSrc: "/images/c2.svg",
  },
  {
    title: "Business Management",
    price: "$130",
    type: "Finance",
    imageSrc: "/images/c3.svg",
  },
  {
    title: "Data Science & AI",
    price: "$110",
    type: "Programming",
    imageSrc: "/images/c4.svg",
  },
  {
    title: "Programming & Development",
    price: "$115",
    type: "Development",
    imageSrc: "/images/c5.svg",
  },
  {
    title: "Cybersecurity",
    price: "$140",
    type: "Security",
    imageSrc: "/images/c6.svg",
  },
];

const Courses: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const coursesToDisplay = showAll ? coursesData : coursesData.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <h3 className="text-center text-2xl font-bold">Courses</h3>
      <p className="text-center text-gray-500">Explore Our Best Learning Opportunities</p>

      {/* Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {coursesToDisplay.map((course, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow p-4 flex flex-col"
          >
            <Image
              src={course.imageSrc} // Use the imageSrc field
              alt={course.title}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-500 text-sm">{course.type}</p>
            <h4 className="text-lg font-semibold">{course.title}</h4>
            <p className="text-gray-700 text-sm mb-4">
              Learn skills for your future success.
            </p>
            <div className="flex justify-between items-center mt-auto">
              <button className="text-white bg-black px-4 py-2 rounded-md">
                Enroll Now
              </button>
              <p className="text-gray-700 font-medium">{course.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-6">
        <button
          className="px-4 py-2 border bg-gray-100 hover:bg-gray-200 rounded-md"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View All Courses"}
        </button>
      </div>
    </div>
  );
};

export default Courses;
