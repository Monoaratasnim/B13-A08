"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user;

  const navLinkClass = (path) =>
    `px-3 py-2 rounded-lg transition text-sm md:text-base ${
      pathname === path
        ? "text-primary font-semibold bg-primary/10"
        : "hover:text-primary"
    }`;

  const links = (
    <>
      <li>
        <Link href="/" className={navLinkClass("/")}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/courses" className={navLinkClass("/courses")}>
          Courses
        </Link>
      </li>

      {/* ✅ Optional safety: only show profile if logged in */}
      {isLoggedIn && (
        <li>
          <Link href="/profile" className={navLinkClass("/profile")}>
            My Profile
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-base-100/70 border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden text-xl px-2">
              ☰
            </div>

            <ul className="menu menu-sm dropdown-content mt-3 w-56 p-3 shadow-xl bg-base-100 rounded-2xl">
              {links}
            </ul>
          </div>

          <Link
            href="/"
            className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            SkillSphere
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium">
            {links}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2 md:gap-3">

          {isLoggedIn ? (
            <>
              {/* ✅ SAFE IMAGE HANDLING (FIXED) */}
              <div className="avatar">
                <div className="w-9 rounded-full ring ring-primary ring-offset-2">
                  <img
                    src={
                      session?.user?.image && session.user.image !== ""
                        ? session.user.image
                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            session?.user?.name || "User"
                          )}`
                    }
                    alt="user"
                  />
                </div>
              </div>

              {/* LOGOUT */}
              <button
                onClick={async () => {
                  await signOut();
                }}
                className="btn btn-outline btn-sm rounded-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="btn btn-ghost btn-sm sm:btn-md rounded-full px-4"
              >
                Login
              </Link>

              <Link
                href="/auth/signup"
                className="btn btn-primary btn-sm sm:btn-md rounded-full px-4"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
