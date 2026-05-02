"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/data/courses.json");
      const data = await res.json();

      // 🔥 Sort by rating (highest first) and take top 3
      const topCourses = data
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

      setCourses(topCourses);
    };

    fetchCourses();
  }, []);

  return (
    <div className="w-[92%] mx-auto py-12">

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          🔥 Popular Courses
        </h2>
        <p className="text-gray-500 mt-2">
          Top rated courses chosen by students
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
};

export default PopularCourses;