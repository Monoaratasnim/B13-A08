"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const isLoggedIn = false; // toggle for demo
  const pathname = usePathname();

  // 🔥 active link style
  const navLinkClass = (path) =>
    `px-3 py-2 rounded-lg transition ${
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
      <li>
        <Link href="/myProfile" className={navLinkClass("/myProfile")}>
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-base-100/80 border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden text-xl">
              ☰
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 w-56 p-3 shadow-xl bg-base-100 rounded-2xl">
              {links}
            </ul>
          </div>

          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            SkillSphere
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-[15px] font-medium">
            {links}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2">
          {isLoggedIn ? (
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                <img src="https://i.ibb.co/2kR5zqG/avatar.png" alt="user" />
              </div>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="btn btn-ghost rounded-full px-5"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="btn btn-primary rounded-full px-5 shadow-md hover:shadow-lg transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;