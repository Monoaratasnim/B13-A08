"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace("/auth/signin?redirect=/profile/update");
    }

    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
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


  const handleUpdate = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/auth/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          image,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Update failed");
      }

      toast.success("Profile updated successfully ✅");

      setTimeout(() => {
        router.push("/profile");
      }, 800);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">

      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6 sm:p-10 border">

        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Update Profile
        </h1>

        {/* NAME */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* IMAGE */}
        <div className="mb-6">
          <label className="text-sm text-gray-600">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>

      </div>
    </div>
  );
};

export default UpdateProfilePage;