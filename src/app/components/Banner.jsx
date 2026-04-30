import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="
      relative w-[90%] mx-auto mt-10 overflow-hidden
      h-[300px] sm:h-[400px] md:h-[550px]
      shadow-2xl shadow-black/50

      rounded-none md:rounded-2xl
      "
      style={{
        backgroundImage: "url('/images/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Learn Anytime, Anywhere
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg opacity-90">
          Upgrade your skills with top courses
        </p>

        <Link
          href="/courses"
          className="mt-6 btn btn-primary px-6 py-2 text-sm sm:text-base"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
};

export default Banner;