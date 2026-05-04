"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

const CourseDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const { data: session, isPending } = useSession();

  const [course, setCourse] = useState(null);
  const [allowed, setAllowed] = useState(false);

  // prevent duplicate toast (Strict Mode safe)
  const hasRedirected = useRef(false);

  // 🔒 AUTH GUARD (PROPER FIX)
  useEffect(() => {
    if (isPending) return;

    if (!session?.user && !hasRedirected.current) {
      hasRedirected.current = true;

      toast.error("Please login to access this course 🔒");

      router.replace(`/auth/signin?redirect=/courses/${params.id}`);
      return;
    }

    if (session?.user) {
      setAllowed(true);
    }
  }, [session, isPending, router, params.id]);

  // 📦 FETCH COURSE DATA
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch("/data/courses.json");
        const data = await res.json();

        const selected = data.find(
          (item) => String(item.id) === String(params.id)
        );

        setCourse(selected);
      } catch (error) {
        console.log("Failed to load course:", error);
      }
    };

    fetchCourse();
  }, [params.id]);

  // ⏳ LOADING STATE (AUTH + SESSION)
  if (isPending || !allowed) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        Course not found
      </div>
    );
  }

  // 📚 STATIC CURRICULUM
  const curriculum = [
    {
      module: "Module 1: Introduction",
      topics: ["Course Overview", "Setup Guide", "Learning Strategy"],
    },
    {
      module: "Module 2: Core Concepts",
      topics: ["Fundamentals", "Real-world Examples", "Practice Tasks"],
    },
    {
      module: "Module 3: Final Project",
      topics: ["Project Setup", "Development", "Deployment"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4">

      <div className="max-w-6xl mx-auto space-y-8">

        {/* HERO CARD */}
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">

          <div className="bg-white rounded-2xl p-8">

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {course.title}
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {course.description}
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3 text-sm">

              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                🎓 {course.level}
              </span>

              <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                ⏱ {course.duration}
              </span>

              <span className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100">
                ⭐ {course.rating}
              </span>

              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                👨‍🏫 {course.instructor}
              </span>

              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                📂 {course.category}
              </span>

            </div>

          </div>
        </div>

        {/* CURRICULUM */}
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">

          <div className="bg-white rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Course Curriculum
            </h2>

            <div className="space-y-5">

              {curriculum.map((module, i) => (
                <div
                  key={i}
                  className="group border border-gray-200 rounded-xl p-5 bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >

                  <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
                    {module.module}
                  </h3>

                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-600"
                      >
                        <span className="text-green-500 mr-2">✔</span>
                        {topic}
                      </li>
                    ))}
                  </ul>

                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsPage;