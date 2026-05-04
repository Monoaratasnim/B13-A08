"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const SignInPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); 

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.target);

    try {
      const res = await signIn.email({
        email: form.get("email"),
        password: form.get("password"),
      });

      console.log("LOGIN RES:", res);

      if (res?.error) {
        setError(res.error.message || "Login failed");
      } else {
     
        router.push(searchParams.get("redirect") || "/");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 px-4">

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">

      
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Your Account
        </h2>

       
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

       
        <form onSubmit={handleLogin} className="space-y-4">

      
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
            />
          </div>

      
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your password"
            />
          </div>

      
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          onClick={() => signIn.social({ provider: "google" })}
          className="w-full mt-4 border py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>

    
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-purple-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;