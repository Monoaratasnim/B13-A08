// "use client";

// import { useState } from "react";
// import { signUp, signIn, signOut } from "@/lib/auth-client"; 
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import toast from "react-hot-toast";

// const SignUpPage = () => {
//   const router = useRouter();
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleRegister = async (e) => {
//   e.preventDefault();

//   const form = new FormData(e.target);
//   const name = form.get("name");
//   const photo = form.get("photo");

//   // ✅ SAFE image handling
//   const image =
//     photo && photo.toString().trim() !== ""
//       ? photo.toString().trim()
//       : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`;

//   try {
//     const res = await signUp.email({
//       name,
//       email: form.get("email"),
//       password: form.get("password"),
//       image,
//     });

//     if (res.error) {
//       toast.error(res.error.message || "Signup failed!");
//       return;
//     }

//     // ❌ REMOVE THIS (important)
//     // await signOut();

//     toast.success("Account created successfully 🎉");

//     // ✅ Better flow
//     router.push("/");

//   } catch (err) {
//     console.error(err);
//     toast.error(err.message || "Something went wrong!");
//   }
// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4 py-10">

//       <div className="w-full max-w-md sm:max-w-lg bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-10">

//         <div className="text-center mb-6 sm:mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
//             Create Account
//           </h2>
//         </div>

//         <form onSubmit={handleRegister} className="space-y-4 sm:space-y-5">

//           <input name="name" required placeholder="Name" className="w-full px-4 py-2 border rounded-lg" />

//           <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />

//           <input name="photo" placeholder="Photo URL (optional)" className="w-full px-4 py-2 border rounded-lg" />

//           <div className="relative">
//             <input
//               name="password"
//               type={showPassword ? "text" : "password"}
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-lg pr-12"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2"
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </button>
//           </div>

//           <button className="w-full bg-purple-600 text-white py-2 rounded-lg">
//             Register
//           </button>
//         </form>

//         <button
//           onClick={() => signIn.social({ provider: "google" })}
//           className="w-full mt-4 border py-2 rounded-lg"
//         >
//           Continue with Google
//         </button>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link href="/auth/signin" className="text-purple-600">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;

"use client";

import { useState } from "react";
import { signUp, signIn } from "@/lib/auth-client";
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

      toast.success("Account created successfully 🎉");

      // ✅ go to login
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

          <input
            name="name"
            required
            placeholder="Name"
            className="w-full p-2 border rounded"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full p-2 border rounded"
          />

          <input
            name="photo"
            placeholder="Photo URL (optional)"
            className="w-full p-2 border rounded"
          />

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

          <button className="w-full bg-purple-600 text-white py-2 rounded">
            Register
          </button>
        </form>

        <button
          onClick={() => signIn.social({ provider: "google" })}
          className="w-full mt-4 border py-2 rounded"
        >
          Continue with Google
        </button>

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