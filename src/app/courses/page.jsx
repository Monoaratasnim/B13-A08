"use client";

import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { Search } from "lucide-react";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // 📡 Fetch data
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/data/courses.json");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error loading courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // 🔍 Search trigger
  const handleSearch = () => {
    setQuery(search);
  };

  // 🎯 Filter logic
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-[92%] mx-auto py-10">

      {/* 📌 Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        All Courses
      </h1>

      {/* 🔍 SEARCH BAR */}
      <div className="flex justify-center mb-8">

        <div className="flex items-center gap-3 w-full max-w-md">

          {/* Input */}
          <div className="relative flex-1">

            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full pl-10 pr-3 py-2.5
                border border-gray-200
                rounded-xl
                bg-white
                shadow-sm
                focus:outline-none
                focus:ring-2 focus:ring-purple-400
                focus:shadow-md
                transition
              "
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSearch}
            className="
              px-5 py-2.5
              text-white font-medium
              rounded-xl
              shadow-md
              bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700
              hover:from-purple-700 hover:to-pink-600
              hover:shadow-lg
              active:scale-95
              transition-all duration-300
            "
          >
            Search
          </button>

        </div>
      </div>

      {/* 📦 CONTENT */}
      {loading ? (
        <p className="text-center text-gray-500">Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No courses found 😢
            </p>
          )}

        </div>
      )}

    </div>
  );
};

export default CoursesPage;