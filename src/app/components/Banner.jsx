"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Learn Anytime, Anywhere",
      subtitle: "Upgrade your skills with top courses",
      image: "/images/banner.jpg",
    },
    {
      id: 2,
      title: "Become a Web Developer 🚀",
      subtitle: "Start your coding journey today",
      image: "/images/banner2.jpg",
    },
    {
      id: 3,
      title: "Learn from Industry Experts 🎓",
      subtitle: "Get real-world skills",
      image: "/images/banner3.jpg",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mt-10">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-none md:rounded-2xl shadow-2xl shadow-black/50"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="
                relative overflow-hidden
                h-[300px] sm:h-[400px] md:h-[550px]
              "
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
           
              <div className="absolute inset-0 bg-black/50"></div>

           
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg opacity-90">
                  {slide.subtitle}
                </p>

                <Link
                  href="/courses"
                  className="mt-6 btn btn-primary px-6 py-2 text-sm sm:text-base"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;