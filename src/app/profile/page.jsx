"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

 
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace("/auth/signin?redirect=/profile");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session?.user) return null;

  const user = session.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">

      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 sm:p-10 border">

      
        <div className="flex flex-col sm:flex-row items-center gap-6">

          <img
            src={user.image || "/default-avatar.png"}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-200"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {user.name}
            </h1>

            <p className="text-gray-500">{user.email}</p>
          </div>

        </div>

   
        <div className="mt-8">
          <button
            onClick={() => router.push("/profile/update")}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            Update Information
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;