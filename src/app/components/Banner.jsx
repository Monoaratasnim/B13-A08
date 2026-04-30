import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative h-[600px] w-full max-w-5xl mx-auto bg-cover bg-center rounded-2xl overflow-hidden mt-10"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
      }}
    >
      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Learn Anytime, Anywhere
        </h1>
        <p className="mt-4 text-lg">
          Upgrade your skills with top courses
        </p>
        <button className="btn btn-primary mt-6">
            <Link href="/courses">Explore Courses</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;