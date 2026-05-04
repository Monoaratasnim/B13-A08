"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4">

      <div className="text-center max-w-md">

  
        <h1 className="text-7xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          404
        </h1>

       
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

       
        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>


        <div className="mt-6 flex justify-center">

          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md"
          >
            Go Home
          </button>

        </div>

      </div>

    </div>
  );
}