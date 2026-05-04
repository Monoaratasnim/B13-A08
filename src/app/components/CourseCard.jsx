import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ course }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:-translate-y-1">

    
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

       
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

 
      <div className="p-5 flex flex-col flex-1">

   
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-[48px]">
          {course.title}
        </h2>

       
        <p className="text-sm text-gray-500 mt-1">
          👨‍🏫 {course.instructor}
        </p>

      
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            ⭐ {course.rating}
          </span>

          <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
            {course.level}
          </span>
        </div>

     
        <p className="text-xs text-gray-400 mt-2">
          ⏱ {course.duration}
        </p>

     
        <div className="mt-auto pt-5">
          <Link
            href={`/courses/${course.id}`}
             className="
      block text-center text-white py-2.5 rounded-lg font-medium
      bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600
      hover:from-purple-700 hover:via-pink-600 hover:to-indigo-700
      shadow-md hover:shadow-lg
      transition-all duration-300
      active:scale-95"
          >
            View Details →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;