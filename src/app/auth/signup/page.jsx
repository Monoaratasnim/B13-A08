
"use client";

import { useState } from "react";
import { signUp, signIn, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    // ✅ SAFE IMAGE HANDLING
    const image =
      photo && photo.toString().trim() !== ""
        ? photo.toString().trim()
        : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`;

    try {
      const res = await signUp.email({
        name,
        email: form.get("email"),
        password: form.get("password"),
        image,
      });

      if (res.error) {
        toast.error(res.error.message || "Signup failed!");
        return;
      }

      // 🔥 IMPORTANT FIX: remove any session after signup
      await signOut();

      toast.success("Account created successfully 🎉");

      // ✅ redirect to login page
      router.push("/auth/signin");

    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">

          {/* NAME */}
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full p-2 border rounded"
          />

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full p-2 border rounded"
          />

          {/* PHOTO */}
          <input
            name="photo"
            placeholder="Photo URL (optional)"
            className="w-full p-2 border rounded"
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border rounded pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* SUBMIT */}
          <button className="w-full bg-purple-600 text-white py-2 rounded">
            Register
          </button>
        </form>

        {/* GOOGLE LOGIN */}
        <button
          onClick={() => signIn.social({ provider: "google" })}
          className="w-full mt-4 border py-2 rounded"
        >
          Continue with Google
        </button>

        {/* LOGIN LINK */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-purple-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignUpPage;