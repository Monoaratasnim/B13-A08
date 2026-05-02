"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const TrendingCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/data/courses.json");
      const data = await res.json();

      // 📈 Get latest 3 courses (simulate trending)
      const trending = data.slice(-3).reverse();

      setCourses(trending);
    };

    fetchCourses();
  }, []);

  return (
    <div className="w-[92%] mx-auto py-12">

      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          📈 Trending Courses
        </h2>
        <p className="text-gray-500 mt-2">
          Discover what’s hot right now 🔥
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

export default TrendingCourses;